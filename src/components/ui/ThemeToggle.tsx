import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");

  // Al montar, leer preferencia guardada o del sistema
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null; // Revisa en la memoria del navegador si el usuario ya estuvo en tu web y cambió el tema manualmente antes, si ya eligió "dark", devuelve "dark". Si es la primera vez que entra, devuelve null
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; // ¿Qué es window.matchMedia? Es una función de JavaScript que permite preguntarle al Navegador: "¿Qué prefiere el usuario en la configuración de su Sistema Operativo (Windows/Fedora/Android)?" Si el usuario tiene su PC en "Modo Oscuro", devuelve "dark". Si no, devuelve "light". Es una forma de respetar la vista del usuario desde el primer segundo.
    const initial = saved ?? preferred; // El operador ?? (Nullish Coalescing) elige la primera opción que no sea nula.
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial); // Accede a la etiqueta <html> de tu Layout y le pone el atributo que definimos en el CSS.
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      className={`relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-300 ${theme === "dark" ? "bg-[#f7f9f9]" : "bg-[#1a2332]"} `}
    >
      <span
        className={`absolute top-0.75 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white text-[11px] transition-all duration-250 ${theme === "dark" ? "left-5.75" : "left-0.75"}`}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
    </button>
  );
};

export default ThemeToggle;
