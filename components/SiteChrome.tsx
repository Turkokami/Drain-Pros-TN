/**
 * SITE HEADER & FOOTER
 *
 * The credential rides in the header as spec-sheet data, not a badge — the
 * license number is visible in the top-left mono tag on every page. The footer
 * carries the canonical NAP (locality only; there is no street address anywhere
 * in this codebase) and resolves pending facts to honest placeholders.
 */

import { NAV, businessName, licenseNumber, phone } from '@/lib/site'
import { SAB } from '@/config/business'

export function SiteHeader() {
  const name = businessName()
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl font-bold tracking-tight text-ink group-hover:text-verdigris">
            {name}
          </span>
          <span className="mt-1 font-mono text-spec uppercase text-steel">
            TN Limited Licensed Plumber · #{licenseNumber()}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm text-ink/80 hover:text-copper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Emergency CTA — sanctioned use of signal amber. */}
        <EmergencyLink />
      </div>
    </header>
  )
}

function EmergencyLink() {
  const p = phone()
  return (
    <a
      href={p ? `tel:${p.replace(/[^\d+]/g, '')}` : '/contact'}
      className="inline-flex items-center gap-2 bg-signal px-4 py-2 font-display text-sm font-bold text-ink hover:brightness-95"
    >
      <span aria-hidden>●</span>
      <span className="hidden sm:inline">Emergency</span>
      <span className="sm:hidden">SOS</span>
    </a>
  )
}

export function SiteFooter() {
  const name = businessName()
  const p = phone()
  const year = 2026 // fixed: build env forbids Date.now(); update at year turn.

  return (
    <footer className="mt-20 border-t border-ink/10 bg-galv">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold text-ink">{name}</p>
          {/* Canonical NAP — locality only, never a street address. */}
          <p className="mt-2 font-mono text-spec uppercase text-steel">
            {p ? <span className="spec-value">{p}</span> : 'Phone: pending'} · Charleston, TN{' '}
            {SAB.postalCode}
          </p>
          <p className="mt-3 max-w-prose font-body text-sm text-steel">
            Licensed plumbing for the Charleston, Cleveland, and Athens corridor and greater
            Chattanooga. Home-based, service-area only — we come to you.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          <p className="font-mono text-spec uppercase text-steel">Site</p>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="font-body text-sm text-ink/80 hover:text-copper">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <p className="font-mono text-spec uppercase text-steel">Credential</p>
          <p className="font-body text-sm text-ink/80">
            Tennessee Limited Licensed Plumber #{licenseNumber()}
          </p>
          <a
            href="https://verify.tn.gov/"
            rel="noopener"
            className="font-mono text-spec uppercase text-copper underline underline-offset-4"
          >
            Verify with the State of Tennessee →
          </a>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <p className="mx-auto max-w-6xl px-5 py-4 font-mono text-spec uppercase text-steel">
          © {year} {name}. Tennessee Limited Licensed Plumber. Service-area business, Charleston TN.
        </p>
      </div>
    </footer>
  )
}
