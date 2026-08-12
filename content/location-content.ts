/**
 * LOCATION PAGE CONTENT
 *
 * Rich, honest regional content per town. Cleveland is the fully-written pilot;
 * every other town uses `fallbackLocationContent()` until its own page is written
 * in the rollout.
 *
 * HONESTY RULE: no invented neighborhoods, jobs, or statistics. Everything here is
 * either a verifiable regional fact (utilities, county seats, general water
 * chemistry, housing-era patterns) or genuine plumbing knowledge. Where a real
 * local specific would strengthen the page, it is left to be added with real
 * material rather than fabricated. The registry's `localFacts` carry the
 * town-specific claims and the linter enforces a minimum of three.
 */

import { getLocation, type Location } from '@/config/locations'

export interface LocationContent {
  quickAnswer: string
  intro: string[]
  localSections: Array<{ heading: string; paragraphs: string[] }>
  commonIssues: string[]
  faqs: Array<{ q: string; a: string }>
}

const CLEVELAND: LocationContent = {
  quickAnswer:
    'We cover Cleveland and Bradley County for drain cleaning, emergency repair, leak detection, ' +
    'water heater repair, and fixture work — the permit-free jobs — across the whole city, about ' +
    '15 minutes from our base in Charleston. Water heater replacement, tankless, and repipes are ' +
    'permitted work we bring online in Bradley County as we confirm local permitting. Tennessee ' +
    'Limited Licensed Plumber #5045.',
  intro: [
    'Cleveland is the primary market for this service area, and it is where the plumbing work is ' +
      'most varied. It is the largest city in Bradley County, close enough to our Charleston base ' +
      'that we treat it as home ground rather than a drive, and big enough that the housing runs ' +
      'from pre-war homes near the center to subdivisions still going up toward the bypass.',
    'That spread matters, because a house built in 1955 and a house built in 2015 fail in ' +
      'completely different ways. The older core has aging supply lines, original-era water heaters, ' +
      'and sewer laterals that have had decades to find tree roots. The newer subdivisions have ' +
      'their own new-construction quirks. We work both, and we quote both the same way: one price, ' +
      'approved before we start.',
  ],
  localSections: [
    {
      heading: "Cleveland's older core and its newer subdivisions",
      paragraphs: [
        'The mid-century neighborhoods near the center of Cleveland are where we see the classic ' +
          'aging-house plumbing problems. Galvanized steel supply lines from that era corrode from ' +
          'the inside out, which shows up as dropping water pressure and rusty water before it shows ' +
          'up as a leak. Water heaters installed a decade or more ago are living on borrowed time. ' +
          'Original shutoff valves often no longer close, which turns a small repair into an ' +
          'emergency because there is no way to isolate the fixture.',
        'Toward the bypass and the newer subdivisions, the pipe is newer — copper and PEX rather ' +
          'than galvanized — but new construction has its own tells. Builder-grade fixtures and ' +
          'shutoffs fail early, and the first few years in a new home are when the small stuff ' +
          'surfaces. Either way, we would rather find the aging valve or the failing supply line on a ' +
          'planned visit than at 11 p.m. when it lets go.',
      ],
    },
    {
      heading: 'Cleveland Utilities, hard water, and your water heater',
      paragraphs: [
        'Cleveland Utilities provides the water and wastewater service across the city. Like much of ' +
          'the Ridge-and-Valley region of southeast Tennessee, the water here tends to carry enough ' +
          'mineral hardness to matter over time. Hard water is not a health problem, but it is a ' +
          'plumbing one: scale builds up inside water heaters, shortens their life, and leaves ' +
          'deposits on fixtures and aerators.',
        'That is why a water heater in a hard-water home often does not reach the age it should, and ' +
          'why we talk through treatment when it fits rather than just swapping in another tank to ' +
          'scale up the same way. Water heater repair we can do anywhere in Cleveland today, because ' +
          'a repair needs no permit. A full replacement is permitted work, so we schedule that as we ' +
          'confirm Bradley County and City of Cleveland permitting.',
      ],
    },
    {
      heading: 'City sewer in town, septic on the edges',
      paragraphs: [
        'Most of built-up Cleveland runs on city sewer, while the rural edges of Bradley County are ' +
          'on private septic. In the older parts of town, the sewer lateral running from the house to ' +
          'the main is often the oldest pipe on the property, and clay or cast iron laterals are ' +
          'exactly where tree roots get in and where lines belly and back up.',
        'When a Cleveland drain keeps backing up in the same spot, we can camera the line and show ' +
          'you whether it is roots, a low spot, or a failed section, so a recurring problem becomes a ' +
          'decision you can make once. On septic properties we handle everything on the house side — ' +
          'the drains, fixtures, and water lines inside the home. The tank, the drain field, and ' +
          'pumping are separately licensed in Tennessee, and we refer those to a septic contractor.',
      ],
    },
    {
      heading: 'Winter freezes and the calls that follow',
      paragraphs: [
        'Cleveland gets cold snaps hard enough to freeze and burst pipes, and the calls come in waves ' +
          'when they do. The usual victims are unprotected hose bibs, pipes running through ' +
          'crawlspaces and unheated garages, and lines on exterior walls. A burst pipe is an active ' +
          'emergency, and emergency work needs no permit, so it is something we can respond to across ' +
          'all of Cleveland and Bradley County without a jurisdiction question slowing anything down.',
        'The best version of this call is the one you never have to make, so if you are on an older ' +
          'home with known freeze-prone runs, it is worth having them looked at before the first hard ' +
          'freeze rather than after.',
      ],
    },
  ],
  commonIssues: [
    'Corroding galvanized supply lines in mid-century homes, showing as low pressure or rusty water',
    'Water heaters at or past their lifespan, shortened further by hard-water scale',
    'Root intrusion and bellies in older clay or cast iron sewer laterals',
    'Original shutoff valves that no longer close when a repair is needed',
    'Frozen and burst pipes at hose bibs and in crawlspaces during cold snaps',
    'Builder-grade fixtures and shutoffs failing early in newer bypass-area subdivisions',
  ],
  faqs: [
    {
      q: 'Do you serve all of Cleveland and Bradley County?',
      a: 'Yes. Cleveland is our primary market and about 15 minutes from our base in Charleston, and we cover the surrounding Bradley County area including the rural edges on septic and well.',
    },
    {
      q: 'How fast can you get to me in Cleveland?',
      a: 'Cleveland is inside about 15 minutes of our base, so it is one of the quickest towns for us to reach. Active leaks, no-water calls, and backups move to the front of the line. Call and we will give you a real window.',
    },
    {
      q: 'Which plumbing jobs can you do in Cleveland right now?',
      a: 'All the permit-free work today: drain cleaning, emergency and leak repair, water heater repair, fixture repair and replacement, and diagnostics, across the whole city. Water heater replacement, tankless, repipes, and sewer work are permitted jobs we schedule in Bradley County as we confirm local permitting.',
    },
    {
      q: 'Is Cleveland water hard?',
      a: 'Like much of southeast Tennessee, Cleveland water tends to carry enough mineral hardness to affect plumbing over time — scale in water heaters and deposits on fixtures. It is a plumbing issue, not a health one, and it is worth addressing if your heaters keep failing early.',
    },
    {
      q: 'Do you work on septic and well properties around Cleveland?',
      a: 'Yes, the house side of them — the drains, fixtures, water lines, and treatment inside the home. We do not service the septic system or the well system itself; tanks, fields, pumps, and pressure tanks are separately licensed and we refer those out.',
    },
    {
      q: 'Can you replace my water heater in Cleveland?',
      a: 'A replacement is permitted work, so we schedule those as we confirm Cleveland and Bradley County permitting. A water heater repair we can do right away, since repairs need no permit, and we will tell you honestly which one your unit actually needs.',
    },
    {
      q: 'Are you licensed to work in Cleveland?',
      a: 'Yes. Tennessee Limited Licensed Plumber #5045, issued by the state Board for Licensing Contractors and verifiable at verify.tn.gov. The number is on every page of this site.',
    },
    {
      q: 'What will it cost?',
      a: 'You get one price to approve before the work starts, and it holds. No mid-job revisions once the truck is in the driveway — that is the whole way we work.',
    },
  ],
}

export const LOCATION_CONTENT: Record<string, LocationContent> = {
  'cleveland-tn': CLEVELAND,
}

/** Honest, registry-driven content for towns without a hand-written page yet. */
export function fallbackLocationContent(loc: Location): LocationContent {
  const utilityLine = loc.utility
    ? `${loc.utility} serves the area. `
    : 'Many properties here run on private well and septic. '

  return {
    quickAnswer:
      `We cover ${loc.name} and the surrounding ${loc.county} County area for drain cleaning, ` +
      `emergency repair, leak detection, water heater repair, and fixture work — the permit-free ` +
      `jobs — about ${loc.driveMinutes} minutes from our base in Charleston. Permitted work like ` +
      `water heater replacement is scheduled as we confirm local permitting. TN license #5045.`,
    intro: [
      `${loc.name} is ${loc.driveMinutes} minutes from our base in Charleston, and we treat the ` +
        `${loc.county} County corridor as home ground rather than a drive. ${utilityLine}` +
        `We bring the same licensed work and the same straight pricing here that we bring to Cleveland ` +
        `and Athens.`,
    ],
    localSections: [
      {
        heading: `Plumbing in ${loc.name}`,
        paragraphs: [
          `The permit-free work — drains, emergencies, leaks, water heater repair, and fixtures — we ` +
            `do across ${loc.name} today, because none of it requires a permit. Permitted jobs like ` +
            `water heater replacement, tankless, and repipes we schedule as we confirm permitting for ` +
            `${loc.county} County. On well and septic properties we work the house side only and refer ` +
            `the system itself to the right licensed contractor.`,
        ],
      },
    ],
    commonIssues: [
      'Aging supply lines and original-era water heaters in older homes',
      'Root intrusion and recurring backups in older sewer or drain lines',
      'Hard-water scale on fixtures and water heaters',
      'Frozen and burst pipes during winter cold snaps',
      'House-side plumbing on private well and septic properties',
    ],
    faqs: [
      {
        q: `Do you really serve ${loc.name}?`,
        a: `Yes. ${loc.name} is ${loc.driveMinutes} minutes from our base in Charleston, and it is inside our regular service area, not a town we merely list.`,
      },
      {
        q: `Which jobs can you do in ${loc.name} right now?`,
        a: `All the permit-free work: drain cleaning, emergency and leak repair, water heater repair, and fixture work. Permitted jobs are scheduled as we confirm ${loc.county} County permitting.`,
      },
      {
        q: `Are you licensed to work in ${loc.name}?`,
        a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.',
      },
      {
        q: 'Do you work on well and septic properties?',
        a: 'The house side, yes — drains, fixtures, water lines, and treatment inside the home. The well and septic systems themselves are separately licensed and we refer those out.',
      },
      {
        q: 'What will it cost?',
        a: 'One price, approved before we start, and it holds. No mid-job surprises.',
      },
    ],
  }
}

export function getLocationContent(slug: string): LocationContent | null {
  const loc = getLocation(slug)
  if (!loc) return null
  return LOCATION_CONTENT[slug] ?? fallbackLocationContent(loc)
}
