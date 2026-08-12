/**
 * HOME — corridor-first.
 *
 * Positioning: a Bradley–McMinn corridor plumbing company that also serves
 * greater Chattanooga. Drain cleaning leads because it is permit-free, runs
 * everywhere, and is what Kevin actually focuses on. The license rides high on
 * the page as spec-sheet data — the single strongest differentiator in a market
 * where no competitor surfaces a number at all.
 */

import type { Metadata } from 'next'
import { getService } from '@/config/services'
import { locationsByTier, LOCATIONS } from '@/config/locations'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA, EmergencyCTA } from '@/components/CTA'
import { CORRIDOR_LINE } from '@/lib/site'
import {
  buildGraph,
  websiteNode,
  businessNode,
  ownerNode,
  webPageNode,
  breadcrumbNode,
  serviceNode,
  faqNode,
} from '@/lib/schema/graph'

const LEAD_SERVICES = [
  'drain-cleaning',
  'emergency-plumbing',
  'leak-detection',
  'water-heater-repair',
  'water-heater-replacement',
  'fixture-repair',
]

const HERO_ANSWER =
  'Licensed plumbing for Charleston, Cleveland, Athens, and the US-11 corridor, plus greater ' +
  'Chattanooga. Drain cleaning, emergency repair, and water heaters, done by the license holder ' +
  'himself with a straight price you approve before the work starts.'

const HOME_FAQS = [
  {
    q: 'What areas do you cover?',
    a: 'Charleston and Calhoun at the county seam, Cleveland and Bradley County, Athens and McMinn County, the US-11 corridor towns, and greater Chattanooga. Inside Chattanooga city limits we do the permit-free work — drains, emergencies, leaks, and fixtures.',
  },
  {
    q: 'Are you actually licensed?',
    a: "Tennessee Limited Licensed Plumber #5045, issued by the state Board for Licensing Contractors and verifiable at verify.tn.gov. It is on every page of this site on purpose — no competitor in this market shows theirs.",
  },
  {
    q: 'Why does drain cleaning work everywhere but water heater replacement does not?',
    a: 'Drain cleaning, emergency repair, and fixture swaps need no permit, so we do them across the whole area including Chattanooga. Water heater replacement, tankless, and repipes need a permit pulled, so we do those in the towns where we are cleared to pull one.',
  },
  {
    q: 'Do you answer after hours?',
    a: 'Our after-hours schedule is being finalized and we will not promise a 2 a.m. answer we cannot keep. Call the number on this site and you get a real answer on timing from a person.',
  },
  {
    q: 'How is your pricing set?',
    a: 'You get a number to approve before we start, and it does not change once work begins. This market has a documented habit of mid-job price revisions at the volume shops. We are the opposite of that on purpose.',
  },
  {
    q: 'Do you work on well and septic properties?',
    a: 'Yes, the house side — the water lines, fixtures, heaters, and treatment inside the home. We do not touch the well or septic system itself. Tanks, fields, pumps, and pressure tanks are separately licensed and we refer them out.',
  },
  {
    q: 'What do you not do?',
    a: 'Septic and well systems, and any single project above the $25,000 per-project ceiling on the license. When a job needs one of those, we bring in the right licensed partner rather than stretch our scope.',
  },
  {
    q: 'Are you based in Charleston?',
    a: 'Yes, and we are the only plumbing operation anchored in Charleston — every competitor drives in from Cleveland or Athens. We come to you; this is a service-area business, not a storefront.',
  },
]

export const metadata: Metadata = {
  description: HERO_ANSWER,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const anchors = locationsByTier('anchor')
  const primary = locationsByTier('primary')
  const growth = locationsByTier('growth')
  const drain = getService('drain-cleaning')!

  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode('/', 'Licensed Plumber — Charleston & the Bradley–McMinn Corridor, TN', HERO_ANSWER),
    breadcrumbNode('/', [{ name: 'Home', url: '/' }]),
    // Lead service: permit-free, so areaServed is the full footprint.
    serviceNode(drain, LOCATIONS.map((l) => l.slug)),
    faqNode('/', HOME_FAQS),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      {/* HERO */}
      <section className="border-b border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="font-mono text-spec uppercase text-steel">{CORRIDOR_LINE}</p>
          <h1 className="mt-4 max-w-4xl text-display-xl">
            Licensed plumbing for Charleston and the whole corridor.
          </h1>
          <p className="mt-6 max-w-prose border-l-2 border-copper pl-4 text-lg text-ink">
            {HERO_ANSWER}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryCTA label="Book a plumber" />
            <EmergencyCTA />
          </div>
          <p className="mt-4 font-mono text-spec uppercase text-steel">
            TN Limited Licensed Plumber · #5045 · verify at verify.tn.gov
          </p>
        </div>
      </section>

      {/* LEAD SERVICES */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-display-lg">Start with a drain, stay for the rest</h2>
        <p className="mt-2 max-w-prose text-ink/80">
          Drain cleaning is the lead because it needs no permit and runs everywhere we drive. Once
          we are under the house, we handle the rest.
        </p>
        <ul className="mt-8 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {LEAD_SERVICES.map((slug) => {
            const s = getService(slug)
            if (!s) return null
            return (
              <li key={slug} className="bg-paper">
                <a href={`/services/${slug}`} className="group block h-full p-6 hover:bg-galv">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-lg text-ink group-hover:text-copper">
                      {s.name}
                    </span>
                    <span className="shrink-0 font-mono text-spec uppercase text-steel">
                      {s.requiresPermit ? 'permit req.' : 'permit-free'}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-steel">{s.summary}</p>
                </a>
              </li>
            )
          })}
        </ul>
        <div className="mt-6">
          <a href="/services" className="font-mono text-spec uppercase text-copper underline underline-offset-4">
            All services →
          </a>
        </div>
      </section>

      {/* CREDENTIAL + POSITIONING */}
      <section className="border-y border-ink/10 bg-galv">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-display-lg">The license is a fact you can check</h2>
            <p className="mt-3 max-w-prose text-ink/90">
              Everyone in this market says "licensed." We put the number on the page and link the
              state lookup so you can confirm it in ten seconds. The credential is not a badge, it is
              a checkable record.
            </p>
            <p className="mt-4 max-w-prose text-ink/90">
              We are also straight about the edges of that license: permit-required work only where
              we can pull a permit, and no septic or well systems. Saying so plainly is the point.
            </p>
          </div>
          <div>
            <CredentialStrip />
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-display-lg">Where we work</h2>
        <p className="mt-2 max-w-prose text-ink/80">
          Priority runs from our own back yard outward. The seam nobody else occupies comes first.
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <CoverageColumn label="Anchor — home base" locations={anchors} note="Zero competition. We own the county seam." />
          <CoverageColumn label="Primary revenue" locations={primary} note="Cleveland and Athens, the thin middle tier." />
          <CoverageColumn label="Growth corridor" locations={growth} note="The fast-growing Hamilton County edge." />
        </div>
        <div className="mt-6">
          <a href="/service-areas" className="font-mono text-spec uppercase text-copper underline underline-offset-4">
            Every town we cover →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink/10 bg-galv">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <h2 className="text-display-lg">Straight answers</h2>
          <dl className="mt-6 space-y-6">
            {HOME_FAQS.map((f) => (
              <div key={f.q} className="border-t border-ink/10 pt-4">
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-1 max-w-prose text-ink/90">{f.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <p className="font-display text-lg text-ink">Got a plumbing problem?</p>
            <PrimaryCTA />
          </div>
        </div>
      </section>
    </>
  )
}

function CoverageColumn({
  label,
  locations,
  note,
}: {
  label: string
  locations: Array<{ slug: string; name: string; county: string }>
  note: string
}) {
  return (
    <div className="border-t-2 border-verdigris pt-4">
      <h3 className="font-mono text-spec uppercase text-steel">{label}</h3>
      <ul className="mt-3 space-y-1">
        {locations.map((l) => (
          <li key={l.slug}>
            <a href={`/service-areas/${l.slug}`} className="font-display text-lg text-ink hover:text-copper">
              {l.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-steel">{note}</p>
    </div>
  )
}
