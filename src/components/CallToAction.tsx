"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

export default function CallToAction() {
  const reduced = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "0px" });
  const isButtonInView = useInView(buttonRef, { once: true, margin: "0px" });

  const heading = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  } as const;

  const button = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  } as const;

  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="w-full pt-1 pb-28 flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: "#EDFFFA" }}
      role="region"
    >
      <motion.h2
        ref={headingRef}
        id="cta-title"
        variants={reduced ? {} : heading}
        initial={isHeadingInView ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px 0% -100px 0%" }}
        className="text-3xl sm:text-4xl md:text-5xl font-figtree font-bold leading-tight text-[#42A185] mb-5"
      >
        Let&apos;s build great products, together.
      </motion.h2>

      <motion.a
        ref={buttonRef}
        href="https://calendly.com/rohit-beneathatree/introduction"
        target="_blank"
        rel="noopener nofollow external"
        variants={reduced ? {} : button}
        initial={isButtonInView ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px 0% -100px 0%" }}
        whileHover={{ scale: 1.05, y: -2 }}
        className="inline-block px-6 py-3 rounded-lg font-figtree font-semibold text-white text-base sm:text-lg md:text-xl
        transition-shadow duration-300 shadow-md hover:shadow-lg"
        style={{ 
          backgroundColor: "#42A185"
        } as React.CSSProperties}
        aria-label="Schedule a call on Calendly"
      >
        Schedule a call
      </motion.a>
    </section>
  );
}
