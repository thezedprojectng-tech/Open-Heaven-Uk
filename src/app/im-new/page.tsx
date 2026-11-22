import { Metadata } from 'next';
import { getSiteSettings, getServiceTimes } from '@/lib/data/db';
import { VisitHero } from '@/components/visit/VisitHero';
import { VisitingGuideSection } from '@/components/home/VisitingGuideSection';
import { ComeAsYouAreBanner } from '@/components/home/ComeAsYouAreBanner';
import { VisitorForm } from '@/components/forms/VisitorForm';
import { Train, Car, ShieldCheck, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plan Your Visit | Open Heavens Edgware',
  description:
    'Your first Sunday starts with a warm hello. Find out what to expect, service times, parking, and children’s check-in at Open Heavens Christian Centre in Edgware.',
};

export default async function ImNewPage() {
  const [settings, serviceTimes] = await Promise.all([getSiteSettings(), getServiceTimes()]);

  return (
    <main className="w-full bg-[var(--paper)] overflow-hidden">
      {/* 01 — Hero matching screenshot media_1795327912064_da5de8c3.jpg */}
      <VisitHero settings={settings} serviceTimes={serviceTimes} />

      {/* 02 — Visiting Guide & FAQ matching screenshot */}
      <div id="expect">
        <VisitingGuideSection />
      </div>

      {/* 03 — First-Time Visitor Pre-Registration & Facilities */}
      <section
        id="visitor-form"
        className="w-full py-16 sm:py-24 border-t border-line"
        aria-labelledby="visitor-form-heading"
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Introduction & Travel Details */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="font-mono-meta text-xs font-semibold text-accent tracking-widest block">
                  03 — LET US KNOW YOU ARE COMING
                </span>
                <h2
                  id="visitor-form-heading"
                  className="font-display font-bold text-ink text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]"
                >
                  We will save you a seat.
                </h2>
                <p className="font-body text-sm sm:text-base text-muted leading-relaxed max-w-xl">
                  Let us know you are visiting and our hospitality team will meet you at the entrance, show you where everything is, and make your first Sunday relaxed and welcoming.
                </p>
              </div>

              {/* Getting Here & Amenities Grid */}
              <div className="space-y-4 pt-2">
                <h3 className="font-mono-meta text-xs uppercase tracking-wider text-ink font-semibold">
                  Good to Know
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-line bg-surface/70 space-y-1.5">
                    <div className="flex items-center gap-2 text-ink font-semibold text-xs sm:text-sm">
                      <Train className="h-4 w-4 text-accent" aria-hidden="true" />
                      <span>Edgware Underground</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Northern Line terminus is just a 4-minute walk (approx. 300m) to The Exchange.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-line bg-surface/70 space-y-1.5">
                    <div className="flex items-center gap-2 text-ink font-semibold text-xs sm:text-sm">
                      <Car className="h-4 w-4 text-accent" aria-hidden="true" />
                      <span>Free Church Parking</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Dedicated bays behind The Exchange. Additional parking at Broadwalk Centre.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-line bg-surface/70 space-y-1.5">
                    <div className="flex items-center gap-2 text-ink font-semibold text-xs sm:text-sm">
                      <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                      <span>Step-Free Access</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Ground level access, accessible restrooms, and hearing loop installed throughout.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-line bg-surface/70 space-y-1.5">
                    <div className="flex items-center gap-2 text-ink font-semibold text-xs sm:text-sm">
                      <HeartHandshake className="h-4 w-4 text-accent" aria-hidden="true" />
                      <span>Young Saints Check-in</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Secure, DBS-checked classes for babies through teens open 15 mins before service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visitor Form Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-xs space-y-6">
                <div className="space-y-1.5 border-b border-line pb-4">
                  <h3 className="font-display font-bold text-xl text-ink">
                    Tell us you are coming
                  </h3>
                  <p className="font-body text-xs text-muted">
                    No pressure, questions welcome. We look forward to meeting you.
                  </p>
                </div>
                <VisitorForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Come As You Are Banner */}
      <ComeAsYouAreBanner />
    </main>
  );
}
