/**
 * CALL-TO-ACTION BUTTONS
 *
 * Two variants, one rule: `signal` amber belongs to EmergencyCTA and nothing
 * else on the site. PrimaryCTA uses verdigris. Both fail honest — while the
 * phone number is pending they route to the contact page for a callback rather
 * than render a placeholder number a visitor might dial.
 */

import { phone, phoneHref, licenseNumber, bookingUrl } from '@/lib/site'

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
 * BOOK ONLINE — third conversion path, deliberately the quietest of the three.
 *
 * Calling still wins for this trade, and `signal` red stays reserved for
 * EmergencyCTA, so this reads as an outline rather than a third filled button
 * competing with the two that matter more. Routes off-site to Housecall Pro.
 *
 * Renders nothing when the booking URL is pending — a dead "Request service" button
 * is worse than no button, so this does not fall back to /contact the way the
 * phone CTAs do.
 */
export function BookOnlineCTA({
  className = '',
  label = 'Request service',
  tone = 'dark',
}: {
  className?: string
  label?: string
  tone?: 'dark' | 'light'
}) {
  const href = bookingUrl()
  if (!href) return null

  const palette =
    tone === 'dark'
      ? 'border-verdigris/60 text-verdigris hover:bg-verdigris hover:text-ink'
      : 'border-pine/30 text-pine hover:bg-pine hover:text-paper'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={
        'inline-flex items-center justify-center gap-2 rounded-lg border-2 bg-transparent ' +
        'px-6 py-3 font-display text-base font-bold transition-all duration-200 ' +
        'hover:-translate-y-0.5 active:translate-y-0 ' +
        palette +
        ' ' +
        className
      }
    >
      {label}
      <span aria-hidden>↗</span>
    </a>
  )
}

/**
 * Full-width conversion band. Dark panel with the spec-sheet blueprint motif,
 * the CTAs, and the license line — used to close pages.
 */
export function CTABand({
  heading = 'Get a licensed plumber on the job.',
  sub = 'Woman-owned, family-run, and licensed. Straight pricing you approve before we start, across Charleston, Cleveland, Athens, the US-11 corridor, and greater Chattanooga.',
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
          <BookOnlineCTA />
        </div>
        <p className="mt-6 font-mono text-spec uppercase text-mist">
          TN Limited Licensed Plumber · #{licenseNumber()} · verify at verify.tn.gov
        </p>
      </div>
    </section>
  )
}
