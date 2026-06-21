interface StackData {
  name: string;
  color: string;
}

export const stackData: StackData[] = [
  { name: "HTML5", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
  { name: "CSS3", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  { name: "javaScript", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  { name: "typeScript", color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" },
  { name: "nodejs", color: "bg-green-500/10 text-green-500 border-green-500/20" },
  { name: "react", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  { name: "astro", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
  { name: "tailwindcss", color: "bg-teal-500/10 text-teal-500 border-teal-500/20" },
  { name: "git", color: "bg-red-500/10 text-red-500 border-red-500/20" },
  { name: "mysql", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
  { name: "postgresql", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
  { name: "docker", color: "bg-sky-500/10 text-sky-500 border-sky-500/20" },
  { name: "linux", color: "bg-gray-500/10 text-gray-500 border-gray-500/20" },
  { name: "bash", color: "bg-gray-500/10 text-gray-500 border-gray-500/20" },
  // { name: "supabase" },
];

// Obtener color de la tech
export const getTechColor = (tech: string): string => {
  const found = stackData.find(s => s.color === tech.toLowerCase());
  return found?.color ?? "bg-gray-500/10 text-gray-500 border-gray-500/20";
};
