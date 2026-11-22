'use client';

import React, { useState } from 'react';
import { submitContactForm } from '@/lib/actions/forms';
import { motion, useReducedMotion } from 'motion/react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export function ContactMessageSection() {
  const shouldReduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const formData = new FormData(e.currentTarget);
    const res = await submitContactForm(formData);
    setLoading(false);

    if (res.success) {
      setFeedback({ success: true, message: res.message || 'Thank you! Your message has been sent.' });
      (e.target as HTMLFormElement).reset();
    } else {
      setFeedback({ success: false, message: res.error || 'Failed to send message. Please try again.' });
    }
  }

  return (
    <section
      id="message-section"
      className="w-full py-16 sm:py-24 border-t border-line bg-paper"
      aria-labelledby="contact-form-heading"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description (5 cols) */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <span className="font-mono-meta text-xs text-accent font-semibold tracking-widest block">
              01 &middot; SAY HELLO
            </span>

            <h2
              id="contact-form-heading"
              className="font-display font-bold text-ink text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]"
            >
              Send us a message.
            </h2>

            <p className="font-body text-sm sm:text-base text-muted leading-relaxed max-w-md">
              We read every note and usually reply within a couple of days.
            </p>
          </motion.div>

          {/* Right Column: Clean Form matching screenshot (7 cols) */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="websiteHoneypot"
                tabIndex={-1}
                autoComplete="off"
                className="sr-only"
                aria-hidden="true"
              />

              {/* Feedback Alert */}
              {feedback && (
                <div
                  className={`p-4 rounded-lg text-sm flex items-start gap-3 ${
                    feedback.success
                      ? 'bg-success-surface text-success border border-success/30'
                      : 'bg-danger-surface text-danger border border-danger/30'
                  }`}
                  role="alert"
                >
                  {feedback.success ? (
                    <CheckCircle2 className="h-5 w-5 text-admin-teal shrink-0 mt-0.5" aria-hidden="true" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-danger shrink-0 mt-0.5" aria-hidden="true" />
                  )}
                  <span>{feedback.message}</span>
                </div>
              )}

              {/* Field 1: NAME */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-fullName"
                  className="font-mono-meta text-[11px] font-semibold text-muted uppercase tracking-wider block"
                >
                  NAME
                </label>
                <input
                  id="contact-fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-line bg-surface/90 text-ink placeholder:text-muted text-sm focus:outline-hidden focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-2xs"
                />
              </div>

              {/* Field 2: EMAIL */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="font-mono-meta text-[11px] font-semibold text-muted uppercase tracking-wider block"
                >
                  EMAIL
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-line bg-surface/90 text-ink placeholder:text-muted text-sm focus:outline-hidden focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-2xs"
                />
              </div>

              {/* Field 3: MESSAGE */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="font-mono-meta text-[11px] font-semibold text-muted uppercase tracking-wider block"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-line bg-surface/90 text-ink placeholder:text-muted text-sm focus:outline-hidden focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-y shadow-2xs"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-accent text-on-accent font-medium text-sm hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all shadow-xs hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
