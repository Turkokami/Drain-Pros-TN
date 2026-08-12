/**
 * CALL-TO-ACTION BUTTONS
 *
 * Two variants, one rule: `signal` amber belongs to EmergencyCTA and nothing
 * else on the site. PrimaryCTA uses verdigris. Both fail honest — while the
 * phone number is pending they route to the contact page for a callback rather
 * than render a placeholder number a visitor might dial.
 */

import { phone, phoneHref } from '@/lib/site'

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
