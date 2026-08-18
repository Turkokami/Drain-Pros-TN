/**
 * SITE HEADER, FOOTER & STICKY CALL BAR
 *
 * The credential rides in the header as spec-sheet data on every page. The footer
 * is a dark panel with the blueprint motif, carrying the canonical NAP (locality
 * only — there is no street address anywhere in this codebase). Pending facts
 * resolve to honest placeholders, never fake numbers.
 */

import { NAV, HEADER_NAV, businessName, licenseNumber, phone, bookingUrl, TAGLINE } from '@/lib/site'
import { SAB } from '@/config/business'
import { MobileNav } from '@/components/MobileNav'

export function SiteHeader() {
  const name = businessName()
  const p = phone()
  const booking = bookingUrl()
  return (
    <header className="sticky top-0 z-40 border-b border-verdigris/30 bg-pine/95 backdrop-blur">
      <div className="container-x flex items-center justify-between gap-4 py-2.5">
        <a href="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-verdigris group-hover:brightness-110">
            {name}
          </span>
          {/* The full classification measures 307px, which overflows a 360px
              phone and wraps the header to two lines everywhere below xl. The
              short form still surfaces the NUMBER — the part that must never be
              buried — and the full classification is on the CredentialStrip on
              every page. Only one variant is in the layout at a time, so screen
              readers announce it once. */}
          <span className="mt-1 whitespace-nowrap font-mono text-eyebrow uppercase text-mist">
            <span className="xl:hidden">
              <span className="text-rose">Woman-owned</span> · TN LLP #{licenseNumber()}
            </span>
            <span className="hidden xl:inline">
              <span className="text-rose">Woman-owned</span> · TN Limited Licensed Plumber ·{' '}
              #{licenseNumber()}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {HEADER_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-body text-sm font-medium text-paper/85 hover:text-verdigris"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {booking && (
            <a
              href={booking}
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-1.5 whitespace-nowrap rounded-md border border-verdigris/50 px-4 py-2 font-display text-sm font-bold text-verdigris transition-all hover:-translate-y-0.5 hover:bg-verdigris hover:text-ink xl:inline-flex"
            >
              Request service <span aria-hidden>↗</span>
            </a>
          )}
          <a
            href={p ? `tel:${p.replace(/[^\d+]/g, '')}` : '/contact'}
            className="hidden items-center gap-2 rounded-md bg-gradient-to-b from-[#E04A3B] to-[#B0291D] px-4 py-2 font-display text-sm font-bold text-paper shadow-[0_6px_16px_-6px_rgba(201,58,44,0.7)] ring-1 ring-inset ring-white/20 transition-all hover:-translate-y-0.5 hover:brightness-110 sm:inline-flex"
          >
            <span aria-hidden>●</span> Emergency
          </a>
          <MobileNav phoneNumber={p} bookingHref={booking} />
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  const name = businessName()
  const p = phone()
  const booking = bookingUrl()
  const year = 2026 // build env forbids Date.now(); bump at year turn.

  return (
    <footer className="mt-24 bg-night bg-blueprint bg-grid text-paper">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold">{name}</p>
          <p className="mt-1 font-mono text-eyebrow uppercase text-verdigris">{TAGLINE}</p>
          <p className="mt-3 font-mono text-spec uppercase text-mist">
            {p ? <span className="text-paper">{p}</span> : 'Phone: pending'} · Charleston, TN {SAB.postalCode}
          </p>
          <p className="mt-4 max-w-prose text-sm text-paper/70">
            <span className="font-semibold text-rose">Woman-owned and family-run.</span> Licensed
            plumbing for Charleston, Cleveland, Athens, the US-11 corridor, and greater
            Chattanooga. Service-area only — we come to you.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2.5">
          <p className="font-mono text-eyebrow uppercase text-mist">Site</p>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-paper/80 hover:text-copper">
              {item.label}
            </a>
          ))}
          {booking && (
            <a
              href={booking}
              target="_blank"
              rel="noopener"
              className="text-sm text-verdigris hover:brightness-110"
            >
              Request service ↗
            </a>
          )}
        </nav>

        <div className="flex flex-col gap-2.5">
          <p className="font-mono text-eyebrow uppercase text-mist">Credential</p>
          <p className="text-sm text-paper/80">Tennessee Limited Licensed Plumber #{licenseNumber()}</p>
          <a
            href="https://verify.tn.gov/"
            rel="noopener"
            className="font-mono text-spec uppercase text-copper underline underline-offset-4"
          >
            Verify with the State of Tennessee →
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-x py-4 font-mono text-spec uppercase text-mist">
          © {year} {name}. <span className="text-rose">Woman-owned</span> · Tennessee Limited
          Licensed Plumber · Service-area business, Charleston TN.
        </p>
      </div>
    </footer>
  )
}

/**
 * Fixed mobile call bar for conversion. Hidden on desktop. Splits three ways
 * once booking is live, two ways while it is pending — the middle slot is the
 * only one that disappears, so calling and emergency keep their positions.
 */
export function StickyCallBar() {
  const p = phone()
  const booking = bookingUrl()
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 grid border-t border-verdigris/40 shadow-[0_-8px_20px_-8px_rgba(0,0,0,0.4)] md:hidden ${
        booking ? 'grid-cols-3' : 'grid-cols-2'
      }`}
    >
      <a
        href={p ? `tel:${p.replace(/[^\d+]/g, '')}` : '/contact'}
        className={`flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-b from-[#E7BB3E] to-[#C08B12] py-3.5 font-display font-bold text-ink ${
          booking ? 'text-sm' : ''
        }`}
      >
        {p ? 'Call now' : 'Request callback'}
      </a>
      {booking && (
        <a
          href={booking}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-1.5 whitespace-nowrap border-x border-white/15 bg-pine py-3.5 font-display text-sm font-bold text-paper"
        >
          Request <span aria-hidden>↗</span>
        </a>
      )}
      <a
        href={p ? `tel:${p.replace(/[^\d+]/g, '')}` : '/contact'}
        className={`flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-b from-[#E04A3B] to-[#B0291D] py-3.5 font-display font-bold text-paper ${
          booking ? 'text-sm' : ''
        }`}
      >
        <span aria-hidden>●</span> Emergency
      </a>
    </div>
  )
}
