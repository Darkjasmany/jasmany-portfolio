import type { Project } from "../../data/projectsData";

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
        <div className="overflow-hidden border-b border-[var(--border)]">
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
        </div>

        {/* Información */}
        <div className="p-5">
          <h3
            className="
              text-xl
              font-bold
              text-[var(--hero-text)]
              mb-2
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
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
