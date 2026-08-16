/**
 * CONTACT — redesigned, service-area business.
 *
 * No street address. No map embed. No "visit us." Phone and email are pending
 * facts, so the page states each channel honestly rather than printing a
 * placeholder a visitor might try to use.
 */

import { IDENTITY, fact } from '@/config/business'
import { CredentialStrip } from '@/components/ScopeStrip'
import { EmergencyCTA, BookOnlineCTA } from '@/components/CTA'
import { LeadForm } from '@/components/LeadForm'
import { phone, hours, bookingUrl } from '@/lib/site'
import { Section, Eyebrow, BulletList } from '@/components/ui'
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
  'Reach Drain Pros TN for plumbing across Charleston, Cleveland, Athens, the US-11 corridor, and ' +
  'greater Chattanooga. Service-area business — we come to you.'

export const metadata = buildMetadata({
  title: 'Contact — Licensed Plumber, Charleston TN',
  description: DESCRIPTION,
  path: '/contact',
  keywords: ['contact plumber Charleston TN', 'plumber phone Cleveland TN', 'book a plumber Bradley County'],
})

export default function ContactPage() {
  const path = '/contact'
  const p = phone()
  const email = fact('IDENTITY.email', IDENTITY.email)
  const availability = hours()
  const booking = bookingUrl()

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

      {/* HERO */}
      <section className="bg-pine bg-blueprint bg-grid text-paper">
        <div className="container-x py-16 md:py-24">
          <div className="max-w-4xl reveal">
            <Eyebrow className="text-mist">Contact · we come to you</Eyebrow>
            <h1 className="mt-4 text-display-xl">Get a plumber out.</h1>
            <p className="mt-6 max-w-prose text-lead text-paper/85 speakable">{DESCRIPTION}</p>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-8">
            <LeadForm phone={p} />
            <div className="rounded-card border-l-4 border-verdigris bg-galv p-6">
              <h2 className="font-mono text-spec uppercase text-steel">Phone</h2>
              {p ? (
                <a href={`tel:${p.replace(/[^\d+]/g, '')}`} className="mt-2 block font-display text-3xl text-ink hover:text-copper">
                  {p}
                </a>
              ) : (
                <p className="mt-2 max-w-prose text-ink/90">
                  Our dedicated business line is being set up. It will appear here and on every page
                  the moment it is live.
                </p>
              )}
              {availability?.note && <p className="mt-2 font-body text-sm text-steel">{availability.note}</p>}
            </div>

            {booking && (
              <div className="rounded-card border-l-4 border-verdigris bg-galv p-6">
                <h2 className="font-mono text-spec uppercase text-steel">Request service online</h2>
                <p className="mt-2 max-w-prose text-ink/90">
                  Send us the job and we will schedule it. Enter your zip and the form confirms we
                  cover you first. It is a request rather than a live calendar, so you are not
                  picking a slot — and if it is an emergency, call instead. That is faster.
                </p>
                <div className="mt-4">
                  <BookOnlineCTA tone="light" label="Request service" />
                </div>
              </div>
            )}

            <div className="rounded-card border-l-4 border-verdigris bg-galv p-6">
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
              <h2 className="text-display-md">What to expect</h2>
              <BulletList
                items={[
                  'A real person, not an automated queue.',
                  'A price you approve before the work starts.',
                  'A licensed plumber on the job, verifiable at verify.tn.gov.',
                  'Straight talk when a job is outside our scope, and a referral to the right contractor.',
                ]}
              />
            </div>

            <div>
              <h2 className="text-display-md">Plumbing emergency?</h2>
              <p className="mt-2 max-w-prose text-ink/90">
                Active leak, no water, or a sewage backup goes to the front of the line, across the
                whole service area including Chattanooga. Call rather than use the form — it is the
                fastest way to get someone moving.
              </p>
              <div className="mt-4">
                <EmergencyCTA />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <CredentialStrip />
          </aside>
        </div>
      </Section>
    </>
  )
}
