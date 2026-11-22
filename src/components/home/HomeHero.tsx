'use client';

import React from 'react';
import Link from 'next/link';
import { SafeImage } from '@/components/ui/SafeImage';
import { ArrowRight } from 'lucide-react';
import { SiteSettings, ServiceTime } from '@/types';
import { motion, useReducedMotion } from 'motion/react';

interface HomeHeroProps {
  settings: SiteSettings | null;
  serviceTimes: ServiceTime[];
}

export function HomeHero({ settings, serviceTimes }: HomeHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const sundayService = serviceTimes.find((s) => s.day_of_week === 'Sunday') || serviceTimes[0];
  const serviceTimeText = sundayService
    ? `${sundayService.start_time}`
    : '10:30 AM';
  const locationText = settings
    ? `${settings.address_line1 || 'Edgware'}, ${settings.city || 'London'}`
    : 'Edgware, London';

  return (
    <section className="w-full pt-4 sm:pt-8 pb-12 sm:pb-16" aria-labelledby="hero-title">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker Tag with Fade In */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 sm:mb-4"
        >
          <span className="font-mono-meta text-xs font-semibold text-accent tracking-widest block">
            WELCOME HOME
          </span>
        </motion.div>

        {/* 2-Column Hero Header Row matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 sm:mb-10">
          {/* Left: 3-line Bold Headline with Typing Animation */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 space-y-1"
          >
            <h1
              id="hero-title"
              className="font-display font-bold text-ink text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[1.08] tracking-tight"
            >
              <span className="block">Find your people.</span>
              <span className="block">Grow in faith.</span>
              <span className="block text-accent">Live with purpose.</span>
            </h1>
          </motion.div>

          {/* Right: Paragraph + Two Stacked Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-5 lg:pb-1"
          >
            <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
              Open Heavens is a community of ordinary people learning to follow Jesus together. Come as you are, questions included.
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
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-line bg-surface/70 text-ink font-medium text-sm hover:bg-surface hover:border-ink/30 hover:-translate-y-0.5 active:translate-y-0 transition-all w-full sm:w-auto lg:w-fit"
              >
                <span>Explore Our Community</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Panoramic Photo framed with rounded-2xl border with Scroll Reveal */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded overflow-hidden border border-line shadow-sm bg-surface group"
        >
          {/* TODO: Replace with photography of OHCC congregation and Edgware gathering */}
          <SafeImage
            src="/Hero.avif"
            alt="People and church community gathered together outdoors in fellowship"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1440px"
            className="object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-editorial"
          />
        </motion.div>

        {/* Quick-Info Bar directly beneath photo with 4 columns matching screenshot */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 divide-y sm:divide-y-0 sm:divide-x divide-line rounded-2xl bg-surface/80 border border-line p-4 sm:p-6 shadow-xs"
        >
          {/* Col 1 */}
          <div className="lg:col-span-3 pb-4 sm:pb-0 sm:px-4 first:pl-0 space-y-1">
            <span className="font-mono-meta text-[10px] text-muted block">SUNDAY WORSHIP</span>
            <p className="font-body text-base font-bold text-ink">{serviceTimeText}</p>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-4 py-4 sm:py-0 sm:px-4 space-y-1">
            <span className="font-mono-meta text-[10px] text-muted block">LOCATION</span>
            <p className="font-body text-sm font-semibold text-ink truncate">{locationText}</p>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-3 py-4 sm:py-0 sm:px-4 space-y-1">
            <span className="font-mono-meta text-[10px] text-muted block">NEXT GATHERING</span>
            <p className="font-body text-sm font-semibold text-ink">Sunday morning</p>
          </div>

          {/* Col 4 */}
          <div className="lg:col-span-2 pt-4 sm:pt-0 sm:pl-4 flex items-center justify-start lg:justify-end">
            <Link
              href="/im-new"
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-accent text-on-accent font-medium text-xs sm:text-sm hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xs"
            >
              <span>Plan Your Visit</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
