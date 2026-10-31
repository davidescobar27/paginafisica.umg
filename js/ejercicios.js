// Un ejercicio por tema: ejemplo (datos), rangos (para el azar) y crear (enunciado y pasos)

const EJERCICIOS = {
  carga: {
    ejemplo: [5],
    rangos: [[1, 50, 1]],
    crear: ([a]) => {
      const Q = a * 1e12 * 1.602e-19;
      return {
        enunciado: `Al frotar un globo, este gana ${a}×10¹² electrones. ¿Cuál es el valor de su carga, en nC?`,
        respuesta: Q * 1e9,
        unidad: "nC",
        pasos: [
          "Fórmula: Q = n·e",
          `Q = (${a}×10¹²)(1.602×10⁻¹⁹ C) = ${numero(Q)} C`,
          `En nanocoulombs: Q = ${numero(Q * 1e9)} nC (es negativa porque son electrones)`,
        ],
      };
    },
  },
  coulomb: {
    ejemplo: [3, 5, 30],
    rangos: [
      [1, 9, 1],
      [1, 9, 1],
      [10, 60, 5],
    ],
    crear: ([q1, q2, r]) => {
      const F = (K_COULOMB * q1 * q2 * 1e-12) / (r / 100) ** 2;
      return {
        enunciado: `Dos cargas puntuales de ${q1} µC y ${q2} µC están separadas ${r} cm. ¿Qué fuerza se ejercen entre sí, en N?`,
        respuesta: F,
        unidad: "N",
        pasos: [
          "Fórmula: F = k·q₁·q₂ / r²",
          `Pasamos a unidades del SI: q₁ = ${q1}×10⁻⁶ C, q₂ = ${q2}×10⁻⁶ C, r = ${r / 100} m`,
          `F = (8.99×10⁹)(${q1}×10⁻⁶)(${q2}×10⁻⁶) / (${r / 100})² = ${numero(F)} N`,
        ],
      };
    },
  },
  campo: {
    ejemplo: [4, 20],
    rangos: [
      [1, 9, 1],
      [10, 60, 5],
    ],
    crear: ([q, r]) => {
      const E = (K_COULOMB * q * 1e-6) / (r / 100) ** 2;
      return {
        enunciado: `¿Qué campo eléctrico produce una carga puntual de ${q} µC a ${r} cm de distancia? Da la respuesta en N/C.`,
        respuesta: E,
        unidad: "N/C",
        pasos: [
          "Fórmula: E = k·q / r²",
          `q = ${q}×10⁻⁶ C y r = ${r / 100} m`,
          `E = (8.99×10⁹)(${q}×10⁻⁶) / (${r / 100})² = ${numero(E)} N/C`,
        ],
      };
    },
  },
  flujo: {
    ejemplo: [600, 0.4, 30],
    rangos: [
      [100, 900, 100],
      [0.1, 0.9, 0.1],
      [0, 60, 10],
    ],
    crear: ([E, A, t]) => {
      const F = E * A * Math.cos((t * Math.PI) / 180);
      return {
        enunciado: `Un campo uniforme de ${E} N/C atraviesa una espira de ${A} m². El ángulo entre el campo y la normal de la espira es ${t}°. ¿Cuál es el flujo eléctrico, en N·m²/C?`,
        respuesta: F,
        unidad: "N·m²/C",
        pasos: ["Fórmula: Φ = E·A·cos θ", `Φ = (${E})(${A})(cos ${t}°)`, `Φ = ${numero(F)} N·m²/C`],
      };
    },
  },
  gauss: {
    ejemplo: [15],
    rangos: [[1, 50, 1]],
    crear: ([Q]) => {
      const F = (Q * 1e-9) / 8.854e-12;
      return {
        enunciado: `Una superficie cerrada encierra una carga de ${Q} nC. Usa la ley de Gauss para hallar el flujo eléctrico neto, en N·m²/C.`,
        respuesta: F,
        unidad: "N·m²/C",
        pasos: [
          "Ley de Gauss: Φ = Q_enc / ε₀",
          `Q_enc = ${Q}×10⁻⁹ C y ε₀ = 8.854×10⁻¹² C²/(N·m²)`,
          `Φ = ${Q}×10⁻⁹ / 8.854×10⁻¹² = ${numero(F)} N·m²/C`,
        ],
      };
    },
  },
  potencial: {
    ejemplo: [2, 0.5],
    rangos: [
      [1, 9, 1],
      [0.2, 1.5, 0.1],
    ],
    crear: ([q, r]) => {
      const V = (K_COULOMB * q * 1e-6) / r;
      return {
        enunciado: `¿Cuál es el potencial eléctrico a ${r} m de una carga puntual de ${q} µC? Da la respuesta en volts.`,
        respuesta: V,
        unidad: "V",
        pasos: [
          "Fórmula: V = k·q / r",
          `q = ${q}×10⁻⁶ C y r = ${r} m`,
          `V = (8.99×10⁹)(${q}×10⁻⁶) / ${r} = ${numero(V)} V`,
        ],
      };
    },
  },
  capacitancia: {
    ejemplo: [100, 2],
    rangos: [
      [50, 300, 50],
      [1, 5, 1],
    ],
    crear: ([A, d]) => {
      const C = (8.854e-12 * A * 1e-4) / (d * 1e-3);
      return {
        enunciado: `Un capacitor de placas paralelas en el vacío tiene placas de ${A} cm² separadas ${d} mm. ¿Cuál es su capacitancia, en pF?`,
        respuesta: C * 1e12,
        unidad: "pF",
        pasos: [
          "Fórmula: C = ε₀·A / d",
          `A = ${A}×10⁻⁴ m² y d = ${d}×10⁻³ m`,
          `C = (8.854×10⁻¹²)(${A}×10⁻⁴) / (${d}×10⁻³) = ${numero(C)} F = ${numero(C * 1e12)} pF`,
        ],
      };
    },
  },
  corriente: {
    ejemplo: [12, 40, 60],
    rangos: [
      [6, 24, 3],
      [10, 100, 10],
      [10, 100, 10],
    ],
    crear: ([V, a, b]) => {
      const I = V / (a + b);
      return {
        enunciado: `Una batería de ${V} V se conecta a dos resistencias en serie de ${a} Ω y ${b} Ω. ¿Qué corriente circula por el circuito, en A?`,
        respuesta: I,
        unidad: "A",
        pasos: [
          "En serie: Req = R₁ + R₂",
          `Req = ${a} + ${b} = ${a + b} Ω`,
          `Ley de Ohm: I = V / Req = ${V} / ${a + b} = ${numero(I)} A`,
        ],
      };
    },
  },
  magnetico: {
    ejemplo: [2, 4, 0.5],
    rangos: [
      [1, 9, 1],
      [1, 9, 1],
      [0.1, 1, 0.1],
    ],
    crear: ([q, v, B]) => {
      const F = q * 1e-6 * v * 1e4 * B;
      return {
        enunciado: `Una carga de ${q} µC se mueve a ${v}×10⁴ m/s, perpendicular a un campo magnético de ${B} T. ¿Qué fuerza magnética actúa sobre ella, en N?`,
        respuesta: F,
        unidad: "N",
        pasos: [
          "Fórmula: F = q·v·B·sen θ (con θ = 90°, sen θ = 1)",
          `q = ${q}×10⁻⁶ C y v = ${v}×10⁴ m/s`,
          `F = (${q}×10⁻⁶)(${v}×10⁴)(${B}) = ${numero(F)} N`,
        ],
      };
    },
  },
  flujomag: {
    ejemplo: [200, 10, 0],
    rangos: [
      [50, 500, 50],
      [5, 30, 5],
      [0, 60, 10],
    ],
    crear: ([B, L, t]) => {
      const P = B * 1e-3 * (L / 100) ** 2 * Math.cos((t * Math.PI) / 180);
      return {
        enunciado: `Una espira cuadrada de ${L} cm de lado está en un campo magnético de ${B} mT. El ángulo entre B y la normal de la espira es ${t}°. ¿Cuál es el flujo magnético, en mWb?`,
        respuesta: P * 1e3,
        unidad: "mWb",
        pasos: [
          "Fórmula: Φ = B·A·cos θ",
          `B = ${B / 1000} T y A = (${L / 100} m)² = ${numero((L / 100) ** 2)} m²`,
          `Φ = (${B / 1000})(${numero((L / 100) ** 2)})(cos ${t}°) = ${numero(P)} Wb = ${numero(P * 1e3)} mWb`,
        ],
      };
    },
  },
};

// elige un valor al azar entre minimo y maximo, de "paso" en "paso"
function numeroAleatorio([minimo, maximo, paso]) {
  const opciones = Math.floor((maximo - minimo) / paso) + 1;
  return +(minimo + paso * Math.floor(Math.random() * opciones)).toFixed(3);
}

// llena las pestañas "Ejemplo resuelto" y "Practicar" de un tema
function prepararEjercicios(id, panelEjemplo, panelPractica) {
  const ejercicio = EJERCICIOS[id];
  const ejemplo = ejercicio.crear(ejercicio.ejemplo);

  panelEjemplo.innerHTML = `
    <p>${ejemplo.enunciado}</p>
    ${listaNumerada(ejemplo.pasos)}
    <p class="resp">Respuesta: <b>${conUnidad(ejemplo.respuesta, ejemplo.unidad)}</b></p>`;

  panelPractica.innerHTML = `
    <p class="q"></p>
    <label for="respuesta-${id}">Tu respuesta en <span class="u"></span></label>
    <input type="text" id="respuesta-${id}" inputmode="decimal" autocomplete="off">
    <div>
      <button class="go">Revisar</button>
      <button class="go alt">Otro ejercicio</button>
      <button class="go alt">Ver solución</button>
    </div>
    <div class="out" role="status" aria-live="polite"></div>
    <p class="note">Puedes escribir 2e-6 en lugar de 2×10⁻⁶.</p>`;

  const textoEnunciado = panelPractica.querySelector(".q");
  const textoUnidad = panelPractica.querySelector(".u");
  const campo = panelPractica.querySelector("input");
  const salida = panelPractica.querySelector(".out");
  const [botonRevisar, botonOtro, botonSolucion] = panelPractica.querySelectorAll("button");
  let actual;

  function nuevoEjercicio() {
    actual = ejercicio.crear(ejercicio.rangos.map(numeroAleatorio));
    textoEnunciado.textContent = actual.enunciado;
    textoUnidad.textContent = actual.unidad;
    campo.value = "";
    salida.textContent = "";
    salida.className = "out";
  }

  function revisar() {
    const texto = campo.value.trim().replace(",", ".");
    const valor = Number(texto);
    if (texto === "" || !Number.isFinite(valor)) {
      salida.className = "out err";
      salida.textContent = "Escribe un número para poder revisar.";
      return;
    }
    // margen de 2 % por los redondeos
    const esCorrecto = Math.abs(valor - actual.respuesta) <= 0.02 * Math.abs(actual.respuesta);
    if (esCorrecto) {
      salida.className = "out";
      salida.textContent = "¡Correcto!";
      marcarTemaResuelto(id);
    } else {
      salida.className = "out err";
      salida.textContent = "Todavía no. Revisa las fórmulas, las unidades y vuelve a intentarlo.";
    }
  }

  function mostrarSolucion() {
    salida.className = "out";
    salida.innerHTML = `${listaNumerada(actual.pasos)}<p><b>Respuesta:</b> ${conUnidad(actual.respuesta, actual.unidad)}</p>`;
  }

  botonRevisar.addEventListener("click", revisar);
  botonOtro.addEventListener("click", nuevoEjercicio);
  botonSolucion.addEventListener("click", mostrarSolucion);
  nuevoEjercicio();
}
