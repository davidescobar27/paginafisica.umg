const CLAVE_ENLACES = "fisica2-enlaces-de-video";
let enlacesGuardados = [];

function cargarEnlaces() {
  try {
    enlacesGuardados = JSON.parse(localStorage.getItem(CLAVE_ENLACES) || "[]");
  } catch (error) {
    enlacesGuardados = [];
  }
}

function guardarEnlaces() {
  try {
    localStorage.setItem(CLAVE_ENLACES, JSON.stringify(enlacesGuardados));
  } catch (error) {
    // Si el navegador no deja guardar, la página sigue funcionando.
  }
}

function crearEnlace(url) {
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.target = "_blank";
  enlace.rel = "noopener";
  enlace.textContent = url;
  return enlace;
}

// Agrega una tarjeta (título + reproductor o enlace) al inicio de la lista.
function agregarTarjetaVideo(titulo, contenido) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "vid";
  const encabezado = document.createElement("h3");
  encabezado.textContent = titulo;
  tarjeta.append(encabezado, contenido);
  $("video-lista").prepend(tarjeta);
}

function agregarVideo() {
  const mensaje = $("video-mensaje");
  const titulo = $("video-titulo").value.trim();
  const archivo = $("video-archivo").files[0];
  const url = $("video-enlace").value.trim();

  if (!titulo) return (mensaje.textContent = "Escribe un título para el video.");
  if (!archivo && !url) return (mensaje.textContent = "Elige un archivo de video o pega un enlace.");
  if (url && !/^https?:\/\//i.test(url)) {
    return (mensaje.textContent = "El enlace debe empezar con http:// o https://.");
  }

  if (archivo) {
    const reproductor = document.createElement("video");
    reproductor.controls = true;
    reproductor.src = URL.createObjectURL(archivo);
    agregarTarjetaVideo(titulo, reproductor);
  }
  if (url) {
    enlacesGuardados.push({ titulo, url });
    guardarEnlaces();
    agregarTarjetaVideo(titulo, crearEnlace(url));
  }

  mensaje.textContent = "Video agregado.";
  ["video-titulo", "video-archivo", "video-enlace"].forEach((id) => ($(id).value = ""));
}

function iniciarVideos() {
  cargarEnlaces();
  enlacesGuardados.forEach(({ titulo, url }) => agregarTarjetaVideo(titulo, crearEnlace(url)));
  $("video-agregar").addEventListener("click", agregarVideo);
}
