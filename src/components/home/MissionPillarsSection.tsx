'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export function MissionPillarsSection() {
  const shouldReduceMotion = useReducedMotion();
  const bullets = [
    'Sunday worship',
    'Local community',
    'All ages welcome',
  ];

  return (
    <section className="w-full py-16 sm:py-24" aria-labelledby="about-heading">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag & Massive Headline matching screenshot */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-10 sm:mb-12"
        >
          <span className="font-mono-meta text-xs text-accent font-semibold block">
            06 — ABOUT
          </span>
          <h2
            id="about-heading"
            className="font-display font-bold text-ink text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] max-w-4xl"
          >
            We’re learning to love God, love people, and serve our city.
          </h2>
        </motion.div>

        {/* Horizontal Line then 2-Column Details matching screenshot */}
        <div className="pt-8 border-t border-line grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: 3 bullet points with terracotta dots */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-3"
          >
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
                <span className="font-body text-base sm:text-lg font-medium text-ink">
                  {b}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Right: Paragraph + Get In Touch link matching screenshot */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-4"
          >
            <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
              We’re a neighborhood church for people at every stage of faith, including none at all. We gather on Sundays, eat together often, and try to show up for this city in practical ways.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ink hover:text-accent transition-colors group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
