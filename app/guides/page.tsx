/**
 * GUIDES HUB
 *
 * Decision content, grouped by cluster. Deliberately separate from /problems:
 * someone here is choosing rather than reacting, so the page leads with the
 * two clusters where this market has real, unowned demand — water heating and
 * water quality.
 */

import { GUIDES, GUIDE_CLUSTERS, guidesByCluster } from '@/config/guides'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA, BookOnlineCTA, CTABand } from '@/components/CTA'
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

const DESCRIPTION =
  'Straight answers on water heaters and water quality — sizing, tank versus tankless, gas versus ' +
  'electric, hard water, iron, and sulfur. Written by the licensed plumber who does the work, for ' +
  'Charleston, Cleveland, Athens, and the corridor.'

export const metadata = buildMetadata({
  title: 'Plumbing Guides — Water Heaters & Water Quality',
  description: DESCRIPTION,
  path: '/guides',
  keywords: [
    'tank vs tankless Cleveland TN',
    'water heater sizing Charleston TN',
    'hard water Bradley County',
    'well water treatment Athens TN',
  ],
})

export default function GuidesPage() {
  const path = '/guides'

  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, 'Plumbing Guides', DESCRIPTION),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Guides', url: path },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-4xl reveal">
            <Eyebrow className="text-mist">Guides · TN LLP #5045</Eyebrow>
            <h1 className="mt-4 text-display-xl">Straight answers, including the ones that lose us a sale.</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85 speakable">{DESCRIPTION}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA />
              <BookOnlineCTA />
            </div>
            <p className="mt-6 font-mono text-spec uppercase text-mist">
              {GUIDES.length} guides · each one ends with what we would actually do
            </p>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div className="space-y-14">
            {GUIDE_CLUSTERS.map((cluster) => {
              const items = guidesByCluster(cluster.key)
              if (items.length === 0) return null
              return (
                <section key={cluster.key}>
                  <SectionHeading
                    eyebrow={`${items.length} guides`}
                    title={cluster.title}
                    intro={cluster.blurb}
                  />
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {items.map((g) => (
                      <FeatureCard
                        key={g.slug}
                        title={g.name}
                        meta={g.comparison ? 'comparison' : undefined}
                        href={`/guides/${g.slug}`}
                      >
                        {g.summary}
                      </FeatureCard>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <CredentialStrip />
          </aside>
        </div>
      </Section>

      <CTABand
        heading="Still not sure which way to go?"
        sub="Call and describe the house. We will tell you what we would fit and why, including when the cheaper option is the right one."
      />
    </>
  )
}
