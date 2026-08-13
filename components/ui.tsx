/**
 * UI PRIMITIVES
 *
 * Presentational building blocks shared by every page, so long-form pages stay
 * consistent and the eventual brand-colour swap touches tokens only. All are
 * server components. Colour comes entirely from tokens in tailwind.config.ts.
 *
 * `.speakable` marks the blocks a voice assistant should read aloud; the
 * SpeakableSpecification in the @graph points at that selector.
 */

import type { ReactNode } from 'react'

type Tone = 'paper' | 'bone' | 'galv' | 'pine'

const TONE: Record<Tone, string> = {
  paper: 'bg-paper text-ink',
  bone: 'bg-bone text-ink',
  galv: 'bg-galv text-ink',
  pine: 'bg-pine text-paper',
}

export function Section({
  tone = 'paper',
  className = '',
  padded = true,
  id,
  children,
}: {
  tone?: Tone
  className?: string
  padded?: boolean
  id?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`${TONE[tone]} ${className}`}>
      <div className={`container-x ${padded ? 'py-16 md:py-24' : ''}`}>{children}</div>
    </section>
  )
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  className = '',
}: {
  eyebrow?: ReactNode
  title: ReactNode
  intro?: ReactNode
  dark?: boolean
  className?: string
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow className={dark ? 'text-mist' : 'text-copper'}>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-display-lg">{title}</h2>
      {intro && (
        <p className={`mt-4 text-lead ${dark ? 'text-paper/80' : 'text-ink/75'}`}>{intro}</p>
      )}
    </div>
  )
}

/** AEO/voice quick-answer block. Marked `.speakable` for the SpeakableSpecification. */
export function QuickAnswer({ children, label = 'Quick answer' }: { children: ReactNode; label?: string }) {
  return (
    <div className="speakable rounded-card border-l-4 border-copper bg-bone/70 p-5 shadow-card md:p-6">
      <p className="eyebrow text-copper">{label}</p>
      <p className="mt-2 max-w-prose text-lead text-ink">{children}</p>
    </div>
  )
}

export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`prose-body ${className}`}>{children}</div>
}

export function BulletList({ items, dark = false }: { items: ReactNode[]; dark?: boolean }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item, i) => (
        <li key={i} className={`flex max-w-prose gap-3 ${dark ? 'text-paper/85' : 'text-ink/90'}`}>
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-copper" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function FeatureGrid({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>{children}</div>
}

export function FeatureCard({
  title,
  meta,
  children,
  href,
}: {
  title: ReactNode
  meta?: ReactNode
  children: ReactNode
  href?: string
}) {
  const bar = (
    <span
      aria-hidden
      className="block h-1.5 w-full bg-gradient-to-r from-verdigris to-verdigris-700 transition-all duration-300 group-hover:h-2"
    />
  )
  const inner = (
    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-display-md leading-tight text-ink transition-colors group-hover:text-copper">
          {title}
        </h3>
        {meta && (
          <span className="shrink-0 rounded-full bg-galv px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wide text-steel ring-1 ring-ink/10">
            {meta}
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 text-ink/80">{children}</p>
      {href && (
        <span className="mt-5 inline-flex items-center gap-2 font-mono text-spec uppercase text-copper">
          Read more
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-verdigris/15 text-verdigris transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      )}
    </div>
  )
  const shell =
    'group relative flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-white ' +
    'shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-verdigris/60 hover:shadow-lift'

  return href ? (
    <a href={href} className={shell}>
      {bar}
      {inner}
    </a>
  ) : (
    <div className={shell}>
      {bar}
      {inner}
    </div>
  )
}

/** Numbered process step. */
export function Step({
  n,
  title,
  children,
  dark = false,
}: {
  n: number
  title: ReactNode
  children: ReactNode
  dark?: boolean
}) {
  return (
    <div className="relative border-t-2 border-verdigris pt-5">
      <span className={`font-mono text-spec uppercase ${dark ? 'text-verdigris' : 'text-steel'}`}>
        Step {String(n).padStart(2, '0')}
      </span>
      <h3 className={`mt-1 font-display text-display-md ${dark ? 'text-paper' : 'text-ink'}`}>{title}</h3>
      <p className={`mt-2 max-w-prose ${dark ? 'text-paper/80' : 'text-ink/80'}`}>{children}</p>
    </div>
  )
}

export function StatStrip({ items, dark = false }: { items: Array<{ value: ReactNode; label: ReactNode }>; dark?: boolean }) {
  return (
    <dl className={`grid gap-px overflow-hidden rounded-card border ${dark ? 'border-white/10 bg-white/10' : 'border-ink/10 bg-ink/10'} sm:grid-cols-2 lg:grid-cols-4`}>
      {items.map((it, i) => (
        <div key={i} className={`${dark ? 'bg-pine' : 'bg-paper'} p-5`}>
          <dt className={`font-display text-display-md ${dark ? 'text-paper' : 'text-ink'}`}>{it.value}</dt>
          <dd className={`mt-1 font-mono text-spec uppercase ${dark ? 'text-mist' : 'text-steel'}`}>{it.label}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Native, no-JS FAQ accordion. Mirrors the FAQPage schema in the @graph. */
export function FAQ({ items }: { items: Array<{ q: string; a: ReactNode }> }) {
  return (
    <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
      {items.map((f, i) => (
        <details key={i} className="group py-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <span className="font-display text-display-md text-ink group-open:text-copper">{f.q}</span>
            <span
              aria-hidden
              className="mt-1 shrink-0 font-mono text-lg text-copper transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3 max-w-prose text-ink/85">{f.a}</div>
        </details>
      ))}
    </div>
  )
}
