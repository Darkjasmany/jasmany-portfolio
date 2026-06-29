interface StackData {
  name: string;
  displayName?: string;
  color: string;
  category?: string;
}

// Origen de datos: Tecnologías principales
export const stackData: StackData[] = [
  {
    name: "HTML5",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    category: "frontend",
  },
  { name: "CSS3", color: "bg-blue-500/10 text-blue-500 border-blue-500/20", category: "frontend" },
  {
    name: "javaScript",
    color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    category: "frontend",
  },
  {
    name: "nodeJs",
    displayName: "Node.js",
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    category: "backend",
  },
  {
    name: "express",
    color: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    category: "backend",
  },
  {
    name: "typeScript",
    color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
    category: "frontend",
  },
  { name: "react", color: "bg-blue-500/10 text-blue-500 border-blue-500/20", category: "frontend" },
  {
    name: "astro",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    category: "frontend",
  },
  {
    name: "tailwindcss",
    displayName: "Tailwind CSS",
    color: "bg-teal-500/10 text-teal-500 border-teal-500/20",
    category: "frontend",
  },
  { name: "mysql", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20", category: "bd" },
  {
    name: "postgresql",
    displayName: "PostgreSQL",
    color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    category: "bd",
  },
  {
    name: "mongo",
    displayName: "MongoDB",
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    category: "bd",
  },
  {
    name: "sequelize",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    category: "backend",
  },
  {
    name: "prisma",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    category: "backend",
  },
  {
    name: "mongoose",
    color: "bg-red-300/10 text-red-300 border-red-300/20",
    category: "backend",
  },
  { name: "git", color: "bg-red-500/10 text-red-500 border-red-500/20", category: "devops" },
  {
    name: "github",
    displayName: "GitHub",
    color: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    category: "devops",
  },
  { name: "linux", color: "bg-gray-500/10 text-gray-500 border-gray-500/20", category: "devops" },
  { name: "bash", color: "bg-gray-500/10 text-gray-500 border-gray-500/20", category: "devops" },
  {
    name: "postman",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    category: "devops",
  },
  { name: "docker", color: "bg-sky-500/10 text-sky-500 border-sky-500/20", category: "devops" },
  // { name: "supabase" },
];

// Origen de datos: Características
const tagColorOverrides: Record<string, string> = {
  "API REST": "bg-rose-500/10 text-rose-500 border-rose-500/20",
  "Reconocimiento Facial": "bg-pink-500/10 text-pink-500 border-pink-500/20",
  "API Integration": "bg-purple-500/10 text-purple-500 border-purple-500/20",
  "Web Development": "bg-amber-500/10 text-amber-500 border-amber-500/20",
};

// Mapa de colores unificado para acceso rápido desde el nombre de la tech
// La parte de Record<string, string> es un tipo de TypeScript que significa: "Este objeto va a tener propiedades donde tanto el nombre de la clave (key) como el valor (value) serán cadenas de texto (strings)".
const colorMap: Record<string, string> = {};

// Procesamos el stack principal
for (const item of stackData) {
  colorMap[item.name.toLowerCase()] = item.color;
}

// Procesamos los tags extras
for (const [key, value] of Object.entries(tagColorOverrides)) {
  colorMap[key.toLowerCase()] = value;
}

// Funcíon para obtener color de la tech
export const getTechColor = (tech: string): string | undefined => {
  return colorMap[tech.toLowerCase()];
};
