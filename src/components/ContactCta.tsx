"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function ContactCta() {
  const reduced = useReducedMotion();

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
    <section className="pt-8 pb-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          variants={reduced ? {} : heading}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px 0% -100px 0%" }}
          className="
            font-figtree font-bold
            text-3xl sm:text-5xl md:text-5xl lg:text-5xl
            tracking-[-1px]
            leading-tight
            text-[#42A185]
            mb-6
          "
        >
          Don&apos;t fit this bill?<br />
          Contact us anyway.<br />
          We&apos;ll figure it out, together.
        </motion.h2>

        <motion.a
          href="https://calendly.com/rohit-beneathatree/introduction"
          target="_blank"
          rel="noopener nofollow external"
          variants={reduced ? {} : button}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px 0% -100px 0%" }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="
            inline-block
            px-6 py-3
            rounded-lg
            font-figtree font-semibold
            text-white
            text-base sm:text-lg md:text-xl
            transition-shadow duration-300 shadow-md hover:shadow-lg"
          style={{ backgroundColor: "#42A185" } as React.CSSProperties}
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}
