/**
 * SERVICE PAGE — dynamic, one per registered service.
 *
 * Same pattern as the reference location page:
 *   1. Resolve the service from the registry.
 *   2. Ask the scope guard which locations it may claim — areaServed comes from
 *      the guard, never from the full location list.
 *   3. Build the @graph from the same data the page renders. HowTo and speakable
 *      nodes are added for AEO/voice when a real process is described.
 *
 * Rich content (intro, signs, sections, process, related) renders when present;
 * services without it fall back to the base fields in the same design.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES, getService } from '@/config/services'
import { LOCATIONS } from '@/config/locations'
import { assertSellable } from '@/lib/scope-guard'
import { getServiceContent } from '@/content/service-content'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA, EmergencyCTA, CTABand } from '@/components/CTA'
import { Section, SectionHeading, Eyebrow, QuickAnswer, Prose, BulletList, Step, FAQ } from '@/components/ui'
import { buildMetadata } from '@/lib/seo'
import {
  buildGraph,
  websiteNode,
  businessNode,
  ownerNode,
  webPageNode,
  breadcrumbNode,
  serviceNode,
  faqNode,
  howToNode,
} from '@/lib/schema/graph'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

function areaServedSlugs(slug: string): string[] {
  return LOCATIONS.filter((l) => assertSellable(slug, l.slug).sellable).map((l) => l.slug)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  const content = getServiceContent(slug)
  if (!service || !content) return {}
  return buildMetadata({
    title: `${service.name} — Charleston & the TN Corridor`,
    description: content.quickAnswer,
    path: `/services/${service.slug}`,
    keywords: [
      `${service.name} Cleveland TN`,
      `${service.name} Charleston TN`,
      `${service.name} Athens TN`,
      `${service.name} Bradley County`,
    ],
  })
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  const content = getServiceContent(slug)
  if (!service || !content) notFound()

  const decision = assertSellable(slug)
  const requiresCeiling = decision.sellable && decision.requiresCeilingDisclosure
  const served = areaServedSlugs(slug)
  const path = `/services/${service.slug}`
  const isCore = service.pillar === 'core'

  const nodes: object[] = [
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, service.name, content.quickAnswer),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.name, url: path },
    ]),
    serviceNode(service, served),
    faqNode(path, content.faqs),
  ]
  if (content.process && content.process.length > 0) {
    nodes.push(howToNode(path, `How we handle ${service.name.toLowerCase()}`, content.process))
  }
  const graph = buildGraph(nodes)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      {/* HERO */}
      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-4xl reveal">
            <Eyebrow className="text-mist">
              {service.pillar.replace(/-/g, ' ')} · TN LLP #5045 · {service.requiresPermit ? 'permit required' : 'permit-free'}
            </Eyebrow>
            <h1 className="mt-4 text-display-xl">{service.name}</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85">{service.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA />
              {isCore && <EmergencyCTA />}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER + INTRO + CREDENTIAL */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start">
          <div>
            <QuickAnswer>{content.quickAnswer}</QuickAnswer>
            <Prose className="mt-8">
              <p>{content.lede}</p>
              {content.intro?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>

            <h2 className="mt-10 text-display-md">What the job covers</h2>
            <BulletList items={content.whatWeDo} />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <CredentialStrip />
            <div className="rounded-card border-l-4 border-verdigris bg-galv p-6">
              <h2 className="font-mono text-spec uppercase text-steel">Where we cover this</h2>
              <p className="mt-2 text-sm text-ink/90">
                {service.requiresPermit
                  ? 'Permitted work. We do it across the Bradley–McMinn corridor in the towns where we are cleared to pull a permit, and we are verifying that town by town. Inside Chattanooga city limits it goes to a licensed partner.'
                  : `Permit-free, so we cover the entire service area — all ${served.length} towns from Charleston and Cleveland to Athens, plus inside Chattanooga city limits.`}
              </p>
              <a
                href="/service-areas"
                className="mt-3 inline-block font-mono text-spec uppercase text-copper underline underline-offset-4"
              >
                See service areas →
              </a>
            </div>
          </aside>
        </div>
      </Section>

      {/* SIGNS */}
      {content.signs && content.signs.length > 0 && (
        <Section tone="bone">
          <SectionHeading eyebrow="How to tell" title={`Signs you need ${service.name.toLowerCase()}`} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.signs.map((s, i) => (
              <li key={i} className="flex gap-3 rounded-card border border-ink/10 bg-paper p-4 shadow-card">
                <span aria-hidden className="mt-1 font-mono text-copper">›</span>
                <span className="text-ink/90">{s}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* DEEP SECTIONS */}
      {content.sections && content.sections.length > 0 && (
        <Section tone="paper">
          <div className="space-y-12">
            {content.sections.map((sec, i) => (
              <div key={i} className="grid gap-4 lg:grid-cols-[1fr_2fr]">
                <h2 className="text-display-md text-ink lg:sticky lg:top-24 lg:self-start">{sec.heading}</h2>
                <Prose>
                  {sec.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </Prose>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* PROCESS */}
      {content.process && content.process.length > 0 && (
        <Section tone="galv">
          <SectionHeading eyebrow="How we work" title={`How we handle ${service.name.toLowerCase()}`} />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.process.map((step, i) => (
              <Step key={i} n={i + 1} title={step.name}>
                {step.text}
              </Step>
            ))}
          </div>
        </Section>
      )}

      {/* CEILING DISCLOSURE */}
      {requiresCeiling && (
        <Section tone="paper" padded={false}>
          <div className="my-14 rounded-card border border-copper/40 bg-bone p-6 md:p-8">
            <h2 className="font-mono text-spec uppercase text-steel">Per-project ceiling</h2>
            <p className="mt-2 max-w-prose text-ink/90">
              A Tennessee Limited Licensed Plumber carries a $25,000 per-project cap. Most jobs are
              well under it. When one would run higher, we bring in a partner rather than split the
              work or understate it. We would rather be straight than win a job we cannot finish.
            </p>
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section tone="paper">
        <SectionHeading eyebrow="Common questions" title={`${service.name}: your questions answered`} />
        <FAQ items={content.faqs} />

        {content.related && content.related.length > 0 && (
          <div className="mt-12 border-t border-ink/10 pt-8">
            <p className="eyebrow text-copper">Related</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {content.related.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  className="rounded-card border border-ink/15 px-4 py-2 text-sm text-ink hover:border-copper hover:text-copper"
                >
                  {r.label} →
                </a>
              ))}
            </div>
          </div>
        )}
      </Section>

      <CTABand heading={`Need ${service.name.toLowerCase()} handled right?`} />
    </>
  )
}
