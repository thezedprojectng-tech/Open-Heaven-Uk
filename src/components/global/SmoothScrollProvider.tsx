'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScrollProvider — powered by Lenis
 *
 * Lenis gives buttery-smooth momentum scroll with correct wheel,
 * touch, and keyboard handling out of the box.
 *
 * Config:
 *   lerp: 0.1  → easing factor (0 = instant, 1 = never arrives).
 *               0.1 is Lenis' sweet-spot for a luxurious but responsive feel.
 *   duration:  not set — lerp mode is used instead (feels more natural).
 *   smoothWheel: true  → intercepts mouse wheel for smooth scroll.
 *   touchMultiplier: 1.5 → slightly amplified touch momentum.
 *
 * prefers-reduced-motion: Lenis is not initialised so the browser's
 * native instant scroll is used instead.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect prefers-reduced-motion — skip Lenis, use native scroll
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      lerp: 0.1,           // Easing strength — lower = smoother/slower
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Drive Lenis with requestAnimationFrame
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
