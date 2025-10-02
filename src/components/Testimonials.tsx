"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Shadi Chri",
    company: "",
    quote:
      "Very happy to work wth Sachin and BeneathATree. Very Professional. His time management is great, and his skills were very strong. He shows a great responsibility, he < goes beyond doing the task but making sure it is delivered in the best possible way.",
  },
  {
    name: "Kayla Ray",
    company: "",
    quote:
      "Skilled. Diligent. Good Communication. Delivered What was asked. Couldn't ask for more. I couldn't tell that BeneathATree was halfway around the world because they were responsive and were integrated well into the project - they understood what we were trying to achieve and made solid contributions.",
  },
  {
    name: "Nils",
    company: "digifarm",
    quote:
      "The Beneathatree team has been invaluable in building up the codebases, pipelines, processes, as well as the management and automation of processes at DigiFarm.Thank you for all the great work!",
  },
  {
    name: "Sean Petty",
    company: "PlateLogiq",
    quote:
      "The team was an absolute pleasure to work with. Incredible serverless developers! With a very loosely defined scope and requirements, they went above-and-beyond at every stage. They were incredibly patient during a long and drawn out development cycle.",
  },
  {
    name: "Jens",
    company: "shootnscoreit",
    quote:
      "Great skills, easy to communicate and understood our overall vision with project and acted accordingly. Always delivered on time and as expected.",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;
  const total = testimonials.length;

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < cardsPerPage; i++) {
      const index = (startIndex + i) % total;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handleDotClick = (i: number) => {
    setStartIndex(i);
  };

  return (
    <section
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24 flex flex-col items-center"
      style={{ backgroundColor: "#EDFFFA" }}
    >
      {/* Cards + Arrows */}
      <div className="flex space-x-6 justify-center items-center">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="w-14 h-14 mr-4 flex items-center justify-center bg-black opacity-20 border border-black/10 rounded-full shadow hover:scale-105 transition-transform"
        >
          <Image
            src="/illustrations/arrowleft.svg"
            alt="Previous"
            width={32}
            height={32}
          />
        </button>

        {getVisibleTestimonials().map((t, i) => (
          <div
            key={i}
            className="w-[320px] h-[454px] p-8 rounded-xl border border-black/10 bg-white/60 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="font-figtree text-[18px] font-normal text-[#444] leading-relaxed mb-6">
              “{t.quote}”
            </p>
            <div className="font-figtree text-[18px] font-bold text-[#171717]">
              {t.name}
              {t.company && (
                <span className="text-[#888] font-normal"> — {t.company}</span>
              )}
            </div>
          </div>
        ))}

        <button
          aria-label="Next"
          onClick={handleNext}
          className="w-14 h-14 ml-4 flex items-center justify-center bg-black opacity-20 border border-black/10 rounded-full shadow hover:scale-105 transition-transform"
        >
          <Image
            src="/illustrations/arrowright.svg"
            alt="Next"
            width={32}
            height={32}
          />
        </button>
      </div>

      {/* Clickable Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              i === startIndex % total ? "bg-[#171717]" : "bg-[#ccc]"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
