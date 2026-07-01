import { projects } from "./projectsData";

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

const projectsNumber = projects;

export const metricData: Metric[] = [
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: Number(projectsNumber.length), suffix: "+", label: "Proyectos entregados" },
  { value: 8, suffix: "+", label: "Sistemas digitalizados" },
  { value: 100, suffix: "%", label: "Compromiso y calidad" },
];
