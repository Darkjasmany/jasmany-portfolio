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
  featured?: boolean; // visualizar en el modal
  production?: boolean;
  category: "professional" | "learning";
}

export const projects: Project[] = [
  {
    slug: "jbs-restoration",
    title: "JBS Restoration",
    description:
      "Plataforma web empresarial desarrollada a medida para una empresa de restauración y roofing en Estados Unidos, con sitio público, panel administrativo, gestión de contenido e integraciones en producción.",

    longDescription:
      "Solución web full-stack desarrollada de principio a fin para JBS Restoration, una empresa ubicada en Estados Unidos y especializada en roofing, siding y servicios de restauración. El proyecto va más allá de un sitio web corporativo: integra una experiencia pública orientada a captar clientes con un panel administrativo personalizado para gestionar el contenido y mantener actualizada la presencia digital del negocio. Incluye administración de proyectos, servicios, testimonios, configuración del sitio y áreas de cobertura; almacenamiento de imágenes; mapas interactivos; formularios de contacto para captar solicitudes de servicio; e integraciones para el envío de notificaciones por correo electrónico. Me encargué del desarrollo integral, desde la arquitectura y la interfaz responsive hasta la lógica de aplicación, la integración con la base de datos y los servicios externos, la configuración del dominio y el despliegue en producción mediante Cloudflare. La solución fue construida con Astro, React, TypeScript y Tailwind CSS, utilizando Supabase para la gestión de datos y almacenamiento.",

    problemSolved:
      "Proporciona a una empresa estadounidense de servicios de roofing y restauración una presencia digital profesional y una plataforma de administración adaptada a sus necesidades. Centraliza la actualización de servicios, proyectos, testimonios y zonas de cobertura, reduciendo la dependencia de cambios manuales en el código. También facilita la captación de solicitudes de clientes mediante formularios de contacto y presenta los servicios del negocio de forma clara en dispositivos móviles y de escritorio. El resultado es una solución personalizada, desarrollada y desplegada en producción, preparada para evolucionar junto con las necesidades de la empresa.",

    technologies: [
      "Astro",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Supabase Storage",
      "Cloudflare Workers",
      "Wrangler",
      "Resend",
      "Leaflet",
      "OpenStreetMap",
      "REST API",
    ],

    image: "/images/projects/jbs-1.png",
    images: [
      "/images/projects/jbs-2.png",
      "/images/projects/jbs-3.png",
      "/images/projects/jbs-4.png",
      "/images/projects/jbs-5.png",
      "/images/projects/jbs-6.png",
      "/images/projects/jbs-7.png",
      "/images/projects/jbs-8.png",
      "/images/projects/jbs-9.png",
      "/images/projects/jbs-10.png",
      "/images/projects/jbs-11.png",
      "/images/projects/jbs-12.png",
      "/images/projects/jbs-13.png",
      "/images/projects/jbs-14.png",
      "/images/projects/jbs-15.png",
      "/images/projects/jbs-16.png",
      "/images/projects/jbs-17.png",
      "/images/projects/jbs-18.png",
      "/images/projects/jbs-19.png",
    ],

    demoUrl: "https://TU-DOMINIO-REAL",
    featured: true,
    production: true,
    category: "professional",
  },
  {
    slug: "portfolio",
    title: "Jasmany Portfolio",
    description:
      "Portafolio profesional con modo oscuro/claro, carrusel de proyectos interactivo y diseño responsivo.",
    longDescription:
      "Portafolio personal diseñado como carta de presentación digital profesional. Construido con Astro 7 y React 19, utiliza TailwindCSS v4 para el sistema de diseño con modo oscuro/claro completo. La arquitectura sigue el patrón de Astro Islands, combinando componentes estáticos (.astro) con islas interactivas (React) para un rendimiento óptimo. Incluye un carrusel de proyectos con gestos táctiles, galería con filtros por tecnología, modal con presentación tipo slide, efecto typewriter en el hero, slider infinito de tecnologías, y una página about detallada con línea de tiempo profesional. Cada componente se comunica mediante props tipadas con TypeScript estricto. Las imágenes se optimizan con lazy loading y el fondo usa variables CSS personalizadas para transiciones suaves entre temas.",
    problemSolved:
      "Proporciona una presencia profesional en línea que centraliza perfil, proyectos, habilidades y experiencia en un solo lugar. El diseño modular permite escalar el contenido sin reestructurar la app, y el sistema de temas garantiza accesibilidad visual en cualquier entorno.",
    technologies: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/portfolio-1.png",
    images: [
      "/images/projects/portfolio-2.png",
      "/images/projects/portfolio-3.png",
      "/images/projects/portfolio-4.png",
      "/images/projects/portfolio-5.png",
      "/images/projects/portfolio-6.png",
      "/images/projects/portfolio-7.png",
      "/images/projects/portfolio-8.png",
      "/images/projects/portfolio-9.png",
    ],
    githubUrl: "https://github.com/Darkjasmany/jasmany-portfolio",
    featured: true,
    category: "professional",
    production: true,
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
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Zustand",
      "REST API",
    ],
    image: "/images/projects/cash-1.png",
    images: [
      "/images/projects/cash-2.png",
      "/images/projects/cash-3.png",
      "/images/projects/cash-4.png",
      "/images/projects/cash-5.png",
      "/images/projects/cash-6.png",
      "/images/projects/cash-7.png",
      "/images/projects/cash-8.png",
    ],
    githubUrl: "https://github.com/Darkjasmany/cash-management",
    featured: true,
    category: "professional",
    production: true,
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
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Sequelize",
      "Tailwind CSS",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Multer",
      "REST API",
    ],
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
    githubUrl: "https://github.com/Darkjasmany/SelNic",
    featured: true,
    category: "professional",
    production: true,
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
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "face-api.js",
      "REST API",
    ],
    image: "/images/projects/futbol-1.png",
    images: [
      "/images/projects/futbol-2.png",
      "/images/projects/futbol-3.png",
      "/images/projects/futbol-4.png",
      "/images/projects/futbol-5.png",
      "/images/projects/futbol-6.png",
      "/images/projects/futbol-7.png",
      "/images/projects/futbol-8.png",
      "/images/projects/futbol-9.png",
      "/images/projects/futbol-10.png",
      "/images/projects/futbol-11.png",
      "/images/projects/futbol-12.png",
      "/images/projects/futbol-13.png",
      "/images/projects/futbol-14.png",
      "/images/projects/futbol-15.png",
      "/images/projects/futbol-16.png",
      "/images/projects/futbol-17.png",
      "/images/projects/futbol-18.png",
    ],
    githubUrl: "https://github.com/Darkjasmany/futbol-system",
    featured: true,
    category: "professional",
    production: true,
  },

  {
    slug: "pokedex",
    title: "Pokédex Nacional",
    description: "Pokédex interactiva con filtros por tipo y búsqueda por nombre.",
    longDescription:
      "Aplicación desarrollada con fines de aprendizaje construida con Astro que consume la PokéAPI para mostrar los 151 Pokémon originales. Incluye filtrado por tipo, búsqueda en tiempo real y diseño responsive.",
    problemSolved:
      "Proporciona una interfaz rápida y visual para explorar información de Pokémon consumiendo una API externa.",
    technologies: ["Astro", "Tailwind CSS", "JavaScript", "REST API"],
    image: "/images/projects/pkd-1.png",
    images: [
      "/images/projects/pkd-2.png",
      "/images/projects/pkd-3.png",
      "/images/projects/pkd-4.png",
    ],
    demoUrl: "https://fascinating-lokum-b3afb3.netlify.app/",
    githubUrl: "https://github.com/Darkjasmany/Pokedex-Nacional",
    featured: true,
    category: "learning",
    production: false,
  },
  {
    slug: "app-clima",
    title: "Aplicación de Clima",
    description: "Herramienta de consulta meteorológica en tiempo real.",
    longDescription:
      "Aplicación desarrollada con fines de aprendizaje para interactuar con APIs meteorológicas, permitiendo consultar el estado del tiempo, pronósticos y condiciones climáticas de diferentes ubicaciones de manera rápida y eficiente.",
    problemSolved:
      "Facilita el acceso a información climática actualizada mediante una interfaz sencilla, ideal para la práctica de consumo de APIs externas.",
    technologies: ["Astro", "JavaScript", "REST API"],
    image: "/images/projects/clima-1.png",
    images: [],
    demoUrl: "https://astounding-cheesecake-32c8b9.netlify.app/",
    githubUrl: "https://github.com/Darkjasmany/APP-Clima",
    featured: false,
    category: "learning",
    production: false,
  },
];
