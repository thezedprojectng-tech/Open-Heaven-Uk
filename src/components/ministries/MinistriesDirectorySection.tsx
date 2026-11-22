'use client';

import React from 'react';
import Link from 'next/link';
import { SafeImage } from '@/components/ui/SafeImage';
import { ArrowRight, Users, Clock, MapPin } from 'lucide-react';
import { Ministry } from '@/types';
import { motion, useReducedMotion } from 'motion/react';

interface MinistriesDirectorySectionProps {
  ministries: Ministry[];
}

export function MinistriesDirectorySection({ ministries }: MinistriesDirectorySectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const curatedList = [
    {
      tag: 'YOUTH',
      title: 'Students',
      desc: 'Middle and high schoolers finding honest conversations, good friends, and adults who show up for them.',
      href: '/young-saints',
      cta: 'Explore Students',
    },
    {
      tag: 'GROUPS',
      title: 'Small Groups',
      desc: 'Eight to twelve people around a table each week. It’s where most of us stopped being strangers.',
      href: '/home-groups',
      cta: 'Find a Group',
    },
    {
      tag: 'SERVING',
      title: 'Serving',
      desc: 'Make coffee, hold babies, run sound, or stock the food pantry. There’s a place for what you’re good at.',
      href: '/contact',
      cta: 'Start Serving',
    },
    {
      tag: 'ADULTS',
      title: 'Young Adults',
      desc: 'Twenties and thirties figuring out faith, work, and life in the city together.',
      href: '/ministries/ignite-youth',
      cta: 'Explore Young Adults',
    },
    {
      tag: 'OUTREACH',
      title: 'Community Outreach',
      desc: 'Partnering with neighbors and local organizations to meet real needs close to home.',
      href: '/ministries/community-outreach',
      cta: 'Get Involved',
    },
    {
      tag: 'WORSHIP',
      title: 'Worship',
      desc: 'Singers, players, and tech volunteers who help our Sunday gatherings feel honest and alive.',
      href: '/ministries/worship-collective',
      cta: 'Join the Team',
    },
  ];

  return (
    <section id="all-ministries" className="w-full py-16 sm:py-24 border-t border-line" aria-labelledby="walk-heading">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row matching screenshot */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="pb-8 border-b border-line mb-10"
        >
          <div className="space-y-2">
            <span className="font-mono-meta text-xs text-accent font-semibold block">
              02 — COMMUNITY
            </span>
            <h2
              id="walk-heading"
              className="font-display font-bold text-ink text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]"
            >
              Find people to walk with.
            </h2>
          </div>
        </motion.div>

        {/* 2-Column Grid: Left Featured Image Card, Right 6 Stacked Rows matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-16 border-b border-line">
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

          {/* Right: 6 Stacked Ministry Rows with hairlines matching screenshot */}
          <div className="lg:col-span-6 divide-y divide-line">
            {curatedList.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${idx === 0 ? 'pb-6' : idx === curatedList.length - 1 ? 'pt-6' : 'py-6'} space-y-1.5`}
              >
                <span className="font-mono-meta text-[10px] text-accent font-bold tracking-wider block">
                  {item.tag}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-1">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ink hover:text-accent transition-colors group"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Database Ministries Grid */}
        {ministries.length > 0 && (
          <div className="pt-16 space-y-8">
            <div className="space-y-1">
              <span className="font-mono-meta text-xs text-accent font-semibold block">
                ALL MINISTRIES &amp; FELLOWSHIPS
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink">
                Explore every community at Open Heavens
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministries.map((ministry) => (
                <div
                  key={ministry.id}
                  className="rounded-2xl border border-line bg-surface p-6 shadow-xs hover:border-accent/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xl text-ink">
                      {ministry.name}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-muted line-clamp-3 leading-relaxed">
                      {ministry.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-line text-xs text-muted">
                    {ministry.times && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
                        <span className="truncate">{ministry.times}</span>
                      </div>
                    )}
                    {ministry.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
                        <span className="truncate">{ministry.location}</span>
                      </div>
                    )}
                    {ministry.leader_name && (
                      <div className="flex items-center gap-2">
                        <Users className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
                        <span className="truncate">{ministry.leader_name}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/ministries/${ministry.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent hover:text-[var(--accent-hover)] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
