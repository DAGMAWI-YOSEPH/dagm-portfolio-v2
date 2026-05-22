"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: "01",
    name: "Selam Studio",
    category: "Brand Website",
    tech: "WordPress + Elementor",
    year: "2025",
  },
  {
    id: "02",
    name: "Buna Commerce",
    category: "E-Commerce",
    tech: "WooCommerce",
    year: "2025",
  },
  {
    id: "03",
    name: "Habesha Heritage",
    category: "Cultural Platform",
    tech: "WordPress",
    year: "2024",
  },
  {
    id: "04",
    name: "Nova Ventures",
    category: "Startup Landing",
    tech: "WordPress + Elementor",
    year: "2024",
  },
  {
    id: "05",
    name: "Merkato Digital",
    category: "Business Directory",
    tech: "WordPress",
    year: "2023",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function Row({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.08, ease }}
      className="group flex items-baseline gap-5 md:gap-8 py-5 md:py-7 border-b border-wire hover:bg-raised transition-colors duration-300 cursor-default"
    >
      <span className="font-body text-[0.65rem] tracking-[0.15em] text-ash-dim w-5 shrink-0">
        {project.id}
      </span>

      <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1.5 md:gap-4">
        <span
          className="font-display font-light text-snow tracking-tight group-hover:text-gold transition-colors duration-300"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
        >
          {project.name}
        </span>

        <div className="flex items-center gap-5 md:gap-8 shrink-0">
          <span className="hidden md:block font-body text-[0.65rem] tracking-[0.18em] uppercase text-ash">
            {project.category}
          </span>
          <span className="hidden md:block font-body text-[0.65rem] tracking-[0.18em] uppercase text-ash">
            {project.tech}
          </span>
          <span className="font-body text-[0.65rem] tracking-[0.12em] text-ash-dim">
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Works() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="works" className="px-8 md:px-14 py-24 md:py-40 border-t border-wire">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
        className="flex items-center justify-between mb-14"
      >
        <div className="flex items-center gap-5">
          <span className="font-body text-[0.65rem] tracking-[0.28em] uppercase text-ash">
            002
          </span>
          <span className="font-body text-[0.65rem] tracking-[0.28em] uppercase text-ash">
            Selected Works
          </span>
        </div>
        <span className="font-body text-[0.65rem] tracking-[0.15em] text-ash-dim">
          {projects.length} projects
        </span>
      </motion.div>

      <div className="border-t border-wire">
        {projects.map((p, i) => (
          <Row key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
