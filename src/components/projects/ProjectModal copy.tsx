import type React from "react";
import { useEffect } from "react";
import type { Project } from "../../data/projectsData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }: ProjectModalProps) => {
  // 1. Manejo del Body Scroll y la tecla ESC
  useEffect(() => {
    if (!project) return;

    // Ocultar la barra nav cuando se visualiza el modal
    const navbar = document.getElementById("navbar");
    navbar?.classList.add("opacity-0");
    navbar?.classList.add("pointer-events-none");

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    // Bloquea el scroll del body
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      // Restaura el scroll al cerrar
      document.body.style.overflow = "";
      // Restaurar el navbar al cerrar
      navbar?.classList.remove("opacity-0");
      navbar?.classList.remove("pointer-events-none");
    };
  }, [project, onClose]);

  useEffect(() => {}, [project]);

  // Si no hay proyecto seleccionado, no se renderiza nada
  if (!project) return null;

  // 2. Manejo del clic en el overlay (fondo oscuro) para cerrar
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="
        fixed 
        inset-0 
        z-[100] 
        flex 
        items-center 
        justify-center 
        p-4 sm:p-6 
        bg-black/50
        backdrop-blur-xl
        overflow-y-auto
        "
      aria-modal="true"
      role="dialog"
    >
      {/* Contenedor principal del modal */}
      <div
        className="
          relative
          w-full
          max-w-4xl 
          bg-[var(--bg)] md:bg-[var(--card)] 
          rounded-2xl 
          shadow-2xl 
          overflow-hidden 
          flex flex-col 
          max-h-[90vh] 
          my-auto 
          border border-[var(--border)] 
          animate-fade-in-up
          "
      >
        {/* Botón X para cerrar */}
        <button
          onClick={onClose}
          className="
            absolute 
            top-4 
            right-4 
            z-20 
            w-10 
            h-10 
            flex items-center justify-center 
            rounded-full 
            bg-black/50 
            text-white 
            hover:bg-[var(--accent)] 
            hover:scale-110 
            transition-all 
            duration-200"
          aria-label="Cerrar modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Zona de contenido scrolleable internamente */}
        <div className="overflow-y-auto w-full h-full custom-scrollbar">
          {/* Imagen Hero */}
          {/* <div className="relative w-full h-64 sm:h-80 md:h-96 shrink-0 bg-[var(--bg2)]"> */}
          <div className="relative w-full h-64 sm:h-80 md:h-72 shrink-0 bg-[var(--bg2)]">
            <img
              src={project.image}
              alt={`Imagen principal del proyecto ${project.title}`}
              className="w-full h-full object-cover"
            />
            {/* Gradiente sutil inferior para fusionar con el fondo */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] md:from-[var(--card)] to-transparent opacity-90 h-full w-full"
              style={{ top: "50%" }}
            ></div>
          </div>

          {/* Contenido (Textos, Tags, Galería, Botones) */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-8 -mt-16 relative z-10">
            {/* Cabecera: Título y Tags */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--hero-text)] leading-tight">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--tag)] text-[var(--tag-text)] border border-[var(--border)] shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Descripciones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-bold text-[var(--hero-text)] mb-2 flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    Acerca del Proyecto
                  </h3>
                  <p className="text-[var(--hero-desc)] leading-relaxed whitespace-pre-line">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {project.problemSolved && (
                  <div>
                    <h3 className="text-xl font-bold text-[var(--hero-text)] mb-2 flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      Problema Resuelto
                    </h3>
                    <p className="text-[var(--hero-desc)] leading-relaxed">
                      {project.problemSolved}
                    </p>
                  </div>
                )}
              </div>

              {/* Panel Lateral: Botones de Acción */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold text-[var(--hero-text)] mb-1 hidden md:block">
                  Enlaces
                </h3>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-[var(--accent)] text-white hover:brightness-110 active:scale-95 transition-all shadow-md hover:shadow-lg"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Visitar Demo
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white active:scale-95 transition-all"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Ver Código
                  </a>
                )}

                {project.youtubeUrl && (
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white active:scale-95 transition-all"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.87 23 12 23 12s0-3.87-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                    </svg>
                    Ver Video
                  </a>
                )}
              </div>
            </div>

            {/* Galería de Imágenes (Si existe) */}
            {project.images && project.images.length > 0 && (
              <div className="mt-4 border-t border-[var(--border)] pt-8">
                <h3 className="text-2xl font-bold text-[var(--hero-text)] mb-6">
                  Galería del Proyecto
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-xl bg-[var(--bg2)] border border-[var(--border)]"
                    >
                      <img
                        src={img}
                        alt={`Captura ${idx + 1} de ${project.title}`}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
