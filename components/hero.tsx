"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WORDS = [
  "wordpress", "design", "craft", "precision", "web",
  "speed", "elementor", "woocommerce", "addis", "ethiopia",
  "performance", "responsive", "branding", "interface",
  "digital", "development", "creativity", "quality",
];

interface WordPos {
  top: number;
  left: number;
  delay: number;
  duration: number;
  yRange: number;
}

export default function Hero() {
  const [positions, setPositions] = useState<WordPos[]>([]);

  useEffect(() => {
    setPositions(
      WORDS.map(() => ({
        top: Math.random() * 78 + 5,
        left: Math.random() * 78 + 5,
        delay: Math.random() * 4,
        duration: Math.random() * 4 + 4,
        yRange: Math.random() * 18 + 8,
      }))
    );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-terciary">
      {/* Floating italic words */}
      {positions.map((pos, i) => (
        <motion.div
          key={WORDS[i]}
          className="absolute font-sans italic text-base sm:text-lg md:text-xl opacity-80 z-10 cursor-pointer select-none"
          style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8],
            y: [0, -pos.yRange, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: pos.delay },
            y: {
              duration: pos.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: pos.delay,
            },
          }}
        >
          {WORDS[i]}
        </motion.div>
      ))}

      {/* Centered wordmark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          className="w-[80vw] max-w-[900px] cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ aspectRatio: "1600/240" }}
        >
          <svg
            viewBox="0 0 1600 240"
            preserveAspectRatio="xMidYMid meet"
            className="h-full w-full"
            aria-hidden="true"
          >
            <text
              x="800"
              y="185"
              textAnchor="middle"
              fontFamily="var(--font-newsreader), Georgia, serif"
              fontWeight="700"
              fontSize="260"
              fill="#535352"
              letterSpacing="-4"
            >
              DAGM Y
            </text>
          </svg>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 w-full text-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className="uppercase text-[10px] sm:text-xs tracking-widest opacity-50 font-mono">
          Scroll to Explore
        </span>
      </motion.div>
    </div>
  );
}
