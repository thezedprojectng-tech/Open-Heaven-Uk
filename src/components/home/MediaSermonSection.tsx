'use client';

import React from 'react';
import Link from 'next/link';
import { Sermon } from '@/types';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface MediaSermonSectionProps {
  latestSermon: Sermon | null;
}

export function MediaSermonSection({ latestSermon }: MediaSermonSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const sermon = latestSermon || {
    id: 'sample',
    title: 'Finding Your Way Home',
    slug: 'finding-your-way-home',
    date: 'Nov 1, 2026',
    speaker: 'Pastor David & Bola',
    series_title: 'The Long Road Back',
    youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    audio_url: '#',
    notes: 'Luke 15:11-32',
    is_featured: true,
    status: 'published' as const,
  };

  const recentMessages = [
    { title: 'Faith in Ordinary Life', speaker: 'Pastor David', duration: '29 min' },
    { title: 'The Courage to Begin', speaker: 'Sister Bola', duration: '31 min' },
    { title: 'Hope for the Journey', speaker: 'Deacon Marcus', duration: '27 min' },
  ];

  return (
    <section className="w-full bg-[var(--paper)] text-paper-on-dark py-16 sm:py-24" aria-labelledby="teaching-heading">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Latest Message Details matching screenshot */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="space-y-2">
              <span className="font-mono-meta text-xs text-accent font-semibold block">
                05 — LATEST MESSAGE
              </span>
              <p className="text-xs sm:text-sm text-muted-on-dark font-mono">
                {sermon.series_title || 'The Long Road Back'}
              </p>
              <h2
                id="teaching-heading"
                className="font-display font-bold text-paper-on-dark text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]"
              >
                {sermon.title}
              </h2>
            </div>

            {/* Meta Line matching screenshot */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-on-dark font-mono">
              <span>{sermon.speaker}</span>
              <span>·</span>
              <span>{sermon.date}</span>
              <span>·</span>
              <span>{sermon.notes || 'Luke 15:11-32'}</span>
              <span>·</span>
              <span>34 min</span>
            </div>

            <p className="text-sm sm:text-base text-paper-on-dark/90 font-body leading-relaxed max-w-xl">
              What the story of the prodigal son says to anyone who wonders if it’s too late to come back.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/watch"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-on-accent font-medium text-xs sm:text-sm hover:bg-accent-hover hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xs"
              >
                <span>Watch Message</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <Link
                href="/watch"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-line-on-dark text-paper-on-dark font-medium text-xs sm:text-sm hover:bg-surface-dark hover:border-ink/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Listen to Audio</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Recent Messages List matching screenshot */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 space-y-4 pt-4 lg:pt-0"
          >
            <span className="font-mono-meta text-[11px] text-muted-on-dark font-semibold tracking-wider block">
              RECENT MESSAGES
            </span>

            <div className="divide-y divide-line-on-dark">
              {recentMessages.map((msg) => (
                <Link
                  key={msg.title}
                  href="/watch"
                  className="block py-4 first:pt-2 group"
                >
                  <h4 className="font-display text-base font-bold text-paper-on-dark group-hover:text-accent transition-colors">
                    {msg.title}
                  </h4>
                  <p className="text-xs text-muted-on-dark font-mono mt-1">
                    {msg.speaker} · {msg.duration}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
