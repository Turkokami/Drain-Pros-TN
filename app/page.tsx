/**
 * HOME — corridor-first, expanded.
 *
 * Positioning: a Bradley–McMinn corridor plumbing company that also serves
 * greater Chattanooga. Drain cleaning leads because it is the most common first
 * call and what Kevin actually focuses on. The license rides high as
 * spec-sheet data — the strongest differentiator in a market where no competitor
 * shows a number at all. Voice: warm, plain, a tradesman who explains things.
 */

import { getService } from '@/config/services'
import { locationsByTier, LOCATIONS } from '@/config/locations'
import { CredentialStrip } from '@/components/ScopeStrip'
import { WorkGallery } from '@/components/Gallery'
import { PrimaryCTA, EmergencyCTA, CTABand, BookOnlineCTA } from '@/components/CTA'
import {
  Section,
  SectionHeading,
  Eyebrow,
  QuickAnswer,
  Prose,
  BulletList,
  FeatureGrid,
  FeatureCard,
  Step,
  StatStrip,
  FAQ,
} from '@/components/ui'
import { buildMetadata } from '@/lib/seo'
import { CORRIDOR_LINE, TAGLINE } from '@/lib/site'
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

const HERO_ANSWER =
  'Woman-owned, family-run licensed plumbing for Charleston, Cleveland, Athens, and the US-11 ' +
  'corridor, plus greater Chattanooga. Drain cleaning, emergency repair, and water heaters, ' +
  'handled by qualified plumbers you trust, with a price you approve before the work starts.'

const LEAD_SERVICES = [
  'drain-cleaning',
  'emergency-plumbing',
  'camera-inspection',
  'water-heater-repair',
  'water-heater-replacement',
  'fixture-repair',
]

const HOME_FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What areas do you cover?',
    a: 'Charleston and Calhoun at the county seam, Cleveland and Bradley County, Athens and McMinn County, the US-11 corridor towns between them, and greater Chattanooga. Twenty-one towns, and the full service list runs in all of them.',
  },
  {
    q: 'Are you actually licensed?',
    a: 'Yes. Tennessee Limited Licensed Plumber #5045, issued by the state Board for Licensing Contractors and verifiable at verify.tn.gov. It is on every page of this site on purpose. Across eighteen local competitors, not one shows their number.',
  },
  {
    q: 'Do I need to worry about permits?',
    a: 'No. Some jobs need one and some do not, and sorting out which is our office’s problem, not yours. When a permit is required we pull it and schedule the inspection as part of the job. You approve a price and we handle the paperwork behind it.',
  },
  {
    q: 'Do you answer after hours?',
    a: 'Yes. We run 24/7 emergency service — an active leak, a burst pipe, or no water does not wait for morning, and neither do we. Call (423) 413-6876 and you get a real person, not an automated queue.',
  },
  {
    q: 'How is your pricing set?',
    a: 'You get a number to approve before we start, and it does not change once the work begins. This market has a documented habit of quotes climbing mid-job at the volume shops. We built the opposite habit on purpose.',
  },
  {
    q: 'Do you work on well and septic properties?',
    a: 'Yes, the house side — the water lines, fixtures, heaters, and treatment inside the home. We do not touch the well or septic system itself. Tanks, drain fields, pumps, and pressure tanks are separately licensed in Tennessee, and we refer those to a contractor we trust.',
  },
  {
    q: 'Is there anything you do not handle?',
    a: 'Septic tanks and well systems themselves — drilling, pumps, pressure tanks, drain fields. Those are separately licensed trades in Tennessee. We do all the plumbing in the house they feed, and when the system itself needs work we put you onto a contractor we trust rather than guess at it.',
  },
  {
    q: 'Are you really based in Charleston?',
    a: 'Yes, and we are the only plumbing operation anchored in Charleston. Every competitor drives in from Cleveland or Athens. That puts us closest to the corridor towns that usually get treated as an afterthought. It is a service-area business, so we come to you — there is no storefront to visit.',
  },
  {
    q: 'How fast can you get to me?',
    a: 'It depends on where you are and what is happening. Charleston, Calhoun, Cleveland, and Athens are all inside twenty minutes of our base. Active leaks and no-water calls move to the front of the line. Call and we will give you a real window instead of a vague promise.',
  },
  {
    q: 'Do you charge just to come look at the problem?',
    a: 'We tell you up front how a diagnostic works when you call, so there is no surprise on the doorstep. The goal is a clear quote you can say yes or no to before any work happens.',
  },
]

export const metadata = buildMetadata({
  title: 'Woman-Owned Licensed Plumber in Charleston, Cleveland & Athens, TN',
  description: HERO_ANSWER,
  path: '/',
  keywords: [
    'woman owned plumber Tennessee',
    'woman owned plumbing company Cleveland TN',
    'plumber Charleston TN',
    'plumber Cleveland TN',
    'plumber Athens TN',
    'drain cleaning Bradley County',
    'emergency plumber Chattanooga',
    'licensed plumber Tennessee',
    'water heater replacement Cleveland TN',
  ],
})

export default function HomePage() {
  const anchors = locationsByTier('anchor')
  const primary = locationsByTier('primary')
  const growth = locationsByTier('growth')
  const drain = getService('drain-cleaning')!

  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode('/', 'Licensed Plumber — Charleston & the Bradley–McMinn Corridor, TN', HERO_ANSWER),
    breadcrumbNode('/', [{ name: 'Home', url: '/' }]),
    serviceNode(drain, LOCATIONS.map((l) => l.slug)),
    faqNode('/', HOME_FAQS),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      {/* HERO — brand logo + CTA bar.
           The wide banner JPG was swapped for the vector logo at client request.
           SVG rather than the PNG: 39KB against 700KB, and it stays sharp at any
           size, which matters most on the largest thing on the page. */}
      <section className="bg-pine text-paper">
        <div className="bg-pine bg-blueprint bg-grid">
          <div className="container-x flex justify-center py-10 md:py-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Drain Pros TN — Plumbing & Drain Cleaning. Call 423-413-6876."
              width={853}
              height={445}
              className="h-auto w-full max-w-[30rem] md:max-w-[38rem]"
            />
          </div>
        </div>
        <div className="border-t-2 border-verdigris/40 bg-pine bg-blueprint bg-grid">
          <div className="container-x py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-end">
              <div className="reveal">
                <Eyebrow className="text-mist">Woman-owned · Charleston · Cleveland · Athens · greater Chattanooga</Eyebrow>
                <h1 className="mt-3 text-display-xl">A licensed plumber your corridor actually has.</h1>
                <p className="mt-3 font-display text-display-md font-bold text-verdigris">{TAGLINE}</p>
                <p className="mt-4 max-w-prose text-lead text-paper/85 speakable">{HERO_ANSWER}</p>
              </div>
              <div className="flex flex-col gap-3 reveal reveal-2">
                <PrimaryCTA label="Book a plumber" />
                <EmergencyCTA />
                <BookOnlineCTA />
                <p className="font-mono text-spec uppercase text-mist">TN LLP #5045 · verify.tn.gov</p>
              </div>
            </div>
            <div className="mt-10">
              <StatStrip
                dark
                items={[
                  { value: '#5045', label: 'TN license, on every page' },
                  { value: '21 towns', label: 'corridor + Chattanooga' },
                  { value: '24/7', label: 'emergency service' },
                  { value: 'One price', label: 'approved before we start' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER (AEO / voice) */}
      <Section tone="paper">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
          <QuickAnswer>
            Drain Pros TN is a licensed, owner-operated plumbing company based in Charleston,
            Tennessee. We clear drains, stop leaks, handle plumbing emergencies, and repair and
            replace water heaters across Bradley and McMinn counties and greater Chattanooga. The
            license number is public, the pricing is fixed before we start, and we tell you plainly
            when a job is outside what we do.
          </QuickAnswer>
          <div className="grid grid-cols-3 gap-3 font-mono text-spec uppercase text-steel">
            <div className="border-t-2 border-copper pt-2">Owner<br />operated</div>
            <div className="border-t-2 border-copper pt-2">Straight<br />pricing</div>
            <div className="border-t-2 border-copper pt-2">Honest<br />scope</div>
          </div>
        </div>
      </Section>

      {/* LEAD SERVICE FEATURE */}
      <Section tone="bone">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Start with a drain"
              title="Usually the first call, and the one we are fastest on."
              intro="Drain cleaning is what most people call about first, so it is where most relationships start. It runs everywhere we drive, Chattanooga included."
            />
            <Prose className="mt-6">
              <p>
                A slow sink or a main line backing up into the house is the kind of problem that does
                not wait for business hours or care which county line you are on. We respond the same
                way in Chattanooga as we do in Charleston, and we would rather fix the cause than
                sell you the same cabling job twice.
              </p>
              <p>
                When a line keeps clogging in the same spot, that is usually a reason and not bad
                luck. We can put a camera down and show you whether it is roots, a low spot in the
                pipe, or a section that has failed, so you are deciding with real information instead
                of a guess.
              </p>
            </Prose>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryCTA />
              <a
                href="/services/drain-cleaning"
                className="inline-flex items-center border border-ink/20 px-6 py-3 font-display font-semibold text-ink hover:border-copper hover:text-copper"
              >
                Drain cleaning details →
              </a>
            </div>
          </div>

          <div className="lg:pt-4">
            <CredentialStrip />
          </div>
        </div>
      </Section>

      {/* SERVICE PILLARS */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What we do"
          title="One licensed plumber for the whole house."
          intro="Six lines cover most of what a corridor household needs, and every one of them runs in all twenty-one towns we serve."
        />
        <FeatureGrid>
          {LEAD_SERVICES.map((slug) => {
            const s = getService(slug)
            if (!s) return null
            return (
              <FeatureCard key={slug} title={s.name} href={`/services/${slug}`}>
                {s.summary}
              </FeatureCard>
            )
          })}
        </FeatureGrid>
        <div className="mt-8">
          <a href="/services" className="font-mono text-spec uppercase text-copper underline underline-offset-4">
            See all services →
          </a>
        </div>
      </Section>

      {/* PROCESS */}
      <Section tone="pine">
        <SectionHeading
          dark
          eyebrow="How we work"
          title="No mystery, no mid-job surprises."
          intro="The same four steps whether it is a backed-up drain at dinner time or a planned water heater replacement."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Step dark n={1} title="You call a person">
            Not a call center. You describe what is happening and we tell you what it likely is and
            how fast we can be there.
          </Step>
          <Step dark n={2} title="We diagnose it">
            We find the actual cause — camera down the line, pressure test, a look at the unit —
            before anyone quotes a repair.
          </Step>
          <Step dark n={3} title="You approve one price">
            You get a number to say yes or no to before work starts. It holds once the job begins.
          </Step>
          <Step dark n={4} title="We fix it right">
            Done to code, permit pulled where one is required, and we tell you honestly if part of
            the job belongs to another trade.
          </Step>
        </div>
      </Section>

      {/* DIFFERENTIATORS */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="Why us"
            title="The difference is what we are willing to put in writing."
            intro="This market runs on vague promises. We run on the opposite."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <Diff title="A license you can check">
              The number is on every page with a link to the state lookup. A credential you cannot
              verify is just a word.
            </Diff>
            <Diff title="One price, before we start">
              Competitor reviews in this market document quotes climbing mid-job. Ours is set and
              approved before the first tool comes out.
            </Diff>
            <Diff title="The paperwork is ours">
              Where a job needs a permit and an inspection, our office pulls it and books it. You
              approve a price; you do not chase a codes department.
            </Diff>
            <Diff title="A warranty with its edges showing">
              Twelve months on workmanship, thirty days on drain cleaning, and we publish the
              exclusions. A warranty you can hold us to beats an unqualified promise.
            </Diff>
            <Diff title="Woman-owned and family-run">
              Owned by Kayla Krishan and run with Kevin, who holds the license. Two decades of
              combined trade experience, and you deal with the owners.
            </Diff>
            <Diff title="Anchored in the corridor">
              The only operation based in Charleston. We are closest to the towns everyone else
              treats as drive-time overflow.
            </Diff>
          </div>
        </div>
      </Section>

      {/* COVERAGE */}
      <Section tone="pine">
        <SectionHeading
          dark
          eyebrow="Where we work"
          title="Priority runs from our own back yard outward."
          intro="The seam nobody else occupies comes first, then the revenue markets, then the growth corridor. Every town has its own page."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <CoverageColumn label="Anchor — home base" locations={anchors} note="Zero competition. We own the county seam." />
          <CoverageColumn label="Primary revenue" locations={primary} note="Cleveland and Athens, the thin middle tier." />
          <CoverageColumn label="Growth corridor" locations={growth} note="The fast-growing Hamilton County edge." />
        </div>
        <div className="mt-8">
          <a href="/service-areas" className="font-mono text-spec uppercase text-verdigris underline underline-offset-4">
            Every town we cover →
          </a>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight answers" title="Questions we get asked first." />
        <FAQ items={HOME_FAQS} />
      </Section>

      <WorkGallery limit={12} />

      <CTABand />
    </>
  )
}

function Diff({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t-2 border-verdigris pt-4">
      <h3 className="font-display text-display-md text-ink">{title}</h3>
      <p className="mt-2 text-ink/80">{children}</p>
    </div>
  )
}

function CoverageColumn({
  label,
  locations,
  note,
}: {
  label: string
  locations: Array<{ slug: string; name: string; county: string }>
  note: string
}) {
  return (
    <div className="border-t-2 border-verdigris pt-4">
      <h3 className="font-mono text-spec uppercase text-mist">{label}</h3>
      <ul className="mt-3 space-y-1.5">
        {locations.map((l) => (
          <li key={l.slug}>
            <a href={`/service-areas/${l.slug}`} className="font-display text-display-md text-paper hover:text-verdigris">
              {l.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-mist">{note}</p>
    </div>
  )
}
