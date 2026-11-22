'use client';

import React from 'react';
import Link from 'next/link';
import { SafeImage } from '@/components/ui/SafeImage';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export function PlaceForYouSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 sm:py-24" aria-labelledby="welcome-heading">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Sanctuary Photo matching curved wooden pew in screenshot */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/12] rounded-2xl overflow-hidden border border-line shadow-xs bg-surface group">
              {/* Photography of sanctuary curved wooden pew */}
              <SafeImage
                src="/church-pew.jpg"
                alt="Wooden sanctuary curved seating inside church hall"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-editorial"
              />
            </div>
          </motion.div>

          {/* Right: Copy matching screenshot */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="font-mono-meta text-xs text-accent font-semibold block">
                01 — WELCOME
              </span>
              <h2
                id="welcome-heading"
                className="font-display font-bold text-ink text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]"
              >
                There’s a place for you here.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-muted font-body leading-relaxed">
              <p>
                We’re a mixed bunch: lifelong believers, curious skeptics, young families, and people who haven’t been to church in years.
              </p>
              <p className="text-sm sm:text-base text-muted">
                We’re learning to follow Jesus, care for one another, and serve this city. You don’t have to have everything figured out. Most of us don’t.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-ink hover:text-accent transition-colors group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
