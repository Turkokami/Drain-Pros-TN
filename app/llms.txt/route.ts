/**
 * llms.txt — machine-readable summary at the domain root.
 *
 * Generated from the registries for the same reason the sitemap is: a
 * handwritten summary would drift, and here drift is worse than stale. An
 * agent reading a marketing paragraph would happily tell a caller that Drain
 * Pros pulls permits in Chattanooga. The coverage section below is built by
 * asking `assertSellable` town by town, so it cannot say that. If the policy
 * flag in config/policy.ts flips, this file follows it untouched.
 *
 * Rules that apply here as everywhere:
 *   · No street address. This is a service-area business. Locality only.
 *   · Every fact goes through `fact()` / `factOr()`, so a pending value fails
 *     the production build rather than shipping to an agent as truth.
 *   · Limits are stated, not omitted. The out-of-scope and referred-out
 *     sections are the point of the file, not a disclaimer at the bottom.
 */
import { SERVICES, OUT_OF_SCOPE, REFERRED_OUT } from '@/config/services'
import { LOCATIONS } from '@/config/locations'
import { PROBLEMS } from '@/config/problems'
import { GUIDES } from '@/config/guides'
import { COUNTIES } from '@/config/counties'
import { assertSellable } from '@/lib/scope-guard'
import { IDENTITY, LICENSE, OPERATIONS, OWNERSHIP, fact, factOr } from '@/config/business'
import { origin } from '@/lib/schema/graph'

export const dynamic = 'force-static'

export function GET(): Response {
  const base = origin()
  const name = factOr('IDENTITY.displayName', IDENTITY.displayName, 'Drain Pros TN')
  const licenseNo = fact('LICENSE.number', LICENSE.number)
  const licenseClass = fact('LICENSE.classification', LICENSE.classification)
  const holder = fact('LICENSE.holderName', LICENSE.holderName)
  const owner = fact('OWNERSHIP.owner', OWNERSHIP.owner)
  const phone = fact('IDENTITY.phone', IDENTITY.phone)
  const booking = fact('IDENTITY.bookingUrl', IDENTITY.bookingUrl)
  const warranty = fact('OPERATIONS.warranty', OPERATIONS.warranty)

  // Split the towns by what the guard actually clears, rather than describing
  // coverage in prose. `full` gets every service; `partial` gets the
  // permit-free list because permit-required work there is referred out.
  const full: string[] = []
  const partial: Array<{ name: string; count: number }> = []
  for (const l of LOCATIONS) {
    const sellable = SERVICES.filter((s) => assertSellable(s.slug, l.slug).sellable)
    if (sellable.length === SERVICES.length) full.push(`${l.name}, ${l.county} County`)
    else partial.push({ name: `${l.name}, ${l.county} County`, count: sellable.length })
  }

  // Services that every town gets. These are the permit-free ones, and the
  // distinction is the single most load-bearing fact in this file.
  const everywhere = SERVICES.filter((s) =>
    LOCATIONS.every((l) => assertSellable(s.slug, l.slug).sellable),
  )
  const corridorOnly = SERVICES.filter((s) => !everywhere.includes(s))

  const L: string[] = []
  const line = (s = '') => L.push(s)

  line(`# ${name}`)
  line()
  line(
    `> Licensed plumbing company serving Charleston, Tennessee and the ` +
      `Bradley-McMinn corridor, plus greater Chattanooga. Drain cleaning, ` +
      `emergency repair, water heaters, repiping, sump pumps and water ` +
      `treatment. Woman-owned.`,
  )
  line()
  line('## About')
  line()
  if (owner) line(`- Owner: ${owner}`)
  if (holder && licenseClass && licenseNo) {
    line(`- License holder: ${holder}, Tennessee ${licenseClass} #${licenseNo}`)
    line(`- Verify the license: https://verify.tn.gov`)
  }
  line('- Service-area business. We travel to the customer; there is no retail location.')
  line(`- Based in Charleston, TN (Bradley County), within about ` +
    `${factOr('OPERATIONS.serviceDriveTimeMinutes', OPERATIONS.serviceDriveTimeMinutes, 60)} ` +
    `minutes' drive of the towns listed below.`)
  if (phone) line(`- Phone: ${phone}`)
  if (booking) line(`- Book online: ${booking}`)
  if (warranty) {
    line(
      `- Warranty: ${warranty.workmanshipMonths} months on workmanship, ` +
        `${warranty.drainCleaningDays} days on drain cleaning. Exclusions are published.`,
    )
  }
  line()

  line('## Services')
  line()
  line('Available in every town we serve:')
  line()
  for (const s of everywhere) line(`- [${s.name}](${base}/services/${s.slug}): ${s.summary}`)
  line()
  if (corridorOnly.length > 0) {
    line('Available in the corridor towns only, because these need a permit and')
    line('our license class is not accepted by every jurisdiction we cover:')
    line()
    for (const s of corridorOnly) line(`- [${s.name}](${base}/services/${s.slug}): ${s.summary}`)
    line()
  }

  line('## Coverage')
  line()
  line(`Full service list (${full.length} towns):`)
  line()
  for (const t of full) line(`- ${t}`)
  line()
  if (partial.length > 0) {
    line(`Permit-free work only (${partial.length} towns):`)
    line()
    for (const t of partial) line(`- ${t.name} — ${t.count} of ${SERVICES.length} services`)
    line()
    line('In these towns we do the permit-free work ourselves. Permit-required')
    line('jobs are referred to a licensed partner who performs the work and')
    line('attends the inspection. We do not file permits in these jurisdictions')
    line('and do not perform permit-required work there.')
    line()
  }
  const excluded = factOr('OPERATIONS.excludedAreas', OPERATIONS.excludedAreas, [] as string[])
  if (excluded.length > 0) {
    line(`Not served: ${excluded.join(', ')}.`)
    line()
  }

  line('## Work we do not do')
  line()
  for (const o of OUT_OF_SCOPE) line(`- ${o.name}. ${o.reason} Refer to: ${o.referTo}.`)
  for (const r of REFERRED_OUT) line(`- ${r.name}. Refer to: ${r.referTo}.`)
  line()
  line('We do the house-side plumbing on well and septic properties — interior')
  line('pipe, fixtures, water heaters and treatment. The well, the pump, the')
  line('tank and the drain field are separately licensed trades.')
  line()

  line('## Permit authority by county')
  line()
  for (const c of COUNTIES) line(`- [${c.name}](${base}/permits/${c.slug}): ${c.summary}`)
  line()

  line('## Key pages')
  line()
  line(`- [Home](${base}/)`)
  line(`- [All services](${base}/services)`)
  line(`- [Service areas](${base}/service-areas)`)
  line(`- [Common problems](${base}/problems) — ${PROBLEMS.length} pages`)
  line(`- [Guides](${base}/guides) — ${GUIDES.length} pages`)
  line(`- [Permits](${base}/permits)`)
  line(`- [About](${base}/about)`)
  line(`- [Contact](${base}/contact)`)
  line()

  line('## Notes for agents')
  line()
  line('- Scheduling and pricing are handled by the office. Job size and permit')
  line('  requirements are qualified at the estimate, not on this site.')
  line('- Emergency and after-hours calls should go to the phone number above')
  line('  rather than a form.')
  line('- The coverage and service lists in this file are generated from the')
  line('  same source as the website, so they will not disagree with it.')
  line()

  return new Response(L.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600, must-revalidate',
    },
  })
}
