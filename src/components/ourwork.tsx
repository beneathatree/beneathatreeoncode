export default function OurWork() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24">
      <h2 className="text-5xl font-figtree font-bold text-[#171717] mb-16 text-center">
        Our Work
      </h2>

      <div className="flex flex-col gap-12 max-w-[1600px] mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Uplift */}
          <a
            href="https://www.uplift.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-[480px] flex flex-col items-start text-left gap-6 p-6 rounded-2xl border border-black/10 bg-white hover:scale-[1.02] transition-transform duration-200"
          >
            <img
              src="/illustrations/uplift.svg"
              alt="Uplift Logo"
              className="w-[220px] h-auto self-center"
            />
            <h3 className="font-figtree font-bold text-3xl text-[#171717] mb-2">
              Uplift
            </h3>
            <p
              className="font-figtree font-medium text-xl leading-snug text-[#888888]"
              style={{ letterSpacing: "-0.4px" }}
            >
              Optimizing human movement & performance
              <br />
              with AI-powered insights.
            </p>
          </a>

          {/* DigiFarm */}
          <a
            href="https://digifarm.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-start text-left gap-6 p-6 rounded-2xl border border-black/10 bg-white hover:scale-[1.02] transition-transform duration-200"
          >
            <img
              src="/illustrations/digifarm.svg"
              alt="DigiFarm Logo"
              className="w-[220px] h-auto self-center"
            />
            <h3 className="font-figtree font-bold text-3xl text-[#171717] mb-2">
              DigiFarm
            </h3>
            <p
              className="font-figtree font-medium text-xl leading-snug text-[#888888]"
              style={{ letterSpacing: "-0.4px" }}
            >
              Develop deep neural network models and agtech solutions for
              accurately detecting
              <br />
              field boundaries and seeded acres in precision farming.
            </p>
          </a>
        </div>

        {/* Row 2 */}
        <a
          href="https://www.speak2family.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex flex-col items-start text-left gap-6 p-6 rounded-2xl border border-black/10 bg-white hover:scale-[1.02] transition-transform duration-200"
        >
          <img
            src="/illustrations/speak2.svg"
            alt="Speak2 Logo"
            className="w-[220px] h-auto self-center"
          />
          <h3 className="font-figtree font-bold text-3xl text-[#171717] mb-2">
            Speak2
          </h3>
          <p
            className="font-figtree font-medium text-xl leading-snug text-[#888888]"
            style={{ letterSpacing: "-0.4px" }}
          >
            Revolutionize senior living.
          </p>
        </a>
      </div>
    </section>
  );
}
