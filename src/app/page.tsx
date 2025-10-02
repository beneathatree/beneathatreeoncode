"use client";
import { useEffect } from "react";
import Image from "next/image";
import ContactCta from "../components/ContactCta";

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full h-full min-h-full overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #55C1A0 0%, #55C1A0 40%, #fdfdfd 60%, #ffffff 100%)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
      }}
    >
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden pt-12 pb-40 sm:pb-60 md:pb-96">
        <div className="relative z-30 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 md:pt-20 flex flex-col items-center">
          <h1 className="text-center">
            <span className="block font-playfair font-semibold italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[86px] mb-2" style={{ letterSpacing: "-2px", lineHeight: "1.1em" }}>
              Bespoke
            </span>
            <span className="block lg:inline font-figtree font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px]" style={{ letterSpacing: "-2px" }}>
              Software
            </span>
            <span className="block lg:inline font-figtree font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px] mt-1 ml-0 lg:ml-4" style={{ letterSpacing: "-2px" }}>
              Consultancy
            </span>
          </h1>

          <div className="mt-5 max-w-4xl text-center text-lg sm:text-xl md:text-2xl font-figtree font-medium text-white">
            Transform your expertise into thoughtful products, built with love and precision.
            <br />
            It doesn&apos;t matter whether you&apos;re a solopreneur, startup or enterprise.
          </div>

          <div className="font-figtree font-bold mt-6 text-lg sm:text-xl md:text-2xl text-white">
            We&apos;ll play the long game, with you.
          </div>

          <a
            href="https://calendly.com/rohit-beneathatree/introduction"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block px-6 py-4 rounded-lg font-figtree font-semibold text-xl shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
            style={{ backgroundColor: "#fff", color: "#3A8C70" }}
          >
            Schedule a Call
          </a>
        </div>

        {/* Hero Illustration */}
        <div className="absolute bottom-0 left-0 w-full z-0 overflow-hidden" style={{ transform: "translateY(calc(var(--scroll-y, 0px) * -0.1))", transition: "transform 0.2s ease-out" }}>
          <img
            src="/illustrations/hero.svg"
            alt="Batstory Illustration"
            className="w-full animate-float object-fill min-h-[200px] sm:min-h-[280px] md:min-h-[360px] lg:min-h-[420px] xl:min-h-[480px] 2xl:min-h-[520px] 3xl:min-h-[580px]"
            draggable="false"
          />
        </div>
      </section>

      {/* Cards Section — Alternating Layout */}
      <section className="relative z-30 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24 space-y-24">
        {/* Row 1: Picture left (with gradient), text right */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 max-w-[1600px] mx-auto">
          <div className="w-[480px] rounded-2xl shadow-xl p-0" style={{ background: "linear-gradient(to bottom, #85D9BE 4%, #ffffff 100%)" }}>
            <Image
              src="/illustrations/early.svg"
              alt="Early stage startups illustration"
              width={480}
              height={300}
              className="rounded-2xl object-contain w-full h-auto"
            />
          </div>
          <div className="max-w-[480px] text-left">
            <h2 className="font-figtree font-bold text-5xl leading-tight text-[#171717] mb-4">
              Early-stage startups<br />
              and Solopreneurs
            </h2>
            <p
              className="font-figtree font-semibold text-xl leading-snug text-[#888888]"
              style={{ letterSpacing: "-0.4px" }}
            >
              We&apos;ll build a lean MVP to help you reach the market.<br />
              Once validated, we&apos;ll make sure your product grows -<br />
              while being secure, scalable, and reliable.
            </p>
          </div>
        </div>

        {/* Row 2: Text left, picture right */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-24 max-w-[1600px] mx-auto">
          <div className="w-[480px] rounded-2xl shadow-xl bg-white">
            <Image
              src="/illustrations/funded.svg"
              alt="Funded startups illustration"
              width={480}
              height={300}
              className="rounded-2xl object-contain w-full h-auto"
            />
          </div>
          <div className="max-w-[480px] text-left">
            <h2 className="font-figtree font-bold text-5xl leading-tight text-[#171717] mb-4">
              Funded startups
            </h2>
            <p
              className="font-figtree font-semibold text-xl leading-snug text-[#888888]"
              style={{ letterSpacing: "-0.4px" }}
            >
              Already have engineers? We&apos;ll complement your<br />
              team on specific projects, freeing them to focus on<br />
              what they do best.
            </p>
          </div>
        </div>

        {/* Row 3: Picture left, text right */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 max-w-[1600px] mx-auto">
          <div className="w-[480px] rounded-2xl shadow-xl bg-white">
            <Image
              src="/illustrations/established.svg"
              alt="Enterprise teams illustration"
              width={480}
              height={300}
              className="rounded-2xl object-contain w-full h-auto"
            />
          </div>
          <div className="max-w-[480px] text-left">
            <h2 className="font-figtree font-bold text-5xl leading-tight text-[#171717] mb-4">
              Established businesses<br />
              and Enterprises
            </h2>
            <p
              className="font-figtree font-semibold text-xl leading-snug text-[#888888]"
              style={{ letterSpacing: "-0.4px" }}
            >
              Have an idea to boost efficiency or disrupt your<br />
              industry? We&apos;ll craft a lean, lovable product and<br />
              smoothly transition it to your team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCta />
    </div>
  );
}
