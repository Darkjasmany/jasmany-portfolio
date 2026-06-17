import { useEffect, useRef, useState } from "react";

import { projects, type Project } from "../../data/projectsData";

import CarouselDots from "./CarouselDots";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const ProjectsCarousel = () => {
  const featuredProjects = projects.filter(project => project.featured);

  const [current, setCurrent] = useState(0);

  const [modalProject, setModalProject] = useState<Project | null>(null);

  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setCardsPerView(3);
      } else if (width >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();

    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, featuredProjects.length - cardsPerView);

  const next = () => {
    setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // ----------------------------
  // DRAG / SWIPE
  // ----------------------------

  const startX = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const diff = e.clientX - startX.current;

    if (diff > 70) {
      prev();
    }

    if (diff < -70) {
      next();
    }
  };

  return (
    <>
      <div className="relative">
        {/* Flecha izquierda */}
        {featuredProjects.length > cardsPerView && (
          <button
            onClick={prev}
            aria-label="Proyecto anterior"
            className="
              hidden lg:flex
              absolute
              left-0
              top-1/2
              -translate-x-6
              -translate-y-1/2
              z-20
              w-12
              h-12
              items-center
              justify-center
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              shadow-md
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
              hover:scale-105
            "
          >
            ←
          </button>
        )}

        {/* Flecha derecha */}
        {featuredProjects.length > cardsPerView && (
          <button
            onClick={next}
            aria-label="Proyecto siguiente"
            className="
              hidden lg:flex
              absolute
              right-0
              top-1/2
              translate-x-6
              -translate-y-1/2
              z-20
              w-12
              h-12
              items-center
              justify-center
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              shadow-md
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
              hover:scale-105
            "
          >
            →
          </button>
        )}

        <div
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          className="overflow-hidden"
        >
          <div
            className="
              flex
              gap-6
              transition-transform
              duration-500
              ease-out
              p-1
            "
            style={{
              transform: `translateX(-${current * (100 / cardsPerView)}%)`,
            }}
          >
            {featuredProjects.map(project => (
              <div
                key={project.slug}
                className="
                  w-full
                  md:w-[calc(50%-12px)]
                  xl:w-[calc(33.333%-16px)]
                  shrink-0
                "
              >
                <ProjectCard project={project} onOpen={setModalProject} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}

        <CarouselDots total={maxIndex + 1} current={current} onChange={setCurrent} />

        {/* Navegación móvil */}

        <div className="flex md:hidden justify-between mt-6 gap-3">
          <button
            onClick={prev}
            className="
              flex-1
              py-3
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              text-[var(--hero-text)]
              font-medium
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
            "
          >
            ← Anterior
          </button>

          <button
            onClick={next}
            className="
              flex-1
              py-3
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--card)]
              text-[var(--hero-text)]
              font-medium
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
            "
          >
            Siguiente →
          </button>
        </div>

        {/* Contador */}
        <div
          className="
            mt-6
            text-center
            text-sm
            text-[var(--hero-desc)]
          "
        >
          {String(current + 1).padStart(2, "0")}
          {" / "}
          {String(maxIndex + 1).padStart(2, "0")}
        </div>
      </div>

      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </>
  );
};

export default ProjectsCarousel;
