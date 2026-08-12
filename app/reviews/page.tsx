/**
 * REVIEWS
 *
 * The existing Facebook review count is a pending fact, and there is no review
 * corpus yet, so this page states NO count and emits NO aggregateRating/Review
 * schema — inventing either would be fabrication and a Google policy violation.
 * It sets the honest posture and the ask. Review schema goes live only when real,
 * verifiable reviews back it.
 */

import type { Metadata } from 'next'
import { PrimaryCTA } from '@/components/CTA'
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

export const metadata: Metadata = {
  title: 'Reviews — Drain Pros TN',
  description: DESCRIPTION,
  alternates: { canonical: '/reviews' },
}

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

      <div className="mx-auto max-w-4xl px-5 py-12">
        <p className="font-mono text-spec uppercase text-steel">Reviews · earned, not bought</p>
        <h1 className="mt-2 text-display-xl">Real reviews, one job at a time.</h1>
        <p className="mt-6 max-w-prose border-l-2 border-copper pl-4 text-lg text-ink">
          {DESCRIPTION}
        </p>

        <div className="mt-10 max-w-prose space-y-5 text-ink/90">
          <p>
            The big shops in this market carry thousands of reviews built over years. That is the one
            thing a new company cannot fake or fast-forward, and we are not going to pretend
            otherwise. You will not find a wall of invented five-star quotes here.
          </p>
          <p>
            What you will find, as jobs accumulate, are reviews we can stand behind from customers we
            actually served, on work that is on the record. When there are verified reviews to show,
            they will appear here and in the places that matter, with the rating markup that search
            engines trust. Not before.
          </p>
          <p>
            In the meantime, the thing you can verify today is the license. It is on every page, with
            a link to the state lookup. That is a fact you can check in ten seconds, which is more
            than a review score gives you.
          </p>
        </div>

        <div className="mt-10 border-l-2 border-verdigris bg-galv p-6">
          <h2 className="font-mono text-spec uppercase text-steel">Worked with us?</h2>
          <p className="mt-2 max-w-prose text-sm text-ink/90">
            If we have done a job for you, a short honest review is the most useful thing you can do
            for a small operation. Get in touch and we will point you to the right place to leave one.
          </p>
          <div className="mt-4">
            <PrimaryCTA />
          </div>
        </div>
      </div>
    </>
  )
}
