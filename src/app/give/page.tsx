import { Metadata } from 'next';
import { PageShell } from '@/components/global/PageShell';
import { getSiteSettings } from '@/lib/data/db';
import { EmptyState } from '@/components/global/EmptyState';
import { Building2, ShieldCheck, CreditCard, Lock } from 'lucide-react';
import { CTAButton } from '@/components/ui/CTAButton';

export const metadata: Metadata = {
  title: 'Give Online & Tithes',
  description:
    'Support the mission and local outreach of Open Heavens Christian Centre in Edgware. Secure bank transfer, Gift Aid declarations, and online giving options.',
};

export default async function GivePage() {
  const settings = await getSiteSettings();

  if (!settings) {
    return (
      <PageShell
        title="Giving &amp; Stewardship"
        breadcrumbs={[{ label: 'Give' }]}
      >
        <EmptyState
          title="Donation details temporarily unavailable"
          description="We are currently unable to retrieve banking details from the server. Please visit in person or contact the church office."
        />
      </PageShell>
    );
  }

  return (
    <PageShell
      title="Giving &amp; Stewardship"
      description="Thank you for partnering with us in generosity. Every gift enables local outreach in Edgware, pastoral care, and discipleship across North London."
      breadcrumbs={[{ label: 'Give' }]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column: Giving options */}
        <div className="lg:col-span-8 space-y-10">
          {/* 1. Direct Bank Transfer */}
          <section className="border border-border rounded-lg p-6 sm:p-8 bg-card space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-foreground" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-bold text-foreground">Direct Bank Transfer (BACS)</h2>
                <p className="text-xs text-muted-foreground">
                  Our preferred method: 100% of your donation reaches the charity without card fees.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-muted/40 p-4 rounded-lg border border-border">
              <div>
                <span className="block text-xs uppercase font-semibold text-muted-foreground">
                  Bank Name
                </span>
                <span className="font-medium text-foreground">{settings.bank_name}</span>
              </div>
              <div>
                <span className="block text-xs uppercase font-semibold text-muted-foreground">
                  Account Name
                </span>
                <span className="font-medium text-foreground">{settings.bank_account_name}</span>
              </div>
              <div>
                <span className="block text-xs uppercase font-semibold text-muted-foreground">
                  Sort Code
                </span>
                <span className="font-mono font-medium text-foreground">{settings.bank_sort_code}</span>
              </div>
              <div>
                <span className="block text-xs uppercase font-semibold text-muted-foreground">
                  Account Number
                </span>
                <span className="font-mono font-medium text-foreground">
                  {settings.bank_account_number}
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Payment Reference:</strong> Please specify your transfer reference as{' '}
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono">
                TITHE
              </code>
              ,{' '}
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono">
                OFFERING
              </code>
              , or{' '}
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono">
                BUILDING
              </code>{' '}
              followed by your surname.
            </p>
          </section>

          {/* 2. UK Gift Aid Declaration */}
          <section className="border border-border rounded-lg p-6 sm:p-8 bg-card space-y-4">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <h2 className="text-lg font-bold">Boost Your Giving with UK Gift Aid (+25%)</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{settings.gift_aid_notice}</p>
            <div className="p-4 rounded border border-border bg-muted/30 text-xs text-muted-foreground space-y-2">
              <p>
                <strong>Gift Aid Declaration Criteria:</strong> You must be an individual UK
                taxpayer and have paid an amount of UK Income Tax and/or Capital Gains Tax equal to
                the amount that all charities and CASCs will reclaim on your donations in that tax year.
              </p>
              <p>
                To register your Gift Aid declaration with our finance office, email us with your
                full name and UK postcode at our church office.
              </p>
            </div>
          </section>

          {/* 3. Secure Card / Recurring Giving (Stripe placeholder) */}
          <section className="border border-border rounded-lg p-6 sm:p-8 bg-card space-y-4">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <CreditCard className="h-5 w-5" aria-hidden="true" />
              <h2 className="text-lg font-bold">Debit / Credit Card &amp; Recurring Giving</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Set up a secure debit/credit card donation or scheduled recurring monthly gift.
            </p>

            <div className="border border-dashed border-border rounded p-6 bg-muted/20 text-center space-y-3">
              <Lock className="h-6 w-6 mx-auto text-muted-foreground" aria-hidden="true" />
              <p className="text-sm font-semibold text-foreground">
                Secure Stripe Checkout Integration
              </p>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                Card processing integration will be connected with our registered charity Stripe
                account during the visual polish phase.
              </p>
              <div className="pt-2">
                <CTAButton size="md" variant="outline" disabled>
                  Donate by Card (Coming Soon)
                </CTAButton>
              </div>
            </div>
          </section>
        </div>

        {/* Right column: Charity transparency & FAQ */}
        <aside className="lg:col-span-4" aria-label="Charity Financial Information">
          <div className="border border-border rounded-lg p-6 bg-card shadow-sm space-y-6 sticky top-24">
            <h3 className="text-lg font-bold text-foreground">Registered Charity Details</h3>

            <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
              <p>
                <strong>Charity Commission No.:</strong> {settings.charity_number}
              </p>
              <p>
                <strong>Governing Body:</strong> Board of Trustees, Open Heavens Christian Centre
              </p>
              <p>
                Open Heavens Christian Centre operates in strict compliance with the UK Charities Act
                and submits annual audited returns to the Charity Commission for England and Wales.
              </p>
            </div>

            <div className="pt-4 border-t border-border space-y-3 text-xs text-muted-foreground">
              <h4 className="font-semibold text-foreground">Fund Allocations</h4>
              <ul className="space-y-1 list-disc pl-4">
                <li>Edgware community food support &amp; outreach</li>
                <li>Youth &amp; children’s education equipment</li>
                <li>Auditorium upkeep &amp; facilities</li>
                <li>Missions and benevolent relief</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
