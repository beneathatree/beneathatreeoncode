export default function OurWork() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24">
      <h2 className="text-5xl font-figtree font-bold text-[#171717] mb-16 text-center">
        Our Work
      </h2>

      {/* Main container to center content and limit max width */}
      {/* Max-w-3xl is roughly 48rem or 768px, which fits the tight center column look */}
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">

        {/* 1. Top Row: Uplift and Digifarm side-by-side */}
        {/* We use flex-wrap to stack them on small screens and justify-center to group them */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Uplift Card - Fixed width (or flex-1 to share space) */}
          <a
            href="https://www.uplift.ai/"
            target="_blank"
            rel="noopener noreferrer"
            // w-full on mobile, but flex-1 on medium/desktop to share space
            className="w-full md:w-auto flex-1 min-w-[300px] flex flex-col items-start text-left gap-4 p-4 rounded-xl border border-black/10 bg-white hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="w-full h-24 flex items-center justify-center">
              <img
                src="/illustrations/uplift.svg"
                alt="Uplift Logo"
                className="w-[120px] h-auto"
              />
            </div>
            <h3 className="font-figtree font-bold text-xl text-[#171717] mt-4">
              Uplift
            </h3>
            <p
              className="font-figtree font-medium text-sm leading-snug text-[#888888]"
            >
              Optimizing human movement & performance
              <br />
              with AI-powered insights.
            </p>
          </a>

          {/* DigiFarm Card - Fixed width (or flex-1 to share space) */}
          <a
            href="https://digifarm.io/"
            target="_blank"
            rel="noopener noreferrer"
            // w-full on mobile, but flex-1 on medium/desktop to share space
            className="w-full md:w-auto flex-1 min-w-[300px] flex flex-col items-start text-left gap-4 p-4 rounded-xl border border-black/10 bg-white hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="w-full h-24 flex items-center justify-center">
              <img
                src="/illustrations/digifarm.svg"
                alt="DigiFarm Logo"
                className="w-[120px] h-auto"
              />
            </div>
            <h3 className="font-figtree font-bold text-xl text-[#171717] mt-4">
              DigiFarm
            </h3>
            <p
              className="font-figtree font-medium text-sm leading-snug text-[#888888]"
            >
              Develop deep neural network models and agtech solutions for
              accurately detecting
              <br />
              field boundaries and seeded acres in precision farming.
            </p>
          </a>
        </div>

        {/* 2. Bottom Row: Speak2 (full width under the two cards) */}
        <a
          href="https://www.speak2family.com/"
          target="_blank"
          rel="noopener noreferrer"
          // This card takes w-full of the max-w-3xl parent container
          className="w-full flex flex-col items-start text-left gap-4 p-4 rounded-xl border border-black/10 bg-white hover:scale-[1.02] transition-transform duration-200"
        >
          <div className="w-full h-24 flex items-center justify-center">
            <img
              src="/illustrations/speak2.svg"
              alt="Speak2 Logo"
              className="w-[120px] h-auto"
            />
          </div>
          <h3 className="font-figtree font-bold text-xl text-[#171717] mt-4">
            Speak2
          </h3>
          <p
            className="font-figtree font-medium text-sm leading-snug text-[#888888]"
          >
            Revolutionize senior living.
          </p>
        </a>
      </div>
    </section>
  );
}