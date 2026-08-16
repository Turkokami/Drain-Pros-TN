/**
 * GUIDE PAGE — dynamic, one per registered guide.
 *
 * Decision content rather than emergency content, so the shape differs from a
 * problem page: recommendation first, explanation second, and a verdict block
 * that commits to an actual answer. Competitors write "it depends on your
 * needs" and stop. Saying what we would actually do is the differentiator.
 *
 * Comparison guides render a table. It scrolls inside its own container so a
 * narrow phone never forces the whole page sideways.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GUIDES, getGuide, guidesByCluster } from '@/config/guides'
import { getGuideContent } from '@/content/guide-content'
import { getService } from '@/config/services'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA, BookOnlineCTA } from '@/components/CTA'
import { GetService } from '@/components/GetService'
import { Section, SectionHeading, Eyebrow, QuickAnswer, Prose, FAQ } from '@/components/ui'
import { buildMetadata } from '@/lib/seo'
import {
  buildGraph,
  websiteNode,
  businessNode,
  ownerNode,
  webPageNode,
  breadcrumbNode,
  faqNode,
} from '@/lib/schema/graph'

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  const content = getGuideContent(slug)
  if (!guide || !content) return {}
  return buildMetadata({
    title: guide.name,
    description: content.quickAnswer,
    path: `/guides/${guide.slug}`,
    keywords: [
      `${guide.name} Cleveland TN`,
      `${guide.name} Charleston TN`,
      `plumber advice Bradley County`,
      `water heater guide Athens TN`,
    ],
  })
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getGuide(slug)
  const content = getGuideContent(slug)
  if (!guide || !content) notFound()

  const service = getService(guide.service)
  const path = `/guides/${guide.slug}`
  const siblings = guidesByCluster(guide.cluster).filter((g) => g.slug !== guide.slug)

  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, guide.name, content.quickAnswer),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Guides', url: '/guides' },
      { name: guide.name, url: path },
    ]),
    faqNode(path, content.faqs),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      {/* HERO */}
      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-4xl reveal">
            <Eyebrow className="text-mist">
              {guide.cluster.replace(/-/g, ' ')} · guide · TN LLP #5045
            </Eyebrow>
            <h1 className="mt-4 text-display-xl">{guide.name}</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85">{guide.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA />
              <BookOnlineCTA />
            </div>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start">
          <div>
            <QuickAnswer label="Short answer">{content.quickAnswer}</QuickAnswer>

            <Prose className="mt-8">
              <p>{content.lede}</p>
            </Prose>

            {content.sections.map((s, i) => (
              <div key={i} className="mt-10">
                <h2 className="text-display-md">{s.heading}</h2>
                <Prose className="mt-3">
                  {s.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </Prose>
              </div>
            ))}

            {content.comparison && (
              /* Scrolls inside its own container — a wide table must never make
                 the page body scroll sideways on a phone. */
              <div className="mt-10">
                <h2 className="text-display-md">Side by side</h2>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[34rem] border-collapse text-left">
                    <thead>
                      <tr className="border-b-2 border-verdigris">
                        <th className="py-3 pr-4 font-mono text-spec uppercase text-steel">Factor</th>
                        <th className="py-3 pr-4 font-display text-base font-bold text-ink">
                          {content.comparison.columns[0]}
                        </th>
                        <th className="py-3 font-display text-base font-bold text-ink">
                          {content.comparison.columns[1]}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.comparison.rows.map((r, i) => (
                        <tr key={i} className="border-b border-ink/10 align-top">
                          <td className="py-3 pr-4 font-mono text-spec uppercase text-steel">
                            {r.factor}
                          </td>
                          <td className="py-3 pr-4 text-sm text-ink/90">{r.a}</td>
                          <td className="py-3 text-sm text-ink/90">{r.b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {content.verdict && (
              <div className="mt-10 rounded-card border-l-4 border-verdigris bg-galv p-6">
                <h2 className="font-mono text-spec uppercase text-steel">What we would do</h2>
                <p className="mt-2 max-w-prose text-lead text-ink/90">{content.verdict}</p>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <CredentialStrip />
            {service && (
              <div className="rounded-card border-l-4 border-verdigris bg-galv p-6">
                <h2 className="font-mono text-spec uppercase text-steel">Related service</h2>
                <a
                  href={`/services/${service.slug}`}
                  className="mt-2 block font-display text-lg text-ink hover:text-copper"
                >
                  {service.name} →
                </a>
                <p className="mt-2 text-sm text-ink/90">{service.summary}</p>
              </div>
            )}
          </aside>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Common questions" title={`${guide.name.replace(/\?$/, '')} — questions`} />
        <FAQ items={content.faqs} />

        {siblings.length > 0 && (
          <div className="mt-12 border-t border-ink/10 pt-8">
            <p className="eyebrow text-copper">More on this</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {siblings.map((g) => (
                <a
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="inline-flex items-center border border-ink/20 px-4 py-2 font-body text-sm text-ink hover:border-copper hover:text-copper"
                >
                  {g.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </Section>

      <GetService service={service?.name} />
    </>
  )
}
