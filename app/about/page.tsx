/**
 * ABOUT — redesigned, named-expert E-E-A-T built on the license.
 *
 * The owner is the entity. The Person node carries the credential. Years-in-trade
 * and founding year are still pending facts, so the page does not state them — it
 * leans on what is confirmed and says the rest honestly.
 */

import { LICENSE, fact } from '@/config/business'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA, CTABand } from '@/components/CTA'
import { businessName } from '@/lib/site'
import { Section, SectionHeading, Eyebrow, QuickAnswer, Prose } from '@/components/ui'
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
  'Drain Pros TN is a licensed, owner-operated plumbing company in Charleston, Tennessee. ' +
  'Tennessee Limited Licensed Plumber #5045, straight pricing, honest scope.'

export const metadata = buildMetadata({
  title: 'About — Licensed Owner-Operator, Charleston TN',
  description: DESCRIPTION,
  path: '/about',
  keywords: ['licensed plumber Charleston TN', 'owner operated plumber Bradley County', 'TN license 5045'],
})

export default function AboutPage() {
  const path = '/about'
  const holder = fact('LICENSE.holderName', LICENSE.holderName) ?? 'the license holder'
  const name = businessName()

  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, `About ${name}`, DESCRIPTION),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'About', url: path },
    ]),
  ])

  const blocks = [
    {
      title: 'The credential comes first',
      body: [
        'Every plumber in this market says "licensed." Across eighteen local competitors, not one puts the number where you can see it. We lead with ours, and we link the state lookup so you can confirm it before we ever knock on the door. A license is only worth anything if you can check it.',
      ],
    },
    {
      title: 'We handle the permits',
      body: [
        'Some plumbing needs a permit and an inspection, and some does not. Working out which is our job, not yours. Where one is required, the office pulls it and books the inspection as part of the work, so the price you approved is the price you pay and nobody is left chasing a codes department.',
        'The one line we draw is between the house and the systems outside it. Septic tanks, drain fields, well drilling, pumps, and pressure tanks are separately licensed trades in Tennessee. We do all the plumbing inside the house they serve, and when the system itself is the problem we point you to a contractor we trust rather than take it on anyway.',
      ],
    },
    {
      title: 'Straight pricing, on purpose',
      body: [
        'You approve a number before the work starts, and it holds. This market has a documented pattern of quotes climbing once the job is underway. We built the opposite habit into how we quote, and we would rather earn the second call than win the first one with a low number that grows.',
      ],
    },
    {
      title: 'Based in Charleston, out to the corridor',
      body: [
        'We are the only plumbing operation anchored in Charleston. Everyone else drives in from Cleveland or Athens. That puts us closest to the towns along the US-11 corridor that get treated as an afterthought, and it is a service-area business, so we come to you.',
      ],
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      {/* HERO */}
      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div className="reveal">
            <Eyebrow className="text-mist">About · TN LLP #5045</Eyebrow>
            <h1 className="mt-4 text-display-xl">A licensed plumber you can check.</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85 speakable">
              {name} is owner-operated out of Charleston, Tennessee. The work is done by the license
              holder, {holder}, not handed to whoever was free that day.
            </p>
            <div className="mt-8">
              <PrimaryCTA />
            </div>
          </div>
          <div className="reveal reveal-2 mx-auto w-full max-w-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mascot.jpg"
              alt="Drain Pros TN mascot — two friendly plumbers holding wrenches"
              className="w-full rounded-lg border-2 border-verdigris/50 shadow-lift"
            />
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="space-y-12">
            {blocks.map((b) => (
              <div key={b.title}>
                <h2 className="text-display-md text-ink">{b.title}</h2>
                <Prose className="mt-3">
                  {b.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </Prose>
              </div>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-lg border-2 border-verdigris/50 shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-van.jpg"
                alt="Drain Pros TN navy service van with gold branding"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <CredentialStrip />
          </aside>
        </div>
      </Section>

      <CTABand heading="Want a licensed plumber on the job?" />
    </>
  )
}
