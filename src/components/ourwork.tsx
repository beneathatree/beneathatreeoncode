import Image from "next/image";
import Script from "next/script";

export default function OurWork() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 pb-24">
      <h2 
        className="text-4xl font-figtree font-bold text-[#171717] mb-16 text-center tracking-[-1px] reveal"
        style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
      >
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
      <div className="flex flex-col gap-10 max-w-[1000px] mx-auto">
        {/* 1. Top Row */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Uplift Card */}
          <a
            href="https://www.uplift.ai/"
            target="_blank"
            rel="noopener nofollow external"
            className="w-full flex-1 flex flex-col items-start text-left gap-6 p-6 rounded-xl border border-black/10 bg-white transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg reveal"
            style={{ willChange: "transform", "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <div className="w-full h-28 flex items-center justify-center">
              <Image
                src="/illustrations/uplift.svg"
                alt="Uplift logo"
                width={160}
                height={64}
                priority={false}
              />
            </div>
            <h3 className="font-figtree font-bold text-2xl text-[#171717] mt-4">
              Uplift
            </h3>
            <p className="font-figtree font-medium text-base leading-snug text-[#888888]">
              Optimizing human movement & performance
              <br />
              with AI-powered insights.
            </p>
          </a>

          {/* DigiFarm Card */}
          <a
            href="https://digifarm.io/"
            target="_blank"
            rel="noopener nofollow external"
            className="w-full flex-1 flex flex-col items-start text-left gap-6 p-6 rounded-xl border border-black/10 bg-white transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg reveal"
            style={{ willChange: "transform", "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            <div className="w-full h-28 flex items-center justify-center">
              <Image
                src="/illustrations/digifarm.svg"
                alt="DigiFarm logo"
                width={180}
                height={64}
              />
            </div>
            <h3 className="font-figtree font-bold text-2xl text-[#171717] mt-4">
              DigiFarm
            </h3>
            <p className="font-figtree font-medium text-base leading-snug text-[#888888]">
              Develop deep neural network models and agtech solutions for
              accurately detecting field boundaries and seeded acres in precision farming.
            </p>
          </a>
        </div>

        {/* 2. Bottom Row: Speak2 */}
        <a
          href="https://www.speak2family.com/"
          target="_blank"
          rel="noopener nofollow external"
          className="w-full flex flex-col items-start text-left gap-6 p-6 rounded-xl border border-black/10 bg-white transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg reveal"
          style={{ willChange: "transform", "--reveal-delay": "300ms" } as React.CSSProperties}
        >
          <div className="w-full h-28 flex items-center justify-center">
            <Image
              src="/illustrations/speak2.svg"
              alt="Speak2 logo"
              width={160}
              height={64}
            />
          </div>
          <h3 className="font-figtree font-bold text-2xl text-[#171717] mt-4">
            Speak2
          </h3>
          <p className="font-figtree font-medium text-base leading-snug text-[#888888]">
            Revolutionize senior living.
          </p>
        </a>
      </div>
    </section>
  );
}
