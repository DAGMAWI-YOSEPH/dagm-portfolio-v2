"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onDone: () => void;
}

export default function Preloader({ onDone }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const tick = () => {
      const step = Math.floor(Math.random() * 5) + 2;
      current = Math.min(current + step, 100);
      setCount(current);
      if (current < 100) {
        setTimeout(tick, Math.random() * 40 + 20);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onDone, 900);
        }, 300);
      }
    };
    const t = setTimeout(tick, 300);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="preloader"
          exit={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-primary z-[51] overflow-hidden cursor-wait p-8 lg:flex-row"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          {/* Logo mark center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden text-terciary"
            style={{ width: 60, height: 60 }}
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: exiting ? "-66.66%" : 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col"
              style={{ width: 60 }}
            >
              {[0, 1, 2].map((i) => (
                <svg
                  key={i}
                  aria-hidden="true"
                  width="60"
                  height="60"
                  viewBox="0 0 1080 1080"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block", flexShrink: 0 }}
                >
                  <rect x="0" y="0" width="1080" height="1080" fill="none" />
                  <text
                    x="540"
                    y="620"
                    fontFamily="var(--font-newsreader), Georgia, serif"
                    fontWeight="700"
                    fontSize="680"
                    textAnchor="middle"
                    fill="currentColor"
                    letterSpacing="-20"
                  >
                    DY
                  </text>
                </svg>
              ))}
            </motion.div>
          </motion.div>

          {/* Copy text (appears after logo) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: count > 30 ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:w-1/2 text-terciary"
          >
            <div className="flex flex-1">
              <p className="font-mono text-xs tracking-wide w-full lg:w-[65%] leading-relaxed">
                Precise, crafted WordPress experiences shaped by intention and
                care.
              </p>
            </div>
            <div className="flex flex-1 mt-8 sm:mt-0">
              <p className="font-mono text-xs tracking-wide w-full lg:w-[50%] leading-relaxed">
                Built with the discipline of traditional craftsmanship, applied
                to contemporary digital work.
              </p>
            </div>
          </motion.div>

          {/* Counter */}
          <div className="absolute bottom-8 left-8 lg:bottom-auto lg:left-auto lg:right-8 text-terciary flex items-center gap-1 text-sm font-mono">
            <span>{String(count).padStart(2, "0")}</span>
            <span>%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
