"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const el = illustrationRef.current;
      if (el) {
        // Parallax effect: move illustration up slower than scroll
        const parallax = scrollY * 0.35;
        el.style.transform = `translateY(-${parallax}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
  <section className="py-24 text-white" style={{ backgroundColor: "#4DB898" }}>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center">
          <h1 className="text-center">
            <span
              className="block font-playfair font-semibold italic text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[86px] mb-2"
              style={{ letterSpacing: '-2px', lineHeight: '1.1em' }}
            >
              Bespoke
            </span>
            <span
              className="block font-figtree font-extrabold text-center leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px]"
              style={{ letterSpacing: '-2px' }}
            >
              Software
            </span>
            <span
              className="block font-figtree font-extrabold text-center leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px] mt-1"
              style={{ letterSpacing: '-2px' }}
            >
              Consultancy
            </span>
          </h1>

          <div
            className="mt-5 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-white text-center mx-auto font-figtree font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={{ lineHeight: 1.4 }}
          >
            <div style={{ marginBottom: '-6px' }}>Transform your expertise into thoughtful products, built with love and precision.</div>
            <div>It doesn't matter whether you're a solopreneur, startup or enterprise.</div>
          <div
            className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-white text-center mx-auto font-figtree font-bold mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            style={{ lineHeight: 1.3 }}
          >
            We'll play the long game, with you.
          </div>
          </div>

          <a
            href="https://calendly.com/rohit-beneathatree/introduction"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block px-6 py-3 rounded-lg font-semibold font-figtree transition-transform duration-200 ease-in-out hover:scale-105"
            style={{ backgroundColor: "#fff", color: "#4DB898" }}
          >
            Schedule a Call
          </a>

          <div
            ref={illustrationRef}
            className="relative inset-0 z-0 w-screen h-screen pointer-events-none"
            style={{ top: '-320px', willChange: 'transform' }}
          >
            <img
              src="/illustrations/hero.svg"
              alt="Consultancy Illustration"
              className="w-full h-full object-contain"
              style={{ minHeight: '100vh', minWidth: '100vw' }}
              draggable="false"
            />
          </div>

          {/* Early-stage startups and Solopreneurs Section (mobile-first responsive) */}
          <section className="w-full py-12 md:py-24 bg-gradient-to-b from-[#b7e1d3] to-white flex justify-center items-center">
            <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center md:items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 gap-6 md:gap-12">
              <div className="flex justify-center w-full md:w-1/2 mb-8 md:mb-0">
                <img
                  src="/illustrations/early.svg"
                  alt="Early-stage Illustration"
                  className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
                <h2 className="font-figtree font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#171717] mb-4 md:mb-6 leading-tight">
                  Early-stage startups<br className="hidden md:block" />and Solopreneurs
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 font-figtree mb-2">
                  We'll build a lean MVP to help you reach the market.<br className="hidden md:block" />
                  Once validated, we'll make sure your product grows -<br className="hidden md:block" />
                  while being secure, scalable, and reliable.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Work Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-left">
        <h2 className="text-3xl font-bold mb-8">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">Uplift – Optimizing human movement with AI.</div>
          <div className="p-6 border rounded-lg">Digifarm – Add effects and capture attention.</div>
          <div className="p-6 border rounded-lg">Speak2 – Design your site on a familiar free-form canvas.</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s build great products, together.</h2>
        <a
          href="https://calendly.com/rohit-beneathatree/introduction"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-lg font-semibold text-white"
          style={{ backgroundColor: "#4DB898" }}
        >
          Schedule a Call
        </a>
      </section>
    </div>
  );
}

