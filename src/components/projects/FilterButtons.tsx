import type React from "react";
import { getTechColor } from "../../data/stackData";

interface FilterButtonsProps {
  tags: string[];
  selected: string | null;
  onSelect: (tag: string | null) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ tags, selected, onSelect }) => {
  return (
    <div
      className="flex 
        flex-wrap 
        gap-2 
        my-10 "
    >
      {/* Botón "Todas" */}
      <button
        onClick={() => onSelect(null)}
        className={`px-4 
          py-1.5 
          text-sm 
          font-semibold 
          rounded-full 
          border 
          transition-all 
          duration-200 
          ${selected === null ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "bg-[var(--card)] text-[var(--text)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"}`}
      >
        Todas
      </button>

      {tags.map(tag => {
        const color = getTechColor(tag);
        // Extrae SOLO la clase border-color del string de color
        const borderColor = color
          ? color
              .split(" ")
              .filter(c => c.startsWith("bg-"))
              .join(" ")
          : "border-[var(--accent)]";

        return (
          <button
            key={tag}
            onClick={() => onSelect(tag)}
            className={`px-4 
              py-1.5 
              text-sm 
              font-semibold 
              rounded-full 
              transition-all 
              duration-200 
              cursor-pointer ${
                selected === tag
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
