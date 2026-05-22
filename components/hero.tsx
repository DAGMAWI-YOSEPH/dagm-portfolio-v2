"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative h-[100svh] flex flex-col justify-between px-8 md:px-14 pt-8 pb-10 md:pb-12 overflow-hidden">
      {/* Top row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="pt-16 flex justify-between items-center border-b border-wire pb-5"
      >
        <span className="font-body text-[0.65rem] tracking-[0.28em] uppercase text-ash">
          001
        </span>
        <span className="font-body text-[0.65rem] tracking-[0.28em] uppercase text-ash">
          Portfolio
        </span>
      </motion.div>

      {/* Main name block */}
      <div className="flex-1 flex flex-col justify-center -mt-4">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease }}
            className="font-display font-thin text-snow leading-[0.88] tracking-[-0.025em] select-none"
            style={{ fontSize: "clamp(5.5rem, 16vw, 19rem)" }}
          >
            DAGM
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.42, ease }}
            className="flex items-baseline gap-4 md:gap-6"
          >
            <h1
              className="font-display font-thin text-snow leading-[0.88] tracking-[-0.025em] select-none"
              style={{ fontSize: "clamp(5.5rem, 16vw, 19rem)" }}
            >
              Y
            </h1>
            <span
              className="font-display font-thin text-gold leading-[0.88] tracking-[-0.025em]"
              style={{ fontSize: "clamp(5.5rem, 16vw, 19rem)" }}
            >
              .
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="flex justify-between items-end border-t border-wire pt-5"
      >
        <div className="space-y-1.5">
          <p className="font-body text-[0.65rem] font-light tracking-[0.22em] uppercase text-snow">
            WordPress Developer
          </p>
          <p className="font-body text-[0.65rem] font-light tracking-[0.15em] text-ash">
            Addis Ababa, Ethiopia
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-ash-dim block">
              Scroll
            </span>
            <div className="w-px h-10 bg-wire" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
