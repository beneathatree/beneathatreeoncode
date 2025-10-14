'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis with premium smooth scrolling configuration
    const lenis = new Lenis({
      lerp: 0.1, // Linear interpolation factor for smoothness (0.1 = very smooth)
      duration: 1.2, // Animation duration
      orientation: 'vertical', // Scroll direction
      gestureOrientation: 'vertical', // Gesture direction
      smoothWheel: true, // Enable smooth wheel scrolling
      wheelMultiplier: 1, // Mouse wheel sensitivity
      touchMultiplier: 2, // Touch sensitivity
      infinite: false, // Disable infinite scroll
    });

    // Animation frame loop for smooth scrolling
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
