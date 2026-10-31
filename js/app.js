const IDS_TEMAS = TEMAS.map((tema) => tema[0]);

// Matiz de color (0-360) y símbolo de la tarjeta de cada tema.
const COLOR_TEMA = {
  carga: 350,
  coulomb: 18,
  campo: 38,
  flujo: 150,
  gauss: 175,
  potencial: 200,
  capacitancia: 222,
  corriente: 250,
  magnetico: 280,
  flujomag: 315,
};
const SIMBOLO_TEMA = {
  carga: "Q",
  coulomb: "F",
  campo: "E",
  flujo: "Φ",
  gauss: "∮",
  potencial: "V",
  capacitancia: "C",
  corriente: "I",
  magnetico: "B",
  flujomag: "Φ<sub>B</sub>",
};
const PESTANAS = ["formulas", "ejemplo", "practica", "simuladores", "videos"];

let vistaActual = null;

// Pantalla de inicio

function crearTarjetasDeTemas() {
  TEMAS.forEach(([id, titulo, , formulas]) => {
    const nombre = titulo.replace(/^\d+\.\s*/, ""); // quita el "1. " del inicio
    $("temas").insertAdjacentHTML(
      "beforeend",
      `<button class="tile" style="--h:${COLOR_TEMA[id]}" data-go="${id}">
         <span class="gl">${SIMBOLO_TEMA[id]}</span>
         <span class="tt">${nombre}</span>
         <span class="fo">${escaparHtml(formulas[0][0])}</span>
         <span class="ok" id="hecho-${id}" hidden>✓</span>
       </button>`,
    );
  });
}

// Se llama desde ejercicios.js cuando el estudiante acierta.
function marcarTemaResuelto(id) {
  $("hecho-" + id).hidden = false;
}

// Vista de un tema

function seleccionarPestana(nombre) {
  document.querySelectorAll("[data-tab]").forEach((boton) => {
    boton.setAttribute("aria-selected", boton.dataset.tab === nombre);
  });
  PESTANAS.forEach((pestana) => ($("panel-" + pestana).hidden = pestana !== nombre));
}

function mostrarTema(id) {
  const indice = IDS_TEMAS.indexOf(id);
  const [, titulo, descripcion, formulas, enlaces] = TEMAS[indice];
  const anterior = $("tema-anterior");
  const siguiente = $("tema-siguiente");

  $("tema").style.setProperty("--h", COLOR_TEMA[id]);
  $("tema-numero").textContent = `Tema ${indice + 1} de ${IDS_TEMAS.length}`;
  $("tema-titulo").textContent = titulo.replace(/^\d+\.\s*/, "");
  $("tema-descripcion").textContent = descripcion;

  anterior.hidden = indice === 0;
  siguiente.hidden = indice === IDS_TEMAS.length - 1;
  anterior.dataset.go = IDS_TEMAS[indice - 1] || "";
  siguiente.dataset.go = IDS_TEMAS[indice + 1] || "";

  $("panel-formulas").innerHTML = formulas
    .map(
      ([formula, significado]) =>
        `<div class="f"><b>${escaparHtml(formula)}</b><span>${significado}</span></div>`,
    )
    .join("");

  $("panel-simuladores").innerHTML =
    `<p class="note">Se abren en otra pestaña.</p>` +
    enlaces
      .map(
        ([nombre, url]) =>
          `<a class="lk" href="${url}" target="_blank" rel="noopener"><span>${nombre}</span><span aria-hidden="true">↗</span></a>`,
      )
      .join("");

  $("panel-videos").innerHTML = htmlVideosDelTema(id);
  prepararEjercicios(id, $("panel-ejemplo"), $("panel-practica"));
  seleccionarPestana("formulas");
}

// Cambio de vista

// id vacío = inicio; id de tema = ese tema; "calculadora", "videos", "refs" = herramientas.
function mostrarVista(id, actualizarUrl = true) {
  vistaActual = id;
  document.querySelectorAll(".vista").forEach((vista) => (vista.hidden = true));

  const elemento = id ? $(id) : null;
  if (IDS_TEMAS.includes(id)) {
    mostrarTema(id);
    $("tema").hidden = false;
  } else if (elemento && elemento.classList.contains("vista")) {
    elemento.hidden = false;
  } else {
    $("inicio").hidden = false;
  }

  window.scrollTo(0, 0);
  if (actualizarUrl) {
    try {
      location.hash = id;
    } catch (error) {
      // En algunos visores no se puede cambiar la dirección; no pasa nada.
    }
  }
}

// Arranque

function iniciar() {
  crearTarjetasDeTemas();
  iniciarCalculadora();
  iniciarVideos();

  // Un solo "click" para todos los botones: data-go cambia de vista, data-tab de pestaña.
  document.addEventListener("click", (evento) => {
    const irA = evento.target.closest("[data-go]");
    if (irA) return mostrarVista(irA.dataset.go);
    const pestana = evento.target.closest("[data-tab]");
    if (pestana) seleccionarPestana(pestana.dataset.tab);
  });

  // Botones "atrás" y "adelante" del navegador.
  window.addEventListener("hashchange", () => {
    if (location.hash.slice(1) !== vistaActual) mostrarVista(location.hash.slice(1), false);
  });

  mostrarVista(location.hash.slice(1), false);
}

iniciar();
