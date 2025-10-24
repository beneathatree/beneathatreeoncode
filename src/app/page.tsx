"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ContactCta from "../components/ContactCta";
import OurWork from "../components/ourwork";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import ClientCategories from "../components/ClientCategories";


export default function HomePage() {
  // Ref for hero illustration scroll speed effect
  const heroRef = useRef<HTMLDivElement>(null);

  // Smooth scroll speed effect for hero.svg
  useEffect(() => {
    if (!heroRef.current) return;

    let rafId: number;
    let currentTranslateY = 0;
    let targetTranslateY = 0;
    let isReady = false;

    // Wait for entrance animation to complete, then start scroll effect
    setTimeout(() => {
      isReady = true;
      if (heroRef.current) {
        heroRef.current.style.animation = 'none';
        heroRef.current.style.opacity = '1';
      }
    }, 1200);

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      // Negative value to move up, balanced speed for subtle but noticeable effect
      targetTranslateY = scrolled * 0.2;
    };

    const animate = () => {
      if (isReady) {
        // Very smooth interpolation to prevent jumping
        currentTranslateY += (targetTranslateY - currentTranslateY) * 0.08;

        if (heroRef.current) {
          // Apply smooth scroll transform with will-change for better performance
          heroRef.current.style.willChange = 'transform';
          heroRef.current.style.transform = `translateY(-${currentTranslateY}px)`;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

 // Page-load entrance + parallax variable
  useEffect(() => {
    const t = requestAnimationFrame(() => {
      // Add a document-level flag so CSS can trigger entrance animations
      document.documentElement.classList.add("is-loaded");
    });

    const handleScroll = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(t);
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.classList.remove("is-loaded");
    };
  }, []);

  // Reveal on scroll (unchanged)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      elements.forEach((el) => el.classList.add("show"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className="w-full overflow-x-hidden bg-white"
        style={{
          background:
            "linear-gradient(to bottom, #55C1A0 0%, #55C1A0 40%, #fdfdfd 60%, #ffffff 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
        }}
      >
        {/* Hero Section */}
        <section className="relative text-white overflow-hidden pt-[72px] md:pt-[80px] pb-[250px] sm:pb-[350px] md:pb-[400px] lg:pb-[450px] xl:pb-[500px] 2xl:pb-[550px]">
          <div
            className="relative z-30 max-w-screen-xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 pt-16 md:pt-20 flex flex-col items-center"
          >
            {/* Title */}
            <h1
              className="text-center mb-2 px-4 sm:px-6 md:px-8 fade-seq"
              style={{ animationDelay: "150ms" }}
            >
              {/* Mobile */}
              <span className="block sm:hidden">
                <span className="block font-playfair font-semibold italic text-[48px] leading-[1em] tracking-[-3.8px] text-center">
                  Bespoke
                </span>
                <span className="block font-figtree font-extrabold text-[44px] leading-[1em] tracking-[-3.8px] text-center mt-2">
                  Software
                </span>
                <span className="block font-figtree font-extrabold text-[44px] leading-[1em] tracking-[-3.8px] text-center mt-2">
                  Consultancy
                </span>
              </span>

              {/* Larger screens */}
              <span className="hidden sm:block">
                <div className="font-playfair font-semibold italic text-[60px] md:text-[70px] xl:text-[80px] leading-[0.6em] tracking-[-3.8px] text-center">
                  Bespoke
                </div>
                <div className="font-figtree font-extrabold text-[50px] md:text-[60px] xl:text-[70px] tracking-[-3.8px] text-center mt-2">
                  Software Consultancy
                </div>
              </span>
            </h1>

            {/* Supporting Sentences */}
            <div
              className="mt-4 max-w-[1000px] mx-auto text-center text-[18px] sm:text-[22px] md:text-[24px] font-figtree font-medium text-white leading-[1em] tracking-[-0.8px] fade-seq"
              style={{ animationDelay: "200ms" }}
            >
              <p className="mb-2">
                Transform your expertise into thoughtful products, built with
                love and precision.
              </p>
              <p className="mb-2">
                It doesn&apos;t matter whether you&apos;re a solopreneur, startup or
                enterprise.
              </p>
              <p className="font-bold mb-4">We&apos;ll play the long game, with you.</p>
            </div>

            {/* CTA */}
            <a
              href="https://calendly.com/rohit-beneathatree/introduction"
              target="_blank"
              rel="noreferrer"
              className="mt-0 inline-block px-4 py-2 rounded-lg font-figtree font-semibold text-base sm:text-lg md:text-xl shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05] hover:-translate-y-0.5 hover:shadow-xl fade-seq"
              style={{
                backgroundColor: "#fff",
                color: "#3A8C70",
                animationDelay: "250ms",
              } as React.CSSProperties}
            >
              Schedule a Call
            </a>
          </div>

          {/* Hero Illustration */}
          <div
            ref={heroRef}
            className="absolute bottom-0 sm:bottom-[20px] md:bottom-[40px] lg:bottom-[60px] xl:bottom-[80px] 2xl:bottom-[100px] 3xl:bottom-[120px] min-[2000px]:bottom-[140px] left-0 w-full z-0 overflow-visible fade-seq-hero"
            style={{
              animationDelay: "300ms",
              transition: "opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <Image
              src="/illustrations/hero.svg"
              alt="Batstory Illustration"
              width={800}
              height={600}
              className="w-full object-fill min-h-[200px] sm:min-h-[280px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[450px] 2xl:min-h-[500px] 3xl:min-h-[550px] min-[2000px]:min-h-[600px]"
              draggable="false"
            />
          </div>
        </section>

        {/* Cards Section — Alternating Layout */}
        <ClientCategories />
      </div>

      {/* New components outside gradient */}
      <ContactCta />
      <OurWork />
      <Testimonials />
      <CallToAction />
    </>
  );
}