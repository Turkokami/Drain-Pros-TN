/**
 * SERVICE PAGE — dynamic, one per registered service.
 *
 * Same pattern as the reference location page:
 *   1. Resolve the service from the registry.
 *   2. Ask the scope guard which locations it may claim — areaServed comes from
 *      the guard, never from the full location list. A permit-required service
 *      claims only jurisdictions where he can pull, which today is none, and that
 *      is the honest state until the permit map is verified.
 *   3. Build the @graph from the same data the page renders.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES, getService } from '@/config/services'
import { LOCATIONS } from '@/config/locations'
import { assertSellable } from '@/lib/scope-guard'
import { getServiceContent } from '@/content/service-content'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA, EmergencyCTA } from '@/components/CTA'
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

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

/** Locations where the guard says this service may be sold. Drives areaServed. */
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
  return {
    title: `${service.name} — Charleston & the TN Corridor`,
    description: content.quickAnswer,
    alternates: { canonical: `/services/${service.slug}` },
  }
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

  const graph = buildGraph([
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
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      <article className="mx-auto max-w-4xl px-5 py-12">
        <p className="font-mono text-spec uppercase text-steel">
          {service.pillar.replace(/-/g, ' ')} · TN LLP #5045
        </p>
        <h1 className="mt-2 text-display-xl">{service.name}</h1>

        {/* AEO quick answer — first substantive block, states the limits plainly. */}
        <p className="mt-6 max-w-prose border-l-2 border-copper pl-4 text-lg text-ink">
          {content.quickAnswer}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <PrimaryCTA />
          {service.pillar === 'core' && <EmergencyCTA />}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="max-w-prose text-ink/90">{content.lede}</p>

            <h2 className="mt-10 text-display-lg">What the job covers</h2>
            <ul className="mt-4 space-y-2">
              {content.whatWeDo.map((item) => (
                <li key={item} className="flex max-w-prose gap-3 text-ink/90">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-copper" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {requiresCeiling && (
              <div className="mt-8 border border-copper/40 bg-galv p-5">
                <h3 className="font-mono text-spec uppercase text-steel">Per-project ceiling</h3>
                <p className="mt-2 max-w-prose text-sm text-ink/90">
                  A Tennessee Limited Licensed Plumber carries a $25,000 per-project cap. Most jobs
                  are well under it. When one would run higher, we bring in a partner rather than
                  split the work or understate it.
                </p>
              </div>
            )}

            <div className="mt-8 border-l-2 border-verdigris bg-galv p-5">
              <h3 className="font-mono text-spec uppercase text-steel">Where we cover this</h3>
              <p className="mt-2 max-w-prose text-sm text-ink/90">
                {service.requiresPermit
                  ? 'This is permitted work. We do it across the Bradley–McMinn corridor in the towns ' +
                    'where we are cleared to pull a permit, and we are verifying that town by town. ' +
                    'Inside Chattanooga city limits, permit-required work goes to a licensed partner.'
                  : `Permit-free, so we cover the entire service area for it — all ${served.length} ` +
                    'towns from Charleston and Cleveland to Athens, plus inside Chattanooga city limits.'}{' '}
                <a href="/service-areas" className="text-copper underline underline-offset-4">
                  See service areas
                </a>
                .
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <CredentialStrip />
          </aside>
        </div>

        <section className="mt-14">
          <h2 className="text-display-lg">Common questions</h2>
          <dl className="mt-6 space-y-6">
            {content.faqs.map((f) => (
              <div key={f.q} className="border-t border-ink/10 pt-4">
                <dt className="font-display text-lg text-ink">{f.q}</dt>
                <dd className="mt-1 max-w-prose text-ink/90">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-ink/10 pt-8">
          <p className="font-display text-lg text-ink">Need this handled?</p>
          <PrimaryCTA />
        </div>
      </article>
    </>
  )
}
