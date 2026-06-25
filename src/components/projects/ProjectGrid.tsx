import type React from "react";
import type { Project } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onCardClick: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onCardClick }) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-[var(--muted)] text-lg">
          No se encontraron proyectos con esa tecnología.
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard project={project} onOpen={onCardClick} />
      ))}
    </div>
  );
};

export default ProjectGrid;
