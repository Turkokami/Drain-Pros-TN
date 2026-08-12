/**
 * LOCATION PAGE — one per town, guard-driven.
 *
 * The canonical pattern, now expanded:
 *   1. Resolve the location from the registry.
 *   2. Ask the scope guard which services may render here (ScopeStrip). Never map
 *      over SERVICES directly.
 *   3. Build the @graph from the same data the page renders.
 *
 * Content depth comes from content/location-content.ts (honest regional material)
 * plus the registry's non-copyable localFacts. A thin location page is worse than
 * none — the linter enforces a minimum of three localFacts.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCATIONS, getLocation } from '@/config/locations'
import { JURISDICTIONS } from '@/config/jurisdictions'
import { sellableServices } from '@/lib/scope-guard'
import { getLocationContent } from '@/content/location-content'
import { ScopeStrip, CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA, EmergencyCTA, CTABand } from '@/components/CTA'
import { Section, SectionHeading, Eyebrow, QuickAnswer, Prose, FAQ } from '@/components/ui'
import { buildMetadata } from '@/lib/seo'
import {
  buildGraph,
  websiteNode,
  webPageNode,
  breadcrumbNode,
  businessNode,
  ownerNode,
  faqNode,
} from '@/lib/schema/graph'

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const location = getLocation(slug)
  const content = getLocationContent(slug)
  if (!location || !content) return {}
  return buildMetadata({
    title: `Plumber in ${location.name}, TN`,
    description: content.quickAnswer,
    path: `/service-areas/${location.slug}`,
    keywords: [
      `plumber ${location.name} TN`,
      `drain cleaning ${location.name}`,
      `emergency plumber ${location.name}`,
      `water heater ${location.name} TN`,
      `${location.county} County plumber`,
    ],
  })
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = getLocation(slug)
  const content = getLocationContent(slug)
  if (!location || !content) notFound()

  const jurisdiction = JURISDICTIONS[location.jurisdictionId]
  const services = sellableServices(location.slug)
  const path = `/service-areas/${location.slug}`

  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, `Plumber in ${location.name}, TN`, content.quickAnswer),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Service Areas', url: '/service-areas' },
      { name: location.name, url: path },
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
              {location.county} County · {location.driveMinutes} min from Charleston
              {location.utility ? ` · ${location.utility}` : ''}
            </Eyebrow>
            <h1 className="mt-4 text-display-xl">Plumber in {location.name}, Tennessee</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85">
              Licensed plumbing in {location.name}, {location.county} County — {services.length}{' '}
              services available here, backed by TN license #5045.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA />
              <EmergencyCTA />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER + INTRO + LOCAL FACTS */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start">
          <div>
            <QuickAnswer>{content.quickAnswer}</QuickAnswer>
            <Prose className="mt-8">
              {content.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>

            <h2 className="mt-10 text-display-md">What we know about {location.name}</h2>
            <ul className="mt-4 space-y-3">
              {location.localFacts.map((f) => (
                <li key={f} className="flex max-w-prose gap-3 text-ink/90">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-copper" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <CredentialStrip />
          </aside>
        </div>
      </Section>

      {/* LOCAL SECTIONS */}
      {content.localSections.length > 0 && (
        <Section tone="bone">
          <div className="space-y-12">
            {content.localSections.map((sec, i) => (
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

      {/* COMMON ISSUES */}
      {content.commonIssues.length > 0 && (
        <Section tone="paper">
          <SectionHeading
            eyebrow="What tends to go wrong"
            title={`Common plumbing problems in ${location.name}`}
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.commonIssues.map((issue, i) => (
              <li key={i} className="flex gap-3 rounded-card border border-ink/10 bg-paper p-4 shadow-card">
                <span aria-hidden className="mt-1 font-mono text-copper">›</span>
                <span className="text-ink/90">{issue}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* SCOPE — guard-driven coverage + honesty block */}
      <Section tone="galv">
        <SectionHeading
          eyebrow="Honest scope"
          title={`Exactly what we cover in ${location.name}`}
          intro={
            jurisdiction?.permitAuthority === 'none'
              ? `Permit-free work runs at full strength here. Permit-required work inside the city goes to a licensed partner, and we tell you which is which.`
              : `Permit-free work runs at full strength here. Permitted work is scheduled as we confirm local permitting.`
          }
        />
        <div className="mt-8">
          <ScopeStrip location={location} />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <SectionHeading eyebrow="Common questions" title={`Plumbing in ${location.name}: your questions`} />
        <FAQ items={content.faqs} />
      </Section>

      <CTABand
        heading={`Need a plumber in ${location.name}?`}
        sub={`${location.driveMinutes} minutes from our base in Charleston. Straight pricing you approve before we start.`}
      />
    </>
  )
}
