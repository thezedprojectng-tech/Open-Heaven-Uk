'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function ScriptureQuoteBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="w-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-hover)] to-[var(--ink)] text-paper-on-dark py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Scripture verse"
    >
      <div className="max-w-8xl mx-auto text-center space-y-4">
        <motion.blockquote
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl leading-snug sm:leading-tight tracking-tight text-paper-on-dark/95 max-w-4xl mx-auto"
        >
          “To do justly, and to love mercy, and to walk humbly with thy God.”
        </motion.blockquote>
        <motion.cite
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono-meta text-xs sm:text-sm tracking-widest text-paper-on-dark/70 block uppercase not-italic"
        >
          Micah 6:8, KJV
        </motion.cite>
      </div>
    </section>
  );
}
