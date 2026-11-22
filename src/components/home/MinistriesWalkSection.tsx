'use client';

import React from 'react';
import Link from 'next/link';
import { SafeImage } from '@/components/ui/SafeImage';
import { ArrowRight } from 'lucide-react';
import { Ministry } from '@/types';
import { motion, useReducedMotion } from 'motion/react';

interface MinistriesWalkSectionProps {
  ministries: Ministry[];
}

export function MinistriesWalkSection({ ministries }: MinistriesWalkSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 sm:py-24 border-t border-line" aria-labelledby="walk-heading">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row matching screenshot */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-line mb-10"
        >
          <div className="space-y-2">
            <span className="font-mono-meta text-xs text-accent font-semibold block">
              03 — COMMUNITY
            </span>
            <h2
              id="walk-heading"
              className="font-display font-bold text-ink text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]"
            >
              Find people to walk with.
            </h2>
          </div>

          <Link
            href="/ministries"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ink hover:text-accent transition-colors pb-1 group"
          >
            <span>View All Ministries</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* 2-Column Grid: Left Featured Image Card, Right 3 Stacked Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Kids & Families Photo Card */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-line shadow-xs bg-surface group">
              <SafeImage
                src="/church-garden.jpg"
                alt="Sunlight filtering through trees for youth and families"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-editorial"
              />
            </div>
            <div className="space-y-1.5 pt-1">
              <span className="font-mono-meta text-[10px] text-accent font-bold tracking-wider block">
                FAMILIES
              </span>
              <h3 className="font-display text-2xl font-bold text-ink">
                Kids &amp; Families
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                A safe, joyful place for children to ask big questions, make friends, and discover faith, while parents find support of their own.
              </p>
              <div className="pt-2">
                <Link
                  href="/young-saints"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ink hover:text-accent transition-colors group"
                >
                  <span>Explore Kids &amp; Families</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: 3 Stacked Ministry Rows with hairlines */}
          <div className="lg:col-span-6 divide-y divide-line">
            {/* Item 1: Students */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="pb-6 space-y-1.5"
            >
              <span className="font-mono-meta text-[10px] text-accent font-bold tracking-wider block">
                YOUTH
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                Students
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                Middle and high schoolers finding honest conversations, good friends, and adults who show up for them.
              </p>
              <div className="pt-1">
                <Link
                  href="/young-saints"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ink hover:text-accent transition-colors group"
                >
                  <span>Explore Students</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>

            {/* Item 2: Small Groups */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="py-6 space-y-1.5"
            >
              <span className="font-mono-meta text-[10px] text-accent font-bold tracking-wider block">
                GROUPS
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                Small Groups
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                Eight to twelve people around a table each week. It’s where most of us stopped being strangers.
              </p>
              <div className="pt-1">
                <Link
                  href="/home-groups"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ink hover:text-accent transition-colors group"
                >
                  <span>Find a Group</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>

            {/* Item 3: Serving */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-6 space-y-1.5"
            >
              <span className="font-mono-meta text-[10px] text-accent font-bold tracking-wider block">
                SERVING
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                Serving
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                Make coffee, hold babies, run sound, or stock the food pantry. There’s a place for what you’re good at.
              </p>
              <div className="pt-1">
                <Link
                  href="/ministries"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ink hover:text-accent transition-colors group"
                >
                  <span>Start Serving</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
