/**
 * SITE-LEVEL HELPERS
 *
 * Thin wrappers over the registry so components never touch config directly and
 * never hardcode a business fact. Pending facts resolve to honest, non-fake
 * behavior: CTAs route to the contact page instead of inventing a phone number,
 * and after-hours language renders only when OPERATIONS.hours is confirmed.
 */

import { IDENTITY, OPERATIONS, LICENSE, fact, factOr } from '@/config/business'

export const NAV: Array<{ href: string; label: string }> = [
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service areas' },
  { href: '/problems', label: 'Problems' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

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

export const CORRIDOR_LINE =
  'A Bradley–McMinn corridor plumbing company that also serves greater Chattanooga.'

/** Brand tagline from the logo. */
export const TAGLINE = 'Experience the reliable difference.'
