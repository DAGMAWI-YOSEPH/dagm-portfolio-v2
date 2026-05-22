"use client";

import { motion } from "framer-motion";

const navLinks = [
  { num: "001", label: "Home", href: "#" },
  { num: "002", label: "Work", href: "#work" },
  { num: "003", label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <>
      {/* Desktop nav */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav className="hidden sm:flex w-full layout-container py-5 relative items-center justify-between">
          {/* Logo left */}
          <div className="text-terciary z-10">
            <a
              href="#"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
              aria-label="Dagm Y"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <svg
                  aria-hidden="true"
                  width="100%"
                  height="100%"
                  viewBox="0 0 1080 1080"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <g className="logo-strip-left">
                    <path d="M450,540c-3,0 90,-270.25 90,-270.25l-540,0l0,270.25l450,0Z" />
                    <path d="M450,1080.5c-3,0 90,-270.25 90,-270.25l-540,0l0,270.25l450,0Z" />
                  </g>
                  <g className="logo-strip-right">
                    <path d="M630,-0.5c3,0 -90,270.25 -90,270.25l540,0l0,-270.25l-450,-0Z" />
                    <path d="M630,540c3,0 -90,270.25 -90,270.25l540,0l0,-270.25l-450,-0Z" />
                    <path d="M630,1080.5c3,0 -90,270.25 -90,270.25l540,0l0,-270.25l-450,0Z" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col justify-between h-8 md:h-10 text-[1rem] md:text-[1.2rem] font-black uppercase tracking-tight leading-[1]">
                <span className="translate-y-[-10%]">Dagm</span>
                <span className="translate-y-[10%]">Yoseph</span>
              </div>
            </a>
          </div>

          {/* Center pill nav */}
          <div className="backdrop-blur-sm font-mono flex items-center justify-center gap-6 border border-terciary w-fit px-4 py-2 z-10 absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-6 md:gap-8">
              {navLinks.map((link) => (
                <li key={link.num}>
                  <a
                    href={link.href}
                    className="text-xs md:text-sm uppercase tracking-widest font-semibold opacity-70 hover:opacity-100 transition-opacity text-terciary"
                  >
                    <span className="font-mono">{link.num}/</span>
                    <span className="font-sans">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right box */}
          <div className="backdrop-blur-sm flex items-center justify-center gap-4 border border-terciary w-fit px-4 py-2 z-10">
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="mailto:dagmawi.yoseph@icloud.com"
                  className="text-xs md:text-sm uppercase tracking-widest font-semibold opacity-70 hover:opacity-100 transition-opacity text-terciary font-mono"
                >
                  Email
                </a>
              </li>
              <li className="h-4 w-px bg-current opacity-80" />
              <li>
                <a
                  href="tel:+251911129513"
                  className="text-xs md:text-sm uppercase tracking-widest font-semibold opacity-70 hover:opacity-100 transition-opacity text-terciary font-mono"
                >
                  +251
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile nav */}
        <nav className="flex sm:hidden layout-container py-5 relative z-50 items-center justify-between text-terciary">
          <a href="#" aria-label="Dagm Y" className="hover:opacity-80 transition-opacity">
            <div className="w-10 h-10">
              <svg
                aria-hidden="true"
                width="100%"
                height="100%"
                viewBox="0 0 1080 1080"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <g className="logo-strip-left">
                  <path d="M450,540c-3,0 90,-270.25 90,-270.25l-540,0l0,270.25l450,0Z" />
                  <path d="M450,1080.5c-3,0 90,-270.25 90,-270.25l-540,0l0,270.25l450,0Z" />
                </g>
                <g className="logo-strip-right">
                  <path d="M630,-0.5c3,0 -90,270.25 -90,270.25l540,0l0,-270.25l-450,-0Z" />
                  <path d="M630,540c3,0 -90,270.25 -90,270.25l540,0l0,-270.25l-450,-0Z" />
                  <path d="M630,1080.5c3,0 -90,270.25 -90,270.25l540,0l0,-270.25l-450,0Z" />
                </g>
              </svg>
            </div>
          </a>
          <a
            href="mailto:dagmawi.yoseph@icloud.com"
            className="text-xs font-mono uppercase tracking-widest border border-current px-3 py-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            Email
          </a>
        </nav>
      </motion.header>
    </>
  );
}
