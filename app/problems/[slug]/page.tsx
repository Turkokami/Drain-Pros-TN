/**
 * PROBLEM PAGE — dynamic, one per registered problem.
 *
 * Symptom-led counterpart to the service page. Same registry-driven pattern,
 * different shape, because the intent is different: someone here has a problem
 * in front of them and wants to know whether it is an emergency before they
 * want to know what a plumber charges.
 *
 * Order is deliberate and does not change per page:
 *   1. Quick answer — is this urgent, and what is it, in two sentences.
 *   2. Do this right now — only on urgent problems, before anything else.
 *   3. Symptoms, causes, what we do.
 *   4. Who fixes it — the bound service, which is the conversion link.
 *
 * Urgent problems lead with the emergency CTA; the rest lead with booking.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PROBLEMS, getProblem, problemsByGroup } from '@/config/problems'
import { getProblemContent } from '@/content/problem-content'
import { photoForProblem } from '@/lib/gallery'
import { BeforeAfterPair } from '@/components/BeforeAfter'
import { getService } from '@/config/services'
import { getServiceContent } from '@/content/service-content'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA, EmergencyCTA, BookOnlineCTA } from '@/components/CTA'
import { GetService } from '@/components/GetService'
import { Section, SectionHeading, Eyebrow, QuickAnswer, Prose, BulletList, FAQ } from '@/components/ui'
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
  return PROBLEMS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const problem = getProblem(slug)
  const content = getProblemContent(slug)
  if (!problem || !content) return {}
  return buildMetadata({
    title: `${problem.name} — What It Means and What to Do`,
    description: content.quickAnswer,
    path: `/problems/${problem.slug}`,
    keywords: [
      `${problem.name} Cleveland TN`,
      `${problem.name} Charleston TN`,
      `${problem.name} Athens TN`,
      `plumber ${problem.name.toLowerCase()} Bradley County`,
    ],
  })
}

export default async function ProblemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const problem = getProblem(slug)
  const content = getProblemContent(slug)
  if (!problem || !content) notFound()

  const service = getService(problem.service)
  const serviceContent = service ? getServiceContent(service.slug) : null
  const path = `/problems/${problem.slug}`
  const siblings = problemsByGroup(problem.group).filter((p) => p.slug !== problem.slug)
  const photo = photoForProblem(problem.slug)

  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, problem.name, content.quickAnswer),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Common problems', url: '/problems' },
      { name: problem.name, url: path },
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
              {problem.urgent ? 'Urgent · call first' : 'Common problem'} · TN LLP #5045
            </Eyebrow>
            <h1 className="mt-4 text-display-xl">{problem.name}</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85">{problem.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {problem.urgent ? (
                <>
                  <EmergencyCTA />
                  <PrimaryCTA />
                </>
              ) : (
                <>
                  <PrimaryCTA />
                  <BookOnlineCTA />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER + RIGHT NOW + CREDENTIAL */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start">
          <div>
            <QuickAnswer>{content.quickAnswer}</QuickAnswer>

            {content.rightNow && content.rightNow.length > 0 && (
              /* Damage-limiting steps sit ABOVE the sales copy on purpose. If
                 someone only reads one block on this page, it should be this. */
              <div className="mt-8 rounded-card border-l-4 border-signal bg-bone p-6">
                <h2 className="font-mono text-spec uppercase text-signal">Do this right now</h2>
                <ol className="mt-3 space-y-2">
                  {content.rightNow.map((step, i) => (
                    <li key={i} className="flex gap-3 font-body text-ink/90">
                      <span className="font-mono text-spec text-signal">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <Prose className="mt-8">
              <p>{content.lede}</p>
            </Prose>

            <h2 className="mt-10 text-display-md">How you know this is it</h2>
            <BulletList items={content.symptoms} />

            <h2 className="mt-10 text-display-md">What usually causes it</h2>
            <BulletList items={content.causes} />

            {content.whatWeDo && content.whatWeDo.length > 0 && (
              <>
                <h2 className="mt-10 text-display-md">What we do about it</h2>
                <BulletList items={content.whatWeDo} />
              </>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            {photo && (
              <figure className="overflow-hidden rounded-lg border-2 border-verdigris/50 shadow-lift">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                {photo.caption && (
                  <figcaption className="bg-galv px-4 py-2 font-mono text-spec uppercase text-steel">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            )}
            <CredentialStrip />
            {service && (
              <div className="rounded-card border-l-4 border-verdigris bg-galv p-6">
                <h2 className="font-mono text-spec uppercase text-steel">Who fixes this</h2>
                <a
                  href={`/services/${service.slug}`}
                  className="mt-2 block font-display text-lg text-ink hover:text-copper"
                >
                  {service.name} →
                </a>
                <p className="mt-2 text-sm text-ink/90">
                  {serviceContent?.quickAnswer ?? service.summary}
                </p>
              </div>
            )}
          </aside>
        </div>
      </Section>

      <Section tone="paper" padded={false}>
        <div className="my-4">
          <BeforeAfterPair slug={problem.slug} />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <SectionHeading eyebrow="Common questions" title={`${problem.name}: your questions answered`} />
        <FAQ items={content.faqs} />

        {siblings.length > 0 && (
          <div className="mt-12 border-t border-ink/10 pt-8">
            <p className="eyebrow text-copper">Related problems</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {siblings.map((p) => (
                <a
                  key={p.slug}
                  href={`/problems/${p.slug}`}
                  className="inline-flex items-center border border-ink/20 px-4 py-2 font-body text-sm text-ink hover:border-copper hover:text-copper"
                >
                  {p.name}
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
