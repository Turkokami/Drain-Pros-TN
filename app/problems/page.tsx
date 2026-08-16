/**
 * PROBLEMS HUB
 *
 * Entry point for symptom-led search. Grouped by where the problem is rather
 * than by which service resolves it, because someone with water on the floor is
 * not thinking in service categories.
 *
 * Urgent problems are marked so the page is scannable in a hurry.
 */

import { PROBLEMS, PROBLEM_GROUPS, problemsByGroup } from '@/config/problems'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA, EmergencyCTA, CTABand } from '@/components/CTA'
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
  'What it means and what to do, for the plumbing problems we get called about most — burst pipes, ' +
  'sewer backups, no hot water, low pressure, and the rest. Serving Charleston, Cleveland, Athens, ' +
  'the US-11 corridor, and greater Chattanooga.'

export const metadata = buildMetadata({
  title: 'Common Plumbing Problems — What to Do',
  description: DESCRIPTION,
  path: '/problems',
  keywords: [
    'plumbing problems Cleveland TN',
    'burst pipe Charleston TN',
    'sewer backup Athens TN',
    'no hot water Bradley County',
  ],
})

export default function ProblemsPage() {
  const path = '/problems'
  const urgentCount = PROBLEMS.filter((p) => p.urgent).length

  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, 'Common Plumbing Problems', DESCRIPTION),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Common problems', url: path },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-4xl reveal">
            <Eyebrow className="text-mist">Common problems · TN LLP #5045</Eyebrow>
            <h1 className="mt-4 text-display-xl">What is going wrong, and what to do about it.</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85 speakable">{DESCRIPTION}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <EmergencyCTA />
              <PrimaryCTA />
            </div>
            <p className="mt-6 font-mono text-spec uppercase text-mist">
              {PROBLEMS.length} problems covered · {urgentCount} of them are call-first
            </p>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div className="space-y-14">
            {PROBLEM_GROUPS.map((group) => {
              const items = problemsByGroup(group.key)
              if (items.length === 0) return null
              return (
                <section key={group.key}>
                  <SectionHeading
                    eyebrow={`${items.length} problems`}
                    title={group.title}
                    intro={group.blurb}
                  />
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {items.map((p) => (
                      <FeatureCard
                        key={p.slug}
                        title={p.name}
                        meta={p.urgent ? 'call first' : undefined}
                        href={`/problems/${p.slug}`}
                      >
                        {p.summary}
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
        heading="Not sure which one you have?"
        sub="Describe what it is doing and we will tell you what it likely is and how fast we can be there. That part costs nothing."
      />
    </>
  )
}
