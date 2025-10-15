"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Nils",
    company: "DigiFarm",
    quote:
      "The BeneathATree team has been invaluable in building up the codebase, pipelines, processes, as well as the management and automation of processes at DigiFarm. Thank you for all the great work!",
  },
  {
    name: "Sean Petty",
    company: "PlateLogiq",
    quote:
      "The team was an absolute pleasure to work with. Incredible services developers! With a very locally defined scope and requirements, they went above and beyond to deliver. They were incredibly patient during a long and drawn out development cycle.",
  },
  {
    name: "Shadi Chri",
    company: "",
    quote:
      "Very happy to work with Sachin and BeneathATree. Very Professional. His time management is great, and his strength lies with his core dev. He shows a great responsibility, he goes beyond doing his role and making sure it is delivered in the best possible way.",
  },
  {
    name: "Kayla Ray",
    company: "",
    quote:
      "Skilled. Diligent. Good communication. Delivered what was asked. I couldn't ask for more. I couldn't tell that BeneathATree was halfway around the world because they were responsive and integrated well into the project—they understood what we were trying to achieve and made solid contributions.",
  },
  {
    name: "Jens",
    company: "shootnscoreit",
    quote:
      "Great skills, easy to communicate and understood our overall vision with the project and acted accordingly. Always delivered on time and as expected.",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const total = testimonials.length;

  // Carousel configuration
  const AUTOPLAY_DELAY = 2500; // 2.5 seconds between automatic scrolls
  const ENABLE_AUTOPLAY = true; // Enable automatic scrolling
  const ENABLE_LOOP = true; // Enable seamless looping

  useEffect(() => {
    const updateCardsPerPage = () => {
      setCardsPerPage(window.innerWidth < 1024 ? 1 : 3);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);

    // Enhanced autoplay with pause functionality
    const interval = setInterval(() => {
      if (ENABLE_AUTOPLAY && !isHovered && !reduced && !isAutoplayPaused && !isDragging) {
        setStartIndex((prev) => {
          if (ENABLE_LOOP) {
            return (prev + 1) % total;
          } else {
            return prev < total - cardsPerPage ? prev + 1 : prev;
          }
        });
      }
    }, AUTOPLAY_DELAY);

    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
      clearInterval(interval);
      mq.removeEventListener?.("change", onChange);
    };
  }, [isHovered, reduced, isAutoplayPaused, isDragging, total, cardsPerPage, ENABLE_AUTOPLAY, ENABLE_LOOP, AUTOPLAY_DELAY]);

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

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setIsAutoplayPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && touchStart) {
      setTouchEnd(e.targetTouches[0].clientX);
      const offset = e.targetTouches[0].clientX - touchStart;
      setDragOffset(offset);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      setIsAutoplayPaused(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
    setDragOffset(0);
    setIsAutoplayPaused(false);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
    setIsDragging(true);
    setIsAutoplayPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && touchStart) {
      setTouchEnd(e.clientX);
      const offset = e.clientX - touchStart;
      setDragOffset(offset);
    }
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      setIsAutoplayPaused(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
    setDragOffset(0);
    setIsAutoplayPaused(false);
  };

  return (
    <section className="bg-[#EDFFFA] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 pb-8">
      <div
        className="max-w-[1000px] mx-auto relative flex items-center justify-center reveal"
        role="region"
        aria-live="polite"
        aria-label="Testimonials carousel"
        style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
      >
        {/* Left Arrow - Bottom Left */}
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="absolute left-10 bottom-4 lg:left-5 lg:bottom-5 z-10 w-10 h-10 flex items-center justify-center bg-black opacity-20 border border-black/10 rounded-full shadow hover:scale-105 transition-transform"
        >
          <Image
            src="/illustrations/arrowleft.svg"
            alt="Previous"
            width={20}
            height={20}
          />
        </button>

        {/* Cards */}
        <div
          className="flex gap-2 sm:gap-5 justify-center items-center overflow-visible select-none w-full"
          onMouseEnter={() => {
            setIsHovered(true);
            setIsAutoplayPaused(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsAutoplayPaused(false);
            setIsDragging(false);
            setTouchStart(null);
            setTouchEnd(null);
            setDragOffset(0);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{ 
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none'
          }}
        >
          <AnimatePresence mode="popLayout">
            {getVisibleTestimonials().map((t, i) => (
              <motion.div
                key={`${startIndex}-${i}`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ 
                  x: isDragging ? dragOffset * 0.3 : 0, 
                  opacity: 1,
                  scale: isDragging ? 0.96 : 1,
                  rotateY: isDragging ? dragOffset * 0.1 : 0,
                  z: isDragging ? 10 : 0
                }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ 
                  type: "tween", 
                  ease: isDragging ? "linear" : [0.22, 1, 0.36, 1], 
                  duration: isDragging ? 0 : 0.6 
                }}
                className={`w-full max-w-[326px] min-w-[280px] h-[456px] p-4 sm:p-6 rounded-xl border border-black/30 bg-[#EDFFFA] flex flex-col justify-between items-center text-center transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg ${
                  isDragging ? 'shadow-2xl' : 'shadow-sm'
                }`}
                style={{ 
                  willChange: "transform",
                  boxShadow: isDragging ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : undefined
                }}
              >
                <p className="font-figtree font-medium text-[18px] tracking-[-0.7px] leading-[1.5em] text-[#0E0E0E] mb-6">
                  “{t.quote}”
                </p>
                <div className="flex flex-col items-center min-h-[48px]">
                  <div className="font-figtree font-semibold text-[20px] tracking-[-0.5px] leading-[1.5em] text-[#171717]">
                    {t.name}
                  </div>
                  {t.company.trim() !== "" && (
                    <div className="font-figtree text-[14px] tracking-[0px] leading-[1.5em] text-[#888] font-normal">
                      {t.company}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Arrow - Bottom Right */}
        <button
          aria-label="Next"
          onClick={handleNext}
          className="absolute right-10 bottom-4 lg:right-5 lg:bottom-5 z-10 w-10 h-10 flex items-center justify-center bg-black opacity-20 border border-black/10 rounded-full shadow hover:scale-105 transition-transform"
        >
          <Image
            src="/illustrations/arrowright.svg"
            alt="Next"
            width={20}
            height={20}
          />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2 reveal" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === startIndex % total 
                ? "bg-[#171717] scale-110" 
                : "bg-[#ccc] hover:bg-[#999]"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
