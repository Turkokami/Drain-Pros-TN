/**
 * SERVICE TOWNS — guard-driven town links for problem and guide pages.
 *
 * Why this exists. The 2026-11-11 GSC export showed problem and guide pages
 * carrying no outbound town links at all, and /service-areas/charleston-tn and
 * /service-areas/athens-tn both sitting at "Discovered - currently not
 * indexed". Charleston is the home base and had zero impressions in twelve
 * months. Those pages need inbound paths from the content library, not just
 * from the nav.
 *
 * Only anchor and primary tier towns are linked. That is deliberate:
 *   - the block stays short enough that it reads as prose, not a footer dump,
 *   - it feeds the two markets the positioning ranks first and second, and
 *   - it leaves out the Hamilton County growth towns, which already carry more
 *     impressions than every other location page combined and where
 *     permit-required work is referred to a partner rather than performed.
 *
 * Every town is still filtered through assertSellable, so this can never link
 * a town for a service the guard withholds there. If the policy flag flips,
 * this block follows it without being touched.
 */
import { LOCATIONS, type MarketTier } from '@/config/locations'
import { assertSellable } from '@/lib/scope-guard'

const LINKED_TIERS: readonly MarketTier[] = ['anchor', 'primary']

export function ServiceTowns({
  serviceSlug,
  label = 'Where we handle this',
}: {
  serviceSlug: string
  label?: string
}) {
  const towns = LOCATIONS.filter(
    (l) => LINKED_TIERS.includes(l.tier) && assertSellable(serviceSlug, l.slug).sellable,
  )

  if (towns.length === 0) return null

  return (
    <div className="mt-10 border-t border-ink/10 pt-8">
      <p className="eyebrow text-copper">{label}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {towns.map((l) => (
          <a
            key={l.slug}
            href={`/service-areas/${l.slug}`}
            className="inline-flex items-center border border-ink/20 px-4 py-2 font-body text-sm text-ink hover:border-copper hover:text-copper"
          >
            {l.name}, {l.county} County
          </a>
        ))}
      </div>
    </div>
  )
}
