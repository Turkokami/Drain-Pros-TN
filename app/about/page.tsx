/**
 * ABOUT — named-expert E-E-A-T built on the license AND the ownership.
 *
 * Rewritten 2026-08-16 after the client worksheet came back. The page used to
 * describe a solo owner-operator and named Kevin as the whole business, which
 * was wrong: Kayla Krishan owns it, Kevin holds the license, and they run it
 * together.
 *
 * Two things follow. It is a WOMAN-OWNED business, which is a real
 * differentiator that no competitor in the August 2026 analysis surfaces, so it
 * is stated plainly rather than worn as a badge. And the experience figure is
 * COMBINED across both of them against a 2025 founding date — the copy says
 * "combined" every time, because twenty years next to a 2025 start reads as
 * puffery the moment anyone checks.
 */

import { LICENSE, fact } from '@/config/business'
import { CredentialStrip } from '@/components/ScopeStrip'
import { AssuranceStrip } from '@/components/AssuranceStrip'
import { PrimaryCTA, CTABand } from '@/components/CTA'
import {
  businessName,
  legalName,
  entityType,
  owner,
  isWomanOwned,
  operators,
  foundedYear,
  combinedYearsInTrade,
  warranty,
  insurance,
} from '@/lib/site'
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
  'Drain Pros TN is a woman-owned, family-run plumbing company in Charleston, Tennessee, with two ' +
  'decades of combined trade experience. Tennessee Limited Licensed Plumber #5045, straight ' +
  'pricing, honest scope.'

export const metadata = buildMetadata({
  title: 'About — Woman-Owned, Family-Run Plumbers in Charleston TN',
  description: DESCRIPTION,
  path: '/about',
  keywords: [
    'woman owned plumber Tennessee',
    'family run plumber Charleston TN',
    'licensed plumber Bradley County',
    'TN license 5045',
  ],
})

export default function AboutPage() {
  const path = '/about'
  const holder = fact('LICENSE.holderName', LICENSE.holderName) ?? 'the license holder'
  const name = businessName()
  const legal = legalName()
  const entity = entityType()
  const ownerName = owner()
  const womanOwned = isWomanOwned()
  const team = operators()
  const founded = foundedYear()
  const years = combinedYearsInTrade()
  const w = warranty()
  const ins = insurance()

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
      title: 'Who you are actually hiring',
      body: [
        `${name} is${womanOwned ? ' a woman-owned,' : ''} family-run plumbing company${founded ? `, started in ${founded}` : ''} and based in Charleston.${ownerName ? ` ${ownerName} owns it.` : ''} ${holder} holds the plumbing license, #5045. Between them they have ${years ? `about ${years} years` : 'two decades'} of combined experience in the trade — which is the honest way to put it, since the business itself is newer than that.`,
        `${team.length === 2 ? `${team[0].name.split(' ')[0]} came up through ${team[0].background.replace(/^Started in the trade with /, '')}. ${team[1].name.split(' ')[0]} started on gas system installation and service before moving across to the water and sewer side.` : ''} You are dealing with the two people who own the outcome, not a dispatcher and whoever was free.`,
      ],
    },
    {
      title: 'The credential comes first',
      body: [
        'Every plumber in this market says "licensed." Across eighteen local competitors, not one puts the number where you can see it. We lead with ours, and we link the state lookup so you can confirm it before we ever knock on the door. A license is only worth anything if you can check it.',
        ins
          ? `Insurance gets the same treatment. We carry ${ins.carrier} general liability at $${(ins.generalLiabilityUsd / 1_000_000).toFixed(0)} million${ins.umbrella ? ', plus an umbrella policy' : ''}. "Licensed and insured" is a phrase anyone can type; the carrier and the number are the part that means something.`
          : '',
      ].filter(Boolean),
    },
    {
      title: 'The warranty, with its edges showing',
      body: [
        w
          ? `A ${w.workmanshipMonths}-month workmanship warranty on plumbing, running from the date the job is finished. It covers the work we did — not unrelated or pre-existing conditions elsewhere in the house. Drain cleaning carries a ${w.drainCleaningDays}-day warranty unless we say otherwise, and it excludes closet augers.`
          : '',
        'We publish the exclusions on purpose. A warranty you can actually hold someone to is worth more than an unqualified "lifetime" promise that quietly evaporates the first time you try to use it, and this trade has a lot of the latter.',
      ].filter(Boolean),
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
            <Eyebrow className="text-mist">
              About · TN LLP #5045{womanOwned ? ' · woman-owned' : ''}
            </Eyebrow>
            <h1 className="mt-4 text-display-xl">A licensed plumber you can check.</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85 speakable">
              {name} is a{womanOwned ? ' woman-owned,' : ''} family-run plumbing company out of
              Charleston, Tennessee{ownerName ? `, owned by ${ownerName}` : ''} and run with{' '}
              {holder}, who holds the license. {years ? `About ${years} years` : 'Two decades'} of
              combined experience in the trade, and you deal with the owners.
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
            <AssuranceStrip />
          </aside>
        </div>

        {legal && (
          <p className="mt-12 border-t border-ink/10 pt-6 font-mono text-spec uppercase text-steel">
            {name} is a trading name of {legal}
            {entity ? `, a Tennessee ${entity}` : ''}.
          </p>
        )}
      </Section>

      <CTABand heading="Want a licensed plumber on the job?" />
    </>
  )
}
