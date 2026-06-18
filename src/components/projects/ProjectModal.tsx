import type React from "react";
import { useCallback, useEffect, useState } from "react";
import type { Project } from "../../data/projectsData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // || (OR): Evalúa el lado derecho si el lado izquierdo es Falsy. Los valores falsy incluyen: null, undefined, false, 0, "" (string vacío) y NaN.

  // ?? (Nullish): Evalúa el lado derecho únicamente si el lado izquierdo es null o undefined.
  const [currentIndex, setCurrentIndex] = useState(0);
  const allImages = project ? [project.image, ...(project.images ?? [])] : [];

  // Avanzar imagen
  const next = useCallback(() => {
    setCurrentIndex(i => (i + 1) % allImages.length);
  }, [allImages.length]);

  const prev1 = () => {
    setCurrentIndex(i => (i - 1 + allImages.length) % allImages.length);
  };

  const prev = useCallback(() => {
    setCurrentIndex(i => (i - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  // 1. Manejo del Body Scroll, Navbar y Tecla ESC
  useEffect(() => {
    if (!project) return;
    setCurrentIndex(0);

    const navbar = document.getElementById("navbar");
    navbar?.classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "right") next();
      if (e.key === "left") prev();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      navbar?.classList.remove("opacity-0", "pointer-events-none");
    };
  }, [project, onClose, next]);

  return <div>ProjectModal</div>;
};

export default ProjectModal;
