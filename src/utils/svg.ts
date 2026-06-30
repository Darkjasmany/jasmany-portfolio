const svgModules: Record<string, string> = import.meta.glob("/public/svg/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function getSvgContent(name: string): string | null {
  const path = `/public/svg/${name}.svg`;
  return svgModules[path] ?? null;
}
