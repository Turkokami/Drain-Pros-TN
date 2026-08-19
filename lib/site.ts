/**
 * SITE-LEVEL HELPERS
 *
 * Thin wrappers over the registry so components never touch config directly and
 * never hardcode a business fact. Pending facts resolve to honest, non-fake
 * behavior: CTAs route to the contact page instead of inventing a phone number,
 * and after-hours language renders only when OPERATIONS.hours is confirmed.
 */

import { IDENTITY, OPERATIONS, OWNERSHIP, LICENSE, fact, factOr } from '@/config/business'

/**
 * Full navigation. Used by the mobile menu and the footer, where vertical space
 * is free and every route should be reachable.
 */
export const NAV: Array<{ href: string; label: string }> = [
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service areas' },
  { href: '/problems', label: 'Problems' },
  { href: '/guides', label: 'Guides' },
  { href: '/permits', label: 'Permits' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

/**
 * Header navigation — deliberately shorter than NAV.
 *
 * Eight items overflowed the header row and made the page body scroll
 * sideways, which is the one layout rule this project does not bend. Reviews
 * is the item that comes out: it is reachable from the footer, the mobile menu,
 * and the CTAs, and it is the least likely thing a visitor navigates to from
 * the top bar. Everything else stays.
 */
export const HEADER_NAV = NAV.filter((item) => item.href !== '/reviews')

/** Confirmed to "Drain Pros TN". Fallback kept only so dev never renders blank. */
export function businessName(): string {
  return factOr('IDENTITY.displayName', IDENTITY.displayName, 'Drain Pros TN')
}

export function licenseNumber(): string {
  return factOr('LICENSE.number', LICENSE.number, '5045')
}

export function phoneConfirmed(): boolean {
  return IDENTITY.phone.status === 'confirmed'
}

/** Display string for the phone, or null when still pending. Never a fake number. */
export function phone(): string | null {
  return fact('IDENTITY.phone', IDENTITY.phone)
}

export function phoneHref(): string | null {
  const p = phone()
  return p ? `tel:${p.replace(/[^\d+]/g, '')}` : null
}

/**
 * Housecall Pro booking URL, or null when pending. Booking UI is gated on this
 * being non-null — an online-booking button that goes nowhere is worse than no
 * button, so components render nothing rather than fall back to /contact.
 */
export function bookingUrl(): string | null {
  return fact('IDENTITY.bookingUrl', IDENTITY.bookingUrl)
}

/** Real availability. Null until confirmed — gate all after-hours language on this. */
export function hours(): { afterHours: boolean; weekends: boolean; note: string } | null {
  return fact('OPERATIONS.hours', OPERATIONS.hours)
}

/** Google write-a-review form. For customers who have ALREADY been served. */
export function reviewUrl(): string | null {
  return fact('IDENTITY.reviewUrl', IDENTITY.reviewUrl)
}

/** Google listing, for reading reviews. Also the schema sameAs target. */
export function googleProfileUrl(): string | null {
  return fact('IDENTITY.profileUrl', IDENTITY.profileUrl)
}

/** Registered entity. "Drain Pros TN" is the DBA — see businessName(). */
export function legalName(): string | null {
  return fact('IDENTITY.legalName', IDENTITY.legalName)
}

export function entityType(): string | null {
  return fact('IDENTITY.entityType', IDENTITY.entityType)
}

export function foundedYear(): number | null {
  return fact('IDENTITY.foundedYear', IDENTITY.foundedYear)
}

/**
 * COMBINED trade experience across both owners — not time in business. Copy
 * must never turn this into "twenty years of Drain Pros TN", which founded in
 * 2025. Say "combined" every time.
 */
export function combinedYearsInTrade(): number | null {
  return fact('IDENTITY.combinedYearsInTrade', IDENTITY.combinedYearsInTrade)
}

export function insurance(): { carrier: string; generalLiabilityUsd: number; umbrella: boolean } | null {
  return fact('OPERATIONS.insurance', OPERATIONS.insurance)
}

/** Defined-term warranty. Both terms publish together or neither does. */
export function warranty():
  | { workmanshipMonths: number; drainCleaningDays: number; terms: string }
  | null {
  return fact('OPERATIONS.warranty', OPERATIONS.warranty)
}

export function owner(): string | null {
  return fact('OWNERSHIP.owner', OWNERSHIP.owner)
}

export function isWomanOwned(): boolean {
  return fact('OWNERSHIP.womanOwned', OWNERSHIP.womanOwned) === true
}

export function operators(): Array<{ name: string; role: string; background: string }> {
  return fact('OWNERSHIP.operators', OWNERSHIP.operators) ?? []
}

/** One-line warranty summary for trust blocks. Null until the terms are confirmed. */
export function warrantyLine(): string | null {
  const w = warranty()
  if (!w) return null
  return `${w.workmanshipMonths}-month workmanship warranty · ${w.drainCleaningDays}-day drain cleaning warranty`
}

export const CORRIDOR_LINE =
  'A Bradley–McMinn corridor plumbing company that also serves greater Chattanooga.'

/** Brand tagline from the logo. */
export const TAGLINE = 'Experience the reliable difference.'
