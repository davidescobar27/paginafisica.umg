// Constante de Coulomb (N·m²/C²). Se usa 8.99×10⁹ en toda la página.
const K_COULOMB = 8.99e9;

// Atajo para buscar un elemento por su id.
const $ = (id) => document.getElementById(id);

// Evita que el texto se interprete como HTML.
function escaparHtml(texto) {
  return texto.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

// Convierte "7" en "⁷" para escribir potencias de 10.
function aSuperindice(digitos) {
  return [...digitos].map((digito) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[digito]).join("");
}

// Da formato a un número: 0.00000801 -> "8.01×10⁻⁶", 1.4983 -> "1.4983".
function numero(valor) {
  const absoluto = Math.abs(valor);
  const esMuyPequenoOGrande = absoluto !== 0 && (absoluto < 1e-3 || absoluto >= 1e6);
  if (!esMuyPequenoOGrande) return String(+valor.toPrecision(5));

  return valor
    .toExponential(4)
    .replace(/\.?0+e/, "e")
    .replace(/e([+-])(\d+)/, (_, signo, exponente) => {
      return "×10" + (signo === "-" ? "⁻" : "") + aSuperindice(exponente);
    });
}

// Número con su unidad: conUnidad(0.12, "A") -> "0.12 A".
function conUnidad(valor, unidad) {
  return `${numero(valor)} ${unidad}`;
}

// Lista numerada en HTML a partir de un arreglo de textos.
function listaNumerada(pasos) {
  return `<ol>${pasos.map((paso) => `<li>${paso}</li>`).join("")}</ol>`;
}
