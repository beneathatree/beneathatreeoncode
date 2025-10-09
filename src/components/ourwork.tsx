export default function OurWork() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 pb-24">
      <h2 className="text-4xl font-figtree font-bold text-[#171717] mb-16 text-center tracking-[-1px]">
        Our Work
      </h2>

      {/* Main container: max-w-4xl (approx 1024px) for alignment */}
      <div className="flex flex-col gap-10 max-w-[1000px] mx-auto">

        {/* 1. Top Row: Uplift and Digifarm side-by-side with equal width */}
        <div className="flex flex-col md:flex-row justify-center gap-8">

          {/* Uplift Card */}
          <a
            href="https://www.uplift.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex-1 flex flex-col items-start text-left gap-6 p-6 rounded-xl border border-black/10 bg-white hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="w-full h-28 flex items-center justify-center">
              <img
                src="/illustrations/uplift.svg"
                alt="Uplift Logo"
                className="w-[160px] h-auto"
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
            rel="noopener noreferrer"
            className="w-full flex-1 flex flex-col items-start text-left gap-6 p-6 rounded-xl border border-black/10 bg-white hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="w-full h-28 flex items-center justify-center">
              <img
                src="/illustrations/digifarm.svg"
                alt="DigiFarm Logo"
                className="w-[180px] h-auto"
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

        {/* 2. Bottom Row: Speak2 (full width) */}
        <a
          href="https://www.speak2family.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex flex-col items-start text-left gap-6 p-6 rounded-xl border border-black/10 bg-white hover:scale-[1.02] transition-transform duration-200"
        >
          <div className="w-full h-28 flex items-center justify-center">
            <img
              src="/illustrations/speak2.svg"
              alt="Speak2 Logo"
              className="w-[160px] h-auto"
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
