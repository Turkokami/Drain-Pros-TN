/**
 * HOME — corridor-first, expanded.
 *
 * Positioning: a Bradley–McMinn corridor plumbing company that also serves
 * greater Chattanooga. Drain cleaning leads because it is permit-free, runs
 * everywhere, and is what Kevin actually focuses on. The license rides high as
 * spec-sheet data — the strongest differentiator in a market where no competitor
 * shows a number at all. Voice: warm, plain, a tradesman who explains things.
 */

import { getService } from '@/config/services'
import { locationsByTier, LOCATIONS } from '@/config/locations'
import { CredentialStrip } from '@/components/ScopeStrip'
import { WorkGallery } from '@/components/Gallery'
import { PrimaryCTA, EmergencyCTA, CTABand } from '@/components/CTA'
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
  'Licensed plumbing for Charleston, Cleveland, Athens, and the US-11 corridor, plus greater ' +
  'Chattanooga. Drain cleaning, emergency repair, and water heaters, handled by the license ' +
  'holder himself with a price you approve before the work starts.'

const LEAD_SERVICES = [
  'drain-cleaning',
  'emergency-plumbing',
  'leak-detection',
  'water-heater-repair',
  'water-heater-replacement',
  'fixture-repair',
]

const HOME_FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What areas do you cover?',
    a: 'Charleston and Calhoun at the county seam, Cleveland and Bradley County, Athens and McMinn County, the US-11 corridor towns between them, and greater Chattanooga. Inside Chattanooga city limits we do the permit-free work — drains, emergencies, leaks, and fixture repairs.',
  },
  {
    q: 'Are you actually licensed?',
    a: 'Yes. Tennessee Limited Licensed Plumber #5045, issued by the state Board for Licensing Contractors and verifiable at verify.tn.gov. It is on every page of this site on purpose. Across eighteen local competitors, not one shows their number.',
  },
  {
    q: 'Why does drain cleaning work everywhere but water heater replacement does not?',
    a: 'Drain cleaning, emergency repair, and fixture swaps need no permit, so we do them across the whole area including Chattanooga. Water heater replacement, tankless, repipes, and sewer work need a permit pulled, so we do those in the towns where we are cleared to pull one. Inside Chattanooga a Limited Licensed Plumber cannot pull a permit, so that work goes to a licensed partner.',
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
    q: 'What do you not do?',
    a: 'Septic and well systems, and any single project above the $25,000 per-project ceiling on the license. When a job needs one of those, we bring in the right licensed partner rather than stretch our scope and hope it holds.',
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
  title: 'Licensed Plumber in Charleston, Cleveland & Athens, TN',
  description: HERO_ANSWER,
  path: '/',
  keywords: [
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

      {/* HERO */}
      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x grid gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
          <div className="reveal">
            <Eyebrow className="text-mist">Charleston · Cleveland · Athens · greater Chattanooga</Eyebrow>
            <h1 className="mt-4 text-display-2xl">A licensed plumber your corridor actually has.</h1>
            <p className="mt-4 font-display text-display-md font-bold text-verdigris">{TAGLINE}</p>
            <p className="mt-5 max-w-prose text-lead text-paper/85 speakable">{HERO_ANSWER}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA label="Book a plumber" />
              <EmergencyCTA />
            </div>
            <p className="mt-6 font-mono text-spec uppercase text-mist">
              TN Limited Licensed Plumber · #5045 · 24/7 emergency service
            </p>
          </div>

          <div className="reveal reveal-2">
            <div className="overflow-hidden rounded-lg border-2 border-verdigris/50 shadow-lift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-van.jpg"
                alt="Drain Pros TN navy service van with gold branding, parked at a job in the Charleston, Tennessee area"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="container-x pb-14 md:pb-20">
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
              title="The one job we can do in every town we serve."
              intro="Drain cleaning is the lead because it needs no permit and runs everywhere we drive, Chattanooga included. It is also what most people call about first, so it is where most relationships start."
            />
            <Prose className="mt-6">
              <p>
                A slow sink or a main line backing up into the house is the kind of problem that does
                not wait for business hours or care which county line you are on. Because clearing a
                drain does not require a permit, we can respond the same way in Chattanooga as we do
                in Charleston, and we would rather fix the cause than sell you the same cabling job
                twice.
              </p>
              <p>
                When a line keeps clogging in the same spot, that is usually a reason and not bad
                luck. We can put a camera down and show you whether it is roots, a low spot in the
                pipe, or a section that has failed, so you are deciding with real information instead
                of a guess. Once we are already under the house, the rest of the work — fixtures,
                heaters, leaks — is right there too.
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
          title="Plumbing that stays inside the license, and says so."
          intro="Six lines cover most of what a corridor household needs. Permit-free work runs everywhere; permitted work runs where we are cleared to pull one."
        />
        <FeatureGrid>
          {LEAD_SERVICES.map((slug) => {
            const s = getService(slug)
            if (!s) return null
            return (
              <FeatureCard
                key={slug}
                title={s.name}
                meta={s.requiresPermit ? 'permit req.' : 'permit-free'}
                href={`/services/${slug}`}
              >
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
      <Section tone="galv">
        <SectionHeading
          eyebrow="How we work"
          title="No mystery, no mid-job surprises."
          intro="The same four steps whether it is a backed-up drain at dinner time or a planned water heater replacement."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Step n={1} title="You call a person">
            Not a call center. You describe what is happening and we tell you what it likely is and
            how fast we can be there.
          </Step>
          <Step n={2} title="We diagnose it">
            We find the actual cause — camera down the line, pressure test, a look at the unit —
            before anyone quotes a repair.
          </Step>
          <Step n={3} title="You approve one price">
            You get a number to say yes or no to before work starts. It holds once the job begins.
          </Step>
          <Step n={4} title="We fix it right">
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
            <Diff title="Honest about the edges">
              No septic or well systems, a stated $25,000 project ceiling, and permitted work only
              where we can pull a permit. We say all of it out loud.
            </Diff>
            <Diff title="Anchored in the corridor">
              The only operation based in Charleston. We are closest to the towns everyone else
              treats as drive-time overflow.
            </Diff>
          </div>
        </div>
      </Section>

      {/* COVERAGE */}
      <Section tone="bone">
        <SectionHeading
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
          <a href="/service-areas" className="font-mono text-spec uppercase text-copper underline underline-offset-4">
            Every town we cover →
          </a>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <SectionHeading eyebrow="Straight answers" title="Questions we get asked first." />
        <FAQ items={HOME_FAQS} />
      </Section>

      <WorkGallery limit={9} />

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
    <div className="border-t-2 border-copper pt-4">
      <h3 className="font-mono text-spec uppercase text-steel">{label}</h3>
      <ul className="mt-3 space-y-1.5">
        {locations.map((l) => (
          <li key={l.slug}>
            <a href={`/service-areas/${l.slug}`} className="font-display text-display-md text-ink hover:text-copper">
              {l.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-steel">{note}</p>
    </div>
  )
}
