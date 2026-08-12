/**
 * SERVICES HUB
 *
 * Groups the registry by pillar in market-priority order: core (the permit-free
 * revenue engine that runs everywhere) first, then water heating, water quality,
 * and well/septic property work. Permit status is shown as spec data, not hidden.
 */

import type { Metadata } from 'next'
import { servicesByPillar, type Pillar } from '@/config/services'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA } from '@/components/CTA'
import {
  buildGraph,
  websiteNode,
  businessNode,
  ownerNode,
  webPageNode,
  breadcrumbNode,
} from '@/lib/schema/graph'

const PILLARS: Array<{ key: Pillar; title: string; blurb: string }> = [
  {
    key: 'core',
    title: 'Core plumbing — drains, emergencies, repairs',
    blurb:
      'Permit-free work that runs at full strength in every town we serve, Chattanooga included. This is the revenue engine.',
  },
  {
    key: 'water-heating',
    title: 'Water heaters & tankless',
    blurb:
      'Repair everywhere; replacement and tankless are permitted work, handled in the corridor towns where we can pull a permit.',
  },
  {
    key: 'water-quality',
    title: 'Water quality & filtration',
    blurb:
      'Treating hard water, iron, sulfur, and sediment at the main line — including on private-well properties, house side only.',
  },
  {
    key: 'well-septic-property',
    title: 'Well & septic property plumbing',
    blurb:
      'The house side of well and septic homes. We never touch the well or septic system itself — that is separately licensed and referred out.',
  },
]

const DESCRIPTION =
  'Drain cleaning, emergency repair, leak detection, water heaters, tankless, and water quality ' +
  'across Charleston, Cleveland, Athens, the US-11 corridor, and greater Chattanooga. TN license #5045.'

export const metadata: Metadata = {
  title: 'Plumbing Services — Charleston & the Bradley–McMinn Corridor',
  description: DESCRIPTION,
  alternates: { canonical: '/services' },
}

export default function ServicesHub() {
  const path = '/services'
  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, 'Plumbing Services', DESCRIPTION),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Services', url: path },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="font-mono text-spec uppercase text-steel">What we do · TN LLP #5045</p>
        <h1 className="mt-2 text-display-xl">Plumbing services</h1>
        <p className="mt-6 max-w-prose border-l-2 border-copper pl-4 text-lg text-ink">
          {DESCRIPTION}
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            {PILLARS.map((pillar) => {
              const services = servicesByPillar(pillar.key)
              if (services.length === 0) return null
              return (
                <section key={pillar.key}>
                  <h2 className="text-display-lg">{pillar.title}</h2>
                  <p className="mt-2 max-w-prose text-ink/80">{pillar.blurb}</p>
                  <ul className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <a
                          href={`/services/${s.slug}`}
                          className="group flex items-baseline justify-between gap-4 py-4"
                        >
                          <span className="min-w-0">
                            <span className="font-display text-lg text-ink group-hover:text-copper">
                              {s.name}
                            </span>
                            <span className="mt-1 block max-w-prose text-sm text-steel">
                              {s.summary}
                            </span>
                          </span>
                          <span className="shrink-0 font-mono text-spec uppercase text-steel">
                            {s.requiresPermit ? 'permit req.' : 'permit-free'}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )
            })}
          </div>

          <aside className="space-y-6">
            <CredentialStrip />
            <div className="border-l-2 border-verdigris bg-galv p-6">
              <h2 className="font-mono text-spec uppercase text-steel">Straight pricing</h2>
              <p className="mt-2 text-sm text-ink/90">
                You approve a number before we start. No mid-job revisions once the truck is in the
                driveway.
              </p>
              <div className="mt-4">
                <PrimaryCTA />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
