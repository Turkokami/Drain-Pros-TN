/**
 * CALL-TO-ACTION BUTTONS
 *
 * Two variants, one rule: `signal` amber belongs to EmergencyCTA and nothing
 * else on the site. PrimaryCTA uses verdigris. Both fail honest — while the
 * phone number is pending they route to the contact page for a callback rather
 * than render a placeholder number a visitor might dial.
 */

import { phone, phoneHref, licenseNumber } from '@/lib/site'

export function PrimaryCTA({ className = '', label }: { className?: string; label?: string }) {
  const p = phone()
  const href = phoneHref()
  return (
    <a
      href={href ?? '/contact'}
      className={
        'inline-flex items-center justify-center bg-verdigris px-6 py-3 font-display ' +
        'text-base font-semibold text-paper transition-colors hover:bg-ink ' +
        className
      }
    >
      {p ? (label ?? `Call ${p}`) : 'Request a callback'}
    </a>
  )
}

/**
 * EMERGENCY CTA — the only sanctioned use of `signal` amber sitewide.
 * Speaks to the urgency of the visitor's problem, not a 24/7 promise: after-hours
 * availability is a pending fact and is never claimed here.
 */
export function EmergencyCTA({ className = '' }: { className?: string }) {
  const p = phone()
  const href = phoneHref()
  return (
    <a
      href={href ?? '/contact'}
      className={
        'inline-flex items-center justify-center gap-2 bg-signal px-6 py-3 font-display ' +
        'text-base font-bold text-ink transition-colors hover:brightness-95 ' +
        className
      }
    >
      <span aria-hidden>●</span>
      {p ? `Plumbing emergency? Call ${p}` : 'Plumbing emergency? Get help now'}
    </a>
  )
}

/**
 * Full-width conversion band. Dark panel with the spec-sheet blueprint motif,
 * the two CTAs, and the license line — used to close pages.
 */
export function CTABand({
  heading = 'Get a licensed plumber on the job.',
  sub = 'Straight pricing you approve before we start. Serving Charleston, Cleveland, Athens, the US-11 corridor, and greater Chattanooga.',
}: {
  heading?: string
  sub?: string
}) {
  return (
    <section className="bg-pine bg-blueprint bg-grid text-paper">
      <div className="container-x py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-display-lg">{heading}</h2>
          <p className="mt-4 text-lead text-paper/80">{sub}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryCTA label="Book a plumber" />
          <EmergencyCTA />
        </div>
        <p className="mt-6 font-mono text-spec uppercase text-mist">
          TN Limited Licensed Plumber · #{licenseNumber()} · verify at verify.tn.gov
        </p>
      </div>
    </section>
  )
}
