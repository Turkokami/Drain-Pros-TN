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
        'inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b ' +
        'from-[#E7BB3E] to-[#C08B12] px-6 py-3 font-display text-base font-bold text-ink ' +
        'shadow-[0_8px_20px_-6px_rgba(217,165,32,0.6)] ring-1 ring-inset ring-white/25 ' +
        'transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 ' +
        'hover:shadow-[0_12px_26px_-6px_rgba(217,165,32,0.78)] active:translate-y-0 active:brightness-95 ' +
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
        'inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b ' +
        'from-[#E04A3B] to-[#B0291D] px-6 py-3 font-display text-base font-bold text-paper ' +
        'shadow-[0_8px_20px_-6px_rgba(201,58,44,0.6)] ring-1 ring-inset ring-white/20 ' +
        'transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 ' +
        'hover:shadow-[0_12px_26px_-6px_rgba(201,58,44,0.78)] active:translate-y-0 ' +
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
    <section className="border-t-2 border-verdigris/50 bg-night bg-blueprint bg-grid text-paper">
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
