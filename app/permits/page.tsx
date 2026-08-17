/**
 * PERMITS HUB — Phase 4.
 *
 * The whole footprint's permitting picture on one page, including the counties
 * where an application from an LLP is not accepted. Publishing the exceptions is
 * the point: it is what makes the rest of the table believable.
 */

import { COUNTIES, jurisdictionsInCounty, countyAcceptsLlp } from '@/config/counties'
import { JURISDICTIONS } from '@/config/jurisdictions'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PermitNote } from '@/components/PermitNote'
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
  'Who issues plumbing permits across Bradley, McMinn, Hamilton, Polk, and Meigs County, whether ' +
  'they accept an application from a Tennessee Limited Licensed Plumber, and how long each takes. ' +
  'Verified by phone in August 2026.'

export const metadata = buildMetadata({
  title: 'Plumbing Permits by County — Southeast Tennessee',
  description: DESCRIPTION,
  path: '/permits',
  keywords: [
    'plumbing permit Bradley County TN',
    'plumbing permit McMinn County',
    'who issues plumbing permits Tennessee',
    'plumbing inspection Cleveland TN',
  ],
})

export default function PermitsPage() {
  const path = '/permits'
  const total = Object.keys(JURISDICTIONS).length
  const accepting = Object.values(JURISDICTIONS).filter((j) => j.permitAuthority === 'full').length

  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, 'Plumbing Permits by County', DESCRIPTION),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Permits', url: path },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-4xl reveal">
            <Eyebrow className="text-mist">Permit guidance · TN LLP #5045</Eyebrow>
            <h1 className="mt-4 text-display-xl">
              Who issues the permit, and how long it takes.
            </h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85 speakable">{DESCRIPTION}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA />
              <BookOnlineCTA />
            </div>
            <p className="mt-6 font-mono text-spec uppercase text-mist">
              {total} permitting authorities called · {accepting} accept an application from #5045
            </p>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={`${COUNTIES.length} counties`}
              title="Permit guidance by county"
              intro="We called every permitting authority in the footprint in August 2026 and wrote down what they said, including the four that do not accept an application from a Limited Licensed Plumber."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {COUNTIES.map((c) => {
                const yes = countyAcceptsLlp(c.county)
                return (
                  <FeatureCard
                    key={c.slug}
                    title={c.name}
                    meta={yes ? 'accepts #5045' : 'via partner'}
                    href={`/permits/${c.slug}`}
                  >
                    {jurisdictionsInCounty(c.county).length} permitting{' '}
                    {jurisdictionsInCounty(c.county).length === 1 ? 'authority' : 'authorities'}
                  </FeatureCard>
                )
              })}
            </div>

            <div className="mt-12">
              <PermitNote />
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <CredentialStrip />
          </aside>
        </div>
      </Section>

      <CTABand
        heading="Not sure whether your job needs a permit?"
        sub="Describe the work and we will tell you straight, including when the answer is that it does not need one."
      />
    </>
  )
}
