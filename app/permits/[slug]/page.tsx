/**
 * PERMIT GUIDANCE BY COUNTY — Phase 4.
 *
 * The most defensible authority content in the build, because it is specific
 * and it is checked. Every permitting authority in the footprint was called and
 * answered on 2026-08-16, and this page renders those answers straight from
 * config/jurisdictions.ts rather than restating them in prose that could drift.
 *
 * The table is the page. A homeowner wants to know which desk issues the permit
 * and how long it takes, and no competitor in this market publishes that,
 * because publishing it means making thirteen phone calls first.
 *
 * Where an authority does not accept an application from an LLP, the page says
 * so plainly. Hiding it would be the obvious move and it would be the wrong one:
 * the honest version is the reason to trust the rest of the page.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  COUNTIES,
  getCounty,
  jurisdictionsInCounty,
  locationsInCounty,
  countyAcceptsLlp,
} from '@/config/counties'
import { CredentialStrip } from '@/components/ScopeStrip'
import { AssuranceStrip } from '@/components/AssuranceStrip'
import { PrimaryCTA, BookOnlineCTA, CTABand } from '@/components/CTA'
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
  return COUNTIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const county = getCounty(slug)
  if (!county) return {}
  return buildMetadata({
    title: `Plumbing Permits in ${county.name}, TN`,
    description: county.summary,
    path: `/permits/${county.slug}`,
    keywords: [
      `plumbing permit ${county.name} TN`,
      `who issues plumbing permits ${county.name}`,
      `plumbing inspection ${county.name} Tennessee`,
    ],
  })
}

export default async function CountyPermitPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const county = getCounty(slug)
  if (!county) notFound()

  const authorities = jurisdictionsInCounty(county.county)
  const towns = locationsInCounty(county.county)
  const allAccept = countyAcceptsLlp(county.county)
  const path = `/permits/${county.slug}`

  const faqs = [
    {
      q: `Who issues a plumbing permit in ${county.name}?`,
      a: `${
        authorities.length > 1
          ? `${authorities.length} separate authorities, depending on the address. `
          : ''
      }${authorities.map((a) => a.name).join(', ')}. Towns inside a county often administer their own permitting rather than deferring to the county, which is exactly the detail that costs an out-of-town crew a week.`,
    },
    {
      q: 'Do I have to pull the permit myself?',
      a: 'No. Where a job needs one, our office files it and books the inspection as part of the work. You approve a price and we handle the paperwork behind it.',
    },
    {
      q: 'How long does a permit take here?',
      a: allAccept
        ? 'One to three days across this county, based on what the permitting offices told us directly in August 2026. We schedule around that rather than guessing.'
        : 'It varies, and in this county permitted work is filed through a licensed partner our office works with. We give you a real date once the filing is in rather than a hopeful one.',
    },
    {
      q: 'Does every plumbing job need a permit?',
      a: 'No. Drain cleaning, emergency and repair work, like-for-like fixture swaps, and water heater repair generally do not. Replacements, repipes, sewer and service line work, gas, and relocating a fixture generally do. The determination belongs to the Authority Having Jurisdiction for your address.',
    },
    {
      q: 'Are you licensed?',
      a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov. Across eighteen local competitors, not one publishes their number.',
    },
  ]

  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, `Plumbing Permits in ${county.name}`, county.summary),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Permits', url: '/permits' },
      { name: county.name, url: path },
    ]),
    faqNode(path, faqs),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-4xl reveal">
            <Eyebrow className="text-mist">Permit guidance · TN LLP #5045</Eyebrow>
            <h1 className="mt-4 text-display-xl">Plumbing permits in {county.name}</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85">{county.summary}</p>
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
            <QuickAnswer>{county.summary}</QuickAnswer>

            <h2 className="mt-10 text-display-md">Who issues the permit here</h2>
            <p className="mt-2 max-w-prose text-ink/90">
              We called every one of these directly in August 2026. Towns inside a county frequently
              run their own permitting rather than deferring to the county, so the right desk
              depends on the address rather than the county line.
            </p>
            {/* Scrolls in its own container so a phone never scrolls sideways. */}
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-verdigris">
                    <th className="py-3 pr-4 font-mono text-spec uppercase text-steel">Authority</th>
                    <th className="py-3 pr-4 font-mono text-spec uppercase text-steel">
                      Accepts LLP #5045
                    </th>
                    <th className="py-3 font-mono text-spec uppercase text-steel">Turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  {authorities.map((a) => {
                    const yes = a.permitAuthority === 'full'
                    return (
                      <tr key={a.id} className="border-b border-ink/10 align-top">
                        <td className="py-3 pr-4 text-sm text-ink">{a.name}</td>
                        <td className="py-3 pr-4 text-sm">
                          <span
                            className={
                              yes
                                ? 'font-mono text-spec uppercase text-copper'
                                : 'font-mono text-spec uppercase text-signal'
                            }
                          >
                            {yes ? 'Yes' : 'No — filed via partner'}
                          </span>
                        </td>
                        <td className="py-3 text-sm text-ink/90">{yes ? '1–3 days' : 'Varies'}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-3 font-mono text-spec uppercase text-steel">
              Verified August 2026 · confirm with the office for your specific job
            </p>

            <h2 className="mt-10 text-display-md">About {county.name}</h2>
            <Prose className="mt-3">
              <p>{county.context}</p>
            </Prose>

            {!allAccept && (
              <div className="mt-8 rounded-card border-l-4 border-copper bg-galv p-6">
                <h3 className="font-mono text-spec uppercase text-steel">
                  What that means for your job
                </h3>
                <p className="mt-2 max-w-prose text-ink/90">
                  Nothing, on your side. We still cover the full service list here. Where a job needs
                  a permit, our office files it through a licensed partner and books the inspection.
                  One call, one price, one crew — the difference is entirely in whose name the
                  paperwork goes in, which is our problem rather than yours.
                </p>
              </div>
            )}

            {towns.length > 0 && (
              <>
                <h2 className="mt-10 text-display-md">Towns we serve in {county.name}</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {towns.map((t) => (
                    <a
                      key={t.slug}
                      href={`/service-areas/${t.slug}`}
                      className="inline-flex items-center border border-ink/20 px-4 py-2 font-body text-sm text-ink hover:border-copper hover:text-copper"
                    >
                      {t.name}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <CredentialStrip />
            <AssuranceStrip />
          </aside>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="Common questions" title={`Permits in ${county.name}: your questions`} />
        <FAQ items={faqs} />
      </Section>

      <CTABand heading={`Need a licensed plumber in ${county.name}?`} />
    </>
  )
}
