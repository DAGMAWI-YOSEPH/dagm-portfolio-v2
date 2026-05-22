"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const PROJECTS = [
  {
    title: "Selam Studio",
    category: "Brand Website",
    year: "2025",
    color: "rgb(186 181 161)",
  },
  {
    title: "Buna Commerce",
    category: "E-Commerce",
    year: "2025",
    color: "rgb(197 191 170)",
  },
  {
    title: "Habesha Heritage",
    category: "Cultural Platform",
    year: "2024",
    color: "rgb(174 169 149)",
  },
  {
    title: "Nova Ventures",
    category: "Startup Landing",
    year: "2024",
    color: "rgb(207 201 179)",
  },
  {
    title: "Merkato Digital",
    category: "Business Directory",
    year: "2023",
    color: "rgb(164 158 139)",
  },
];

export default function WorksSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 24 },
      },
    },
  });

  return (
    <section
      id="projects"
      className="layout-section-gap layout-container"
    >
      <div className="mx-auto flex flex-col justify-between">
        <h2 className="text-h1-mobile sm:text-h1 mb-4 text-terciary uppercase font-sans font-bold tracking-tight">
          WORKS
        </h2>

        {/* Full-bleed slider */}
        <div className="w-screen relative left-1/2 ml-[-50vw]">
          <div ref={sliderRef} className="keen-slider h-full w-full">
            {PROJECTS.map((project, i) => (
              <div
                key={project.title}
                className={`keen-slider__slide flex flex-col items-end justify-start cursor-grab`}
              >
                <div
                  className="transition-all duration-1000 flex flex-col items-start justify-end relative overflow-hidden aspect-square w-full"
                  style={{
                    backgroundColor: project.color,
                    height: i === 0 ? "100%" : "70%",
                    opacity: i === 0 ? 1 : 0.75,
                  }}
                >
                  {/* Project info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <p className="font-mono text-xs tracking-widest uppercase text-terciary/60 mb-1">
                      {String(i + 1).padStart(2, "0")} — {project.category}
                    </p>
                    <h3 className="font-sans font-bold uppercase tracking-tight text-terciary text-xl sm:text-2xl leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-terciary/50 mt-1">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
