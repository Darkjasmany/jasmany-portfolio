import type React from "react";
import { useState } from "react";
import type { Project } from "../../data/projectsData";
import FilterButtons from "./FilterButtons";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";

interface ProjectsGalleryProps {
  projects: Project[];
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ projects }) => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Extrae todas las tecnologías únicas y las ordena, eliminando duplicados con Set y luego convirtiendo de nuevo a array con spread operator el cual se ordena con sort() flatMap() para aplanar el array de arrays de tecnologías de cada proyecto. Esto nos da un array de todas las tecnologías utilizadas en los proyectos. Set no es un arrya lo convertimos con ...
  const allTags = [...new Set(projects.flatMap(p => p.technologies))].sort();

  // Filtra proyectos si hay un tag seleccionado
  const filtered =
    selectedTechs.length > 0
      ? projects.filter(p => selectedTechs.every(tech => p.technologies.includes(tech)))
      : projects;

  // Agrega o quita una tecnología del array
  const toggleTech = (tech: string) => {
    setSelectedTechs(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  // Limpia el filtro para el botón "Todas"
  const clearFilters = () => setSelectedTechs([]);

  return (
    <>
      <FilterButtons
        tags={allTags}
        selected={selectedTechs}
        toggleTech={toggleTech}
        clearFilters={clearFilters}
      />

      <p className="mb-8 text-sm font-medium text-[var(--hero-desc)]">
        Mostrando {filtered.length} de {projects.length} proyectos
        {selectedTechs.length > 0 && (
          <span className="text-[var(--accent)] font-semibold">
            {" "}
            · Filtrado por: {selectedTechs.join(", ")}
          </span>
        )}
      </p>
      <ProjectGrid projects={filtered} onCardClick={setModalProject} />
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </>
  );
};

export default ProjectsGallery;
