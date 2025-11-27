// ===============================
// MENÚ DESPLEGABLE CON EFECTO
// ===============================
const menuItems = document.querySelectorAll("nav ul li");

menuItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "#f18886"; // Rojo japonés
    item.style.transition = "0.3s";
  });

  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "";
  });
});

// ===============================
// SLIDER AUTOMÁTICO Y MANUAL DEL BANNER
// ===============================

// Lista de imágenes del banner (detrás del título)
const imagenes = [
  "imagenes/fuji.jpg",
  "imagenes/akihabara.jpg",
  "imagenes/torii.jpg",
  "imagenes/kimono.jpg"
];

// Elementos del DOM
const bannerImg = document.querySelector(".banner-bg");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let index = 0;

// Función para cambiar imagen automáticamente
function cambiarImagen() {
  index = (index + 1) % imagenes.length;
  bannerImg.style.opacity = 0; // transición suave
  setTimeout(() => {
    bannerImg.src = imagenes[index];
    bannerImg.style.opacity = 0.5; // vuelve con opacidad 50%
  }, 500);
}

// Botones de navegación manual
btnNext.addEventListener("click", () => {
  cambiarImagen();
});

btnPrev.addEventListener("click", () => {
  index = (index - 1 + imagenes.length) % imagenes.length;
  bannerImg.style.opacity = 0;
  setTimeout(() => {
    bannerImg.src = imagenes[index];
    bannerImg.style.opacity = 0.5;
  }, 500);
});

// Cambio automático cada 5 segundos
setInterval(cambiarImagen, 5000);

// ===============================
// MENSAJE DE BIENVENIDA SEGÚN HORA
// ===============================
window.addEventListener("DOMContentLoaded", () => {
  const hora = new Date().getHours();
  let mensaje = "";

  if (hora < 12) mensaje = "☀️ ¡Buenos días! Bienvenido a Japan Travel";
  else if (hora < 18) mensaje = "🌸 ¡Buenas tardes! Explora lo mejor de Japón";
  else mensaje = "🌙 ¡Buenas noches! Gracias por visitarnos";

  const header = document.querySelector("header");
  const msgDiv = document.createElement("div");
  msgDiv.textContent = mensaje;
  msgDiv.style.textAlign = "center";
  msgDiv.style.padding = "10px";
  msgDiv.style.background = "#b30000";
  msgDiv.style.color = "white";
  msgDiv.style.fontWeight = "bold";

  header.insertAdjacentElement("afterend", msgDiv);
});

// ===============================
// EFECTO DE COLOR EN ENLACES DEL MENÚ
// ===============================
const menuLinks = document.querySelectorAll("nav ul li a");
menuLinks.forEach(link => {
  link.addEventListener("mouseover", () => link.style.color = "#b30000");
  link.addEventListener("mouseout", () => link.style.color = "");
});

