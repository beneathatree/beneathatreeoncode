"use client";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Kayla Ray",
    company: "",
    quote:
      "Skilled. Diligent. Good Communication. Delivered what was asked. Couldn't ask for more. I couldn’t tell that BeneathATree was halfway around the world because they were responsive and integrated well into the project.",
  },
  {
    name: "Jens",
    company: "shootonscoreit",
    quote:
      "Great skills, easy to communicate and understood our overall vision with project and acted accordingly. Always delivered on time and as expected.",
  },
  {
    name: "Nils",
    company: "Digifarm",
    quote:
      "The BeneathATree team has been invaluable in building up the codebases, pipelines, processes, as well as the management and automation of processes at DigiFarm. Thank you for all your great work!",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (i: number) => {
    const c = scrollRef.current;
    if (!c) return;
    c.scrollTo({ left: i * c.offsetWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const c = scrollRef.current;
    if (!c) return;
    setActiveIndex(Math.round(c.scrollLeft / c.offsetWidth));
  };

  useEffect(() => {
    const c = scrollRef.current;
    if (!c) return;
    c.addEventListener("scroll", handleScroll);
    return () => c.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24"
      style={{ backgroundColor: "#EDFFFA" }}
    >
      <h2 className="text-5xl font-figtree font-bold text-[#171717] mb-16 text-center">
        Testimonials
      </h2>

      <div className="relative">
        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 pb-4"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-full md:min-w-[500px] snap-start p-8 rounded-2xl bg-white border border-black/10 flex flex-col justify-between"
            >
              <p className="font-figtree text-xl text-[#444] mb-6 font-normal leading-snug">
                “{t.quote}”
              </p>
              <div className="font-figtree font-semibold text-lg text-[#171717]">
                {t.name}
                {t.company && (
                  <span className="text-[#888] font-normal"> — {t.company}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Prev/Next */}
        <button
          onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white border border-black/10 rounded-full shadow"
        >
          ←
        </button>
        <button
          onClick={() =>
            scrollToIndex(Math.min(activeIndex + 1, testimonials.length - 1))
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white border border-black/10 rounded-full shadow"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === activeIndex ? "bg-[#171717]" : "bg-[#ccc]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
