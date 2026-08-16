/**
 * SERVICES HUB — redesigned.
 *
 * Groups the registry by pillar in market-priority order: core (the revenue
 * engine) first, then water heating, water quality, and well/septic property
 * work. The full list publishes everywhere — see config/policy.ts.
 */

import { servicesByPillar, type Pillar } from '@/config/services'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA, CTABand } from '@/components/CTA'
import { Section, SectionHeading, Eyebrow, FeatureCard } from '@/components/ui'
import { buildMetadata } from '@/lib/seo'
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
      'Drains, emergencies, and repairs in every town we serve, Chattanooga included. This is what most people call about first, and it is what we are fastest on.',
  },
  {
    key: 'water-heating',
    title: 'Water heaters & tankless',
    blurb:
      'Repair, replacement, and tank-to-tankless conversions, sized to the house. We handle the permit and the inspection so you are not chasing paperwork.',
  },
  {
    key: 'water-quality',
    title: 'Water quality & filtration',
    blurb:
      'Treating hard water, iron, sulfur, and sediment at the main line — including on private-well properties, always house side only.',
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

export const metadata = buildMetadata({
  title: 'Plumbing Services — Charleston & the Bradley–McMinn Corridor',
  description: DESCRIPTION,
  path: '/services',
  keywords: [
    'plumbing services Cleveland TN',
    'drain cleaning Charleston TN',
    'water heater Athens TN',
    'emergency plumber Bradley County',
  ],
})

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

      {/* HERO */}
      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-4xl reveal">
            <Eyebrow className="text-mist">What we do · TN LLP #5045</Eyebrow>
            <h1 className="mt-4 text-display-xl">Everything a house needs from a plumber.</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85 speakable">{DESCRIPTION}</p>
            <div className="mt-8">
              <PrimaryCTA label="Book a plumber" />
            </div>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div className="space-y-14">
            {PILLARS.map((pillar) => {
              const services = servicesByPillar(pillar.key)
              if (services.length === 0) return null
              return (
                <section key={pillar.key}>
                  <SectionHeading eyebrow={`${services.length} services`} title={pillar.title} intro={pillar.blurb} />
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {services.map((s) => (
                      <FeatureCard key={s.slug} title={s.name} href={`/services/${s.slug}`}>
                        {s.summary}
                      </FeatureCard>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <CredentialStrip />
            <div className="rounded-card border-l-4 border-verdigris bg-galv p-6">
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
      </Section>

      <CTABand />
    </>
  )
}
