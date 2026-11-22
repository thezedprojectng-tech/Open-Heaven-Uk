import React from 'react';
import Link from 'next/link';
import { SiteSettings, ServiceTime } from '@/types';

interface FooterProps {
  settings: SiteSettings;
  serviceTimes: ServiceTime[];
}

export function Footer({ settings, serviceTimes }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const addressLine = settings
    ? `${settings.address_line1 || 'Edgware'}, ${settings.city || 'London'}`
    : 'Edgware, London';
  const phone = settings?.primary_phone || '020 8952 0000';
  const email = settings?.contact_email || 'info@openheavens.org.uk';

  // Get active Sunday services
  const sundayServices = serviceTimes.filter((s) => s.day_of_week === 'Sunday');
  const service1 = sundayServices[0]?.start_time || '10:30 AM';
  const service2 = sundayServices[1]?.start_time;

  return (
    <footer className="w-full bg-[var(--paper)] text-paper-on-dark/90 border-t border-[var(--accent)]/30 shadow-lg mt-auto" role="contentinfo">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* 5-Column Grid matching screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-line-on-dark">
          {/* Column 1: Brand & Tagline (4 cols) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 space-y-3">
            <h2 className="font-serif-display text-xl sm:text-2xl font-semibold text-paper-on-dark tracking-tight">
              {settings?.church_name || 'Open Heavens'}
            </h2>
            <p className="text-xs sm:text-sm text-muted-on-dark font-body leading-relaxed max-w-xs">
              Faith for the journey. Community for the road. Everyone’s welcome here.
            </p>
            <p className="text-[11px] font-mono text-muted pt-1">
              Registered Charity No. {settings?.charity_number || '1138247'}
            </p>
          </div>

          {/* Column 2: EXPLORE (2 cols) */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <span className="font-mono-meta text-[11px] text-muted-on-dark font-semibold tracking-wider block">
              EXPLORE
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-paper-on-dark/90 hover:text-paper-on-dark transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/im-new" className="text-paper-on-dark/90 hover:text-paper-on-dark transition-colors">
                  Visit
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-paper-on-dark/90 hover:text-paper-on-dark transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-paper-on-dark/90 hover:text-paper-on-dark transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/watch" className="text-paper-on-dark/90 hover:text-paper-on-dark transition-colors">
                  Messages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-paper-on-dark/90 hover:text-paper-on-dark transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: CONTACT (2 cols) */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <span className="font-mono-meta text-[11px] text-muted-on-dark font-semibold tracking-wider block">
              CONTACT
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-paper-on-dark/90">
              <li>{addressLine}</li>
              <li>
                <a href={`tel:${phone}`} className="hover:text-paper-on-dark transition-colors">
                  {phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-paper-on-dark transition-colors break-all">
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: SUNDAYS (2 cols) */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <span className="font-mono-meta text-[11px] text-muted-on-dark font-semibold tracking-wider block">
              SUNDAYS
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-paper-on-dark/90 font-mono">
              <li>{service1}</li>
              {service2 && <li>{service2}</li>}
              <li className="font-body text-xs text-muted-on-dark pt-1">
                Kids’ program at both
              </li>
            </ul>
          </div>

          {/* Column 5: FOLLOW (2 cols) */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <span className="font-mono-meta text-[11px] text-muted-on-dark font-semibold tracking-wider block">
              FOLLOW
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={settings?.social_instagram || 'https://instagram.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper-on-dark/90 hover:text-paper-on-dark transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={settings?.social_facebook || 'https://facebook.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper-on-dark/90 hover:text-paper-on-dark transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={settings?.social_youtube || 'https://youtube.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper-on-dark/90 hover:text-paper-on-dark transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            <span>© {currentYear} {settings?.church_name || 'Open Heavens Christian Centre'}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-muted-on-dark">
            <Link href="/safeguarding" className="hover:text-paper-on-dark transition-colors">
              Safeguarding
            </Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-paper-on-dark transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/cookies" className="hover:text-paper-on-dark transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
