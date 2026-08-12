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

const CHARLESTON: LocationContent = {
  quickAnswer:
    'Charleston is our home base, so we cover it faster than anyone — drain cleaning, emergency ' +
    'repair, leak detection, water heater repair, and fixture work across the town and the ' +
    'surrounding Bradley County area. We are the only plumbing operation actually based in ' +
    'Charleston; everyone else drives in from Cleveland or Athens. Tennessee license #5045.',
  intro: [
    'Charleston sits right on the Bradley–McMinn county line, on the north bank of the Hiwassee ' +
      'River along US-11, and it is where we are based. That is not a small thing for a plumbing ' +
      'call. A search for a plumber actually located in Charleston comes up empty — every operator ' +
      'serving the town is driving in from somewhere else, which means Charleston usually gets ' +
      'whatever time is left after the closer jobs.',
    'We are the exception, because this is home. It also means we know the town: the mix of city ' +
      'water and private well, the septic properties outside the center, and the older housing along ' +
      'the river that fails in familiar ways.',
  ],
  localSections: [
    {
      heading: 'The only plumber actually based in Charleston',
      paragraphs: [
        'Charleston is small enough that no competitor has ever anchored here, and that is exactly ' +
          'the gap we fill. When a drain backs up or a pipe lets go in Charleston, being based in town ' +
          'means we are not fighting a thirty-minute drive from Cleveland or Athens to get to you.',
        'Everything permit-free — drains, emergencies, leaks, water heater repair, fixtures — we do ' +
          'across Charleston today. Permitted jobs like water heater replacement we schedule as we ' +
          'confirm Bradley County permitting.',
      ],
    },
    {
      heading: 'Well and septic country at the county seam',
      paragraphs: [
        'Charleston runs on a mix of city water and private well, with septic common once you get ' +
          'outside the town center. On those properties we work the house side — the water lines, ' +
          'fixtures, heaters, and treatment inside the home. The well itself, the pump, the pressure ' +
          'tank, and the septic system are separately licensed in Tennessee, and we refer those to the ' +
          'right contractor rather than pretend they are ours to touch.',
        'Water treatment is often where well-water homes get the most value from us, because iron, ' +
          'sulfur smell, and sediment are house-side problems we can legally and genuinely solve.',
      ],
    },
    {
      heading: 'The Hiwassee, freezes, and older river-adjacent homes',
      paragraphs: [
        'Being on the river shapes the plumbing. Older homes near the water carry older supply lines ' +
          'and fixtures, and river-adjacent and seasonal structures see more freeze exposure on ' +
          'unheated runs. A hard cold snap brings the burst-pipe and frozen-hose-bib calls, and ' +
          'because emergency work needs no permit, we can respond to those anywhere in and around ' +
          'Charleston without a jurisdiction question.',
      ],
    },
  ],
  commonIssues: [
    'Slow, closest-plumber-is-30-minutes-away response from operators based in other towns',
    'House-side plumbing on private well and septic properties around the town center',
    'Iron, sulfur smell, and sediment on private well supply',
    'Aging supply lines and fixtures in older homes near the river',
    'Frozen and burst pipes on unheated runs during winter cold snaps',
  ],
  faqs: [
    {
      q: 'Are you really based in Charleston?',
      a: 'Yes. Charleston is our home base, and we are the only plumbing operation actually anchored here. Every other operator serving the town drives in from Cleveland or Athens.',
    },
    {
      q: 'How fast can you get to me in Charleston?',
      a: 'Faster than anyone, because we are in town rather than driving in. Active leaks, no-water calls, and backups go to the front of the line.',
    },
    {
      q: 'Do you work on well and septic properties around Charleston?',
      a: 'Yes, the house side — water lines, fixtures, heaters, and treatment inside the home. The well and septic systems themselves are separately licensed and we refer those out.',
    },
    {
      q: 'Can you treat my well water?',
      a: 'Yes. Iron, sulfur smell, and sediment are treated after the water reaches the house, which is house-side work we can legally do. It is often where well-water homes get the most value from us.',
    },
    {
      q: 'Are you licensed?',
      a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov. It is on every page of this site.',
    },
    {
      q: 'What will it cost?',
      a: 'One price, approved before we start, and it holds. No mid-job revisions.',
    },
  ],
}

const CALHOUN: LocationContent = {
  quickAnswer:
    'Calhoun sits directly across the Hiwassee River from our Charleston base on US-11, about four ' +
    'minutes away, so we cover it as home ground. Drain cleaning, emergency repair, leak detection, ' +
    'water heater repair, and fixture work across the town and the surrounding McMinn County area. ' +
    'Tennessee license #5045.',
  intro: [
    'Calhoun and Charleston are twin towns on opposite banks of the Hiwassee, joined by US-11. From ' +
      'our base that is about a four-minute drive, which makes Calhoun one of the fastest towns for ' +
      'us to reach and one that is otherwise served only by plumbers driving up from Athens or over ' +
      'from Cleveland.',
    'It is a small incorporated town with a high share of older housing, and well and septic ' +
      'properties are common once you leave the center. That combination — older homes and rural ' +
      'water — is most of what we see here.',
  ],
  localSections: [
    {
      heading: 'Charleston’s twin across the river',
      paragraphs: [
        'Because Calhoun is right across the Hiwassee from where we are based, we treat it exactly like ' +
          'home ground rather than a drive. The permit-free work — drains, emergencies, leaks, water ' +
          'heater repair, and fixtures — we do across Calhoun today. Permitted jobs like water heater ' +
          'replacement we schedule as we confirm McMinn County permitting.',
      ],
    },
    {
      heading: 'Older housing stock and what fails in it',
      paragraphs: [
        'Calhoun’s higher share of older homes means the classic aging-house problems: supply lines ' +
          'that have corroded from the inside and drop pressure, original shutoff valves that no longer ' +
          'close, and water heaters living past their years. None of that is exotic, and most of it is ' +
          'permit-free repair work we can handle on the spot.',
        'The thing worth doing before you need it is the small stuff — a seized shutoff or a tired ' +
          'supply line — because those are cheap on a planned visit and expensive in the middle of a ' +
          'leak.',
      ],
    },
    {
      heading: 'Well and septic on the edges',
      paragraphs: [
        'Outside the town center, Calhoun runs heavily on private well and septic. We work the house ' +
          'side of those properties — the interior plumbing, fixtures, heaters, and water treatment — ' +
          'and refer the well and septic systems themselves to the right licensed contractor. On well ' +
          'water, treating iron, sulfur, and sediment is usually where we add the most value.',
      ],
    },
  ],
  commonIssues: [
    'Corroding supply lines and seized shutoffs in older homes',
    'Water heaters past their service life',
    'House-side plumbing on private well and septic properties',
    'Iron, sulfur smell, and sediment on well supply',
    'Freeze exposure on unheated runs in winter',
  ],
  faqs: [
    {
      q: 'How fast can you reach Calhoun?',
      a: 'About four minutes from our base across the river in Charleston, so it is one of the quickest towns for us to get to.',
    },
    {
      q: 'Which jobs can you do in Calhoun right now?',
      a: 'All the permit-free work: drain cleaning, emergency and leak repair, water heater repair, and fixture work. Permitted jobs are scheduled as we confirm McMinn County permitting.',
    },
    {
      q: 'Do you handle well and septic properties?',
      a: 'The house side, yes. The well and septic systems themselves are separately licensed and we refer those out.',
    },
    {
      q: 'Are you licensed?',
      a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.',
    },
    {
      q: 'What will it cost?',
      a: 'One price, approved before we start, and it holds.',
    },
  ],
}

const ATHENS: LocationContent = {
  quickAnswer:
    'We cover Athens and McMinn County for drain cleaning, emergency repair, leak detection, water ' +
    'heater repair, and fixture work — about 18 minutes north of our Charleston base on US-11. ' +
    'Weekend and after-hours coverage is thin among the established operators here, which is a gap ' +
    'we aim to fill. Tennessee license #5045.',
  intro: [
    'Athens is the county seat of McMinn County and, by our read of this market, one of the best ' +
      'openings in the whole footprint. The competitor field here is thin: the best-reviewed ' +
      'plumbing option in town is primarily an electrical contractor, and weekend coverage across ' +
      'McMinn County is close to nonexistent among the established operators.',
    'That means when something goes wrong on a Saturday in Athens, a lot of people simply cannot get ' +
      'a plumber. We are 18 minutes away on US-11, and the permit-free work — drains, emergencies, ' +
      'leaks, fixtures, water heater repair — is exactly the kind of thing those weekend calls need.',
  ],
  localSections: [
    {
      heading: 'The weekend-coverage gap in McMinn County',
      paragraphs: [
        'The single clearest opportunity in Athens is timing. Established operators here keep limited ' +
          'hours, and weekend plumbing coverage in this part of McMinn County is effectively absent. A ' +
          'backed-up drain or a burst pipe does not wait for Monday.',
        'Emergency and drain work needs no permit, so it is precisely what we can bring to Athens ' +
          'without a jurisdiction question, and it is where being willing to answer makes the ' +
          'difference. Permitted jobs like water heater replacement we schedule as we confirm City of ' +
          'Athens and McMinn County permitting.',
      ],
    },
    {
      heading: 'Athens Utilities Board and the older core',
      paragraphs: [
        'Athens Utilities Board serves the water in town. The older core of Athens carries the housing ' +
          'and plumbing you would expect from a county seat with real age to it: aging supply lines, ' +
          'original-era water heaters, and sewer laterals old enough to have found tree roots.',
        'As with much of southeast Tennessee, the water tends toward hard, which shows up as scale in ' +
          'water heaters and shortened tank life. When we see a household on its third early water ' +
          'heater failure, treatment is usually worth a conversation.',
      ],
    },
    {
      heading: 'City sewer in town, well and septic on the county roads',
      paragraphs: [
        'Built-up Athens runs on city sewer, while the McMinn County properties outside town are ' +
          'heavily well and septic. On those we work the house side — interior plumbing, fixtures, ' +
          'heaters, and water treatment — and refer the well and septic systems themselves to the ' +
          'right licensed contractor. When an Athens drain keeps backing up in the same spot, we can ' +
          'camera the line and show you whether it is roots, a belly, or a failed section.',
      ],
    },
  ],
  commonIssues: [
    'No weekend or after-hours plumbing coverage from established local operators',
    'Root intrusion and bellies in older sewer laterals in the town core',
    'Aging supply lines and original-era water heaters',
    'Hard-water scale shortening water heater life',
    'House-side plumbing on well and septic properties out in the county',
  ],
  faqs: [
    {
      q: 'Do you cover Athens on weekends?',
      a: 'Weekend and after-hours coverage in McMinn County is thin among the established operators, and closing that gap is a big part of why we serve Athens. Call and we will give you a real answer on timing.',
    },
    {
      q: 'How far is Athens from your base?',
      a: 'About 18 minutes north of Charleston on US-11, so it is well inside our regular service area.',
    },
    {
      q: 'Which jobs can you do in Athens right now?',
      a: 'All the permit-free work: drain cleaning, emergency and leak repair, water heater repair, and fixtures. Permitted jobs are scheduled as we confirm Athens and McMinn County permitting.',
    },
    {
      q: 'Is Athens water hard?',
      a: 'Like much of southeast Tennessee, it tends toward hard, which shows up as scale in water heaters and on fixtures. It is a plumbing issue worth addressing if your heaters keep failing early.',
    },
    {
      q: 'Are you licensed to work in Athens?',
      a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.',
    },
    {
      q: 'What will it cost?',
      a: 'One price, approved before we start, and it holds. No mid-job surprises.',
    },
  ],
}

export const LOCATION_CONTENT: Record<string, LocationContent> = {
  'charleston-tn': CHARLESTON,
  'calhoun-tn': CALHOUN,
  'cleveland-tn': CLEVELAND,
  'athens-tn': ATHENS,
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
