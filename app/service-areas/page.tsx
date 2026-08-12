/**
 * SERVICE-AREAS HUB
 *
 * Lists every town by market tier and links to its page. The breadcrumb on each
 * location page points here, so this route must exist. Coverage language stays
 * honest: Chattanooga is listed as permit-free work only.
 */

import type { Metadata } from 'next'
import { locationsByTier, type Location } from '@/config/locations'
import { PrimaryCTA } from '@/components/CTA'
import {
  buildGraph,
  websiteNode,
  businessNode,
  ownerNode,
  webPageNode,
  breadcrumbNode,
} from '@/lib/schema/graph'

const TIERS: Array<{ key: Parameters<typeof locationsByTier>[0]; title: string; note: string }> = [
  { key: 'anchor', title: 'Anchor — home base', note: 'Charleston and Calhoun. Zero competition; we own the county seam.' },
  { key: 'primary', title: 'Primary revenue market', note: 'Cleveland and Athens, the thin middle tier of this market.' },
  { key: 'growth', title: 'Growth corridor', note: 'The fast-growing Hamilton County edge northeast of Chattanooga.' },
  { key: 'tail', title: 'Corridor & rural towns', note: 'The uncontested US-11 stretch, plus Chattanooga for permit-free work only.' },
]

const DESCRIPTION =
  'Every town we cover, from Charleston and Cleveland to Athens, the US-11 corridor, and greater ' +
  'Chattanooga. Service-area business — we come to you.'

export const metadata: Metadata = {
  title: 'Service Areas — Charleston, Cleveland, Athens & the TN Corridor',
  description: DESCRIPTION,
  alternates: { canonical: '/service-areas' },
}

export default function ServiceAreasHub() {
  const path = '/service-areas'
  const graph = buildGraph([
    websiteNode(),
    businessNode(),
    ownerNode(),
    webPageNode(path, 'Service Areas', DESCRIPTION),
    breadcrumbNode(path, [
      { name: 'Home', url: '/' },
      { name: 'Service Areas', url: path },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="font-mono text-spec uppercase text-steel">Coverage · based in Charleston, TN</p>
        <h1 className="mt-2 text-display-xl">Service areas</h1>
        <p className="mt-6 max-w-prose border-l-2 border-copper pl-4 text-lg text-ink">{DESCRIPTION}</p>

        <div className="mt-12 space-y-12">
          {TIERS.map((tier) => {
            const locations = locationsByTier(tier.key)
            if (locations.length === 0) return null
            return (
              <section key={tier.key}>
                <h2 className="text-display-lg">{tier.title}</h2>
                <p className="mt-2 max-w-prose text-ink/80">{tier.note}</p>
                <ul className="mt-5 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
                  {locations.map((l: Location) => (
                    <li key={l.slug} className="bg-paper">
                      <a href={`/service-areas/${l.slug}`} className="group block h-full p-5 hover:bg-galv">
                        <span className="font-display text-lg text-ink group-hover:text-copper">
                          {l.name}
                        </span>
                        <span className="mt-1 block font-mono text-spec uppercase text-steel">
                          {l.county} County · {l.driveMinutes} min from Charleston
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-ink/10 pt-8">
          <p className="font-display text-lg text-ink">Not sure if we reach you?</p>
          <PrimaryCTA />
        </div>
      </div>
    </>
  )
}
