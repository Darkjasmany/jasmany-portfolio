# jasmany-portfolio

Portafolio profesional de **Jasmany Franco** — Ingeniero en Sistemas y Full Stack Developer.

Diseñado como carta de presentación digital, construido con **Astro 7** + **React 19** + **TypeScript** + **TailwindCSS v4**.

## Stack Tecnológico

| Dependencia | Versión | Propósito |
|---|---|---|
| [Astro](https://astro.build) | ^7.0 | Framework principal. Genera HTML estático con islands interactivos (Astro Islands). Permite cero JS por defecto y carga bajo demanda. |
| [React](https://react.dev) | ^19.2 | Islas interactivas: carrusel de proyectos, galería con filtros, modal, typewriter, theme toggle. |
| [TypeScript](https://www.typescriptlang.org) | — | Tipado estricto en toda la app. Interfaces para datos (Project, StackData, SocialData) y props de componentes. |
| [TailwindCSS](https://tailwindcss.com) | ^4.2 | Sistema de diseño utility-first. Tokens de color, tipografía fluida con `clamp()`, responsive design. |
| [typewriter-effect](https://www.npmjs.com/package/typewriter-effect) | ^2.22 | Efecto de máquina de escribir en el Hero para los roles. |

### Dev Dependencias

| Dependencia | Propósito |
|---|---|
| ESLint + `typescript-eslint` | Linter con reglas para TypeScript y Astro |
| Prettier + `prettier-plugin-astro` | Formateo consistente |
| `@tailwindcss/vite` | Plugin Vite para compilar TailwindCSS v4 |

## Arquitectura del Proyecto

```
src/
├── assets/
│   ├── backgrounds/      # Imágenes de fondo (modo claro/oscuro)
│   └── images/           # Foto de perfil
├── components/
│   ├── layout/           # Nav.astro, Footer.astro
│   ├── projects/         # Componentes React interactivos (Carousel, Gallery, Modal, Card, Filter, Dots)
│   ├── sections/         # Secciones de página (Hero, Specialties, Projects, Contact, About*, etc.)
│   └── ui/               # Componentes Atom/UI reutilizables (Title, Card, HoverCard, Link, etc.)
├── data/                 # Datos estáticos (projects, stack, specialties, social, copywriting)
├── layouts/              # Layout principal con SEO y Google Fonts
├── pages/                # Rutas: index.astro, about.astro, projects.astro
├── styles/               # CSS global con tokens de colores (light/dark), animaciones
└── utils/                # Helpers (ej. getSvgContent para carga centralizada de SVGs)
```

### Principios de Arquitectura

- **Astro Islands**: Componentes `.astro` son estáticos (zero JS). Solo los componentes React se hidratan con directivas `client:load` o `client:visible`.
- **Separación por responsabilidad**: `sections/` agrupa secciones de página completas, `ui/` contiene átomos reutilizables, `projects/` agrupa la lógica interactiva de proyectos.
- **Data-driven**: Toda la información del portafolio vive en `src/data/`. Los componentes solo reciben props tipadas.
- **CSS Variables para theming**: Sistema de tokens CSS para modo claro/oscuro definidos en `global.css`. Sin dependencias externas de theming.

## Secciones del Portafolio

| Sección | Componente | Descripción |
|---|---|---|
| **Hero** | `Hero.astro` | Presentación principal: nombre, roles con typewriter, descripción, redes sociales, stack slider infinito, foto con efecto 3D tilt |
| **Especialidades** | `Specialties.astro` | Grid de 4 cards con categorías (Full Stack, Automatización, Infraestructura, BD) |
| **Proyectos** | `Projects.astro` | Carrusel de proyectos destacados con drag/swipe, dots, contador y modal con galería |
| **Contacto** | `Contact.astro` | CTA final con botones de CV, email y redes sociales |
| **Sobre Mí** | `About*.astro` (5 sub-secciones) | Biografía, habilidades técnicas, habilidades blandas, línea de tiempo profesional, CTA a GitHub |
| **Proyectos (página)** | `HeroProject.astro` | Página completa con galería filtrable por tecnología |

## Cómo Ejecutar Localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/Darkjasmany/jasmany-portfolio.git
cd jasmany-portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:4321
```

### Comandos Disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo con hot-reload |
| `npm run build` | Genera build estático en `dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run astro` | CLI de Astro (ej. `npm run astro -- --help`) |

## Dónde Poner las Imágenes

### Screenshots de Proyectos

Coloca las imágenes en `public/images/projects/` con este formato:

```
public/images/projects/
├── mi-proyecto-1.png
├── mi-proyecto-2.png
└── mi-proyecto-3.png
```

Luego referencia la ruta en `src/data/projectsData.ts`:

```typescript
{
  slug: "mi-proyecto",
  image: "/images/projects/mi-proyecto-1.png",
  images: [
    "/images/projects/mi-proyecto-2.png",
    "/images/projects/mi-proyecto-3.png",
  ],
}
```

Formatos aceptados: PNG, WebP, JPG. Recomendado: WebP para mejor rendimiento.

### Foto de Perfil

Las imágenes de perfil están en `src/assets/images/`. Se importan con `astro:assets` para optimización automática:

```
src/assets/images/
├── JasmanyF.png      # Foto principal (usada en Hero Card)
├── Jasmany.png
└── Jasma.png
```

### Fondos

Las imágenes de fondo están en `src/assets/backgrounds/` y se referencian desde `src/styles/global.css` como variables CSS:

```css
:root {
  --bg-image: url("../assets/backgrounds/cool-background.png");
}
[data-theme="dark"] {
  --bg-image: url("../assets/backgrounds/cool-background-dark.png");
}
```

### SVGs de Tecnologías

Los iconos de tecnologías (stack, specialties) están en `public/svg/`. Cada archivo debe llamarse como el `name` en `stackData.ts`:

```
public/svg/
├── react.svg
├── nodeJs.svg
├── typeScript.svg
└── ... (27 iconos)
```

## Buenas Prácticas Implementadas

- **Zero JS por defecto**: Los componentes Astro renderizan HTML estático. Solo se hidrata lo interactivo.
- **Lazy loading**: Imágenes con `loading="lazy"`, TypeEffect con `client:visible`.
- **Tipado estricto**: TypeScript en toda la app, interfaces exportadas para datos compartidos.
- **SEO**: Meta tags OG, description y title configurables desde Layout.
- **Theming completo**: Modo claro/oscuro con persistencia en localStorage y respeto a preferencia del sistema.
- **Responsive**: Mobile-first con Tailwind, desde 320px hasta 1536px+.
- **Accesibilidad**: ARIA labels en botones e iconos, roles semánticos, contraste suficiente.
