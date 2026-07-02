export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre Mí" },
  { href: "/projects", label: "Proyectos" },
];
