// components/AnimatedCardRow.jsx
"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedCardRow({ children, delay = 0, id }) {
  // 1. Hook to track if element is visible
  const [ref, inView] = useInView({
    triggerOnce: true,     // Only animate the first time it comes into view
    threshold: 0.1,        // Start animation when 10% of element is visible
    rootMargin: '0px 0px -50px 0px', // Trigger a bit earlier (50px from bottom)
  });

  // 2. Dynamically create the Tailwind delay class
  const delayClass = delay > 0 ? `delay-[${delay}ms]` : ''; 
  // NOTE: Use [] syntax for arbitrary values like 'delay-[200ms]' if you haven't configured them in tailwind.config.js

  // 3. Define the animation based on the 'inView' state
  const animationClasses = `
    transition-all duration-1000 ease-out
    ${delayClass}
    ${inView 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-12'}
  `;

  return (
    <div
        ref={ref}
        id={id}
        className={animationClasses}
    >
      {children}
    </div>
  );
}