import { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/global/PageShell';
import { getSiteSettings, getYoungSaintsClasses } from '@/lib/data/db';
import { YoungSaintsForm } from '@/components/forms/YoungSaintsForm';
import { EmptyState } from '@/components/global/EmptyState';
import { Shield, Clock, MapPin, CheckCircle, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Young Saints Children & Youth',
  description:
    'Dedicated children and youth classes at Open Heavens Christian Centre in Edgware. Enhanced DBS verification, safeguarding policies, and inspiring age-appropriate teaching.',
};

export default async function YoungSaintsPage() {
  const [settings, classes] = await Promise.all([getSiteSettings(), getYoungSaintsClasses()]);

  const dslName = settings?.safeguarding_lead_name || 'Sarah Jenkins';
  const dslEmail = settings?.safeguarding_lead_email || 'safeguarding@openheavens.org.uk';

  return (
    <PageShell
      title="Young Saints Children &amp; Youth"
      description="Investing in the next generation from crèche to teens. Every Sunday during the main service in a safe, fun, and Christ-centred environment."
      breadcrumbs={[{ label: 'Young Saints' }]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column: Classes & Safeguarding */}
        <div className="lg:col-span-7 space-y-10">
          {/* Safeguarding Lead highlighted block */}
          <section className="border border-border rounded-lg p-6 bg-card space-y-4">
            <div className="flex items-center gap-2 text-foreground font-bold text-lg">
              <Shield className="h-5 w-5" aria-hidden="true" />
              <h2>Our Safeguarding Commitment</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The safety, physical protection, and emotional well-being of every child is our
              highest priority. Every Young Saints teacher and helper undergoes enhanced DBS
              checks, personal reference validation, and ongoing safeguarding training.
            </p>

            <div className="p-4 rounded border border-border bg-muted/30 text-xs text-muted-foreground space-y-1">
              <p>
                <strong>Designated Safeguarding Lead:</strong> {dslName}
              </p>
              <p>
                <strong>Safeguarding Contact:</strong>{' '}
                <a href={`mailto:${dslEmail}`} className="underline">
                  {dslEmail}
                </a>
              </p>
              <p className="pt-1">
                <Link
                  href="/safeguarding"
                  className="inline-flex items-center gap-1 font-semibold text-foreground underline"
                >
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                  Read Full Church Safeguarding Policy →
                </Link>
              </p>
            </div>
          </section>

          {/* Classes Breakdown */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Sunday Classes &amp; Age Brackets</h2>
            {classes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {classes.map((c) => (
                  <div key={c.id} className="border border-border rounded-lg p-5 bg-card space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-foreground">{c.name}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        {c.age_range}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.description}</p>
                    <div className="pt-2 border-t border-border/60 text-xs text-muted-foreground space-y-1">
                      <p className="flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        <span>{c.time}</span>
                      </p>
                      <p className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" aria-hidden="true" />
                        <span>{c.room}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="Classes list being updated"
                description="Please check in with our hospitality team upon arrival on Sunday morning."
              />
            )}
          </section>

          {/* Drop-off & Pick-up Procedure */}
          <section className="border border-border rounded-lg p-6 bg-card space-y-3">
            <h3 className="text-lg font-bold text-foreground">Check-in &amp; Collection Security</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-foreground" aria-hidden="true" />
                <span>
                  Check-in opens at 10:15 AM at the Young Saints registration desk in the main foyer.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-foreground" aria-hidden="true" />
                <span>
                  Each child is issued a matching numbered security tag. Only parents/guardians with
                  the matching badge can collect the child.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-foreground" aria-hidden="true" />
                <span>Nut-free environment: please inform leaders of any allergies or medical needs.</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Right column: Registration / Enquiry Form */}
        <aside className="lg:col-span-5" aria-label="Young Saints Registration Form">
          <div className="sticky top-24 border border-border rounded-lg p-6 bg-card shadow-sm space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-foreground">Pre-Register Your Child</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Save time on Sunday morning by registering your child’s details in advance.
              </p>
            </div>
            <YoungSaintsForm classes={classes} />
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
