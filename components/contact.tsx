"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
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
          004
        </span>
        <span className="font-body text-[0.65rem] tracking-[0.28em] uppercase text-ash">
          Contact
        </span>
      </motion.div>

      {/* CTA headline */}
      <div className="overflow-hidden mb-4">
        <motion.p
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.15, ease }}
          className="font-display font-thin text-snow leading-[0.9] tracking-[-0.025em]"
          style={{ fontSize: "clamp(3.5rem, 9vw, 12rem)" }}
        >
          Let&apos;s build
        </motion.p>
      </div>
      <div className="overflow-hidden mb-20">
        <motion.p
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.25, ease }}
          className="font-display font-thin text-gold leading-[0.9] tracking-[-0.025em]"
          style={{ fontSize: "clamp(3.5rem, 9vw, 12rem)" }}
        >
          something.
        </motion.p>
      </div>

      {/* Contact details */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.45, ease }}
        className="flex flex-col md:flex-row gap-10 md:gap-20 mb-28"
      >
        <div>
          <p
            className="font-body font-light tracking-[0.2em] uppercase text-ash mb-2.5"
            style={{ fontSize: "0.65rem" }}
          >
            Email
          </p>
          <a
            href="mailto:dagmawi.yoseph@icloud.com"
            className="font-body font-light text-snow hover:text-gold transition-colors duration-300"
            style={{ fontSize: "clamp(0.875rem, 1.2vw, 1.05rem)" }}
          >
            dagmawi.yoseph@icloud.com
          </a>
        </div>
        <div>
          <p
            className="font-body font-light tracking-[0.2em] uppercase text-ash mb-2.5"
            style={{ fontSize: "0.65rem" }}
          >
            Phone
          </p>
          <a
            href="tel:+251911129513"
            className="font-body font-light text-snow hover:text-gold transition-colors duration-300"
            style={{ fontSize: "clamp(0.875rem, 1.2vw, 1.05rem)" }}
          >
            +251 911 129 513
          </a>
        </div>
        <div>
          <p
            className="font-body font-light tracking-[0.2em] uppercase text-ash mb-2.5"
            style={{ fontSize: "0.65rem" }}
          >
            Availability
          </p>
          <span
            className="font-body font-light text-snow"
            style={{ fontSize: "clamp(0.875rem, 1.2vw, 1.05rem)" }}
          >
            Open to new projects
          </span>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="border-t border-wire pt-8 flex justify-between items-center">
        <span
          className="font-body font-light text-ash-dim"
          style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
        >
          &copy; 2026 Dagm Y
        </span>
        <span
          className="font-body font-light text-ash-dim"
          style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
        >
          Addis Ababa, Ethiopia
        </span>
      </div>
    </section>
  );
}
