"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ContactCta from "../components/ContactCta";
import OurWork from "../components/ourwork";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";


export default function HomePage() {
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
        <section className="relative text-white overflow-hidden pt-[72px] md:pt-[80px] pb-[250px] sm:pb-[350px] md:pb-[400px]">
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
            className="absolute bottom-0 sm:bottom-[20px] md:bottom-[40px] lg:bottom-[60px] xl:bottom-[80px] 2xl:bottom-0 left-0 w-full z-0 overflow-visible fade-seq-hero"
            style={{
              animationDelay: "300ms",
              transform: "translateY(calc(var(--scroll-y, 0px) * -0.1))",
              transition:
                "transform 0.2s ease-out, opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <Image
              src="/illustrations/hero.svg"
              alt="Batstory Illustration"
              width={800}
              height={600}
              className="w-full animate-float object-fill min-h-[200px] sm:min-h-[280px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[420px] 2xl:min-h-[480px] 3xl:min-h-[520px]"
              draggable="false"
            />
          </div>
        </section>

        {/* Cards Section — Alternating Layout */}
        <section
          className="
    relative
    text-white
    overflow-hidden
    pt-[100px] sm:pt-[80px] md:pt-[100px]
    pb-[40px] sm:pb-[60px] md:pb-[80px]
    space-y-16
    px-4        /* horizontal gutter on mobile */
  "
        >
          {/* Row 1 */}
          <div id="row1" className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1000px] mx-auto">
            <div
              className="w-full max-w-[500px] min-w-[280px] rounded-2xl shadow-xl p-0 reveal"
              style={{
                background: "linear-gradient(to bottom, #85D9BE 4%, #ffffff 100%)",
                "--reveal-delay": "100ms",
              } as React.CSSProperties}
            >
              <Image
                src="/illustrations/early.svg"
                alt="Early stage startups illustration"
                width={500}
                height={240}
                className="rounded-2xl object-contain w-full h-auto"
              />
            </div>

            <div
              className="w-full max-w-[500px] min-w-[280px] text-left reveal"
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              <h2
                className="
          font-figtree font-bold
          text-[32px] sm:text-[40px] md:text-[50px]
          tracking-[-1.5px] sm:tracking-[-1.8px] md:tracking-[-2.1px]
          leading-[1.2em]
          text-[#171717]
          mb-4
        "
              >
                Early-stage startups
                <br />
                and Solopreneurs
              </h2>
              <p
                className="
          font-figtree font-semibold
          text-[16px] sm:text-[19px] md:text-[21px]
          tracking-[-0.5px] sm:tracking-[-0.6px] md:tracking-[-0.7px]
          leading-[1.4em]
          text-[#888888]
        "
              >
                We&apos;ll build a lean MVP to help you reach the market.
                <br />
                Once validated, we&apos;ll make sure your product grows-
                <br />
                while being secure, scalable, and reliable.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div id="row2" className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 max-w-[1000px] mx-auto">
            <div
              className="w-full sm:max-w-[500px] rounded-2xl shadow-xl bg-white p-0 reveal"
              style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            >
              <Image
                src="/illustrations/funded.svg"
                alt="Funded startups illustration"
                width={500}
                height={240}
                className="rounded-2xl object-contain w-full h-auto"
              />
            </div>

            <div
              className="w-full max-w-[500px] min-w-[280px] text-left reveal"
              style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
            >
              <h2
                className="
          font-figtree font-bold
          text-[32px] sm:text-[40px] md:text-[50px]
          tracking-[-1.5px] sm:tracking-[-1.8px] md:tracking-[-2.1px]
          leading-[1.2em]
          text-[#171717]
          mb-4
        "
              >
                Funded startups
              </h2>
              <p
                className="
          font-figtree font-semibold
          text-[16px] sm:text-[19px] md:text-[21px]
          tracking-[-0.5px] sm:tracking-[-0.6px] md:tracking-[-0.7px]
          leading-[1.4em]
          text-[#888888]
        "
              >
                Already have engineers? We&apos;ll complement your team on specific
                projects, freeing them to focus on what they do best.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div id="row3" className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1000px] mx-auto">
            <div
              className="w-full sm:max-w-[500px] rounded-2xl shadow-xl bg-white p-0 reveal"
              style={{ "--reveal-delay": "340ms" } as React.CSSProperties}
            >
              <Image
                src="/illustrations/established.svg"
                alt="Enterprise teams illustration"
                width={500}
                height={240}
                className="rounded-2xl object-contain w-full h-auto"
              />
            </div>

            <div
              className="w-full max-w-[500px] min-w-[280px] text-left reveal"
              style={{ "--reveal-delay": "400ms" } as React.CSSProperties}
            >
              <h2
                className="
          font-figtree font-bold
          text-[32px] sm:text-[40px] md:text-[50px]
          tracking-[-1.5px] sm:tracking-[-1.8px] md:tracking-[-2.1px]
          leading-[1.2em]
          text-[#171717]
          mb-4
        "
              >
                Established businesses
                <br />
                and Enterprises
              </h2>
              <p
                className="
          font-figtree font-semibold
          text-[15.7px] sm:text-[19px] md:text-[21px]
          tracking-[-0.5px] sm:tracking-[-0.6px] md:tracking-[-0.7px]
          leading-[1.4em]
          text-[#888888]
        "
              >
                Have an idea to boost efficiency or disrupt your industry?
                <br />
                We&apos;ll craft a lean, lovable product and smoothly transition
                it to your team.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* New components outside gradient */}
      <ContactCta />
      <OurWork />
      <Testimonials />
      <CallToAction />
    </>
  );
}