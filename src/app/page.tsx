"use client";
import { useEffect } from "react";
import Image from "next/image";
import ContactCta from "../components/ContactCta";
import OurWork from "../components/ourwork";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  // --- Effect for Parallax Scroll Variable (Kept for Hero Illustration) ---
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Gradient wrapper only for Hero + Cards */}
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
        <section className="relative text-white overflow-hidden pt-[40px] sm:pt-[60px] md:pt-[80px] pb-[250px] sm:pb-[350px] md:pb-[400px]">
          <div className="relative z-30 max-w-screen-xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 pt-16 md:pt-20 flex flex-col items-center">
            <h1 className="text-center mb-2 px-4 sm:px-6 md:px-8">
              {/* Mobile layout */}
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

              {/* Larger screens — forced line breaks */}
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
            <div className="mt-4 max-w-[1000px] mx-auto text-center text-[18px] sm:text-[22px] md:text-[24px] font-figtree font-medium text-white leading-[1em] tracking-[-0.8px]">
              <p className="mb-2">
                Transform your expertise into thoughtful products, built with
                love and precision.
              </p>
              <p className="mb-2">
                It doesn't matter whether you're a solopreneur, startup or
                enterprise.
              </p>
              <p className="font-bold mb-4">We'll play the long game, with you.</p>
            </div>

            <a
              href="https://calendly.com/rohit-beneathatree/introduction"
              target="_blank"
              rel="noreferrer"
              className="mt-0 inline-block px-4 py-2 rounded-lg font-figtree font-semibold text-base sm:text-lg md:text-xl shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
              style={{ backgroundColor: "#fff", color: "#3A8C70" }}
            >
              Schedule a Call
            </a>
          </div>

          {/* Hero Illustration */}
          <div
            className="absolute bottom-0 sm:bottom-[20px] md:bottom-[40px] lg:bottom-[60px] xl:bottom-[80px] 2xl:bottom-0 left-0 w-full z-0 overflow-visible"
            style={{
              transform: "translateY(calc(var(--scroll-y, 0px) * -0.1))",
              transition: "transform 0.2s ease-out",
            }}
          >
            <img
              src="/illustrations/hero.svg"
              alt="Batstory Illustration"
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
            pt-[40px] sm:pt-[60px] md:pt-[80px]
            pb-[250px] sm:pb-[350px] md:pb-[400px]
            space-y-16
          "
        >
          {/* Row 1 */}
          <div
            id="row1"
            className="
              flex flex-col md:flex-row
              items-center justify-center
              gap-10
              max-w-screen-xl mx-auto
            "
          >
            <div
              className="w-full max-w-[380px] rounded-2xl shadow-xl p-0"
              style={{
                background: "linear-gradient(to bottom, #85D9BE 4%, #ffffff 100%)",
              }}
            >
              <Image
                src="/illustrations/early.svg"
                alt="Early stage startups illustration"
                width={380}
                height={240}
                className="rounded-2xl object-contain w-full h-auto"
              />
            </div>

            <div className="max-w-[380px] text-left">
              <h2
                className="
                  font-figtree font-bold
                  text-[42px]
                  tracking-[-2.1px]
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
                  text-[16px]
                  tracking-[-0.7px]
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
          <div
            id="row2"
            className="
              flex flex-col md:flex-row-reverse
              items-center justify-center
              gap-10
              max-w-screen-xl mx-auto
            "
          >
            <div className="w-full max-w-[380px] rounded-2xl shadow-xl bg-white p-0">
              <Image
                src="/illustrations/funded.svg"
                alt="Funded startups illustration"
                width={380}
                height={240}
                className="rounded-2xl object-contain w-full h-auto"
              />
            </div>

            <div className="max-w-[380px] text-left">
              <h2
                className="
                  font-figtree font-bold
                  text-[42px]
                  tracking-[-2.1px]
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
                  text-[16px]
                  tracking-[-0.7px]
                  leading-[1.4em]
                  text-[#888888]
                "
              >
                Already have engineers? We’ll complement your team on specific
                projects, freeing them to focus on what they do best.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div
            id="row3"
            className="
              flex flex-col md:flex-row
              items-center justify-center
              gap-10
              max-w-screen-xl mx-auto
            "
          >
            <div className="w-full max-w-[380px] rounded-2xl shadow-xl bg-white p-0">
              <Image
                src="/illustrations/established.svg"
                alt="Enterprise teams illustration"
                width={380}
                height={240}
                className="rounded-2xl object-contain w-full h-auto"
              />
            </div>

            <div className="max-w-[380px] text-left">
              <h2
                className="
                  font-figtree font-bold
                  text-[42px]
                  tracking-[-2.1px]
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
                  text-[16px]
                  tracking-[-0.7px]
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
    </>
  );
}
