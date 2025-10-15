"use client";
import Image from "next/image";
import Script from "next/script";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export default function OurWork() {
  const reduced = useReducedMotion();

  // Container fade/stagger
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  } as const;

  // Card enter + silky hover micro-interaction
  const card = {
    hidden: { opacity: 0, y: 24, scale: 0.985 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  // Springy hover with GPU-only transforms
  const hoverMotion = reduced
    ? {}
    : {
        scale: 1.03,
        y: -4,
        transition: { type: "spring" as const, stiffness: 400, damping: 28, mass: 0.5 },
      };

  const commonCardClasses =
    "w-full flex-1 flex flex-col items-start text-left gap-6 p-6 rounded-xl border border-black/10 bg-white transform-gpu will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

  const Logo = ({ src, alt, w = 160, h = 64 }: { src: string; alt: string; w?: number; h?: number }) => (
    <div className="w-full h-28 flex items-center justify-center">
      <Image src={src} alt={alt} width={w} height={h} priority={false} />
    </div>
  );

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 pb-24">
      <h2 className="text-4xl font-figtree font-bold text-[#171717] mb-16 text-center tracking-[-1px]">
        Our Work
      </h2>

      {/* Portfolio ItemList JSON-LD */}
      <Script id="work-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            { "@type": "ListItem", position: 1, url: "https://www.uplift.ai/" },
            { "@type": "ListItem", position: 2, url: "https://digifarm.io/" },
            { "@type": "ListItem", position: 3, url: "https://www.speak2family.com/" },
          ],
        })}
      </Script>

      {/* Main container */}
      <motion.div
        className="flex flex-col gap-10 max-w-[1000px] mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
      >
        {/* 1. Top Row */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Uplift Card */}
          <motion.a
            href="https://www.uplift.ai/"
            target="_blank"
            rel="noopener nofollow external"
            className={commonCardClasses}
            variants={card}
            whileHover={hoverMotion}
            whileTap={reduced ? {} : { scale: 0.995 }}
          >
            <Logo src="/illustrations/uplift.svg" alt="Uplift logo" w={160} h={64} />
            <h3 className="font-figtree font-bold text-2xl text-[#171717] mt-4">Uplift</h3>
            <p className="font-figtree font-medium text-base leading-snug text-[#888888]">
              Optimizing human movement & performance
              <br />
              with AI-powered insights.
            </p>
          </motion.a>

          {/* DigiFarm Card */}
          <motion.a
            href="https://digifarm.io/"
            target="_blank"
            rel="noopener nofollow external"
            className={commonCardClasses}
            variants={card}
            whileHover={hoverMotion}
            whileTap={reduced ? {} : { scale: 0.995 }}
          >
            <Logo src="/illustrations/digifarm.svg" alt="DigiFarm logo" w={180} h={64} />
            <h3 className="font-figtree font-bold text-2xl text-[#171717] mt-4">DigiFarm</h3>
            <p className="font-figtree font-medium text-base leading-snug text-[#888888]">
              Develop deep neural network models and agtech solutions for
              accurately detecting field boundaries and seeded acres in precision farming.
            </p>
          </motion.a>
        </div>

        {/* 2. Bottom Row: Speak2 */}
        <motion.a
          href="https://www.speak2family.com/"
          target="_blank"
          rel="noopener nofollow external"
          className={commonCardClasses}
          variants={card}
          whileHover={hoverMotion}
          whileTap={reduced ? {} : { scale: 0.995 }}
        >
          <Logo src="/illustrations/speak2.svg" alt="Speak2 logo" w={160} h={64} />
          <h3 className="font-figtree font-bold text-2xl text-[#171717] mt-4">Speak2</h3>
          <p className="font-figtree font-medium text-base leading-snug text-[#888888]">Revolutionize senior living.</p>
        </motion.a>
      </motion.div>
    </section>
  );
}
