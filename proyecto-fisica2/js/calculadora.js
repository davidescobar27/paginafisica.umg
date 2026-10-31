// Lee un campo de texto y lo convierte en número. Lanza un error si no sirve.
function leerCampo(idCampo, nombre) {
  const texto = $(idCampo).value.trim().replace(",", ".");
  if (texto === "") {
    throw new Error(`Falta el dato: ${nombre}.`);
  }
  const valor = Number(texto);
  if (!Number.isFinite(valor)) {
    throw new Error(`“${texto}” no es un número válido en ${nombre}. Usa por ejemplo 0.5 o 2e-6.`);
  }
  return valor;
}

// Muestra un mensaje (resultado o error) en el recuadro de resultados.
function mostrarResultadoCoulomb(html, esError) {
  const salida = $("coulomb-resultado");
  salida.className = esError ? "out err" : "out";
  salida.innerHTML = html;
}

function describirTipoDeFuerza(q1, q2) {
  if (q1 * q2 > 0) return "Repulsiva (cargas del mismo signo)";
  if (q1 * q2 < 0) return "Atractiva (cargas de signo contrario)";
  return "No hay fuerza (una de las cargas es cero)";
}

function calcularCoulomb() {
  try {
    // 1. Leer los datos y pasarlos al Sistema Internacional (C y m).
    const q1 = leerCampo("coulomb-q1", "la carga q₁") * Number($("coulomb-q1-unidad").value);
    const q2 = leerCampo("coulomb-q2", "la carga q₂") * Number($("coulomb-q2-unidad").value);
    const r = leerCampo("coulomb-r", "la distancia r") * Number($("coulomb-r-unidad").value);
    if (r <= 0) {
      throw new Error("La distancia r debe ser mayor que cero.");
    }

    // 2. Aplicar la fórmula.
    const fuerza = (K_COULOMB * Math.abs(q1 * q2)) / r ** 2;

    // 3. Mostrar el procedimiento completo.
    mostrarResultadoCoulomb(
      `<p><b>Datos en el SI:</b> q₁ = ${numero(q1)} C · q₂ = ${numero(q2)} C · r = ${numero(r)} m</p>
       <p><b>Sustitución:</b> F = (8.99×10⁹)(|${numero(q1)} · ${numero(q2)}|) / (${numero(r)})²</p>
       <p><b>Fuerza:</b> ${conUnidad(fuerza, "N")}</p>
       <p><b>Tipo:</b> ${describirTipoDeFuerza(q1, q2)}</p>`,
      false,
    );
  } catch (error) {
    mostrarResultadoCoulomb(error.message, true);
  }
}

function limpiarCoulomb() {
  ["coulomb-q1", "coulomb-q2", "coulomb-r"].forEach((id) => ($(id).value = ""));
  $("coulomb-resultado").className = "out";
  $("coulomb-resultado").textContent = "El resultado aparecerá aquí.";
}

function iniciarCalculadora() {
  $("coulomb-calcular").addEventListener("click", calcularCoulomb);
  $("coulomb-limpiar").addEventListener("click", limpiarCoulomb);
  ["coulomb-q1", "coulomb-q2", "coulomb-r"].forEach((id) => {
    $(id).addEventListener("keydown", (evento) => {
      if (evento.key === "Enter") calcularCoulomb();
    });
  });
}
