export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  problemSolved: string;
  technologies: string[];
  image: string;
  images?: string[];
  youtubeUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "jasmany-portfolio",
    description:
      "Portafolio profesional con modo oscuro/claro, carrusel de proyectos interactivo y diseño responsivo.",
    longDescription:
      "Portafolio personal diseñado como carta de presentación digital profesional. Construido con Astro 7 y React 19, utiliza TailwindCSS v4 para el sistema de diseño con modo oscuro/claro completo. La arquitectura sigue el patrón de Astro Islands, combinando componentes estáticos (.astro) con islas interactivas (React) para un rendimiento óptimo. Incluye un carrusel de proyectos con gestos táctiles, galería con filtros por tecnología, modal con presentación tipo slide, efecto typewriter en el hero, slider infinito de tecnologías, y una página about detallada con línea de tiempo profesional. Cada componente se comunica mediante props tipadas con TypeScript estricto. Las imágenes se optimizan con lazy loading y el fondo usa variables CSS personalizadas para transiciones suaves entre temas.",
    problemSolved:
      "Proporciona una presencia profesional en línea que centraliza perfil, proyectos, habilidades y experiencia en un solo lugar. El diseño modular permite escalar el contenido sin reestructurar la app, y el sistema de temas garantiza accesibilidad visual en cualquier entorno.",
    technologies: ["Astro", "React", "TypeScript", "TailwindCSS", "Nodejs"],
    image: "/images/placeholder-project.svg",
    images: [],
    youtubeUrl: "",
    demoUrl: "",
    githubUrl: "https://github.com/Darkjasmany/jasmany-portfolio",
    featured: true,
  },
  {
    slug: "DMS",
    title: "Sistema de Gestión Documental",
    description:
      "Plataforma integral para la gestión administrativa del Documentos del GAD de Naranjal.",
    longDescription:
      "Este proyecto es un sistema de gestión documental desarrollado con Node.js para el backend y React con TailwindCSS para el frontend. El sistema permite a los usuarios gestionar documentos de manera eficiente, eliminando procesos manuales en papel y reduciendo tiempos de respuesta. Además, cuenta con funcionalidades como control de acceso, seguimiento de documentos y generación de reportes.",
    problemSolved:
      "Eliminó procesos manuales en papel, reduciendo tiempos de respuesta, y permitió una gestión eficiente de documentos, mejorando el control y busqueda de información.",
    technologies: ["React", "Nodejs", "Express", "Sequelize", "TailwindCSS", "PostgreSQL"],
    image: "/images/projects/dms-1.png",
    images: [
      "/images/projects/dms-2.png",
      "/images/projects/dms-3.png",
      "/images/projects/dms-4.png",
      "/images/projects/dms-5.png",
      "/images/projects/dms-6.png",
      "/images/projects/dms-7.png",
      "/images/projects/dms-8.png",
      "/images/projects/dms-9.png",
    ],
    youtubeUrl: "https://youtube.com/watch?v=...",
    demoUrl: "https://...",
    githubUrl: "https://github.com/Darkjasmany/SelNic",
    featured: true,
  },
  {
    slug: "futbol-system",
    title: "Sistema de Gestión de Fútbol",
    description: "Plataforma integral para la administración de ligas y torneos de fútbol.",
    longDescription:
      "Sistema enfocado en la gestión deportiva que permite el reconocimiento facial para acceso, validación de equipos y categorías, registro detallado de jugadores, gestión de partidos (matches), historial de encuentros y programación de fechas futuras.",
    problemSolved:
      "Centraliza y automatiza la administración de torneos, eliminando el papeleo manual y mejorando la seguridad y trazabilidad de los registros de jugadores y partidos.",
    technologies: [
      "TypeScript",
      "React",
      "Nodejs",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Reconocimiento Facial",
    ],
    image: "/images/placeholder-project.svg",
    images: [],
    youtubeUrl: "https://youtube.com/watch?v=...",
    demoUrl: "https://...",
    githubUrl: "https://github.com/Darkjasmany/futbol-system",
    featured: true,
  },
  {
    slug: "cash-management",
    title: "Cash Management",
    description:
      "Aplicación web para la gestión y control de carga de información a la plataforma del Banco de Pichincha.",
    longDescription:
      "Plataforma full-stack desarrollada con TypeScript para el manejo de ingresos, egresos y reporting financiero en tiempo real. Incluye autenticación de usuarios, registro de transacciones, y generación de reportes.",
    problemSolved:
      "Generación centralizada para la obtención de deudas de los contribuyente, inluyendo valores nominales, intereses exactos calculados de manera individual en archivos en texto plano y excel.",
    technologies: ["TypeScript", "React", "Nodejs", "Express", "Prisma", "PostgreSQL"],
    image: "/images/placeholder-project.svg",
    images: [],
    youtubeUrl: "https://youtube.com/watch?v=...",
    demoUrl: "https://...",
    githubUrl: "https://github.com/Darkjasmany/cash-management",
    featured: true,
  },
  {
    slug: "pokedex",
    title: "Pokédex Nacional",
    description: "Pokédex interactiva con filtros por tipo y búsqueda por nombre.",
    longDescription:
      "Aplicación desarrollada con fines de aprendizaje construida con Astro que consume la PokéAPI para mostrar los 151 Pokémon originales. Incluye filtrado por tipo, búsqueda en tiempo real y diseño responsive.",
    problemSolved:
      "Proporciona una interfaz rápida y visual para explorar información de Pokémon consumiendo una API externa.",
    technologies: ["Astro", "TailwindCSS", "JavaScript", "API REST"],
    image: "/images/projects/pkd-1.png",
    images: [
      "/images/projects/pkd-2.png",
      "/images/projects/pkd-3.png",
      "/images/projects/pkd-4.png",
    ],
    youtubeUrl: "https://youtube.com/watch?v=...",
    demoUrl: "https://fascinating-lokum-b3afb3.netlify.app/",
    githubUrl: "https://github.com/Darkjasmany/Pokedex-Nacional",
    featured: true,
  },
  {
    slug: "app-clima",
    title: "Aplicación de Clima",
    description: "Herramienta de consulta meteorológica en tiempo real.",
    longDescription:
      "Aplicación desarrollada con fines de aprendizaje para interactuar con APIs meteorológicas, permitiendo consultar el estado del tiempo, pronósticos y condiciones climáticas de diferentes ubicaciones de manera rápida y eficiente.",
    problemSolved:
      "Facilita el acceso a información climática actualizada mediante una interfaz sencilla, ideal para la práctica de consumo de APIs externas.",
    technologies: ["JavaScript", "API Integration", "Web Development"],
    image: "/images/placeholder-project.svg",
    images: [],
    youtubeUrl: "https://youtube.com/watch?v=...",
    demoUrl: "https://...",
    githubUrl: "https://github.com/Darkjasmany/APP-Clima",
    featured: false,
  },
];
