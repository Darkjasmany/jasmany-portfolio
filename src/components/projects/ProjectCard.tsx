import type { Project } from "../../data/projectsData";
import { getTechColor } from "../../data/stackData";

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

const ProjectCard = ({ project, onOpen }: Props) => {
  return (
    <article
      onClick={() => onOpen(project)}
      className="
        group
        relative
        cursor-pointer
        rounded-xl
        overflow-hidden
        border
        border-[var(--border)]
        bg-[var(--card)]
        shadow-md
        transition-all
        duration-300
        hover:border-[var(--accent)]
        hover:-translate-y-1
        hover:shadow-lg
        hover:shadow-[var(--accent)]/10
        "
    >
      {/* Línea superior animada */}
      <div
        className="absolute
          top-0
          left-0
          z-20
          h-[3px]
          w-0
          bg-[var(--accent)]
          transition-all
          duration-300
          group-hover:w-full"
      ></div>

      {/* Glow suave  */}
      <div
        className="absolute
          inset-0
          bg-gradient-to-br
          from-[var(--accent)]/5
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          pointer-events-none"
      ></div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* Imagen */}
        <div className="relative overflow-hidden border-b border-[var(--border)]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="
              h-52
              w-full
              object-cover
              transition-transform
              duration-500
              will-change-transform
              group-hover:scale-105
            "
          />
          <button
            onClick={e => {
              e.stopPropagation();
              onOpen(project);
            }}
            className="absolute 
              top-3 
              right-3 
              w-9 
              h-9 
              rounded-full
              bg-[var(--accent)]/90 
              text-white 
              flex
              items-center
              justify-center
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
              hover:bg-[var(--accent)] 
              hover:scale-110 
              max-sm:opacity-100
              "
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

        {/* Información */}
        <div
          className="p-5 
            md:p-6 
            flex 
            flex-col 
            gap-3"
        >
          <h3
            className="
              text-xl
              font-bold
              text-[var(--hero-text)]
            "
          >
            {project.title}
          </h3>

          <p
            className="
              text-sm
              leading-relaxed
              text-[var(--hero-desc)]
              line-clamp-3
            "
          >
            {project.description}
          </p>

          {/* Tags con colores */}
          <div className="flex flex-wrap gap-2 mt-1">
            {project.technologies.slice(0, 4).map(tech => (
              <span
                key={tech}
                className={`px-2.5 
                  py-0.5 
                  text-xs 
                  font-semibold 
                  rounded-full 
                  border 
                  ${getTechColor(tech) || "bg-[var(--tag)] text-[var(--tag-text)] border-[var(--border)]"}`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span
                className="px-2.5 
                py-0.5 
                text-xs 
                font-semibold 
                rounded-full 
                bg-[var(--tag)] 
                text-[var(--tag-text)] 
                border 
                border-[var(--border)]"
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
