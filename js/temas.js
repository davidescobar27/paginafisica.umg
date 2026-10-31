// Contenido de los 10 temas: [id, título, descripción, fórmulas, enlaces]

const PHET = "https://phet.colorado.edu/es/simulations/";
const WOLFRAM = "https://www.wolframalpha.com/";
const SYMBOLAB = "https://www.symbolab.com/";
const HYPERPHYSICS = "https://hyperphysics.phy-astr.gsu.edu/hbasees/hframe.html";
const FALSTAD = "https://www.falstad.com/";
const KHAN = "https://es.khanacademy.org/science/physics";

const TEMAS = [
  [
    "carga",
    "1. Carga eléctrica y electrización",
    "La carga es una propiedad de la materia; puede ser positiva o negativa, está cuantizada y se conserva. Un cuerpo se electriza por frotamiento, contacto o inducción.",
    [
      ["Q = n·e", "Carga total: n electrones en exceso o faltantes, e = 1.602×10⁻¹⁹ C"],
      ["ΣQ antes = ΣQ después", "Conservación de la carga"],
    ],
    [
      ["Simulador: globos y electricidad estática", PHET + "balloons-and-static-electricity"],
      ["Wolfram Alpha", WOLFRAM],
      ["Khan Academy", KHAN],
    ],
  ],
  [
    "coulomb",
    "2. Ley de Coulomb",
    "La fuerza entre dos cargas puntuales es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia. Cargas iguales se repelen y opuestas se atraen.",
    [
      ["F = k·|q₁·q₂| / r²", "Magnitud de la fuerza (N)"],
      ["k = 1/(4π·ε₀)", "k ≈ 8.99×10⁹ N·m²/C²"],
    ],
    [
      ["Simulador: ley de Coulomb", PHET + "coulombs-law"],
      ["Resolver con Symbolab", SYMBOLAB],
      ["Resolver con Wolfram Alpha", WOLFRAM],
    ],
  ],
  [
    "campo",
    "3. Campo eléctrico",
    "El campo describe la fuerza por unidad de carga que sentiría una carga de prueba en cada punto del espacio. Con varias cargas se suman los campos como vectores.",
    [
      ["E = F / q₀", "Definición (N/C)"],
      ["E = k·q / r²", "Campo de una carga puntual"],
      ["E total = ΣEᵢ", "Principio de superposición"],
    ],
    [
      ["Simulador: cargas y campos", PHET + "charges-and-fields"],
      ["Campo electrostático (Falstad)", FALSTAD + "emstatic/"],
      ["Wolfram Alpha", WOLFRAM],
    ],
  ],
  [
    "flujo",
    "4. Flujo eléctrico",
    "El flujo mide cuántas líneas de campo atraviesan una superficie. Depende del ángulo entre el campo y la normal de la superficie.",
    [
      ["Φ_E = ∫ E·dA", "Definición general (N·m²/C)"],
      ["Φ_E = E·A·cos θ", "Campo uniforme sobre una superficie plana"],
    ],
    [
      ["HyperPhysics: flujo eléctrico", HYPERPHYSICS],
      ["Resolver con Symbolab", SYMBOLAB],
      ["Khan Academy", KHAN],
    ],
  ],
  [
    "gauss",
    "5. Ley de Gauss",
    "El flujo neto a través de una superficie cerrada depende solo de la carga encerrada. Es muy útil en problemas con simetría.",
    [
      ["∮ E·dA = Q_enc / ε₀", "Ley de Gauss"],
      ["E = λ / (2π·ε₀·r)", "Línea infinita con densidad lineal λ"],
      ["E = σ / (2·ε₀)", "Plano infinito con densidad σ"],
    ],
    [
      ["Simulador: cargas y campos", PHET + "charges-and-fields"],
      ["HyperPhysics: ley de Gauss", HYPERPHYSICS],
      ["Wolfram Alpha", WOLFRAM],
    ],
  ],
  [
    "potencial",
    "6. Potencial eléctrico",
    "El potencial es la energía potencial por unidad de carga. Lo que importa físicamente son las diferencias de potencial (voltaje).",
    [
      ["V = U / q₀", "Definición (volts)"],
      ["V = k·q / r", "Carga puntual"],
      ["ΔV = −∫ E·dl", "Relación con el campo"],
      ["U = k·q₁·q₂ / r", "Energía potencial de dos cargas"],
    ],
    [
      ["Simulador: cargas y campos (voltímetro)", PHET + "charges-and-fields"],
      ["Resolver con Symbolab", SYMBOLAB],
      ["Wolfram Alpha", WOLFRAM],
    ],
  ],
  [
    "capacitancia",
    "7. Capacitancia",
    "Un capacitor almacena carga y energía en un campo eléctrico. Un dieléctrico entre las placas aumenta la capacitancia.",
    [
      ["C = Q / V", "Definición (faradios)"],
      ["C = ε₀·A / d", "Placas paralelas en el vacío"],
      ["C = κ·C₀", "Con dieléctrico de constante κ"],
      ["U = ½·C·V²", "Energía almacenada"],
      ["Serie: 1/Ceq = Σ 1/Cᵢ · Paralelo: Ceq = Σ Cᵢ", "Capacitores conectados"],
    ],
    [
      ["Simulador: laboratorio de capacitores", PHET + "capacitor-lab-basics"],
      ["Simulador de circuitos (Falstad)", FALSTAD + "circuit/"],
      ["Wolfram Alpha", WOLFRAM],
    ],
  ],
  [
    "corriente",
    "8. Corriente eléctrica, resistencias y circuitos",
    "La corriente es el flujo de carga por unidad de tiempo. En un circuito, la ley de Ohm y las leyes de Kirchhoff permiten hallar corrientes y voltajes.",
    [
      ["I = dQ / dt", "Corriente (amperes)"],
      ["V = I·R", "Ley de Ohm"],
      ["R = ρ·L / A", "Resistencia de un conductor"],
      ["P = V·I = I²·R", "Potencia (watts)"],
      ["Serie: Req = ΣRᵢ · Paralelo: 1/Req = Σ 1/Rᵢ", "Resistencias"],
      ["ΣI = 0 (nodos) · ΣV = 0 (mallas)", "Leyes de Kirchhoff"],
    ],
    [
      ["Simulador: armar circuitos DC", PHET + "circuit-construction-kit-dc"],
      ["Simulador: ley de Ohm", PHET + "ohms-law"],
      ["Circuitos (Falstad)", FALSTAD + "circuit/"],
    ],
  ],
  [
    "magnetico",
    "9. Campos y fuerzas magnéticas",
    "Una carga en movimiento y una corriente producen campo magnético, y sienten fuerza dentro de uno. La fuerza magnética es perpendicular a la velocidad.",
    [
      ["F = q·v×B → F = q·v·B·sen θ", "Fuerza sobre una carga (N)"],
      ["F = I·L×B", "Fuerza sobre un conductor con corriente"],
      ["r = m·v / (q·B)", "Radio de la órbita circular"],
      ["B = μ₀·I / (2π·r)", "Campo de un hilo largo"],
      ["B = μ₀·n·I", "Campo dentro de un solenoide"],
    ],
    [
      ["Simulador: imanes y electroimanes", PHET + "magnets-and-electromagnets"],
      ["HyperPhysics: magnetismo", HYPERPHYSICS],
      ["Wolfram Alpha", WOLFRAM],
    ],
  ],
  [
    "flujomag",
    "10. Flujo magnético",
    "El flujo magnético mide el campo B que atraviesa una superficie. Su variación en el tiempo induce una fem (ley de Faraday).",
    [
      ["Φ_B = ∫ B·dA = B·A·cos θ", "Flujo en webers (Wb = T·m²)"],
      ["ε = −dΦ_B / dt", "Ley de Faraday"],
      ["∮ B·dA = 0", "No existen monopolos magnéticos"],
    ],
    [
      ["Simulador: ley de Faraday", PHET + "faradays-law"],
      ["Resolver con Wolfram Alpha", WOLFRAM],
      ["Khan Academy", KHAN],
    ],
  ],
];
