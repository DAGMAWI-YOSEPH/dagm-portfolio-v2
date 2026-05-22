"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    n: "01",
    title: "Precision over decoration",
    body: "Every element serves a purpose. I do not add to impress; I subtract until nothing remains but intention.",
  },
  {
    n: "02",
    title: "Performance is craft",
    body: "A beautiful site that loads slowly is a broken promise. Speed and design are not in opposition; they are the same thing.",
  },
  {
    n: "03",
    title: "The client's vision, realized",
    body: "My aesthetic is a tool, not an identity. What matters is that your visitors feel exactly what you want them to feel.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="px-8 md:px-14 py-24 md:py-40 border-t border-wire"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-5 mb-20"
      >
        <span className="font-body text-[0.65rem] tracking-[0.28em] uppercase text-ash">
          003
        </span>
        <span className="font-body text-[0.65rem] tracking-[0.28em] uppercase text-ash">
          Manifesto
        </span>
      </motion.div>

      <div className="max-w-5xl">
        <div className="overflow-hidden mb-20">
          <motion.p
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.15, ease }}
            className="font-display font-thin text-snow leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 6.5rem)" }}
          >
            I build websites that earn their place on the screen.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="font-body font-light text-ash max-w-2xl mb-20"
          style={{ fontSize: "1rem", lineHeight: "1.85" }}
        >
          I am a WordPress developer who believes the space between elements
          is as important as the elements themselves. Every project is an
          exercise in restraint: finding the exact minimum that communicates
          the maximum. Craft is not about complexity. It is about knowing
          what to leave out.
        </motion.p>

        <div className="border-t border-wire">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.45 + i * 0.11, ease }}
              className="flex gap-8 md:gap-16 py-8 border-b border-wire"
            >
              <span className="font-body text-[0.65rem] tracking-[0.15em] text-ash-dim pt-0.5 shrink-0">
                {p.n}
              </span>
              <div>
                <h3
                  className="font-body font-medium tracking-[0.1em] uppercase text-gold mb-3"
                  style={{ fontSize: "0.7rem" }}
                >
                  {p.title}
                </h3>
                <p
                  className="font-body font-light text-ash max-w-xl"
                  style={{ fontSize: "0.875rem", lineHeight: "1.85" }}
                >
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
