// Script para la navegación principal (Nav.astro)

// 1. Selectores
const btn = document.getElementById("menu-btn") as HTMLButtonElement;
const menu = document.getElementById("mobile-menu") as HTMLElement;
const iconOpen = document.getElementById("icon-open") as HTMLElement;
const iconClose = document.getElementById("icon-close") as HTMLElement;
const navbar = document.getElementById("navbar") as HTMLElement;
const listItems = document.querySelectorAll<HTMLAnchorElement>("#navbar nav a");
const menuBackDrop = document.querySelector("#menu-backdrop") as HTMLElement;

// 2. Lógica del Menú Móvil
btn.addEventListener("click", () => {
  const isOpen = menu.style.display === "flex";
  menu.style.display = isOpen ? "none" : "flex";
  menu.style.flexDirection = "column";
  iconOpen.classList.toggle("hidden", !isOpen);
  iconClose.classList.toggle("hidden", isOpen);
});

document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    menu.style.display = "none";
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
  });
});

// 3. Lógica del Scroll
window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 20;
  navbar.classList.toggle("bg-(--bg)/90", isScrolled);
  navbar.classList.toggle("border-(--border)", isScrolled);
  navbar.classList.toggle("shadow-sm", isScrolled);
});

// 4. Lógica del Backdrop (Hover dinámico)
listItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const { left, top, width, height } = item.getBoundingClientRect();

    // Corregimos la posición relativa al viewport si el header es fixed
    // Actualizamos las variables CSS para posicionar el backdrop
    menuBackDrop.style.setProperty("--left", `${left}px`);
    menuBackDrop.style.setProperty("--top", `${top}px`);
    menuBackDrop.style.setProperty("--width", `${width}px`);
    menuBackDrop.style.setProperty("--height", `${height}px`);

    // Hacemos visible el backdrop
    menuBackDrop.style.opacity = "1";
    menuBackDrop.style.visibility = "visible";
  });

  // Ocultamos el backdrop al salir del enlace
  item.addEventListener("mouseleave", () => {
    menuBackDrop.style.opacity = "0";
    menuBackDrop.style.visibility = "hidden";
  });
});
