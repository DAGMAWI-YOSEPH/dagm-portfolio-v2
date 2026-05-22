"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const x = useSpring(rawX, { stiffness: 500, damping: 40, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      const w = el?.offsetWidth ?? 88;
      const h = el?.offsetHeight ?? 36;
      rawX.set(e.clientX - w / 2);
      rawY.set(e.clientY - h / 2);
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY, visible]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="fixed top-0 left-0 z-[9998] pointer-events-none hidden lg:flex items-center justify-center"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div
        className="flex flex-row items-center justify-center gap-1.5 px-3 py-2 border border-terciary bg-surface/80 backdrop-blur-md overflow-hidden"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="text-terciary"
          height="14"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0 6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
        <p className="uppercase font-mono font-bold text-xs text-terciary text-nowrap w-[2.1rem] text-center">
          drag
        </p>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="text-terciary"
          height="14"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </div>
    </motion.div>
  );
}
