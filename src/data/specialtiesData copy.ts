interface SpecialtiesData {
  title: string;
  description: string;
  icon: string;
}

export const specialtiesData: SpecialtiesData[] = [
  {
    title: "Full Stack",
    description:
      "Node.js + React + TypeScript + PostgreSQL. Aplicaciones web completas, APIs REST y frontend moderno de principio a fin.",
    icon: "dev",
  },
  {
    title: "Automatización",
    description:
      "Sistemas que eliminan procesos manuales. Gestión documental (DMS), digitalización de trámites y workflows administrativos.",
    icon: "bolt",
  },
  {
    title: "Infraestructura",
    description:
      "Proxmox, Docker, VPN, Linux. Ambientes virtualizados, conectividad segura y administración de servidores.",
    icon: "computer-monitor",
  },
  {
    title: "Base de Datos",
    description:
      "MySQL, PostgreSQL, optimización de consultas. Integración con el Banco Central (BCE) y seguridad SSL.",
    icon: "database-server",
  },
];
