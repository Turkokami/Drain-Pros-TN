/**
 * GUIDE REGISTRY — Phase 3, decision and comparison intent
 *
 * The counterpart to config/problems.ts. A problem page is for someone with
 * water on the floor. A guide is for someone deciding something: which heater,
 * whether the hard water is worth treating, why the last tank only lasted six
 * years. Different intent, so a different page shape and a softer CTA.
 *
 * DELIBERATE OMISSIONS. The Phase 3 manifest listed four guides that would have
 * cannibalised existing service pages, competing with them for the same terms:
 *
 *   whole-house-filtration  -> /services/whole-house-water-filtration
 *   softener-service        -> /services/water-softener-installation
 *   plumbing-on-well-water  -> /services/well-property-plumbing
 *   septic-safe-plumbing    -> /services/septic-property-plumbing
 *
 * Each already has a page that ranks for that term. Splitting the signal across
 * two URLs helps nobody, so those stay as services and the guides here link to
 * them instead.
 */

import { SERVICES } from './services'

export interface Guide {
  slug: string
  /** Phrased as the question someone actually asks. */
  name: string
  summary: string
  /** Service this guide feeds. Must exist in SERVICES. */
  service: string
  cluster: 'water-heating' | 'water-quality' | 'rural-property' | 'drains'
  /** Guides that compare two options render a comparison table. */
  comparison?: boolean
}

export const GUIDES: Guide[] = [
  // --- Water heating ------------------------------------------------------
  // Proven local demand: one Chattanooga competitor built 372 reviews on water
  // heaters alone. This is the cluster worth owning in the corridor.
  {
    slug: 'water-heater-sizing',
    name: 'What Size Water Heater Do I Need?',
    summary: 'Sizing to how your house actually uses hot water, not to what came out.',
    service: 'water-heater-replacement',
    cluster: 'water-heating',
  },
  {
    slug: 'tank-vs-tankless',
    name: 'Tank or Tankless?',
    summary: 'What each actually costs, what each is good at, and who should pick which.',
    service: 'tankless-water-heater-installation',
    cluster: 'water-heating',
    comparison: true,
  },
  {
    slug: 'gas-vs-electric-water-heater',
    name: 'Gas or Electric Water Heater?',
    summary: 'Running cost, recovery speed, and what your house can actually support.',
    service: 'water-heater-replacement',
    cluster: 'water-heating',
    comparison: true,
  },
  {
    slug: 'water-heater-lifespan',
    name: 'How Long Should a Water Heater Last?',
    summary: 'What the real numbers are here, and why hard water shortens them.',
    service: 'water-heater-repair',
    cluster: 'water-heating',
  },
  {
    slug: 'anode-rods',
    name: 'The Anode Rod, and Why Your Tank Rusted Out',
    summary: 'The sacrificial part almost nobody checks, and what happens when it is spent.',
    service: 'water-heater-repair',
    cluster: 'water-heating',
  },
  {
    slug: 'expansion-tanks',
    name: 'Do I Need an Expansion Tank?',
    summary: 'What thermal expansion does to a closed system, and when code requires one.',
    service: 'water-heater-replacement',
    cluster: 'water-heating',
  },
  {
    slug: 'water-heater-venting',
    name: 'Water Heater Venting, Explained',
    summary: 'Atmospheric, power vent, and direct vent — and why it is a safety issue.',
    service: 'water-heater-replacement',
    cluster: 'water-heating',
  },
  {
    slug: 'hard-water-and-water-heaters',
    name: 'What Hard Water Does to a Water Heater',
    summary: 'Why tanks around here fail early, and what actually prevents it.',
    service: 'water-softener-installation',
    cluster: 'water-heating',
  },

  // --- Water quality ------------------------------------------------------
  // Active named demand in this market and no competitor owns it.
  {
    slug: 'hard-water-in-bradley-county',
    name: 'Hard Water in Bradley and McMinn County',
    summary: 'What is actually in the water here and what it costs you over time.',
    service: 'water-softener-installation',
    cluster: 'water-quality',
  },
  {
    slug: 'iron-and-sulfur-in-well-water',
    name: 'Iron and Sulfur Smell in Well Water',
    summary: 'The rotten-egg smell and the orange staining, and how each is treated.',
    service: 'well-water-treatment',
    cluster: 'water-quality',
  },
  {
    slug: 'sediment-in-water',
    name: 'Sediment and Grit in the Water',
    summary: 'Where it comes from on well and city supply, and what filters it.',
    service: 'whole-house-water-filtration',
    cluster: 'water-quality',
  },
  {
    slug: 'well-water-testing',
    name: 'Testing Private Well Water',
    summary: 'What to test for, how often, and what the results actually mean.',
    service: 'well-water-treatment',
    cluster: 'water-quality',
  },
  {
    slug: 'scale-damage',
    name: 'What Scale Costs You',
    summary: 'The appliances hard water quietly shortens the life of, with numbers.',
    service: 'water-softener-installation',
    cluster: 'water-quality',
  },
  {
    slug: 'taste-and-odor',
    name: 'Water That Tastes or Smells Wrong',
    summary: 'Chlorine, sulfur, metallic, musty — each points somewhere different.',
    service: 'whole-house-water-filtration',
    cluster: 'water-quality',
  },

  // --- Drains -------------------------------------------------------------
  {
    slug: 'hydro-jetting-vs-cabling',
    name: 'Hydro Jetting or Cabling?',
    summary: 'When a cable is enough and when the line needs actually cleaning.',
    service: 'drain-cleaning',
    cluster: 'drains',
    comparison: true,
  },

  // --- Rural property -----------------------------------------------------
  // The well and septic PROPERTY pillar. House side only, always. The systems
  // themselves are separately licensed and are referred out — see
  // what-we-refer-out, which exists to say that plainly rather than bury it.
  {
    slug: 'what-we-refer-out',
    name: 'What We Do Not Do, and Who We Send You To',
    summary: 'The work that is outside a plumbing license, said plainly.',
    service: 'septic-property-plumbing',
    cluster: 'rural-property',
  },
  {
    slug: 'rural-crawlspace-runs',
    name: 'Crawlspace Plumbing on Rural Property',
    summary: 'Why country houses freeze and leak differently, and what to check.',
    service: 'well-property-plumbing',
    cluster: 'rural-property',
  },
  {
    slug: 'long-service-runs',
    name: 'Long Water Line Runs on Acreage',
    summary: 'Pressure loss, freeze exposure, and locating a leak in a 300-foot run.',
    service: 'water-service-line',
    cluster: 'rural-property',
  },
  {
    slug: 'manufactured-homes',
    name: 'Plumbing in Manufactured and Mobile Homes',
    summary: 'What is genuinely different about them, and what that means for repairs.',
    service: 'fixture-repair',
    cluster: 'rural-property',
  },
]

export const GUIDE_CLUSTERS: Array<{ key: Guide['cluster']; title: string; blurb: string }> = [
  {
    key: 'water-heating',
    title: 'Water heaters and tankless',
    blurb:
      'Sizing, fuel type, venting, and why tanks in this area rarely reach the age on the label.',
  },
  {
    key: 'water-quality',
    title: 'Water quality and treatment',
    blurb:
      'Hard water, iron, sulfur, and sediment — what is in the water across this corridor and what each fix actually addresses.',
  },
  {
    key: 'drains',
    title: 'Drains and sewer lines',
    blurb: 'How a line actually gets cleared, and when clearing it is the wrong answer.',
  },
  {
    key: 'rural-property',
    title: 'Well, septic, and rural property',
    blurb:
      'The house side of country properties — crawlspace runs, long service lines, manufactured homes, and an honest account of what we refer out.',
  },
]

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug)
}

export function guidesByCluster(cluster: Guide['cluster']): Guide[] {
  return GUIDES.filter((g) => g.cluster === cluster)
}

export function guidesForService(serviceSlug: string): Guide[] {
  return GUIDES.filter((g) => g.service === serviceSlug)
}

/** Linter support — same binding rule as problems. See scripts/lint-scope.ts [7b]. */
export function unboundGuides(): Guide[] {
  const slugs = new Set(SERVICES.map((s) => s.slug))
  return GUIDES.filter((g) => !slugs.has(g.service))
}
