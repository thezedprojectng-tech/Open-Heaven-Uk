'use client';

import React from 'react';

/**
 * TickerBanner — infinite CSS animation marquee.
 * No Framer Motion: uses a pure CSS keyframe so it works
 * in every environment without hydration or chunk issues.
 * prefers-reduced-motion: pauses the animation.
 */

const ITEMS = [
  'Come as you are',
  "There's room for you here",
  'Find people to walk with',
  'Take your next step',
  'Sundays at 10:30 AM',
  'In-Person & Online',
  'All Are Welcome',
];

export function TickerBanner() {
  // Duplicate the list so we have two identical halves for seamless loop
  const track = [...ITEMS, ...ITEMS];

  return (
    <div
      className="w-full bg-accent text-on-accent py-3.5 overflow-hidden select-none"
      role="region"
      aria-label="Church highlights scrolling marquee"
    >
      {/* Inject the keyframe and pause rule inline — avoids globals.css coupling */}
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker-scroll 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation-play-state: paused; }
        }
      `}</style>

      <div className="ticker-track flex items-center gap-0 whitespace-nowrap will-change-transform w-max">
        {track.map((item, i) => (
          <React.Fragment key={i}>
            <span className="text-lg sm:text-2xl font-medium tracking-wide px-5">
              {item}
            </span>
            <span className="text-on-accent/50 select-none text-lg" aria-hidden="true">
              &middot;
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
