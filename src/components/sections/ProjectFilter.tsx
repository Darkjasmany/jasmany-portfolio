// ─────────────────────────────────────────────────────────────────────
// CREACIÓN: src/components/sections/ProjectFilter.tsx
// ─────────────────────────────────────────────────────────────────────
// QUÉ HACE:
//  Componente React para la página /proyectos que permite:
//  1. Filtrar proyectos por tecnología (botones de filtro)
//  2. Ver todos los proyectos en grilla responsiva
//  3. Abrir modal de detalle al hacer click en cualquier card
//
// ESTRUCTURA:
//  - Extrae tecnologías únicas de todos los proyectos
//  - Botón "Todas" + botón por cada tecnología
//  - Grilla 1/2/3 columnas según viewport
//  - Cada card abre ProjectModal
//
// COLORES:
//  - Importa getTagColor desde stackData (colores centralizados)
//  - Pills seleccionados: fondo accent (variable CSS) + border-color
//    de la tecnología (clase Tailwind literal, detectada por el JIT)
//  - Pills no seleccionados: fondo card, border gris, hover accent
// ─────────────────────────────────────────────────────────────────────

import { useState } from "react";
import type { Project } from "../../data/projectsData";
import { getTechColor } from "../../data/stackData"; // colores centralizados
import ProjectModal from "../projects/ProjectModal";

interface Props {
  projects: Project[];
}

const ProjectFilter = ({ projects }: Props) => {
  // Extrae todas las tecnologías únicas y las ordena
  const allTags = [...new Set(projects.flatMap(p => p.technologies))].sort();
  const [selected, setSelected] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Filtra proyectos si hay un tag seleccionado
  const filtered = selected ? projects.filter(p => p.technologies.includes(selected)) : projects;

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="mb-12">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--hero-text)]">
            Todos los <span className="text-[var(--accent)]">Proyectos</span>
          </h1>
          <div className="w-16 h-1 bg-[var(--accent)] rounded-full mt-4"></div>
        </div>

        {/* ── FILTROS ──────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {/* Botón "Todas" */}
          <button
            onClick={() => setSelected(null)}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full border transition-all duration-200 ${
              selected === null
                ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                : "bg-[var(--card)] text-[var(--text)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            }`}
          >
            Todas
          </button>

          {/* Botón por cada tecnología */}
          {allTags.map(tag => {
            const color = getTechColor(tag);
            // Extrae SOLO la clase border-color del string de color
            // Ej: "bg-blue-500/10 text-blue-500 border-blue-500/20" → "border-blue-500/20"
            // Usamos el border-color de la tecnología para el pill seleccionado
            const borderColor = color
              ? color
                  .split(" ")
                  .filter(c => c.startsWith("border-"))
                  .join(" ")
              : "border-[var(--accent)]";
            return (
              <button
                key={tag}
                onClick={() => setSelected(tag)}
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                  selected === tag
                    ? // Seleccionado: fondo accent + border-color de la tecnología
                      `bg-[var(--accent)] text-white border ${borderColor}`
                    : // No seleccionado: fondo card + hover accent
                      `bg-[var(--card)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]`
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* ── GRILLA DE PROYECTOS ─────────────────────────────────── */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[var(--muted)] text-lg">
              No se encontraron proyectos con esa tecnología.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
              <div
                key={project.slug}
                className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow)] transition-all duration-300 hover:shadow-[var(--shadow-hover)] cursor-pointer"
                onClick={() => setModalProject(project)}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Imagen */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-[var(--bg2)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setModalProject(project);
                    }}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[var(--accent)]/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--accent)] hover:scale-110 max-sm:opacity-100"
                    aria-label="Ver detalle"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                  </button>
                </div>

                {/* Info */}
                <div className="p-5 md:p-6 flex flex-col gap-3">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--hero-text)] truncate">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--hero-desc)] line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags con colores */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${getTechColor(tech) || "bg-[var(--tag)] text-[var(--tag-text)] border-[var(--border)]"}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[var(--tag)] text-[var(--tag-text)] border border-[var(--border)]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Barra decorativa */}
                  <div className="relative w-full mt-2 mb-1">
                    <div className="w-full h-px bg-[var(--border)]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[var(--accent)]"></div>
                  </div>

                  {/* Botones Demo / GitHub (stopPropagation para no abrir modal) */}
                  <div className="flex gap-3 mt-1" onClick={e => e.stopPropagation()}>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 rounded-lg text-sm font-semibold bg-[var(--accent)] text-white hover:brightness-110 active:scale-95 transition-all"
                      >
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 rounded-lg text-sm font-semibold border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white active:scale-95 transition-all"
                      >
                        Código
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Modal de detalle */}
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
};

export default ProjectFilter;
