// ── Scroll handler (window-level, se registra una sola vez) ──
function handleScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const isScrolled = window.scrollY > 20;
  navbar.classList.toggle("bg-(--bg)/90", isScrolled);
  navbar.classList.toggle("border-(--border)", isScrolled);
  navbar.classList.toggle("shadow-sm", isScrolled);
}
window.addEventListener("scroll", handleScroll, { passive: true });

// ── Setup DOM-dependent (se re-ejecuta en cada navegación vía astro:page-load) ──
function initNav() {
  const btn = document.getElementById("menu-btn") as HTMLButtonElement | null;
  const menu = document.getElementById("mobile-menu") as HTMLElement | null;
  const iconOpen = document.getElementById("icon-open") as HTMLElement | null;
  const iconClose = document.getElementById("icon-close") as HTMLElement | null;
  const menuBackDrop = document.querySelector<HTMLElement>("#menu-backdrop");

  // Si no encuentra los elementos, salimos sin errores (puede ocurrir si el DOM cambió)
  if (!btn || !menu || !iconOpen || !iconClose) return;

  // ── 1. Toggle menú móvil con animación ──
  const toggleMenu = () => {
    const isOpen = menu.classList.contains("open");
    menu.classList.toggle("open");
    iconOpen.classList.toggle("hidden", isOpen);
    iconClose.classList.toggle("hidden", !isOpen);
  };

  btn.addEventListener("click", toggleMenu);

  // ── 2. Cerrar menú al hacer clic en un link ──
  document.querySelectorAll<HTMLAnchorElement>(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    });
  });

  // ── 3. Backdrop hover en los links de navegación desktop ──
  if (menuBackDrop) {
    const listItems = document.querySelectorAll<HTMLAnchorElement>("#navbar nav a");

    listItems.forEach(item => {
      const onEnter = () => {
        const { left, top, width, height } = item.getBoundingClientRect();
        menuBackDrop.style.setProperty("--left", `${left}px`);
        menuBackDrop.style.setProperty("--top", `${top}px`);
        menuBackDrop.style.setProperty("--width", `${width}px`);
        menuBackDrop.style.setProperty("--height", `${height}px`);
        menuBackDrop.style.opacity = "1";
        menuBackDrop.style.visibility = "visible";
      };

      const onLeave = () => {
        menuBackDrop.style.opacity = "0";
        menuBackDrop.style.visibility = "hidden";
      };

      item.addEventListener("mouseenter", onEnter);
      item.addEventListener("mouseleave", onLeave);
    });
  }
}

// Se ejecuta en el primer paint y después de cada navegación con View Transitions
document.addEventListener("astro:page-load", initNav);
