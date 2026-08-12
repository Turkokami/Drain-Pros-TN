/**
 * SITE HEADER, FOOTER & STICKY CALL BAR
 *
 * The credential rides in the header as spec-sheet data on every page. The footer
 * is a dark panel with the blueprint motif, carrying the canonical NAP (locality
 * only — there is no street address anywhere in this codebase). Pending facts
 * resolve to honest placeholders, never fake numbers.
 */

import { NAV, businessName, licenseNumber, phone } from '@/lib/site'
import { SAB } from '@/config/business'
import { MobileNav } from '@/components/MobileNav'

export function SiteHeader() {
  const name = businessName()
  const p = phone()
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="container-x flex items-center justify-between gap-4 py-2.5">
        <a href="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl font-extrabold tracking-tight text-ink group-hover:text-verdigris">
            {name}
          </span>
          <span className="mt-1 font-mono text-eyebrow uppercase text-steel">
            TN Limited Licensed Plumber · #{licenseNumber()}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="font-body text-sm text-ink/80 hover:text-copper">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={p ? `tel:${p.replace(/[^\d+]/g, '')}` : '/contact'}
            className="hidden items-center gap-2 bg-signal px-4 py-2 font-display text-sm font-bold text-ink hover:brightness-95 sm:inline-flex"
          >
            <span aria-hidden>●</span> Emergency
          </a>
          <MobileNav phoneNumber={p} />
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  const name = businessName()
  const p = phone()
  const year = 2026 // build env forbids Date.now(); bump at year turn.

  return (
    <footer className="mt-24 bg-pine bg-blueprint bg-grid text-paper">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold">{name}</p>
          <p className="mt-3 font-mono text-spec uppercase text-mist">
            {p ? <span className="text-paper">{p}</span> : 'Phone: pending'} · Charleston, TN {SAB.postalCode}
          </p>
          <p className="mt-4 max-w-prose text-sm text-paper/70">
            Licensed plumbing for Charleston, Cleveland, Athens, the US-11 corridor, and greater
            Chattanooga. Home-based, service-area only — we come to you.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2.5">
          <p className="font-mono text-eyebrow uppercase text-mist">Site</p>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-paper/80 hover:text-copper">
              {item.label}
            </a>
          ))}
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
          © {year} {name}. Tennessee Limited Licensed Plumber. Service-area business, Charleston TN.
        </p>
      </div>
    </footer>
  )
}

/** Fixed mobile call bar for conversion. Hidden on desktop. */
export function StickyCallBar() {
  const p = phone()
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-ink/10 bg-paper/95 backdrop-blur md:hidden">
      <a
        href={p ? `tel:${p.replace(/[^\d+]/g, '')}` : '/contact'}
        className="flex items-center justify-center gap-2 py-3 font-display font-semibold text-verdigris"
      >
        {p ? 'Call now' : 'Request callback'}
      </a>
      <a
        href={p ? `tel:${p.replace(/[^\d+]/g, '')}` : '/contact'}
        className="flex items-center justify-center gap-2 bg-signal py-3 font-display font-bold text-ink"
      >
        <span aria-hidden>●</span> Emergency
      </a>
    </div>
  )
}
