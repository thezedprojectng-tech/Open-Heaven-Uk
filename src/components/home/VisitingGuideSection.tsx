'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What should I wear?',
    answer:
      'Wear whatever makes you comfortable. You will see people in casual jeans and t-shirts, smart casual, and traditional dress. There is no dress code.',
  },
  {
    question: 'What about my kids?',
    answer:
      'We have dedicated, secure classes for young children through secondary youth. Our trained volunteers are fully DBS-checked, and parent check-in opens 15 minutes before the service.',
  },
  {
    question: 'Do I have to believe already?',
    answer:
      'Not at all. You are warmly welcome to come and explore, observe, and ask honest questions at your own pace.',
  },
  {
    question: 'Where do I park?',
    answer:
      'Dedicated church parking bays are located behind The Exchange with full step-free access. Edgware Tube Station is also just a 4-minute walk away.',
  },
];

export function VisitingGuideSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: '01',
      title: 'Arrive',
      desc: 'Find parking, grab a coffee, and say hello to our welcome team. They’ll show you around.',
    },
    {
      num: '02',
      title: 'Worship',
      desc: 'Songs, prayer, teaching, and a few quiet moments. Sing along or just listen.',
    },
    {
      num: '03',
      title: 'Connect',
      desc: 'Stay for a while afterward. Meet a few people and see where you might fit.',
    },
    {
      num: '04',
      title: 'Grow',
      desc: 'When you’re ready, find a group, a ministry, or a place to serve.',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 border-t border-line" aria-labelledby="visit-guide-heading">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Tag + Title on left, subtitle on right */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-8 border-b border-line mb-10"
        >
          <div className="lg:col-span-8 space-y-2">
            <span className="font-mono-meta text-xs text-accent font-semibold block">
              02 — YOUR FIRST SUNDAY
            </span>
            <h2
              id="visit-guide-heading"
              className="font-display font-bold text-ink text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]"
            >
              What happens when I visit?
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
              Sundays last about 75 minutes. Wear whatever you like. Nobody will ask you to stand up and introduce yourself.
            </p>
          </div>
        </motion.div>

        {/* 4 Numbered Columns on Hairline with Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line pb-16 border-b border-line">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-6 sm:py-0 sm:px-6 first:pl-0 last:pr-0 space-y-3"
            >
              <span className="font-display text-4xl sm:text-5xl text-accent font-normal block leading-none">
                {step.num}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Area: Left "A few things people ask", Right Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-14 items-start">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-3"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              A few things people ask
            </h3>
            <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
              Still wondering about something? Just ask. We’re happy to help.
            </p>
          </motion.div>

          <div className="lg:col-span-7 divide-y divide-line">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question} className="py-4 first:pt-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent py-1 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-body text-base sm:text-lg font-medium text-ink group-hover:text-accent transition-colors">
                      {item.question}
                    </span>
                    <span className="text-accent text-xl font-light shrink-0 ml-4 transition-transform duration-200">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2 pb-2 text-sm text-muted leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
