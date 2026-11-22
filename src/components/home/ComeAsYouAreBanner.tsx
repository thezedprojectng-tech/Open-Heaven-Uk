'use client';

import React from 'react';
import Link from 'next/link';
import { SafeImage } from '@/components/ui/SafeImage';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export function ComeAsYouAreBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[520px] flex items-center overflow-hidden bg-[var(--ink)] text-paper-on-dark">
      {/* Background sunset / dusk water photo with wooden pilings on the right */}
      <SafeImage
        src="/Footer.jpg"
        alt="Atmospheric sunset over calm water with wooden posts"
        fill
        sizes="100vw"
        className="object-cover opacity-75"
      />

      {/* Dark gradient overlay for readability matching screenshot */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/40" />

      {/* Content matching screenshot */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl space-y-5"
        >
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-paper-on-dark tracking-tight leading-[1.05]">
            Come as you are.
          </h2>

          <p className="font-body text-base sm:text-lg text-paper-on-dark/90 leading-relaxed">
            Whether you’re exploring faith, returning to church, or looking for a community to call home, we’d love to meet you.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/im-new"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-on-accent font-medium text-xs sm:text-sm hover:bg-accent-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all shadow-md"
            >
              <span>Plan Your Visit</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-line-on-dark bg-ink/20 backdrop-blur-xs text-paper-on-dark font-medium text-xs sm:text-sm hover:bg-surface-dark hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
