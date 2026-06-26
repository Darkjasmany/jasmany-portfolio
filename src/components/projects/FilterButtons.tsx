import type React from "react";
import { getTechColor } from "../../data/stackData";

interface FilterButtonsProps {
  tags: string[];
  selected: string[];
  toggleTech: (tag: string) => void;
  clearFilters: () => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  tags,
  selected,
  toggleTech,
  clearFilters,
}) => {
  return (
    <div
      className="flex 
        flex-wrap 
        gap-2 
        my-6 "
    >
      {/* Botón "Todas" */}
      <button
        onClick={clearFilters}
        className={`px-4 
          py-1.5 
          text-sm 
          font-semibold 
          rounded-full 
          border 
          transition-all 
          duration-200 
          cursor-pointer
          ${
            selected.length === 0
              ? "bg-[var(--accent)] text-white border-[var(--accent)]"
              : "bg-[var(--card)] text-[var(--text)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          }`}
      >
        Todas
      </button>

      {/* Botones por cada tecnología */}
      {tags.map(tag => {
        // Verificamos si este botón está dentro del arreglo de seleccionados
        const isSelected = selected.includes(tag);

        // Extrae SOLO la clase border-color del string de color
        const color = getTechColor(tag);
        const borderColor = color
          ? color
              .split(" ")
              .filter(c => c.startsWith("border-") || c.startsWith("bg-"))
              .join(" ")
          : "border-[var(--accent)]";

        return (
          <button
            key={tag}
            onClick={() => toggleTech(tag)}
            className={`px-4 
              py-1.5 
              text-sm 
              font-semibold 
              rounded-full 
              transition-all 
              duration-200 
              cursor-pointer ${
                isSelected
                  ? `bg-[var(--accent)] text-white border ${borderColor}`
                  : `bg-[var(--card)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]`
              }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
