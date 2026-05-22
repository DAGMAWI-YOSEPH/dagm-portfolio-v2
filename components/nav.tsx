"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
      style={{
        backgroundColor: scrolled ? "oklch(8% 0.008 252 / 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(16% 0.006 252)" : "1px solid transparent",
      }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-14 py-6 transition-all duration-500"
    >
      <a
        href="#"
        className="font-display text-xl font-light tracking-[0.18em] text-snow hover:text-gold transition-colors duration-300"
      >
        DY
      </a>

      <div className="flex items-center gap-8">
        <a
          href="#works"
          className="font-body text-[0.7rem] font-light tracking-[0.22em] uppercase text-ash hover:text-snow transition-colors duration-300"
        >
          Work
        </a>
        <a
          href="#contact"
          className="font-body text-[0.7rem] font-light tracking-[0.22em] uppercase text-ash hover:text-snow transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
