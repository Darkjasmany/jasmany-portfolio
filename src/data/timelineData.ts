export interface TimelineEntry {
  title: string;
  company?: string;
  period: string;
  description?: string;
  bullets: string[];
}

export const timelineData: TimelineEntry[] = [
  {
    title: "Analista de Sistemas / Full Stack",
    company: "GAD Municipal del cantón Naranjal",
    period: "Abril 2014 — Actualidad",
    bullets: [
      "Liderazgo técnico del departamento, coordinación de equipos y asesoría estratégica en decisiones tecnológicas.",
      "Desarrollo de Software: Sistema de Gestión Documental (DMS) con Node.js, React y PostgreSQL. Desarrollo de Cash Management para integración con Banco de Pichincha y sistemas de ligas municipales.",
      "Infraestructura: Implementación de VPNs, administración de entornos virtualizados en Proxmox y control de asistencia (BioTime).",
      "Seguridad e integraciones: Gestión de certificados SSL, integración de pagos con el BCE y optimización de bases de datos.",
    ],
  },
  {
    title: "Formación Continua",
    company: "Cursos Online",
    period: "Actualidad",
    bullets: [
      "React + TypeScript, JavaScript Moderno, Git + GitHub, CSS Grid + Flexbox, Bootstrap 5, Docker, Desarrollo Web Completo.",
    ],
    description: "",
  },
  {
    title: "Ingeniería en Sistemas Computacionales",
    company: "Universidad de Guayaquil - Facultad de Ciencias Matemáticas y Físicas",
    period: "Graduado",
    bullets: [],
    description: "Registro SENESCYT: 1006-2017-1872471.",
  },
];
