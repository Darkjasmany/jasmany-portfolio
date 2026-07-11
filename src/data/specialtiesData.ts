export interface Specialties {
  category: string;
  title: string;
  icon: string;
  description: string;
  longDescription: string;
}

export interface Skill {
  title: string;
  description: string;
  path: string;
}

export const specialtiesData: Specialties[] = [
  {
    category: "Desarrollo",
    title: "Full Stack",
    icon: "development",
    description: "Aplicaciones web modernas de principio a fin.",
    longDescription:
      "Aplicaciones web modernas de principio a fin, desde la arquitectura backend hasta interfaces intuitivas y escalables.",
  },
  {
    category: "Procesos",
    title: "Automatización",
    icon: "automation",
    description: "Digitalización de procesos y workflows empresariales.",
    longDescription:
      "Digitalización de procesos y workflows empresariales para reducir tareas manuales y mejorar la eficiencia operativa.",
  },
  {
    category: "DevOps",
    title: "Infraestructura",
    icon: "infrastructure",
    description: "Proxmos, Docker, Linux, VPN y administración de servidores.",
    longDescription:
      "Docker, Linux, VPN y administración de servidores enfocados en estabilidad, seguridad y despliegue continuo.",
  },
  {
    category: "Data",
    title: "Bases de Datos",
    icon: "database",
    description: "Optimización e integración segura de datos.",
    longDescription:
      "Optimización e integración segura de datos con foco en rendimiento, integridad y escalabilidad.",
  },
];

export const skills: Skill[] = [
  {
    title: "Liderazgo",
    description: "Coordinación de equipos técnicos y dirección de departamento.",
    path: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  },
  {
    title: "Resolución de Problemas",
    description: "Capacidad analítica para diagnosticar y resolver bajo presión.",
    path: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 0 2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128m0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42",
  },
  {
    title: "Aprendizaje Autodidacta",
    description: "Actualización constante en nuevas tecnologías y tendencias.",
    path: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
  {
    title: "Trabajo en Equipo",
    description: "Colaboración interdisciplinaria y soporte a otros GADs.",
    path: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  },
  {
    title: "Adaptabilidad",
    description: "Experiencia multisectorial: desarrollo, infraestructura, soporte.",
    path: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z",
  },
  {
    title: "Comunicación Efectiva",
    description: "Redacción técnica clara y comunicación con equipos multidisciplinarios.",
    path: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  },
];
