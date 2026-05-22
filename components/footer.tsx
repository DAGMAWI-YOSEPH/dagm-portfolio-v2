"use client";

export default function Footer() {
  return (
    <footer id="main-footer" className="fixed w-full bottom-2 z-40">
      <div className="layout-container py-8 flex items-center justify-between">
        <a
          href="#"
          className="text-lg md:text-xl font-black uppercase tracking-tight text-terciary hover:opacity-80 transition-opacity"
        >
          Dagm Y
        </a>
        <a
          href="mailto:dagmawi.yoseph@icloud.com"
          className="text-center font-black uppercase text-terciary hover:text-secondary transition-colors"
        >
          Email Us
        </a>
      </div>
    </footer>
  );
}
