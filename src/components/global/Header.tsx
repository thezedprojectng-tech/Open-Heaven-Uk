'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ServiceTime } from '@/types';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  serviceTimes?: ServiceTime[];
}

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/im-new', label: 'Visit' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/events', label: 'Events' },
  { href: '/watch', label: 'Messages' },
  { href: '/contact', label: 'Contact' },
];

export function Header({ serviceTimes = [] }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full pt-3 sm:pt-4 pb-2 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-8xl mx-auto pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-paper/95 backdrop-blur-md rounded-2xl border border-line shadow-md px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4"
        >
          {/* Left: Terracotta Dot + Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg py-1 px-1 transition-transform hover:scale-[1.02]"
          >
            <span className="font-serif-display text-base sm:text-lg font-semibold text-ink tracking-tight">
              Open Heavens
            </span>
          </Link>

          {/* Center: Nav links with rounded-lg active button */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-accent text-on-accent shadow-xs scale-100'
                      : 'text-muted hover:text-ink hover:bg-surface/80'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Rounded-lg Terracotta CTA Button */}
          <div className="flex items-center gap-2">
            <Link
              href="/im-new"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-lg bg-accent text-on-accent text-xs sm:text-sm font-medium hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all shadow-xs"
            >
              <span>Plan Your Visit</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-ink rounded-lg hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Mobile Animated Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 bg-paper rounded-2xl border border-line shadow-lg p-5 pointer-events-auto"
            >
              <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-accent text-on-accent font-semibold'
                          : 'text-ink hover:bg-surface'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="pt-3 border-t border-line flex flex-col gap-2">
                  <Link
                    href="/im-new"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 rounded-lg bg-accent text-on-accent font-medium text-sm flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Plan Your Visit</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
