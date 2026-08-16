/**
 * SERVICE-AREAS HUB — redesigned.
 *
 * Lists every town by market tier and links to its page. The breadcrumb on each
 * location page points here, so this route must exist. The full service list
 * runs in every tier, Chattanooga included.
 */

import { locationsByTier, type Location } from '@/config/locations'
import { PrimaryCTA, CTABand } from '@/components/CTA'
import { Section, SectionHeading, Eyebrow } from '@/components/ui'
import { buildMetadata } from '@/lib/seo'
import {
  buildGraph,
  websiteNode,
  businessNode,
  ownerNode,
  webPageNode,
  breadcrumbNode,
} from '@/lib/schema/graph'

const TIERS: Array<{ key: Parameters<typeof locationsByTier>[0]; title: string; note: string }> = [
  { key: 'anchor', title: 'Anchor — home base', note: 'Charleston and Calhoun. Zero competition; we own the county seam.' },
  { key: 'primary', title: 'Primary revenue market', note: 'Cleveland and Athens, the thin middle tier of this market.' },
  { key: 'growth', title: 'Growth corridor', note: 'The fast-growing Hamilton County edge northeast of Chattanooga.' },
  { key: 'tail', title: 'Corridor & rural towns', note: 'The uncontested US-11 stretch, plus greater Chattanooga.' },
]

const DESCRIPTION =
  'Every town we cover, from Charleston and Cleveland to Athens, the US-11 corridor, and greater ' +
  'Chattanooga. Service-area business — we come to you.'

export const metadata = buildMetadata({
  title: 'Service Areas — Charleston, Cleveland, Athens & the TN Corridor',
  description: DESCRIPTION,
  path: '/service-areas',
  keywords: ['plumber service area Bradley County', 'plumber McMinn County TN', 'plumber near Charleston TN'],
})

export default function ServiceAreasHub() {
  const path = '/service-areas'
  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, 'Service Areas', DESCRIPTION),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Service Areas', url: path },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      {/* HERO */}
      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-4xl reveal">
            <Eyebrow className="text-mist">Coverage · based in Charleston, TN</Eyebrow>
            <h1 className="mt-4 text-display-xl">Every town along the corridor.</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85 speakable">{DESCRIPTION}</p>
            <div className="mt-8">
              <PrimaryCTA label="Book a plumber" />
            </div>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="space-y-14">
          {TIERS.map((tier) => {
            const locations = locationsByTier(tier.key)
            if (locations.length === 0) return null
            return (
              <section key={tier.key}>
                <SectionHeading eyebrow={`${locations.length} towns`} title={tier.title} intro={tier.note} />
                <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {locations.map((l: Location) => (
                    <li key={l.slug}>
                      <a href={`/service-areas/${l.slug}`} className="card card-hover group block h-full p-5">
                        <span className="font-display text-display-md text-ink group-hover:text-copper">
                          {l.name}
                        </span>
                        <span className="mt-2 block font-mono text-spec uppercase text-steel">
                          {l.county} County · {l.driveMinutes} min from Charleston
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </Section>

      <CTABand heading="Not sure if we reach you?" sub="Call and we will tell you straight. If we cover your town, it has a page here." />
    </>
  )
}
