/**
 * GET SERVICE — conversion block for the bottom of service and location pages.
 * Black + gold, with a call panel beside the lead form. Replaces the generic CTA
 * band on those pages so every page ends on a way to convert (call or form).
 */

import { LeadForm } from '@/components/LeadForm'
import { PrimaryCTA, EmergencyCTA, BookOnlineCTA } from '@/components/CTA'
import { phone, licenseNumber } from '@/lib/site'

export function GetService({ service, place }: { service?: string; place?: string }) {
  const p = phone()
  const heading = service
    ? `Book Drain Pros TN for ${service.toLowerCase()}`
    : place
      ? `Book a plumber in ${place}`
      : 'Book Drain Pros TN'

  return (
    <section className="border-t-2 border-verdigris/50 bg-night bg-blueprint bg-grid text-paper">
      <div className="container-x py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow text-verdigris">Get service</p>
            <h2 className="mt-3 text-display-lg">{heading}.</h2>
            <p className="mt-4 max-w-prose text-lead text-paper/80">
              Call for the fastest response, request service online, or send the form and we’ll
              reach out. Woman-owned and family-run, licensed, with straight pricing you approve
              before we start and 24/7 emergency service.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryCTA />
              <EmergencyCTA />
              <BookOnlineCTA />
            </div>
            <p className="mt-6 font-mono text-spec uppercase text-mist">
              TN Limited Licensed Plumber · #{licenseNumber()} · verify at verify.tn.gov
            </p>
          </div>

          <LeadForm service={service} phone={p} />
        </div>
      </div>
    </section>
  )
}
