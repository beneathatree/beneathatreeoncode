"use client";
import Image from "next/image";

export default function ClientCategories() {
  return (
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
      style={{
        background: "linear-gradient(to bottom, #A1E0C7 0%, #B8E6D1 10%, #ffffff 35%)",
      }}
    >
      {/* Row 1 */}
      <div id="row1" className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1000px] mx-auto reveal" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
        <div
          className="w-full max-w-[500px] min-w-[280px] rounded-2xl p-0 shadow-xl"
          style={{
            background: "linear-gradient(to bottom, #B0E4CE%, #ffffff 100%)",
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
          className="w-full max-w-[500px] min-w-[280px] text-left"
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
      <div id="row2" className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 max-w-[1000px] mx-auto reveal" style={{ "--reveal-delay": "220ms" } as React.CSSProperties}>
        <div
          className="w-full sm:max-w-[500px] rounded-2xl shadow-xl bg-white p-0"
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
          className="w-full max-w-[500px] min-w-[280px] text-left"
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
      <div id="row3" className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1000px] mx-auto reveal" style={{ "--reveal-delay": "340ms" } as React.CSSProperties}>
        <div
          className="w-full sm:max-w-[500px] rounded-2xl shadow-xl bg-white p-0"
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
          className="w-full max-w-[500px] min-w-[280px] text-left"
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
  );
}

