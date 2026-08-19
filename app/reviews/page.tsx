/**
 * REVIEWS — redesigned.
 *
 * The existing review count is a pending fact and there is no review corpus yet,
 * so this page states NO count and emits NO aggregateRating/Review schema —
 * inventing either would be fabrication and a Google policy violation. It sets the
 * honest posture and the ask.
 */

import { PrimaryCTA, CTABand } from '@/components/CTA'
import { reviewUrl, googleProfileUrl } from '@/lib/site'
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
  const review = reviewUrl()
  const profile = googleProfileUrl()
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

          {profile && (
            <div className="mt-10 rounded-card border-l-4 border-verdigris bg-galv p-6">
              <h2 className="font-mono text-spec uppercase text-steel">Read our Google reviews</h2>
              <p className="mt-2 max-w-prose text-sm text-ink/90">
                Everything customers have written about us is on the Google listing. We do not
                collect reviews anywhere else, so that is the whole picture rather than a selected
                slice of it.
              </p>
              <a
                href={profile}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-pine/30 px-6 py-3 font-display font-bold text-pine transition-all hover:-translate-y-0.5 hover:bg-pine hover:text-paper"
              >
                See reviews on Google <span aria-hidden>↗</span>
              </a>
            </div>
          )}

          {/* The WRITE form. Only for people we have already worked for - it opens
              the star box directly, so it must never be aimed at a prospect. */}
          {review && (
            <div className="mt-6 rounded-card border-l-4 border-rose-700 bg-galv p-6">
              <h2 className="font-mono text-spec uppercase text-steel">Worked with us?</h2>
              <p className="mt-2 max-w-prose text-sm text-ink/90">
                A short honest review is the most useful thing you can do for a small,
                woman-owned operation. This link opens the review box straight away — it takes about
                a minute.
              </p>
              <a
                href={review}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#E7BB3E] to-[#C08B12] px-6 py-3 font-display font-bold text-ink shadow-[0_8px_20px_-6px_rgba(217,165,32,0.6)] ring-1 ring-inset ring-white/25 transition-all hover:-translate-y-0.5"
              >
                Leave a Google review <span aria-hidden>↗</span>
              </a>
            </div>
          )}

          <div className="mt-6">
            <PrimaryCTA />
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  )
}
