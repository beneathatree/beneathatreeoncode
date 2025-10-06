// components/AnimatedCardRow.jsx
"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Wraps a card row to apply a fade-in and slide-up animation when it enters the viewport.
 * * @param {object} props
 * @param {number} props.delay - Delay in milliseconds (e.g., 200, 400) for staggered effects.
 * @param {React.ReactNode} props.children - The content to animate (your card row div).
 */
export default function AnimatedCardRow({ children, delay = 0, id }) {
  const [ref, inView] = useInView({
    triggerOnce: true,     // Only animate once
    threshold: 0.1,        // Trigger when 10% of the element is visible
    rootMargin: '-50px 0px', // Start a little early
  });

  // Dynamically create the Tailwind delay class
  const delayClass = delay > 0 ? `delay-${delay}` : '';

  // Animation classes
  const animationClasses = `
    transition-all duration-1000 ease-out
    ${delayClass}
    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
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