"use client";
import Image from "next/image";
import ContactCta from "../components/ContactCta";

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        // REVERTED to the original light green: #55C1A0
        background:
          "linear-gradient(to bottom, #55C1A0 0%, #55C1A0 40%, #fdfdfd 60%, #ffffff 100%)",
      }}
    >
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden pt-12 pb-40 sm:pb-60 md:pb-96">
        {/* Hero Content */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 md:pt-20 flex flex-col items-center">
          <h1 className="text-center">
            <span
              className="block font-playfair font-semibold italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[86px] mb-2"
              style={{ letterSpacing: "-2px", lineHeight: "1.1em" }}
            >
              Bespoke
            </span>
            <span
              className="block lg:inline font-figtree font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px]"
              style={{ letterSpacing: "-2px" }}
            >
              Software
            </span>
            <span
              className="block lg:inline font-figtree font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px] mt-1 ml-0 lg:ml-4"
              style={{ letterSpacing: "-2px" }}
            >
              Consultancy
            </span>
          </h1>

          <div className="mt-5 max-w-4xl text-center text-lg sm:text-xl md:text-2xl font-figtree font-medium text-white">
            Transform your expertise into thoughtful products, built with love
            and precision.
            <br />
            It doesn&apos;t matter whether you&apos;re a solopreneur, startup or
            enterprise.
          </div>

          <div className="font-figtree font-bold mt-6 text-lg sm:text-xl md:text-2xl text-white">
            We&apos;ll play the long game, with you.
          </div>

          <a
            href="https://calendly.com/rohit-beneathatree/introduction"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block px-6 py-4 rounded-lg font-figtree font-semibold text-xl shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
            // UPDATED: Background is white, text color is now a darker green (#3A8C70)
            style={{ backgroundColor: "#fff", color: "#3A8C70" }}
          >
            Schedule a Call
          </a>
        </div>

        {/* Illustration */}
        <div className="absolute bottom-0 left-0 w-screen z-10 flex justify-center">
          <img
            src="/illustrations/hero.svg"
            alt="Batstory Illustration"
            className="w-full h-auto object-contain max-w-[1920px] relative bottom-8 sm:bottom-12 md:bottom-20 lg:bottom-0 animate-float"
            draggable="false"
          />
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative z-30 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 space-y-20">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
          {/* Image container with gradient background */}
          <div className="flex-1 flex justify-center">
            <div
              className="w-full max-w-md rounded-2xl shadow-xl p-0"
              style={{
                background: "linear-gradient(to bottom, #85D9BE 4%, #ffffff 100%)",
              }}
            >
              <Image
                src="/illustrations/early.svg"
                alt="Early stage startups illustration"
                width={500}
                height={400}
                className="rounded-2xl object-contain w-full h-auto"
              />
            </div>
          </div>

          {/* Text block */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-figtree font-bold text-3xl md:text-4xl lg:text-5xl text-[#171717] mb-4">
              Early-stage startups and Solopreneurs
            </h2>
            <p className="text-gray-700 text-lg md:text-xl">
              We&apos;ll build a lean MVP to help you reach the market.
              <br />
              Once validated, we&apos;ll make sure your product grows – while
              being secure, scalable, and reliable.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-figtree font-bold text-3xl md:text-4xl lg:text-5xl text-[#171717] mb-4">
              Funded startups
            </h2>
            <p className="text-gray-700 text-lg md:text-xl">
              Already have engineers? We&apos;ll complement your team on
              specific projects, freeing them to focus on what they do best.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md rounded-2xl shadow-xl bg-white p-0">
              <Image
                src="/illustrations/funded.svg"
                alt="Funded startups illustration"
                width={500}
                height={400}
                className="rounded-xl object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md rounded-2xl shadow-xl bg-white p-0">
              <Image
                src="/illustrations/established.svg"
                alt="Enterprise teams illustration"
                width={500}
                height={400}
                className="rounded-xl object-contain w-full h-auto"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-figtree font-bold text-3xl md:text-4xl lg:text-5xl text-[#171717] mb-4">
              Established businesses and Enterprises
            </h2>
            <p className="text-gray-700 text-lg md:text-xl">
              Have an idea to boost efficiency or disrupt your industry? We&apos;ll
              craft a lean, lovable product and smoothly transition it to your
              team.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <ContactCta />
      
    </div>
  );
}