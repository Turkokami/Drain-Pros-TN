/**
 * ABOUT — named-expert E-E-A-T, built on the license.
 *
 * The owner is the entity. The Person node carries the credential, and the page
 * makes the argument that a checkable license plus a plainly-stated scope beats a
 * generic "family owned, licensed and insured" block. Years-in-trade and founding
 * year are still pending facts, so the page does not state them — it leans on what
 * is confirmed and says the rest honestly.
 */

import type { Metadata } from 'next'
import { LICENSE, fact } from '@/config/business'
import { CredentialStrip } from '@/components/ScopeStrip'
import { PrimaryCTA } from '@/components/CTA'
import { businessName } from '@/lib/site'
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

export const metadata: Metadata = {
  title: 'About — Licensed Owner-Operator, Charleston TN',
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
}

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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      <article className="mx-auto max-w-4xl px-5 py-12">
        <p className="font-mono text-spec uppercase text-steel">About · TN LLP #5045</p>
        <h1 className="mt-2 text-display-xl">A licensed plumber you can check.</h1>

        <p className="mt-6 max-w-prose border-l-2 border-copper pl-4 text-lg text-ink">
          {name} is owner-operated out of Charleston, Tennessee. The work is done by the license
          holder, {holder}, not handed to whoever was free that day.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            <div>
              <h2 className="text-display-lg">The credential comes first</h2>
              <p className="mt-3 max-w-prose text-ink/90">
                Every plumber in this market says "licensed." Across eighteen local competitors, not
                one puts the number where you can see it. We lead with ours, and we link the state
                lookup so you can confirm it before we ever knock on the door. A license is only
                worth anything if you can check it.
              </p>
            </div>

            <div>
              <h2 className="text-display-lg">Honest about the edges</h2>
              <p className="mt-3 max-w-prose text-ink/90">
                A Tennessee Limited Licensed Plumber covers residential and light commercial plumbing
                up to a $25,000 per-project ceiling. It does not cover septic systems or well
                systems, and it does not permit work inside Chattanooga city limits. We say all of
                that out loud. When a job is outside our scope, we tell you and point you to the right
                licensed contractor rather than take it on anyway.
              </p>
            </div>

            <div>
              <h2 className="text-display-lg">Straight pricing, on purpose</h2>
              <p className="mt-3 max-w-prose text-ink/90">
                You approve a number before the work starts, and it holds. This market has a
                documented pattern of quotes climbing once the job is underway. We built the opposite
                habit into how we quote, and we would rather earn the second call than win the first
                one with a low number that grows.
              </p>
            </div>

            <div>
              <h2 className="text-display-lg">Based in Charleston, out to the corridor</h2>
              <p className="mt-3 max-w-prose text-ink/90">
                We are the only plumbing operation anchored in Charleston. Everyone else drives in
                from Cleveland or Athens. That puts us closest to the towns along the US-11 corridor
                that get treated as an afterthought, and it is a service-area business, so we come to
                you.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <CredentialStrip />
          </aside>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-ink/10 pt-8">
          <p className="font-display text-lg text-ink">Want a licensed plumber on the job?</p>
          <PrimaryCTA />
        </div>
      </article>
    </>
  )
}
