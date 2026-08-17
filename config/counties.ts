/**
 * COUNTY REGISTRY — Phase 4, permit guidance
 *
 * Derived from the jurisdiction map rather than hand-maintained, so a county
 * page can never disagree with config/jurisdictions.ts. Each page answers one
 * question a homeowner actually has: if I hire a plumber here, who issues the
 * permit and how long does it take?
 *
 * This is the clearest authority content in the whole build, for one reason:
 * it is true and it is specific. All thirteen permitting authorities were
 * called and answered on 2026-08-16. No competitor in this market publishes
 * anything like it, because doing so requires making the calls.
 *
 * Rhea County is deliberately absent — Dayton is outside the served area.
 */

import { JURISDICTIONS, type Jurisdiction, type County } from './jurisdictions'
import { LOCATIONS, type Location } from './locations'

export interface CountyPage {
  slug: string
  county: County
  name: string
  /** Plain-language summary of the permitting picture here. */
  summary: string
  /** Something true about the county that is not about permitting. */
  context: string
}

export const COUNTIES: CountyPage[] = [
  {
    slug: 'bradley-county',
    county: 'Bradley',
    name: 'Bradley County',
    summary:
      'Both Bradley County and the City of Cleveland accept a permit application from a Tennessee ' +
      'Limited Licensed Plumber, and both turn one around in roughly one to three days.',
    context:
      'Bradley County is the primary market for this service area and the one we know best. ' +
      'Cleveland Utilities serves the water through most of the built-up area, with septic common ' +
      'on the rural edges, and the housing runs from mid-century neighbourhoods near the centre to ' +
      'newer subdivisions out toward the bypass.',
  },
  {
    slug: 'mcminn-county',
    county: 'McMinn',
    name: 'McMinn County',
    summary:
      'McMinn County and the City of Athens both accept an application from a Limited Licensed ' +
      'Plumber, with a one to three day turnaround.',
    context:
      'McMinn County covers Athens, Niota, Etowah, Englewood, Riceville, and Calhoun. The older ' +
      'cores of Athens, Niota, and Etowah carry a lot of galvanized supply line and cast iron ' +
      'drainage, which is why repipes and recurring backups come up here more than in newer stock. ' +
      'Athens Utilities Board serves the water in town; a large share of the rest is on private well.',
  },
  {
    slug: 'hamilton-county',
    county: 'Hamilton',
    name: 'Hamilton County',
    summary:
      'This is the exception in our footprint. Hamilton County, Collegedale, Red Bank, East Ridge, ' +
      'and the City of Chattanooga do NOT accept a permit application from a Limited Licensed ' +
      'Plumber. Permitted work here is filed through a licensed partner by our office.',
    context:
      'Hamilton County is where the corridor meets metro Chattanooga, and it is the most ' +
      'fragmented permitting picture we deal with. Several towns inside the county administer ' +
      'their own building permits separately from the county, so the desk that handles a job in ' +
      'Collegedale is not the desk that handles one in Apison a few miles away.',
  },
  {
    slug: 'polk-county',
    county: 'Polk',
    name: 'Polk County',
    summary:
      'Polk County accepts a permit application from a Limited Licensed Plumber, with a one to ' +
      'three day turnaround.',
    context:
      'Polk County covers Benton, Ocoee, Old Fort, and Delano. It has no resident plumbing ' +
      'operation of its own, so coverage here has always been somebody else’s overflow. The area ' +
      'runs heavily on private well and septic, and the seasonal river properties along the Ocoee ' +
      'bring their own freeze and access problems.',
  },
  {
    slug: 'meigs-county',
    county: 'Meigs',
    name: 'Meigs County',
    summary:
      'Meigs County accepts a permit application from a Limited Licensed Plumber, with a one to ' +
      'three day turnaround.',
    context:
      'Meigs County covers Decatur and the surrounding area. Like Polk, it has little in the way of ' +
      'resident plumbing coverage and has long relied on out-of-county help that treats it as the ' +
      'end of a route. Private well and septic are the norm outside the town centre.',
  },
]

export function getCounty(slug: string): CountyPage | undefined {
  return COUNTIES.find((c) => c.slug === slug)
}

/**
 * Permitting authorities that actually govern a town we serve.
 *
 * Filtered on purpose. Hamilton County alone contains seven authorities, but
 * Soddy-Daisy and Signal Mountain are outside the service area entirely, and
 * Red Bank and East Ridge have no location page. Listing them would put four
 * rows of "we do not permit here" on a page about places we do not go — which
 * reads as a limitation rather than what it is, which is a boundary.
 *
 * A county table should answer "who issues the permit for MY job", so it only
 * shows authorities with at least one town we cover.
 */
export function jurisdictionsInCounty(county: County): Jurisdiction[] {
  const served = new Set(LOCATIONS.map((l) => l.jurisdictionId))
  return Object.values(JURISDICTIONS).filter((j) => j.county === county && served.has(j.id))
}

/** Every authority in the county, served or not. Office reference, not page copy. */
export function allJurisdictionsInCounty(county: County): Jurisdiction[] {
  return Object.values(JURISDICTIONS).filter((j) => j.county === county)
}

/** Towns we serve in this county. Drives the internal links off each page. */
export function locationsInCounty(county: County): Location[] {
  return LOCATIONS.filter((l) => l.county === county)
}

/** True when every authority in the county accepts an application from an LLP. */
export function countyAcceptsLlp(county: County): boolean {
  const js = jurisdictionsInCounty(county)
  return js.length > 0 && js.every((j) => j.permitAuthority === 'full')
}

/**
 * Linter support: a county page must bind to at least one jurisdiction and one
 * town we actually serve, or it is a page about nowhere.
 */
export function unboundCounties(): CountyPage[] {
  return COUNTIES.filter(
    (c) => jurisdictionsInCounty(c.county).length === 0 || locationsInCounty(c.county).length === 0
  )
}
