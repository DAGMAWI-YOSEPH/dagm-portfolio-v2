"use client";

import { motion } from "framer-motion";

const DESKTOP_LINES = [
  "Crafting WordPress Experiences from Addis Ababa",
  "Where technology becomes craft and precision",
  "Exploring possibilities beyond the ordinary",
  "Through websites that breathe and brands that resonate",
  "Building with vision, discipline, and care",
  "From Elementor to fully custom code",
  "Pushing boundaries where design meets function",
  "Every pixel placed with purpose and intent",
  "Collaborating with businesses, brands, and entrepreneurs",
  "Creating digital spaces that earn attention",
];

const MOBILE_LINES = [
  "Crafting WordPress",
  "Experiences from Addis",
  "Where technology becomes",
  "craft and precision",
  "Exploring possibilities",
  "beyond the ordinary",
  "Through websites that breathe",
  "and brands that resonate",
  "Building with vision",
  "and discipline",
  "Every pixel has purpose",
  "Creating spaces that",
  "earn attention",
];

export default function MarqueeSection() {
  return (
    <section
      id="manifesto"
      className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden relative flex items-center justify-center"
    >
      <div className="relative z-10 flex w-full max-w-full flex-col items-center justify-center overflow-hidden">
        {/* Mobile lines */}
        <div className="flex w-full flex-col items-center gap-1 sm:hidden">
          {MOBILE_LINES.map((line, i) => (
            <motion.h2
              key={i}
              className="text-[calc(0.8rem+1.5vw)] leading-[1.1] font-sans font-bold uppercase tracking-tight text-terciary whitespace-nowrap text-center will-change-transform overflow-visible px-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.h2>
          ))}
        </div>

        {/* Desktop lines */}
        <div className="hidden w-full flex-col items-center gap-2 sm:flex md:gap-3 lg:gap-4">
          {DESKTOP_LINES.map((line, i) => (
            <motion.h2
              key={i}
              className="text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-sans font-bold uppercase tracking-tight text-terciary whitespace-nowrap text-center leading-none will-change-transform overflow-visible px-2 md:px-4 lg:px-6 xl:px-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.h2>
          ))}
        </div>
      </div>
    </section>
  );
}
