// Videos del grupo. Están en Google Drive y el enlace debe estar compartido como
// "Cualquier persona con el enlace" para que la maestra los pueda ver.
const VIDEOS_GRUPO = [
  { tema: "corriente", titulo: "Corriente eléctrica y circuitos", url: "https://drive.google.com/file/d/1h0NhZoncr0x0gnqvgxdkxDLWWtM70cfQ/view?usp=sharing" },
  { tema: "magnetico", titulo: "Campos magnéticos", url: "https://drive.google.com/file/d/1Gr38GCShHSJR0DO7p7NJD7Bo6qQoLOCu/view?usp=sharing" },
  { tema: "capacitancia", titulo: "Capacitancia · Ejercicios", url: "https://drive.google.com/file/d/1-eLR8jKrx1iX-gWO3zdAC5BqUpqhoxfn/view?usp=sharing" },
  { tema: "potencial", titulo: "Potencial eléctrico · Ejercicios", url: "https://drive.google.com/file/d/15lnJ3GSOSDJtQC4h6GqjqFgoysVKCcNX/view?usp=drive_link" },
  { tema: "gauss", titulo: "Ley de Gauss · Ejercicios", url: "https://drive.google.com/file/d/1OI9MiIVJD7XOPSF1-qQaz6GtdPyXhgKd/view?usp=sharing" },
  { tema: "flujomag", titulo: "Flujo magnético · Ejercicios", url: "https://drive.google.com/file/d/1Tc8VtNSm9fYTHs8EnGmGXLMoBP-S6FMB/view?usp=drive_link" },
  { tema: "flujo", titulo: "Flujo eléctrico · Ejercicios", url: "https://drive.google.com/file/d/1CzXSeA4bwjCUi13U6qPLRJlE1WkS07cl/view?usp=drive_link" },
  { tema: "coulomb", titulo: "Ley de Coulomb · Ejercicio 1", url: "https://drive.google.com/file/d/1budge99k5o3sFlunrCDQy6U6Y3G3rXbF/view?usp=sharing" },
  { tema: "coulomb", titulo: "Ley de Coulomb · Ejercicio 2", url: "https://drive.google.com/file/d/1rpNJriWuLhizJ4c8kDe1S6bjOuwy6Kpn/view?usp=sharing" },
  { tema: "carga", titulo: "Carga eléctrica · Ejercicio 1", url: "https://drive.google.com/file/d/1zyAmT4VMBzRhZBHuvBBF-t52g1M0Zf8Q/view?usp=sharing" },
  { tema: "carga", titulo: "Carga eléctrica · Ejercicio 2", url: "https://drive.google.com/file/d/19nkI-QJeS-GDLxO1THAWOeHlyaiJC1Io/view?usp=sharing" },
  { tema: "campo", titulo: "Campo eléctrico · Ejercicio 1", url: "https://drive.google.com/file/d/1Am51ieBQAzWvaxBJ7BbJxZBYBLDY5cQ8/view?usp=sharing" },
  { tema: "campo", titulo: "Campo eléctrico · Ejercicio 2", url: "https://drive.google.com/file/d/1EaBYBXXds3Cld-FcSsMNhM3zXmQW-KEs/view?usp=sharing" },
];

// pestaña "Videos" de un tema: cada video tiene un botón "Abrir aquí"
function htmlVideosDelTema(idTema) {
  const lista = VIDEOS_GRUPO.filter((video) => video.tema === idTema);
  if (lista.length === 0) return `<p class="note">Todavía no hay videos de este tema.</p>`;
  return lista.map(htmlFilaVideo).join("");
}

function htmlFilaVideo(video) {
  return `<div class="fila-video">
    <span>${video.titulo}</span>
    <a class="go" href="${video.url}" target="_blank" rel="noopener">Abrir aquí</a>
  </div>`;
}

// pantalla "Videos del grupo": todos los videos ordenados por tema
function mostrarVideosDelGrupo() {
  TEMAS.forEach(([id, titulo]) => {
    const lista = VIDEOS_GRUPO.filter((video) => video.tema === id);
    if (lista.length === 0) return;
    $("video-grupo").insertAdjacentHTML("beforeend", `<h3 class="gt">${titulo}</h3>` + lista.map(htmlFilaVideo).join(""));
  });
}

function iniciarVideos() {
  mostrarVideosDelGrupo();
}
