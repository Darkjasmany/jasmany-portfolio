import type React from "react";
import { useState } from "react";
import type { Project } from "../../data/projectsData";
import FilterButtons from "./FilterButtons";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";

interface ProjectHubProps {
  projects: Project[];
}

const ProjectHub: React.FC<ProjectHubProps> = ({ projects }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Extrae todas las tecnologías únicas y las ordena, eliminando duplicados con Set y luego convirtiendo de nuevo a array con spread operator el cual se ordena con sort() flatMap() para aplanar el array de arrays de tecnologías de cada proyecto. Esto nos da un array de todas las tecnologías utilizadas en los proyectos. Set no es un arrya lo convertimos con ...
  const allTags = [...new Set(projects.flatMap(p => p.technologies))].sort();

  // Filtra proyectos si hay un tag seleccionado
  const filtered = selected ? projects.filter(p => p.technologies.includes(selected)) : projects;

  return (
    <>
      <FilterButtons tags={allTags} selected={selected} onSelect={setSelected} />
      <ProjectGrid projects={filtered} onCardClick={setModalProject} />
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </>
  );
};

export default ProjectHub;
