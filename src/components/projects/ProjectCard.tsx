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
        cursor-pointer
        rounded-xl
        overflow-hidden
        border
        border-[var(--border)]
        bg-[var(--card)]
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--accent)]
        hover:shadow-lg
        "
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-52
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
            "
        />
      </div>

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
          text-[var(--hero-desc)]
          line-clamp-3
          "
        >
          {project.description}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
