"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Nils",
    company: "DigiFarm",
    quote:
      "The BeneathAree team has been invaluable in building up the codebase, pipelines, processes, as well as the management and automation of processes at DigiFarm. Thank you for all the great work!",
  },
  {
    name: "Sean Petty",
    company: "PlateLogiq",
    quote:
      "The team was an absolute pleasure to work with. Incredible services developers! With a very locally defined scope and requirements, they went above and beyond to deliver. They were incredibly patient during a long and drawn out development cycle.",
  },
  {
    name: "Shad Crini",
    company: "",
    quote:
      "Very happy to work with Sachin and BeneathAree. Very Professional. His time management is great, and his strength lies with his core dev. He shows a great responsibility, he goes beyond doing his role and making sure it is delivered in the best possible way.",
  },
  {
    name: "Kayla Ray",
    company: "",
    quote:
      "Skilled. Diligent. Good Communication. Delivered What was asked. Couldn't ask for more. I couldn't tell that BeneathATree was halfway around the world because they were responsive and were integrated well into the project - they understood what we were trying to achieve and made solid contributions.",
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
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    const updateCardsPerPage = () => {
      setCardsPerPage(window.innerWidth < 1024 ? 1 : 3);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    const interval = setInterval(() => {
      if (!isHovered) {
        setStartIndex((prev) => (prev + 1) % total);
      }
    }, 2500); // 2.5s delay

    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
      clearInterval(interval);
    };
  }, [isHovered, total]);

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
    <section className="bg-[#EDFFFA] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24">
      <div className="max-w-screen-xl mx-auto relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black opacity-20 border border-black/10 rounded-full shadow hover:scale-105 transition-transform"
        >
          <Image
            src="/illustrations/arrowleft.svg"
            alt="Previous"
            width={24}
            height={24}
          />
        </button>

        {/* Cards with directional slide + fade */}
        <div
          className="flex gap-4 justify-center items-center overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="popLayout">
            {getVisibleTestimonials().map((t, i) => (
              <motion.div
                key={`${startIndex}-${i}`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
                className="w-[320px] h-[454px] p-8 rounded-xl border border-black/10 bg-white/60 backdrop-blur-md flex flex-col justify-between hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="font-figtree text-[18px] font-normal text-[#444] leading-relaxed mb-6">
                  “{t.quote}”
                </p>
                <div className="font-figtree text-[18px] font-bold text-[#171717]">
                  {t.name}
                  {t.company && (
                    <span className="text-[#888] font-normal">
                      {" "}
                      — {t.company}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          aria-label="Next"
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black opacity-20 border border-black/10 rounded-full shadow hover:scale-105 transition-transform"
        >
          <Image
            src="/illustrations/arrowright.svg"
            alt="Next"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Dots */}
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