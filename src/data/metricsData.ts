import { projects } from "./projectsData";

export interface Metric {
  value: number;
  suffix: string;
  label: string;
}

const productionProjects = projects!.filter(project => project.production).length;

export const metricsData: Metric[] = [
  {
    value: 10,
    suffix: "+",
    label: "Años de experiencia",
  },
  {
    value: productionProjects,
    suffix: "+",
    label: "Sistemas en producción",
  },
  {
    value: projects.length,
    suffix: "+",
    label: "Proyectos desarrollados",
  },
  {
    value: 2023,
    suffix: "",
    label: "Desarrollando software profesional",
  },
];
