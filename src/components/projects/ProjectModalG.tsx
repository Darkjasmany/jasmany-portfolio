import type React from "react";
import { useEffect, useState } from "react";
import type { Project } from "../../data/projectsData";
// Asegúrate de ajustar la ruta de importación de tu stackData
import { stackData } from "../../data/stackData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 1. Manejo del Body Scroll, Navbar y Tecla ESC
  useEffect(() => {
    if (!project) return;

    const navbar = document.getElementById("navbar");
    navbar?.classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      navbar?.classList.remove("opacity-0", "pointer-events-none");
    };
  }, [project, onClose]);

  // 2. Lógica del Carrusel Automático (4 segundos)
  const allImages = project ? [project.image, ...(project.images || [])] : [];

  useEffect(() => {
    if (!project || allImages.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % allImages.length);
    }, 4000);

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar o cambiar slide
  }, [project, allImages.length]);

  if (!project) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Función auxiliar para obtener el color de la tecnología
  const getTechColor = (techName: string) => {
    const found = stackData.find(s => s.name.toLowerCase() === techName.toLowerCase());
    // Color por defecto si no se encuentra en stackData
    return found ? found.color : "bg-gray-500/10 text-gray-400 border-gray-500/20";
  };

  return (
    <div
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      className="
        fixed inset-0 z-[999] bg-black/60 backdrop-blur-xl
        p-4 md:p-8 overflow-y-auto flex items-center justify-center
      "
    >
      {/* Contenedor principal */}
      <div
        className="
          relative w-full max-w-5xl bg-[var(--card)] rounded-3xl
          overflow-hidden border border-[var(--border)] shadow-2xl
          max-h-[92vh] animate-fade-in-up flex flex-col
        "
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="
            absolute top-5 right-5 z-50 w-10 h-10 rounded-full
            flex items-center justify-center bg-[var(--card)]/80 backdrop-blur-xl
            border border-[var(--border)] text-[var(--hero-text)]
            transition-all duration-300 hover:bg-[var(--accent)] hover:text-white
            hover:scale-110 shadow-lg
          "
        >
          ✕
        </button>

        {/* Contenido Scrollable */}
        <div className="overflow-y-auto p-6 md:p-10 custom-scrollbar">
          {/* --- SECCIÓN 1: CABECERA (Título y Tecnologías) --- */}
          <header className="mb-10 pr-12">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--hero-text)] mb-6">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border ${getTechColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* --- SECCIÓN 2: CUERPO (Información y Enlaces) --- */}
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* Columna Izquierda (Texto) */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <section>
                <h3 className="text-2xl font-bold text-[var(--hero-text)] mb-3">
                  Acerca del proyecto
                </h3>
                <p className="leading-relaxed text-[var(--hero-desc)]">
                  {project.longDescription || project.description}
                </p>
              </section>

              {project.problemSolved && (
                <section>
                  <h3 className="text-2xl font-bold text-[var(--hero-text)] mb-3">
                    Problema resuelto
                  </h3>
                  <p className="leading-relaxed text-[var(--hero-desc)]">{project.problemSolved}</p>
                </section>
              )}
            </div>

            {/* Columna Derecha (Enlaces) */}
            <aside className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-[var(--hero-text)] mb-1">Enlaces</h3>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full py-3 rounded-xl bg-[var(--accent)] text-white
                    text-center font-semibold transition-transform hover:scale-[1.02] shadow-md
                  "
                >
                  Visitar Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full py-3 rounded-xl border-2 border-[var(--accent)]
                    text-[var(--accent)] text-center font-semibold
                    transition-transform hover:scale-[1.02] hover:bg-[var(--accent)]/10
                  "
                >
                  Ver Código
                </a>
              )}

              {project.youtubeUrl && (
                <a
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full py-3 rounded-xl border-2 border-red-500
                    text-red-500 text-center font-semibold
                    transition-transform hover:scale-[1.02] hover:bg-red-500/10
                  "
                >
                  Ver Video
                </a>
              )}
            </aside>
          </div>

          {/* --- SECCIÓN 3: GALERÍA (Carrusel Automático) --- */}
          {allImages.length > 0 && (
            <section className="mt-8 border-t border-[var(--border)] pt-8">
              <h3 className="text-2xl font-bold text-[var(--hero-text)] mb-6">Galería</h3>

              <div className="relative w-full h-[250px] md:h-[500px] rounded-2xl overflow-hidden group bg-black/5 border border-[var(--border)]">
                {allImages.map((img, idx) => (
                  <a
                    key={idx}
                    href={img}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Abrir imagen en una nueva pestaña"
                    className={`
                      absolute inset-0 transition-opacity duration-1000 ease-in-out
                      ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
                    `}
                  >
                    <img
                      src={img}
                      alt={`Captura de pantalla ${idx + 1}`}
                      className="w-full h-full object-contain md:object-cover transition-transform duration-[6000ms] hover:scale-105"
                    />
                  </a>
                ))}

                {/* Indicadores del Carrusel (Dots) */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/30 px-3 py-2 rounded-full backdrop-blur-sm">
                    {allImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Ir a la imagen ${idx + 1}`}
                        className={`
                          w-2.5 h-2.5 rounded-full transition-all duration-300
                          ${idx === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white"}
                        `}
                      />
                    ))}
                  </div>
                )}
              </div>
              <p className="text-center text-sm text-[var(--hero-desc)] mt-3 opacity-70">
                Haz clic en la imagen para verla en tamaño completo
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
