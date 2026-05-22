"use client";

import { motion } from "framer-motion";

const textSize =
  "text-[calc(0.8rem+1.5vw)] sm:text-[calc(0.8rem+1.8vw)] md:text-[calc(0.4rem+2vw)]";
const textStyle = `text-center font-bold font-sans uppercase tracking-tight leading-[1.1] text-terciary ${textSize}`;
const linkStyle = `${textStyle} underline decoration-[4px] sm:decoration-[5px] md:decoration-[6px] hover:text-secondary hover:no-underline transition-colors block`;
const labelStyle =
  "text-center uppercase text-sm md:text-base font-mono tracking-widest pb-4 text-terciary/60";

const ease = [0.16, 1, 0.3, 1] as const;

function Section({
  label,
  children,
  id,
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  id?: string;
  delay?: number;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease }}
      className="mb-12 sm:mb-16 md:mb-20"
    >
      <aside className={labelStyle}>{label}</aside>
      {children}
    </motion.div>
  );
}

export default function Manifesto() {
  return (
    <main className="bg-primary min-h-screen pt-32 sm:pt-40 md:pt-48 pb-48 sm:pb-56 md:pb-64">
      <section className="layout-container">
        <div className="text-center max-w-full md:max-w-[calc(100%-16rem)] lg:max-w-[calc(100%-24rem)] xl:max-w-[calc(100%-32rem)] mx-auto px-4 md:px-0">

          {/* Our Story */}
          <Section label="My Story">
            <p className={textStyle}>
              From the very beginning, I sought to create digital spaces where
              every detail matters. I operate as a WordPress developer in Addis
              Ababa — a one-person atelier where craft meets technology. Working
              closely with businesses, brands, and entrepreneurs, I approach
              each project with the precision and care of traditional
              craftsmanship, applied to contemporary digital work.
            </p>
          </Section>

          {/* Capabilities */}
          <Section label="My Capabilities" id="work">
            <p className={textStyle}>
              WordPress Development, Elementor, WooCommerce, Custom Themes,
              Landing Pages, Business Websites, Speed Optimization, SEO Setup,
              Website Redesign, UI/UX Implementation
            </p>
          </Section>

          {/* Selected Works */}
          <Section label="Selected Works">
            <div className="flex flex-col gap-y-[1rem] items-center">
              {[
                "Selam Studio",
                "Buna Commerce",
                "Habesha Heritage",
                "Nova Ventures",
                "Merkato Digital",
              ].map((name) => (
                <span key={name} className={textStyle}>
                  {name}
                </span>
              ))}
            </div>
          </Section>

          {/* Get in Touch */}
          <Section label="Get in Touch" id="contact">
            <div className="flex flex-col gap-y-[1rem] items-center">
              <a
                href="mailto:dagmawi.yoseph@icloud.com"
                className={linkStyle}
              >
                Email Us
              </a>
              <a
                href="mailto:dagmawi.yoseph@icloud.com?subject=Book%20a%20call"
                className={linkStyle}
              >
                Book a Call
              </a>
              <a
                href="tel:+251911129513"
                className={linkStyle}
              >
                +251 911 129 513
              </a>
            </div>
          </Section>

        </div>
      </section>
    </main>
  );
}
