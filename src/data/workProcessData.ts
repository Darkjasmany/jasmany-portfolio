export interface WorkProcessStep {
  number: string;
  title: string;
  description: string;
}

export const workProcessSteps: WorkProcessStep[] = [
  {
    number: "01",
    title: "Requerimientos",
    description:
      "Análisis profundo de necesidades, identificación de objetivos y definición de alcance técnico.",
  },
  {
    number: "02",
    title: "Arquitectura",
    description:
      "Diseño de la solución: stack tecnológico, modelado de datos, flujos del sistema y prototipado.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Implementación iterativa con code reviews, tests y despliegues continuos.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Despliegue en producción, documentación técnica y capacitación del equipo.",
  },
];
