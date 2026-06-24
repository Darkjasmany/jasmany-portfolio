import type React from "react";
import { useState } from "react";
import type { Project } from "../../data/projectsData";

interface ProjectHubProps {
  projects: Project[];
}

const ProjectHub: React.FC<ProjectHubProps> = ({ projects }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Extrae todas las tecnologías únicas y las ordena, eliminando duplicados con Set y luego convirtiendo de nuevo a array con spread operator el cual se ordena con sort() flatMap() para aplanar el array de arrays de tecnologías de cada proyecto. Esto nos da un array de todas las tecnologías utilizadas en los proyectos. Set no es un arrya lo convertimos con ...
  const allTags = [...new Set(projects.flatMap(p => p.technologies))].sort();

  console.log(allTags);

  return <div>ProjectHub</div>;
};

export default ProjectHub;
