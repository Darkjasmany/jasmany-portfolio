import type React from "react";
import { useCallback, useEffect, useState } from "react";
import type { Project } from "../../data/projectsData";
import { stackData } from "../../data/stackData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allImages = project ? [project.image, ...(project.images ?? [])] : [];

  // Obtener color de la tech desde stackData
  const getTechColor = (tech: string): string => {
    const found = stackData.find(s => s.name.toLowerCase() === tech.toLowerCase());
    return found?.color ?? "bg-gray-500/10 text-gray-500 border-gray-500/20";
  };

  // Avanzar imagen
  const next = useCallback(() => {
    setCurrentIndex(i => (i + 1) % allImages.length);
  }, [allImages.length]);

  const prev = () => {
    setCurrentIndex(i => (i - 1 + allImages.length) % allImages.length);
  };

  // Reset al abrir proyecto
  useEffect(() => {
    if (!project) return;
    setCurrentIndex(0);

    const navbar = document.getElementById("navbar");
    navbar?.classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      navbar?.classList.remove("opacity-0", "pointer-events-none");
    };
  }, [project, onClose, next]);

  // Autoplay cada 4 segundos
  useEffect(() => {
    if (!project || allImages.length <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [project, allImages.length, next]);

  if (!project) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-xl
                 p-4 md:p-8 overflow-y-auto flex items-center justify-center"
    >
      <div
        className="relative w-full max-w-6xl bg-[var(--card)] rounded-3xl
                   overflow-hidden border border-[var(--border)] shadow-2xl
                   max-h-[92vh] animate-fade-in-up"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full
                     flex items-center justify-center bg-black/60 backdrop-blur-xl
                     border border-white/20 text-white text-sm
                     hover:bg-[var(--accent)] hover:scale-110
                     transition-all duration-200"
        >
          ✕
        </button>

        <div className="overflow-y-auto max-h-[92vh] custom-scrollbar">
          {/* ── HEADER: título + tecnologías ── */}
          <div className="px-6 md:px-10 pt-8 pb-6 border-b border-[var(--border)]">
            <h2
              className="text-2xl md:text-4xl font-black text-[var(--hero-text)]
                           tracking-tight mb-4"
            >
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                              border ${getTechColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ── GALERÍA: carrusel automático ── */}
          {allImages.length > 0 && (
            <div className="relative bg-black/5 border-b border-[var(--border)]">
              {/* Imagen principal */}
              <div className="relative h-[260px] md:h-[420px] overflow-hidden">
                {allImages.map((img, idx) => (
                  <a
                    key={idx}
                    href={img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute inset-0 transition-opacity duration-500
                                ${idx === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    title="Abrir imagen en nueva pestaña"
                  >
                    <img
                      src={img}
                      alt={`${project.title} — captura ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </a>
                ))}

                {/* Botón anterior */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        prev();
                      }}
                      aria-label="Imagen anterior"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                                 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm
                                 border border-white/20 text-white text-sm
                                 hover:bg-[var(--accent)] transition-all duration-200
                                 flex items-center justify-center"
                    >
                      ‹
                    </button>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        next();
                      }}
                      aria-label="Imagen siguiente"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                                 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm
                                 border border-white/20 text-white text-sm
                                 hover:bg-[var(--accent)] transition-all duration-200
                                 flex items-center justify-center"
                    >
                      ›
                    </button>
                  </>
                )}

                {/* Contador */}
                {allImages.length > 1 && (
                  <div
                    className="absolute bottom-3 right-3 z-10
                                  bg-black/50 backdrop-blur-sm text-white
                                  text-xs font-medium px-2.5 py-1 rounded-full
                                  border border-white/10"
                  >
                    {currentIndex + 1} / {allImages.length}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-none">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden
                                  border-2 transition-all duration-200
                                  ${
                                    currentIndex === idx
                                      ? "border-[var(--accent)] scale-105"
                                      : "border-[var(--border)] opacity-60 hover:opacity-100"
                                  }`}
                    >
                      <img
                        src={img}
                        alt={`Miniatura ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── CONTENIDO: descripción + enlaces ── */}
          <div className="p-6 md:p-10">
            <div className="grid md:grid-cols-3 gap-10">
              {/* Columna izquierda */}
              <div className="md:col-span-2 flex flex-col gap-8">
                <section>
                  <h3 className="text-xl font-bold text-[var(--hero-text)] mb-3">
                    Acerca del proyecto
                  </h3>
                  <p className="leading-relaxed text-[var(--hero-desc)]">
                    {project.longDescription || project.description}
                  </p>
                </section>

                {project.problemSolved && (
                  <section>
                    <h3 className="text-xl font-bold text-[var(--hero-text)] mb-3">
                      Problema resuelto
                    </h3>
                    <p className="leading-relaxed text-[var(--hero-desc)]">
                      {project.problemSolved}
                    </p>
                  </section>
                )}
              </div>

              {/* Columna derecha: enlaces */}
              <aside className="md:sticky md:top-6 h-fit flex flex-col gap-3">
                <h3 className="text-lg font-bold text-[var(--hero-text)]">Enlaces</h3>

                {project.demoUrl && project.demoUrl !== "https://..." && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[var(--accent)] text-white
                               text-center font-semibold text-sm
                               hover:brightness-110 transition-all duration-200"
                  >
                    Visitar Demo
                  </a>
                )}

                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl border-2 border-[var(--accent)]
                               text-[var(--accent)] text-center font-semibold text-sm
                               hover:bg-[var(--accent)] hover:text-white
                               transition-all duration-200"
                  >
                    Ver Código
                  </a>
                )}

                {project.youtubeUrl && project.youtubeUrl !== "https://youtube.com/watch?v=..." && (
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl border-2 border-red-500
                               text-red-500 text-center font-semibold text-sm
                               hover:bg-red-500 hover:text-white
                               transition-all duration-200"
                  >
                    Ver Video
                  </a>
                )}

                {/* Si no hay enlaces reales */}
                {(!project.demoUrl || project.demoUrl === "https://...") &&
                  (!project.githubUrl || project.githubUrl === "#") &&
                  (!project.youtubeUrl ||
                    project.youtubeUrl === "https://youtube.com/watch?v=...") && (
                    <p className="text-sm text-[var(--muted)] italic">Enlaces próximamente</p>
                  )}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
