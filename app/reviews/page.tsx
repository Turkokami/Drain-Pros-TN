/**
 * REVIEWS — redesigned.
 *
 * The existing review count is a pending fact and there is no review corpus yet,
 * so this page states NO count and emits NO aggregateRating/Review schema —
 * inventing either would be fabrication and a Google policy violation. It sets the
 * honest posture and the ask.
 */

import { PrimaryCTA, CTABand } from '@/components/CTA'
import { Section, Eyebrow, Prose } from '@/components/ui'
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
  'Reviews for Drain Pros TN, a licensed plumber in Charleston, Tennessee. We are building a review ' +
  'record the honest way — one verified job at a time.'

export const metadata = buildMetadata({
  title: 'Reviews — Drain Pros TN',
  description: DESCRIPTION,
  path: '/reviews',
  keywords: ['Drain Pros TN reviews', 'plumber reviews Charleston TN'],
})

export default function ReviewsPage() {
  const path = '/reviews'
  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, 'Reviews', DESCRIPTION),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Reviews', url: path },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      {/* HERO */}
      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-4xl reveal">
            <Eyebrow className="text-mist">Reviews · earned, not bought</Eyebrow>
            <h1 className="mt-4 text-display-xl">Real reviews, one job at a time.</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85 speakable">{DESCRIPTION}</p>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="max-w-3xl">
          <Prose>
            <p>
              The big shops in this market carry thousands of reviews built over years. That is the
              one thing a new company cannot fake or fast-forward, and we are not going to pretend
              otherwise. You will not find a wall of invented five-star quotes here.
            </p>
            <p>
              What you will find, as jobs accumulate, are reviews we can stand behind from customers
              we actually served, on work that is on the record. When there are verified reviews to
              show, they will appear here and in the places that matter, with the rating markup that
              search engines trust. Not before.
            </p>
            <p>
              In the meantime, the thing you can verify today is the license. It is on every page,
              with a link to the state lookup. That is a fact you can check in ten seconds, which is
              more than a review score gives you.
            </p>
          </Prose>

          <div className="mt-10 rounded-card border-l-4 border-verdigris bg-galv p-6">
            <h2 className="font-mono text-spec uppercase text-steel">Worked with us?</h2>
            <p className="mt-2 max-w-prose text-sm text-ink/90">
              If we have done a job for you, a short honest review is the most useful thing you can do
              for a small operation. Get in touch and we will point you to the right place to leave
              one.
            </p>
            <div className="mt-4">
              <PrimaryCTA />
            </div>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  )
}
