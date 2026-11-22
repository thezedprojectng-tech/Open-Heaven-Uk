'use client';

import React from 'react';
import Link from 'next/link';
import { SafeImage } from '@/components/ui/SafeImage';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full pt-4 sm:pt-8 pb-12 sm:pb-16" aria-labelledby="about-hero-title">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag matching screenshot */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 sm:mb-4"
        >
          <span className="font-mono-meta text-xs font-semibold text-accent tracking-widest block">
            ABOUT US
          </span>
        </motion.div>

        {/* 2-Column Header Row matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 sm:mb-10">
          {/* Left: 3-line Bold Headline */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 space-y-1"
          >
            <h1
              id="about-hero-title"
              className="font-display font-bold text-ink text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[1.08] tracking-tight"
            >
              <span className="block">Ordinary people.</span>
              <span className="block">Learning together.</span>
              <span className="block text-accent">Serving our city.</span>
            </h1>
          </motion.div>

          {/* Right: Paragraph + Two Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-5 lg:pb-1"
          >
            <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
              We’re a neighborhood church for people at every stage of faith, including none at all.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <Link
                href="/im-new"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-on-accent font-medium text-sm hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all shadow-xs hover:shadow-md w-full sm:w-auto lg:w-fit"
              >
                <span>Plan Your Visit</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-line bg-surface/70 text-ink font-medium text-sm hover:bg-surface hover:border-ink/30 hover:-translate-y-0.5 active:translate-y-0 transition-all w-full sm:w-auto lg:w-fit"
              >
                <span>Our Beliefs</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Panoramic Photo matching screenshot (dusk water photo with rounded corners) */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded overflow-hidden shadow-sm bg-ink group"
        >
          <SafeImage
            src="/Footer.jpg"
            alt="Atmospheric sunset over calm water with wooden posts"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1440px"
            className="object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-editorial"
          />
        </motion.div>
      </div>
    </section>
  );
}
