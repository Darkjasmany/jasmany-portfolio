import type React from "react";
import { useCallback, useEffect, useState } from "react";
import type { Project } from "../../data/projectsData";
import { getTechColor } from "../../data/stackData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // || (OR): Evalúa el lado derecho si el lado izquierdo es Falsy. Los valores falsy incluyen: null, undefined, false, 0, "" (string vacío) y NaN.

  // ?? (Nullish): Evalúa el lado derecho únicamente si el lado izquierdo es null o undefined.
  const [currentIndex, setCurrentIndex] = useState(0);
  const allImages = project ? [project.image, ...(project.images ?? [])] : [];

  // Avanzar imagen
  const next = useCallback(() => {
    setCurrentIndex(i => (i + 1) % allImages.length);
  }, [allImages.length]);

  // Reset al abrir proyecto, Manejo del Body Scroll, Navbar y Tecla ESC
  useEffect(() => {
    if (!project) return;
    setCurrentIndex(0);

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

  // Autoplay cada 4 segundos
  useEffect(() => {
    if (!project || allImages.length <= 1) return;

    const timer = setInterval(next, 4000);

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar o cambiar slide
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
      className="fixed
        inset-0 
        z-[999]
        bg-black/60 
        backdrop-blur-xl
        p-4 md:p-8 
        flex 
        items-center 
        justify-center
        "
    >
      {/* Contenedor principal */}
      <div
        className="relative 
          w-full 
          max-w-5xl 
          bg-[var(--card)] 
          rounded-3xl
          overflow-hidden 
          border 
          border-[var(--border)] 
          shadow-2xl
          max-h-[92vh] 
          animate-fade-in-up 
          flex 
          flex-col"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute 
              top-5 
              right-5 
              z-50 
              w-10 
              h-10 
              rounded-full
              flex 
              items-center 
              justify-center 
              bg-black/60 
              backdrop-blur-xl
              border 
              border-white/20 
              text-white 
              text-sm
              hover:bg-[var(--accent)] 
              hover:scale-110
              transition-all 
              duration-200
              cursor-pointer"
        >
          x
        </button>
        {/* Contenido Scrollable */}
        {/* overflow-y-auto: Permite que el contenido siga siendo scrolleable si se desborda
        verticalmente. [scrollbar-width:none]: Oculta el scrollbar en Firefox.
        [-ms-overflow-style:none]: Oculta el scrollbar en versiones antiguas de Microsoft Edge e
        Internet Explorer. [&::-webkit-scrollbar]:hidden: Utiliza un selector arbitrario de Tailwind
        para aplicar display: none al motor WebKit (Chrome, Safari, Opera y el Edge moderno). */}
        <div
          className="overflow-y-auto
            p-6 
            md:p-10
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            "
        >
          {/* ── HEADER: título + tecnologías ── */}
          <header
            className="mb-10 
                pr-12"
          >
            <h2
              className="text-3xl 
                  md:text-5xl 
                  font-black 
                  text-[var(--hero-text)]
                  tracking-tight mb-6"
            >
              {project.title}
            </h2>

            {/* Tags con colores */}
            <div
              className="flex 
                  flex-wrap 
                  gap-2"
            >
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className={`px-4 
                      py-1.5 
                      rounded-full 
                      text-sm 
                      font-semibold
                      border 
                      ${getTechColor(tech) || "bg-[var(--tag)] text-[var(--tag-text)] border-[var(--border)]"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* ── CONTENIDO: descripción + enlaces ── */}
          <div
            className="grid 
                md:grid-cols-3 
                gap-10 
                mb-12"
          >
            {/* Columna izquierda */}
            <div
              className="md:col-span-2 
                  flex 
                  flex-col 
                  gap-8"
            >
              <section>
                <h3
                  className="text-2xl 
                      font-bold 
                      text-[var(--hero-text)] 
                      mb-3"
                >
                  Acerca del proyecto
                </h3>
                <p
                  className="leading-relaxed 
                      text-[var(--hero-desc)]"
                >
                  {project.longDescription || project.description}
                </p>
              </section>

              {project.problemSolved && (
                <section>
                  <h3
                    className="text-2xl 
                        font-bold 
                        text-[var(--hero-text)] 
                        mb-3"
                  >
                    Problema resuelto
                  </h3>
                  <p
                    className="leading-relaxed 
                        text-[var(--hero-desc)]"
                  >
                    {project.problemSolved}
                  </p>
                </section>
              )}
            </div>

            {/* Columna derecha: enlaces */}
            <aside
              className="flex 
                    flex-col 
                    gap-4"
            >
              <h3
                className="text-xl 
                    font-bold 
                    text-[var(--hero-text)]
                    mb-1"
              >
                Enlaces
              </h3>

              {project.demoUrl && project.demoUrl !== "https://..." && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full 
                      py-3 
                      rounded-xl 
                      bg-[var(--accent)] 
                      text-white
                      text-center 
                      font-semibold 
                      text-sm
                      hover:brightness-110 
                      transition-all 
                      duration-200"
                >
                  Visitar Demo
                </a>
              )}

              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full 
                      py-3 
                      rounded-xl 
                      border-2 
                      border-[var(--accent)]
                      text-[var(--accent)] 
                      text-center 
                      font-semibold 
                      text-sm
                      hover:bg-[var(--accent)] 
                      hover:text-white
                      transition-all 
                      duration-200"
                >
                  Ver Código
                </a>
              )}

              {project.youtubeUrl && project.youtubeUrl !== "https://youtube.com/watch?v=..." && (
                <a
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full 
                      py-3 
                      rounded-xl 
                      border-2 
                    border-red-500
                    text-red-500 
                      text-center 
                      font-semibold 
                      text-sm
                    hover:bg-red-500 
                    hover:text-white
                      transition-all 
                      duration-200"
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
          {/* ── GALERÍA: carrusel automático ── */}
          {allImages.length > 0 && (
            <section
              className="mt-8 
                        pt-8"
            >
              <h3
                className="text-2xl 
                          font-bold 
                          text-[var(--hero-text)] 
                          mb-6"
              >
                Galería
              </h3>

              <div
                className="relative 
                          w-full 
                          h-[250px] 
                          md:h-[500px] 
                          rounded-2xl 
                          overflow-hidden 
                          group 
                          bg-black/5 
                          border 
                          border-[var(--border)]"
              >
                {allImages.map((img, idx) => (
                  <a
                    key={idx}
                    href={img}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Abrir imagen en una nueva pestaña"
                    className={`
                      absolute 
                      inset-0 
                      transition-opacity 
                      duration-1000 
                      ease-in-out
                      ${idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
                    `}
                  >
                    <img
                      src={img}
                      alt={`Captura de pantalla ${idx + 1}`}
                      className="w-full 
                        h-full 
                        object-contain 
                        md:object-cover 
                        transition-transform 
                        duration-6000 
                        hover:scale-105"
                    />
                  </a>
                ))}

                {/* Indicadores del Carrusel (Dots) */}
                {allImages.length > 1 && (
                  <div
                    className="absolute 
                        bottom-4 
                        left-1/2 
                        -translate-x-1/2 
                        flex 
                        gap-2 
                        z-20 
                        bg-black/30 
                        px-3 
                        py-2 
                        rounded-full 
                        backdrop-blur-sm"
                  >
                    {allImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Ir a la imagen ${idx + 1}`}
                        className={`
                          w-2.5 
                          h-2.5 
                          rounded-full 
                          transition-all 
                          duration-300
                          ${idx === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white"}
                        `}
                      />
                    ))}
                  </div>
                )}
              </div>
              <p
                className="text-center 
                  text-sm 
                  text-[var(--hero-desc)] 
                  mt-3 
                  opacity-70"
              >
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
