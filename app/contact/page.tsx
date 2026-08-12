/**
 * CONTACT — service-area business.
 *
 * No street address. No map embed. No "visit us." This is a home-based SAB and
 * the whole model is that we come to the customer. Phone and email are pending
 * facts, so the page states each channel honestly rather than printing a
 * placeholder a visitor might try to use.
 */

import type { Metadata } from 'next'
import { IDENTITY, fact } from '@/config/business'
import { CredentialStrip } from '@/components/ScopeStrip'
import { EmergencyCTA } from '@/components/CTA'
import { phone, hours } from '@/lib/site'
import {
  buildGraph,
  websiteNode,
  businessNode,
  ownerNode,
  webPageNode,
  breadcrumbNode,
} from '@/lib/schema/graph'

const DESCRIPTION =
  'Reach Drain Pros TN for plumbing across Charleston, Cleveland, Athens, the US-11 corridor, and ' +
  'greater Chattanooga. Service-area business — we come to you.'

export const metadata: Metadata = {
  title: 'Contact — Licensed Plumber, Charleston TN',
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const path = '/contact'
  const p = phone()
  const email = fact('IDENTITY.email', IDENTITY.email)
  const availability = hours()

  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, 'Contact', DESCRIPTION),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: path },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      <div className="mx-auto max-w-4xl px-5 py-12">
        <p className="font-mono text-spec uppercase text-steel">Contact · we come to you</p>
        <h1 className="mt-2 text-display-xl">Get a plumber out.</h1>
        <p className="mt-6 max-w-prose border-l-2 border-copper pl-4 text-lg text-ink">
          {DESCRIPTION}
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div className="border-l-2 border-verdigris bg-galv p-6">
              <h2 className="font-mono text-spec uppercase text-steel">Phone</h2>
              {p ? (
                <a href={`tel:${p.replace(/[^\d+]/g, '')}`} className="mt-2 block font-display text-2xl text-ink hover:text-copper">
                  {p}
                </a>
              ) : (
                <p className="mt-2 max-w-prose text-ink/90">
                  Our dedicated business line is being set up. It will appear here and on every page
                  the moment it is live.
                </p>
              )}
              {availability?.note && (
                <p className="mt-2 font-body text-sm text-steel">{availability.note}</p>
              )}
            </div>

            <div className="border-l-2 border-verdigris bg-galv p-6">
              <h2 className="font-mono text-spec uppercase text-steel">Email</h2>
              {email ? (
                <a href={`mailto:${email}`} className="mt-2 block font-display text-lg text-ink hover:text-copper">
                  {email}
                </a>
              ) : (
                <p className="mt-2 max-w-prose text-ink/90">Email is being set up alongside the phone line.</p>
              )}
            </div>

            <div>
              <h2 className="text-display-lg">What to expect</h2>
              <ul className="mt-4 space-y-2">
                {[
                  'A real person, not an automated queue.',
                  'A price you approve before the work starts.',
                  'A licensed plumber on the job, verifiable at verify.tn.gov.',
                  'Straight talk when a job is outside our scope, and a referral to the right contractor.',
                ].map((item) => (
                  <li key={item} className="flex max-w-prose gap-3 text-ink/90">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-copper" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-display-lg">Plumbing emergency?</h2>
              <p className="mt-2 max-w-prose text-ink/90">
                Active leak, no water, or a sewage backup goes to the front of the line. Emergency and
                drain work needs no permit, so it is covered across the whole area including
                Chattanooga.
              </p>
              <div className="mt-4">
                <EmergencyCTA />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <CredentialStrip />
          </aside>
        </div>
      </div>
    </>
  )
}
