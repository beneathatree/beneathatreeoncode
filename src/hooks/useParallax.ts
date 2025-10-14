import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxOptions {
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const {
    speed = 0.5,
    direction = "up",
    trigger,
    start = "top bottom",
    end = "bottom top",
    scrub = true,
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const triggerElement = trigger ? document.querySelector(trigger) : element;

    // Set initial transform based on direction
    const getInitialTransform = () => {
      switch (direction) {
        case "up":
          return { y: 100 };
        case "down":
          return { y: -100 };
        case "left":
          return { x: 100 };
        case "right":
          return { x: -100 };
        default:
          return { y: 100 };
      }
    };

    const getFinalTransform = () => {
      switch (direction) {
        case "up":
          return { y: -100 * speed };
        case "down":
          return { y: 100 * speed };
        case "left":
          return { x: -100 * speed };
        case "right":
          return { x: 100 * speed };
        default:
          return { y: -100 * speed };
      }
    };

    // Set initial state
    gsap.set(element, getInitialTransform());

    // Create animation
    const animation = gsap.to(element, {
      ...getFinalTransform(),
      ease: "none",
      scrollTrigger: {
        trigger: triggerElement,
        start,
        end,
        scrub,
        onUpdate: (self) => {
          // Optional: Add custom logic on scroll update
        },
      },
    });

    return () => {
      animation.kill();
    };
  }, [speed, direction, trigger, start, end, scrub]);

  return elementRef;
}

// Hook for fade-in animations with scroll
export function useFadeIn(options: {
  delay?: number;
  duration?: number;
  trigger?: string;
  start?: string;
  end?: string;
  y?: number;
} = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const {
    delay = 0,
    duration = 1,
    trigger,
    start = "top 80%",
    end = "bottom 20%",
    y = 50,
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const triggerElement = trigger ? document.querySelector(trigger) : element;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y,
    });

    // Create animation
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerElement,
        start,
        end,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      animation.kill();
    };
  }, [delay, duration, trigger, start, end, y]);

  return elementRef;
}

// Hook for scale animations
export function useScaleIn(options: {
  delay?: number;
  duration?: number;
  trigger?: string;
  start?: string;
  scale?: number;
} = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const {
    delay = 0,
    duration = 1,
    trigger,
    start = "top 80%",
    scale = 0.8,
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const triggerElement = trigger ? document.querySelector(trigger) : element;

    // Set initial state
    gsap.set(element, {
      scale,
      opacity: 0,
    });

    // Create animation
    const animation = gsap.to(element, {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: triggerElement,
        start,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      animation.kill();
    };
  }, [delay, duration, trigger, start, scale]);

  return elementRef;
}
