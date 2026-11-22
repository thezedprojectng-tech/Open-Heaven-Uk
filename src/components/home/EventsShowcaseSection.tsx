'use client';

import React from 'react';
import Link from 'next/link';
import { EventItem } from '@/types';
import { SafeImage } from '@/components/ui/SafeImage';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface EventsShowcaseSectionProps {
  events: EventItem[];
}

export function EventsShowcaseSection({ events }: EventsShowcaseSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const featured = events[0];

  const defaultList = [
    {
      date: 'November 18',
      title: 'Prayer Night',
      category: 'PRAYER',
      time: '7:00 PM',
      venue: 'The Chapel',
      slug: 'prayer-night',
    },
    {
      date: 'November 20',
      title: 'Youth Gathering',
      category: 'YOUTH',
      time: '7:00 PM',
      venue: 'Student Center',
      slug: 'youth-gathering',
    },
    {
      date: 'December 5',
      title: 'Volunteer Day',
      category: 'SERVING',
      time: '9:00 AM',
      venue: 'Community Food Pantry',
      slug: 'volunteer-day',
    },
    {
      date: 'December 24',
      title: 'Christmas Eve Worship',
      category: 'WORSHIP',
      time: '5:00 PM',
      venue: 'Sanctuary',
      slug: 'christmas-eve-worship',
    },
  ];

  function formatDisplayDate(dateStr: string) {
    if (!dateStr) return 'November 18';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateStr;
    }
  }

  return (
    <section className="w-full py-16 sm:py-24 border-t border-line" aria-labelledby="events-heading">
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
              04 — GATHER
            </span>
            <h2
              id="events-heading"
              className="font-display font-bold text-ink text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]"
            >
              Upcoming events
            </h2>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ink hover:text-accent transition-colors pb-1 group"
          >
            <span>View All Events</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Featured Top Card matching screenshot */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 rounded-2xl overflow-hidden border border-line shadow-xs bg-surface/70"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
            {/* Photo on left (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-surface border border-line group">
                <SafeImage
                  src={featured?.image_url || '/community-dinner.jpg'}
                  alt={featured?.image_alt || 'Community dinner feast table'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-editorial"
                />
              </div>
            </div>

            {/* Details on right (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono-meta text-[10px] text-accent font-bold tracking-wider block">
                COMMUNITY
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-tight">
                {featured?.title || 'Community Dinner'}
              </h3>

              <div className="space-y-0.5 text-xs sm:text-sm text-muted font-body">
                <p className="font-semibold text-ink">
                  {featured?.date ? formatDisplayDate(featured.date) : 'Nov 14, 2026'}
                </p>
                <p className="text-muted font-mono text-xs">
                  {featured?.start_time || '6:30 PM'} {featured?.venue ? ` · ${featured.venue}` : ' · Main Hall'}
                </p>
              </div>

              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                {featured?.description ||
                  'Bring a dish if you can, or just bring yourself. Long tables, good food, and plenty of room for people who are new.'}
              </p>

              <div className="pt-2">
                <Link
                  href={featured ? `/events/${featured.slug}` : '/events'}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-on-accent font-medium text-xs sm:text-sm hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xs hover:shadow-md"
                >
                  <span>Save Your Seat</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Rows on hairlines matching screenshot */}
        <div className="divide-y divide-line">
          {(events.length > 1 ? events.slice(1, 5) : defaultList).map((evt, idx) => {
            const isCustom = 'category' in evt;
            const dateText = isCustom ? (evt as any).date : formatDisplayDate(evt.date);
            const titleText = evt.title;
            const categoryText = isCustom ? (evt as any).category : 'GATHER';
            const timeText = isCustom ? (evt as any).time : evt.start_time;
            const venueText = evt.venue;
            const slug = evt.slug;

            return (
              <motion.div
                key={slug || idx}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Link
                  href={`/events/${slug}`}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-3 py-5 sm:py-6 items-baseline hover:bg-surface/60 px-3 sm:px-4 -mx-3 sm:-mx-4 transition-colors rounded-xl"
                >
                  <div className="md:col-span-3">
                    <span className="font-body text-base font-bold text-accent">
                      {dateText}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h4 className="font-display text-base sm:text-lg font-bold text-ink group-hover:text-accent transition-colors">
                      {titleText}
                    </h4>
                  </div>

                  <div className="md:col-span-2">
                    <span className="font-mono-meta text-[10px] text-muted font-semibold block">
                      {categoryText}
                    </span>
                  </div>

                  <div className="md:col-span-2 text-xs sm:text-sm text-muted font-body">
                    <p className="font-semibold">{timeText}</p>
                    <p className="text-muted text-xs">{venueText}</p>
                  </div>

                  <div className="md:col-span-1 text-right flex justify-end">
                    <ArrowRight className="h-4 w-4 text-muted group-hover:text-accent group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
