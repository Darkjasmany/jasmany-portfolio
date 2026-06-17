import type React from "react";
import { useEffect, useState } from "react";
import type { Project } from "../../data/projectsData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }: ProjectModalProps) => {
  const [selectedImage, setSelectedImage] = useState("");

  // 1. Manejo del Body Scroll, la tecla ESC y ocultar el NavBar
  useEffect(() => {
    if (!project) return;

    setSelectedImage(project.image);

    // Ocultar la barra nav cuando se visualiza el modal
    const navbar = document.getElementById("navbar");

    navbar?.classList.add("opacity-0");
    navbar?.classList.add("pointer-events-none");

    // Bloquea el scroll del body
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);

      // Restaura el scroll al cerrar
      document.body.style.overflow = "";

      // Restaurar el navbar al cerrar
      navbar?.classList.remove("opacity-0");
      navbar?.classList.remove("pointer-events-none");
    };
  }, [project, onClose]);

  // Si no hay proyecto seleccionado, no se renderiza nada
  if (!project) return null;

  // 2. Manejo del clic en el overlay (fondo oscuro) para cerrar
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      className="
        fixed
        inset-0
        z-[999]
        bg-black/60
        backdrop-blur-xl
        p-4
        md:p-8
        overflow-y-auto
        flex
        items-center
        justify-center
      "
    >
      {/* Contenedor principal */}
      <div
        className="
          relative
          w-full
          max-w-6xl
          bg-[var(--card)]
          rounded-3xl
          overflow-hidden
          border
          border-[var(--border)]
          shadow-2xl
          max-h-[92vh]

          animate-fade-in-up
        "
      >
        {/* Botón Cerrar */}

        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="
            absolute
            top-5
            right-5
            z-50

            w-12
            h-12

            rounded-full

            flex
            items-center
            justify-center

            bg-black/60
            backdrop-blur-xl

            border
            border-white/20

            text-white

            transition-all
            duration-300

            hover:bg-[var(--accent)]
            hover:scale-110
          "
        >
          ✕
        </button>

        {/* Contenido Scrollable */}

        <div className="overflow-y-auto max-h-[92vh] custom-scrollbar">
          {/* Hero */}

          <div
            className="
              relative

              h-[340px]
              md:h-[520px]

              overflow-hidden
            "
          >
            <img
              src={selectedImage}
              alt={project.title}
              className="
                absolute
                inset-0

                w-full
                h-full

                object-cover
              "
            />

            {/* Oscurece la imagen */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Gradiente */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t

                from-[var(--card)]
                via-[var(--card)]/40
                to-transparent
              "
            />

            {/* Información */}
            <div
              className="
                absolute

                bottom-8
                md:bottom-12

                left-6
                md:left-10

                right-6

                z-10
              "
            >
              <h2
                className="
                  text-3xl
                  md:text-6xl

                  font-black

                  text-white

                  mb-5
                "
              >
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1

                      rounded-full

                      text-sm

                      text-white

                      bg-white/10
                      backdrop-blur-md

                      border
                      border-white/20
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contenido de información del proyecto */}

          <div className="p-6 md:p-10">
            <div className="grid md:grid-cols-3 gap-10">
              {/* COLUMNA IZQUIERDA */}

              <div className="md:col-span-2 flex flex-col gap-8">
                <section>
                  <h3
                    className="
                      text-2xl
                      font-bold

                      text-[var(--hero-text)]

                      mb-3
                    "
                  >
                    Acerca del proyecto
                  </h3>

                  <p
                    className="
                      leading-relaxed

                      text-[var(--hero-desc)]
                    "
                  >
                    {project.longDescription || project.description}
                  </p>
                </section>

                {project.problemSolved && (
                  <section>
                    <h3
                      className="
                        text-2xl
                        font-bold

                        text-[var(--hero-text)]

                        mb-3
                      "
                    >
                      Problema resuelto
                    </h3>

                    <p
                      className="
                        leading-relaxed

                        text-[var(--hero-desc)]
                      "
                    >
                      {project.problemSolved}
                    </p>
                  </section>
                )}
              </div>

              {/* 
                  COLUMNA DERECHA
               */}

              <aside
                className="
                  md:sticky
                  md:top-6

                  h-fit

                  flex
                  flex-col
                  gap-3
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    text-[var(--hero-text)]
                  "
                >
                  Enlaces
                </h3>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full

                      py-3

                      rounded-xl

                      bg-[var(--accent)]
                      text-white

                      text-center
                      font-semibold
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
                      w-full

                      py-3

                      rounded-xl

                      border-2
                      border-[var(--accent)]

                      text-[var(--accent)]

                      text-center
                      font-semibold
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
                      w-full

                      py-3

                      rounded-xl

                      border-2
                      border-red-500

                      text-red-500

                      text-center
                      font-semibold
                    "
                  >
                    Ver Video
                  </a>
                )}
              </aside>
            </div>

            {/* 
                GALERÍA
             */}

            {project.images && project.images.length > 0 && (
              <section className="mt-14">
                <h3
                  className="
                      text-2xl
                      font-bold

                      text-[var(--hero-text)]

                      mb-6
                    "
                >
                  Galería
                </h3>

                <div
                  className="
                      grid
                      grid-cols-2
                      md:grid-cols-4

                      gap-4
                    "
                >
                  {[project.image, ...project.images].map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`
                            overflow-hidden
                            rounded-xl

                            border

                            transition-all
                            duration-300

                            ${
                              selectedImage === img
                                ? "border-[var(--accent)] scale-[1.03]"
                                : "border-[var(--border)]"
                            }
                          `}
                    >
                      <img
                        src={img}
                        alt={`Captura ${idx + 1}`}
                        className="
                              w-full
                              h-32

                              object-cover

                              transition-transform
                              duration-500

                              hover:scale-110
                            "
                      />
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
