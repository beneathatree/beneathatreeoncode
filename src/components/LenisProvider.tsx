// LenisProvider.tsx
'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable Lenis on small screens (<= 767px)
    if (typeof window !== 'undefined' && window.innerWidth <= 767) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      gestureOrientation: 'vertical',
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
