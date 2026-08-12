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

const OOLTEWAH: LocationContent = {
  quickAnswer:
    'We cover Ooltewah for drain cleaning, emergency repair, leak detection, water heater repair, ' +
    'and fixture work — about 35 minutes from our Charleston base. Ooltewah is one of the ' +
    'fastest-growing parts of the Chattanooga metro, and after-hours availability is thin among the ' +
    'established local operators. Tennessee license #5045.',
  intro: [
    'Ooltewah is one of the fastest-growing residential areas in the Chattanooga metro, and fast ' +
      'growth changes what breaks and when. A lot of the housing here is newer construction, which ' +
      'fails differently than an old house does, and the established local operator closes early and ' +
      'does not work weekends.',
    'That combination — heavy new construction and thin availability — is exactly the gap we serve. ' +
      'The permit-free work runs here today; permitted jobs we schedule as we confirm Hamilton County ' +
      'permitting.',
  ],
  localSections: [
    {
      heading: 'New construction has its own plumbing problems',
      paragraphs: [
        'A new subdivision home is not problem-free, it just fails differently than an old one. ' +
          'Builder-grade fixtures and shutoff valves are common early failures, supply lines and ' +
          'connections that were rushed show up in the first few years, and the sheer volume of new ' +
          'homes means a lot of small plumbing issues surfacing at once across Ooltewah.',
        'Those are permit-free repairs we can handle across Ooltewah today, from a failing fixture to ' +
          'a leak to a water heater that quit.',
      ],
    },
    {
      heading: 'The availability gap',
      paragraphs: [
        'The established local operator in this area keeps limited hours and does not work weekends. ' +
          'For a fast-growing community, that leaves a real hole, because a burst pipe or a backed-up ' +
          'drain does not check the calendar. Emergency and drain work needs no permit, so it is ' +
          'exactly what we can bring to Ooltewah without a jurisdiction question. Call and we will give ' +
          'you a straight answer on timing.',
      ],
    },
  ],
  commonIssues: [
    'Builder-grade fixtures and shutoff valves failing early in newer homes',
    'Rushed supply-line and drain connections surfacing in the first few years',
    'Thin after-hours and weekend coverage from established local operators',
    'Hard-water scale on fixtures and water heaters',
    'Water heater repair and replacement demand across new subdivisions',
  ],
  faqs: [
    { q: 'How far is Ooltewah from your base?', a: 'About 35 minutes from Charleston. We serve it as part of the Hamilton County growth corridor.' },
    { q: 'Do you cover Ooltewah after hours?', a: 'The established local operator closes early and skips weekends, and closing that gap is part of why we serve Ooltewah. Emergency and drain work needs no permit, so we can respond. Call for a real timing answer.' },
    { q: 'Which jobs can you do in Ooltewah now?', a: 'All the permit-free work — drains, emergencies, leaks, water heater repair, and fixtures. Permitted jobs are scheduled as we confirm Hamilton County permitting.' },
    { q: 'My home is only a few years old. Why would it need a plumber?', a: 'New homes fail differently, not never. Builder-grade fixtures, shutoffs, and rushed connections are common early issues, and they are exactly the permit-free repairs we handle.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const COLLEGEDALE: LocationContent = {
  quickAnswer:
    'We cover Collegedale for drain cleaning, emergency repair, leak detection, water heater repair, ' +
    'and fixture work — about 35 minutes from our Charleston base. Collegedale runs its own building ' +
    'permitting separately from Hamilton County, and it carries a mix of residential and ' +
    'institutional demand. Tennessee license #5045.',
  intro: [
    'Collegedale sits in the Ooltewah–Apison growth corridor and is a little different from its ' +
      'neighbors in one way that matters for plumbing: it administers its own building permits, ' +
      'separately from Hamilton County. It is also home to Southern Adventist University, which gives ' +
      'the area a mix of residential and institutional demand.',
    'The permit-free work — drains, emergencies, leaks, water heater repair, and fixtures — we do ' +
      'across Collegedale today. Permitted jobs we schedule as we confirm City of Collegedale ' +
      'permitting specifically, since it is its own jurisdiction.',
  ],
  localSections: [
    {
      heading: 'Collegedale runs its own permitting',
      paragraphs: [
        'Because Collegedale handles its own building permits rather than deferring to Hamilton ' +
          'County, permitted work here is verified against the city, not the county. That is exactly ' +
          'the kind of jurisdiction detail our scope guard is built around: permit-free work runs at ' +
          'full strength now, and permitted jobs like water heater replacement are scheduled as we ' +
          'confirm Collegedale specifically.',
      ],
    },
    {
      heading: 'Residential and institutional demand side by side',
      paragraphs: [
        'With the university and the surrounding neighborhoods, Collegedale mixes ordinary household ' +
          'plumbing with the steadier needs of an institutional community. For homeowners, that does ' +
          'not change the work — drains clog, heaters fail, and fixtures wear out the same way they do ' +
          'anywhere — but it does mean a town with real, consistent plumbing demand and a growth ' +
          'corridor around it.',
      ],
    },
  ],
  commonIssues: [
    'Permitting that is verified against the city, not Hamilton County',
    'Standard household drain, heater, and fixture failures across the neighborhoods',
    'Growth-corridor new construction adjacent in Ooltewah and Apison',
    'Hard-water scale on fixtures and water heaters',
  ],
  faqs: [
    { q: 'Is Collegedale permitting different from Hamilton County?', a: 'Yes. Collegedale administers its own building permits, so permitted work here is confirmed against the city specifically. Permit-free work we do today either way.' },
    { q: 'How far is Collegedale from your base?', a: 'About 35 minutes from Charleston, in the Hamilton County growth corridor.' },
    { q: 'Which jobs can you do in Collegedale now?', a: 'All the permit-free work — drains, emergencies, leaks, water heater repair, and fixtures. Permitted jobs are scheduled as we confirm Collegedale permitting.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const APISON: LocationContent = {
  quickAnswer:
    'We cover Apison for drain cleaning, emergency repair, leak detection, water heater repair, and ' +
    'fixture work — about 40 minutes from our Charleston base. Apison is the rural-residential edge ' +
    'of the Hamilton County growth corridor, with a high share of private well and septic ' +
    'properties. Tennessee license #5045.',
  intro: [
    'Apison sits on the rural edge of the Hamilton County growth corridor, where new subdivisions ' +
      'give way to well-and-septic country. That mix is what defines the plumbing here: newer homes ' +
      'with builder-grade issues on one side, and older rural properties with long service runs and ' +
      'private water on the other.',
    'The permit-free work we do across Apison today; permitted jobs we schedule as we confirm ' +
      'Hamilton County permitting.',
  ],
  localSections: [
    {
      heading: 'Well and septic country on the growth edge',
      paragraphs: [
        'A high share of Apison properties run on private well and septic. On those we work the house ' +
          'side — the interior plumbing, fixtures, heaters, and water treatment — and refer the well ' +
          'and septic systems themselves to the right licensed contractor. On well water, treating ' +
          'iron, sulfur smell, and sediment is usually where we add the most value.',
      ],
    },
    {
      heading: 'Long service runs and crawlspace construction',
      paragraphs: [
        'Rural Apison properties often have long runs from the road to the house and crawlspace ' +
          'construction underneath. That means more pipe exposed to freeze in a cold snap and more ' +
          'distance for a problem to hide. Because emergency and drain work needs no permit, we can ' +
          'respond to a burst run or a backup here without a jurisdiction question slowing us down.',
      ],
    },
  ],
  commonIssues: [
    'House-side plumbing on private well and septic properties',
    'Iron, sulfur smell, and sediment on well supply',
    'Long service runs and crawlspace pipe exposed to winter freeze',
    'Builder-grade fixtures and shutoffs in newer subdivision homes',
  ],
  faqs: [
    { q: 'Do you work on well and septic properties in Apison?', a: 'Yes, the house side — interior plumbing, fixtures, heaters, and treatment. The well and septic systems themselves are separately licensed and we refer those out.' },
    { q: 'How far is Apison from your base?', a: 'About 40 minutes from Charleston, on the rural edge of the Hamilton County growth corridor.' },
    { q: 'Can you treat my well water?', a: 'Yes. Iron, sulfur smell, and sediment are treated after the water reaches the house, which is house-side work we can legally do.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const HARRISON: LocationContent = {
  quickAnswer:
    'We cover Harrison for drain cleaning, emergency repair, leak detection, water heater repair, ' +
    'and fixture work — about 35 minutes from our Charleston base. Harrison sits along the ' +
    'Chickamauga Lake shoreline northeast of Chattanooga, with a mix of older lake-adjacent homes ' +
    'and newer subdivisions. Tennessee license #5045.',
  intro: [
    'Harrison runs along the Chickamauga Lake shoreline northeast of Chattanooga, and the lake ' +
      'shapes the plumbing. There is a mix of older lake-adjacent homes and newer subdivisions, and ' +
      'septic is common on the lake-side lots where city sewer never reached.',
    'The permit-free work we do across Harrison today; permitted jobs we schedule as we confirm ' +
      'Hamilton County permitting.',
  ],
  localSections: [
    {
      heading: 'Lake-side property and septic lots',
      paragraphs: [
        'Many of the older lake-adjacent lots in Harrison run on private septic rather than city ' +
          'sewer. On those properties we handle the house side — drains, fixtures, water lines, and ' +
          'treatment inside the home — and refer the septic system itself to a licensed septic ' +
          'contractor. Seasonal and second homes near the water also see more freeze exposure on ' +
          'unheated runs, which drives winter emergency calls.',
      ],
    },
    {
      heading: 'Older homes and newer subdivisions, side by side',
      paragraphs: [
        'Harrison mixes decades-old lake homes with newer subdivision construction, and the two fail ' +
          'in opposite ways. Older homes bring aging supply lines, tired shutoffs, and original-era ' +
          'water heaters; newer ones bring builder-grade fixtures and early connection issues. Both are ' +
          'squarely permit-free repair work we can do across Harrison today.',
      ],
    },
  ],
  commonIssues: [
    'Septic house-side plumbing on older lake-adjacent lots',
    'Freeze exposure on seasonal and lake-side properties in winter',
    'Aging supply lines and water heaters in older lake homes',
    'Builder-grade fixtures and shutoffs in newer subdivisions',
    'Hard-water scale on fixtures and heaters',
  ],
  faqs: [
    { q: 'How far is Harrison from your base?', a: 'About 35 minutes from Charleston, along the Chickamauga Lake shoreline in the growth corridor.' },
    { q: 'Do you work on septic properties in Harrison?', a: 'Yes, the house side — drains, fixtures, water lines, and treatment. The septic system itself is separately licensed and we refer it out.' },
    { q: 'Which jobs can you do in Harrison now?', a: 'All the permit-free work — drains, emergencies, leaks, water heater repair, and fixtures. Permitted jobs are scheduled as we confirm Hamilton County permitting.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const CHATTANOOGA: LocationContent = {
  quickAnswer:
    'Inside Chattanooga city limits we do the permit-free work — drain cleaning, emergency leak ' +
    'repair, and fixture work — the same as anywhere else we serve. A Tennessee Limited Licensed ' +
    'Plumber cannot pull permits inside Chattanooga, so permit-required work (water heater ' +
    'replacement, repipes, sewer, gas) goes to a licensed partner. We are straight about which is ' +
    'which. Tennessee license #5045.',
  intro: [
    'Chattanooga is different from every other town we serve, and we would rather explain exactly ' +
      'how than quietly leave things off a list. A Tennessee Limited Licensed Plumber is accepted to ' +
      'pull permits across most of the state, but not inside Chattanooga, Knoxville, or Nashville. ' +
      'That is a permitting rule, not a skill or a coverage rule.',
    'What it means in practice: the permit-free work — drains, emergency leak repair, fixtures, ' +
      'diagnostics — we do inside Chattanooga city limits exactly as we do everywhere. Permit-required ' +
      'work inside the city goes to a licensed partner, and we make that introduction rather than do ' +
      'permitted work without a permit.',
  ],
  localSections: [
    {
      heading: 'What we do inside the city, and what goes to a partner',
      paragraphs: [
        'Drain cleaning, clearing recurring backups, emergency leak repair, shutoffs, and fixture ' +
          'repair and replacement all need no permit, so they are fully covered inside Chattanooga. ' +
          'Water heater replacement, tankless conversions, repipes, sewer line work, and gas work all ' +
          'require a permit, and since we cannot pull one in the city, those go to a licensed partner.',
        'This is the honest version of a constraint most companies would just hide by omission. Saying ' +
          'it plainly is the point: you know before you call what we can do at your address and what we ' +
          'will hand off.',
      ],
    },
    {
      heading: 'Older neighborhoods and their sewer lines',
      paragraphs: [
        'Chattanooga’s older neighborhoods carry cast iron and clay sewer lines that have had decades ' +
          'to develop root intrusion, bellies, and cracks. That is why drain cleaning is the wedge ' +
          'here: a line that keeps backing up in the same spot usually has a cause, and we can camera ' +
          'it and show you what is there, then clear it. The clearing is permit-free; if the fix turns ' +
          'out to be a sewer replacement, that permitted work is where a partner comes in.',
      ],
    },
    {
      heading: 'Competing on response, not volume',
      paragraphs: [
        'The Chattanooga market is saturated. A handful of large operators hold roughly twelve ' +
          'thousand reviews between them, and we are not going to out-shout them on the head term. We ' +
          'do not try. Our place inside the city is the urgent, permit-free work where fast, honest ' +
          'response matters more than the size of a review count.',
      ],
    },
  ],
  commonIssues: [
    'Root intrusion, bellies, and cracks in older cast iron and clay sewer lines',
    'Recurring main-line backups in older neighborhoods',
    'Emergency leaks and burst pipes needing fast, permit-free response',
    'Fixture repairs and like-for-like replacements inside the city',
    'Permit-required jobs that must be routed to a licensed partner',
  ],
  faqs: [
    { q: 'Do you work in Chattanooga at all?', a: 'Yes — the permit-free work: drain cleaning, emergency leak repair, and fixture work, inside the city the same as anywhere. Permit-required work goes to a licensed partner because an LLP cannot pull permits inside Chattanooga.' },
    { q: 'Why can’t you replace a water heater in Chattanooga?', a: 'A replacement needs a permit, and a Tennessee Limited Licensed Plumber is not accepted to pull permits inside Chattanooga city limits. Rather than do permitted work without a permit, we send it to a licensed partner and make the introduction.' },
    { q: 'Can you clear a drain or fix a leak in Chattanooga?', a: 'Yes. Drain cleaning and emergency leak repair need no permit, so they are fully covered inside the city.' },
    { q: 'My old sewer line keeps backing up. Can you help?', a: 'We can clear it and camera it to show you the cause, which is permit-free. If it turns out to need a sewer replacement, that permitted work is handled by a partner.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const RICEVILLE: LocationContent = {
  quickAnswer:
    'We cover Riceville for drain cleaning, emergency repair, leak detection, water heater repair, ' +
    'and fixture work — about 12 minutes from our Charleston base, right on US-11 between Charleston ' +
    'and Athens. Riceville is predominantly well and septic country. Tennessee license #5045.',
  intro: [
    'Riceville is an unincorporated community sitting on US-11 between Charleston and Athens, which ' +
      'puts it about 12 minutes from our base — closer to us than to almost any operator serving it. ' +
      'Today it is served mainly by plumbers driving out from Athens or Cleveland, so it tends to get ' +
      'whatever time is left over.',
    'Most of Riceville runs on private well and septic. The permit-free work we do here today; ' +
      'permitted jobs we schedule as we confirm McMinn County permitting.',
  ],
  localSections: [
    {
      heading: 'On the US-11 line, closer to us than to Athens',
      paragraphs: [
        'Being right on the highway between our base and Athens means Riceville is a quick run for us ' +
          'rather than a drive-time afterthought. Drains, emergencies, leaks, water heater repair, and ' +
          'fixtures are all permit-free, so we cover them across Riceville with no jurisdiction ' +
          'question.',
      ],
    },
    {
      heading: 'Well and septic country',
      paragraphs: [
        'With most properties on private well and septic, the work here is mostly house-side: interior ' +
          'plumbing, fixtures, heaters, and water treatment. The well and septic systems themselves are ' +
          'separately licensed and we refer those out. On well water, treating iron, sulfur smell, and ' +
          'sediment is usually where we add the most value.',
      ],
    },
  ],
  commonIssues: [
    'Slow response from operators based in Athens or Cleveland',
    'House-side plumbing on private well and septic properties',
    'Iron, sulfur smell, and sediment on well supply',
    'Aging supply lines and water heaters in older rural homes',
    'Freeze exposure on unheated runs in winter',
  ],
  faqs: [
    { q: 'How far is Riceville from your base?', a: 'About 12 minutes, right on US-11 between Charleston and Athens — a quick run for us rather than a drive.' },
    { q: 'Which jobs can you do in Riceville now?', a: 'All the permit-free work — drains, emergencies, leaks, water heater repair, and fixtures. Permitted jobs are scheduled as we confirm McMinn County permitting.' },
    { q: 'Do you handle well and septic properties?', a: 'The house side, yes. The well and septic systems themselves are separately licensed and we refer those out.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const NIOTA: LocationContent = {
  quickAnswer:
    'We cover Niota for drain cleaning, emergency repair, leak detection, water heater repair, and ' +
    'fixture work — about 25 minutes from our Charleston base. Niota has a notably old housing ' +
    'stock, where galvanized supply-line failure is common. Tennessee license #5045.',
  intro: [
    'Niota is a small city north of Athens with a notably old housing stock, and old houses have ' +
      'old plumbing. The tell here is galvanized supply line — steel pipe that corrodes from the ' +
      'inside out over decades, which is why so many older Niota homes fight low water pressure and ' +
      'rusty water.',
    'The permit-free work we do across Niota today; permitted jobs we schedule as we confirm McMinn ' +
      'County permitting.',
  ],
  localSections: [
    {
      heading: 'Old housing and galvanized supply lines',
      paragraphs: [
        'Galvanized steel pipe was standard in the era much of Niota was built, and it does not age ' +
          'gracefully. It corrodes and scales on the inside, choking off flow, which shows up first as ' +
          'dropping pressure and discolored water and eventually as leaks. We can confirm whether ' +
          'galvanized is the culprit, and where a whole-house repipe is the real answer versus a ' +
          'targeted repair, we will lay out both honestly rather than push the bigger job.',
      ],
    },
    {
      heading: 'Well and septic outside the core',
      paragraphs: [
        'Outside the older core, Niota properties often run on private well and septic. We work the ' +
          'house side of those — interior plumbing, fixtures, heaters, and treatment — and refer the ' +
          'well and septic systems themselves out.',
      ],
    },
  ],
  commonIssues: [
    'Corroding galvanized supply lines causing low pressure and rusty water',
    'Aging fixtures and original-era water heaters in the older core',
    'House-side plumbing on well and septic properties',
    'Root intrusion in older drain and sewer lines',
    'Freeze exposure on older, unheated runs',
  ],
  faqs: [
    { q: 'Why is my water pressure so low in an older Niota home?', a: 'Very often it is galvanized supply line corroding shut from the inside — a common issue in Niota’s older housing. We can confirm it and lay out whether a repair or a repipe is the honest answer.' },
    { q: 'How far is Niota from your base?', a: 'About 25 minutes north of Charleston, past Athens.' },
    { q: 'Which jobs can you do in Niota now?', a: 'All the permit-free work. Permitted jobs like water heater replacement are scheduled as we confirm McMinn County permitting.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const ETOWAH: LocationContent = {
  quickAnswer:
    'We cover Etowah for drain cleaning, emergency repair, leak detection, water heater repair, and ' +
    'fixture work — about 30 minutes from our Charleston base. Etowah was built as a railroad town ' +
    'in the early 1900s, so older cast iron and galvanized systems are common, and weekend coverage ' +
    'here is thin. Tennessee license #5045.',
  intro: [
    'Etowah grew up as a railroad town in the early 1900s, and much of its core housing dates from ' +
      'that era. That means older cast iron drain lines and galvanized supply lines, the kind of ' +
      'plumbing that fails in familiar, age-related ways. Weekend plumbing coverage in this part of ' +
      'McMinn County is effectively absent, which is its own kind of problem when something lets go ' +
      'on a Saturday.',
    'The permit-free work we do across Etowah today; permitted jobs we schedule as we confirm McMinn ' +
      'County permitting.',
  ],
  localSections: [
    {
      heading: 'A railroad town’s aging plumbing',
      paragraphs: [
        'Cast iron sewer lines and galvanized supply lines were the standard when Etowah’s core was ' +
          'built, and both have real, finite service lives. Cast iron scales and cracks; galvanized ' +
          'corrodes shut. When an Etowah drain keeps backing up in the same spot, we can camera the ' +
          'line and show you whether it is roots, a belly, or a failed section before anyone talks ' +
          'about digging.',
      ],
    },
    {
      heading: 'The weekend-coverage gap',
      paragraphs: [
        'Weekend plumbing coverage in this stretch of McMinn County is close to nonexistent among ' +
          'established operators. Emergency and drain work needs no permit, so it is exactly what we ' +
          'can bring to Etowah when a pipe bursts or a line backs up and no one else is answering. ' +
          'Call and we will give you a real window.',
      ],
    },
  ],
  commonIssues: [
    'Cracked and root-bound cast iron sewer lines in the older core',
    'Corroding galvanized supply lines causing low pressure',
    'No weekend coverage from established local operators',
    'Original-era water heaters at or past their lifespan',
    'House-side plumbing on rural well and septic properties',
  ],
  faqs: [
    { q: 'Do you cover Etowah on weekends?', a: 'Weekend coverage in this part of McMinn County is thin, and emergency and drain work needs no permit, so it is what we can bring to Etowah when something lets go. Call for a real timing answer.' },
    { q: 'How far is Etowah from your base?', a: 'About 30 minutes from Charleston.' },
    { q: 'My old drain keeps backing up. Can you tell me why?', a: 'Yes — we camera the line and show you whether it is roots, a belly, or a failed cast iron section, so you decide with the picture in front of you.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const ENGLEWOOD: LocationContent = {
  quickAnswer:
    'We cover Englewood for drain cleaning, emergency repair, leak detection, water heater repair, ' +
    'and fixture work — about 35 minutes from our Charleston base. A former mill town at the eastern ' +
    'edge of McMinn County, Englewood has a high share of early-1900s housing. Tennessee license ' +
    '#5045.',
  intro: [
    'Englewood is a former mill town at the eastern edge of McMinn County, with a high share of ' +
      'early-1900s housing and the aging plumbing that comes with it. Outside the town center, well ' +
      'and septic are common.',
    'The permit-free work we do across Englewood today; permitted jobs we schedule as we confirm ' +
      'McMinn County permitting.',
  ],
  localSections: [
    {
      heading: 'Mill-town housing and what fails in it',
      paragraphs: [
        'Early-1900s homes bring aging supply lines, tired shutoff valves, older drain lines, and ' +
          'water heaters that have outlived their warranties several times over. These are the classic ' +
          'age-related failures, and most of them are permit-free repairs we can do on the spot. Where ' +
          'a home’s galvanized or cast iron has genuinely reached the end, we will tell you plainly ' +
          'rather than keep patching it.',
      ],
    },
    {
      heading: 'Well and septic on the edges',
      paragraphs: [
        'Outside the center, Englewood runs on private well and septic. We handle the house side — ' +
          'interior plumbing, fixtures, heaters, and treatment — and refer the systems themselves out.',
      ],
    },
  ],
  commonIssues: [
    'Aging supply lines and drain lines in early-1900s homes',
    'Seized shutoff valves and worn supply lines',
    'Original-era water heaters past their lifespan',
    'House-side plumbing on well and septic properties',
    'Freeze exposure on older, unheated runs',
  ],
  faqs: [
    { q: 'How far is Englewood from your base?', a: 'About 35 minutes from Charleston, at the eastern edge of McMinn County.' },
    { q: 'Which jobs can you do in Englewood now?', a: 'All the permit-free work — drains, emergencies, leaks, water heater repair, and fixtures. Permitted jobs are scheduled as we confirm McMinn County permitting.' },
    { q: 'Do you handle well and septic properties?', a: 'The house side, yes. The systems themselves are separately licensed and referred out.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const BENTON: LocationContent = {
  quickAnswer:
    'We cover Benton and Polk County for drain cleaning, emergency repair, leak detection, water ' +
    'heater repair, and fixture work — about 20 minutes from our Charleston base. Benton is a rural ' +
    'county seat with heavy well and septic use and no plumbing operator anchored there. Tennessee ' +
    'license #5045.',
  intro: [
    'Benton is the county seat of Polk County, east of Charleston toward the Ocoee, and it is a ' +
      'rural service area where no plumbing operator is actually anchored. That leaves Benton and the ' +
      'surrounding county depending on plumbers driving in from Cleveland — and we are closer, about ' +
      '20 minutes out.',
    'The permit-free work we do across Benton today; permitted jobs we schedule as we confirm Polk ' +
      'County permitting.',
  ],
  localSections: [
    {
      heading: 'No plumber anchored in Polk County',
      paragraphs: [
        'Polk County does not have a resident plumbing operation, so coverage here has always been ' +
          'someone else’s overflow. Being 20 minutes out in Charleston, we treat Benton as part of our ' +
          'regular service area rather than a long drive. Drains, emergencies, leaks, water heater ' +
          'repair, and fixtures are all permit-free, so we cover them here without a jurisdiction ' +
          'question.',
      ],
    },
    {
      heading: 'Well and septic country toward the Ocoee',
      paragraphs: [
        'Benton and the surrounding area run heavily on private well and septic. We work the house ' +
          'side — interior plumbing, fixtures, heaters, and water treatment — and refer the well and ' +
          'septic systems themselves to the right licensed contractor. Iron, sulfur, and sediment ' +
          'treatment on well supply is often where we add the most value out here.',
      ],
    },
  ],
  commonIssues: [
    'No resident plumbing operator anywhere in Polk County',
    'House-side plumbing on heavy well and septic use',
    'Iron, sulfur smell, and sediment on well supply',
    'Long service runs and rural crawlspace construction',
    'Freeze exposure on unheated rural runs',
  ],
  faqs: [
    { q: 'Is there a plumber based in Benton?', a: 'No plumbing operator is anchored in Polk County, so coverage has always come from elsewhere. We are about 20 minutes out and treat Benton as part of our regular service area.' },
    { q: 'Which jobs can you do in Benton now?', a: 'All the permit-free work. Permitted jobs are scheduled as we confirm Polk County permitting.' },
    { q: 'Do you handle well and septic properties?', a: 'The house side, yes. The systems themselves are separately licensed and referred out.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const OCOEE: LocationContent = {
  quickAnswer:
    'We cover Ocoee for drain cleaning, emergency repair, leak detection, water heater repair, and ' +
    'fixture work — about 18 minutes from our Charleston base. Ocoee sits between Cleveland and the ' +
    'Ocoee River recreation corridor, with a mix of year-round rural homes and seasonal ' +
    'river-adjacent property. Tennessee license #5045.',
  intro: [
    'Ocoee sits between Cleveland and the Ocoee River recreation corridor, which gives it a mix of ' +
      'year-round rural homes and seasonal, river-adjacent property. That seasonal side matters for ' +
      'plumbing: unheated structures that sit empty through cold snaps are exactly where pipes ' +
      'freeze and burst.',
    'The permit-free work we do across Ocoee today; permitted jobs we schedule as we confirm Polk ' +
      'County permitting.',
  ],
  localSections: [
    {
      heading: 'Seasonal river property and freeze exposure',
      paragraphs: [
        'Seasonal and river-adjacent structures around Ocoee often sit unheated for stretches, which ' +
          'raises freeze risk on exposed and crawlspace runs. A burst pipe in a property no one is ' +
          'living in can run for a long time before anyone notices. Emergency work needs no permit, so ' +
          'we can respond to a freeze-up here fast, and it is worth having freeze-prone runs looked at ' +
          'before the first hard freeze rather than after.',
      ],
    },
    {
      heading: 'Rural well and septic',
      paragraphs: [
        'Many Ocoee properties run on private well and septic. We work the house side and refer the ' +
          'systems themselves out. On well water, treating iron, sulfur, and sediment is house-side ' +
          'work we can genuinely help with.',
      ],
    },
  ],
  commonIssues: [
    'Frozen and burst pipes in unheated seasonal structures',
    'House-side plumbing on rural well and septic properties',
    'Iron, sulfur smell, and sediment on well supply',
    'Aging supply lines and water heaters in older rural homes',
    'Long runs and crawlspace pipe exposed to freeze',
  ],
  faqs: [
    { q: 'How far is Ocoee from your base?', a: 'About 18 minutes from Charleston, between Cleveland and the Ocoee River corridor.' },
    { q: 'My seasonal place froze and burst. Can you help?', a: 'Yes. A burst pipe is an emergency, and emergency work needs no permit, so we can respond across Ocoee without a jurisdiction question.' },
    { q: 'Do you handle well and septic properties?', a: 'The house side, yes. The systems themselves are separately licensed and referred out.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const OLD_FORT: LocationContent = {
  quickAnswer:
    'We cover Old Fort for drain cleaning, emergency repair, leak detection, water heater repair, ' +
    'and fixture work — about 15 minutes from our Charleston base. Old Fort is a rural community in ' +
    'northern Polk County, predominantly private well and septic, with long service runs common. ' +
    'Tennessee license #5045.',
  intro: [
    'Old Fort is a rural community just south of Charleston in northern Polk County, about 15 ' +
      'minutes from our base. It is predominantly private well and septic, and long service runs — ' +
      'the distance of pipe from the road to the house — are common out here.',
    'The permit-free work we do across Old Fort today; permitted jobs we schedule as we confirm Polk ' +
      'County permitting.',
  ],
  localSections: [
    {
      heading: 'Long service runs from the road to the house',
      paragraphs: [
        'Rural Old Fort properties often have a long water-service run between the meter or well and ' +
          'the house, and long runs mean more pipe exposed to freeze, more distance for a leak to hide, ' +
          'and more that can go wrong underground. Leak detection is genuinely useful here, because ' +
          'finding a break in a long buried run precisely is the difference between one dig and a ' +
          'trench.',
      ],
    },
    {
      heading: 'Well and septic in northern Polk County',
      paragraphs: [
        'With most properties on private well and septic, our work here is house-side: interior ' +
          'plumbing, fixtures, heaters, and treatment. The systems themselves are separately licensed ' +
          'and referred out. Treating iron, sulfur, and sediment on well supply is often where the ' +
          'value is.',
      ],
    },
  ],
  commonIssues: [
    'Leaks and freeze in long service runs from the road to the house',
    'House-side plumbing on private well and septic properties',
    'Iron, sulfur smell, and sediment on well supply',
    'Aging supply lines and water heaters in older rural homes',
    'Crawlspace pipe exposed to winter freeze',
  ],
  faqs: [
    { q: 'How far is Old Fort from your base?', a: 'About 15 minutes south of Charleston in northern Polk County — one of the closer towns for us.' },
    { q: 'Can you find a leak in a long buried water line?', a: 'Yes. Leak detection lets us locate a break in a long run precisely, so the repair is one dig rather than a trench.' },
    { q: 'Do you handle well and septic properties?', a: 'The house side, yes. The systems themselves are separately licensed and referred out.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const DELANO: LocationContent = {
  quickAnswer:
    'We cover Delano for drain cleaning, emergency repair, leak detection, water heater repair, and ' +
    'fixture work — about 22 minutes from our Charleston base. Delano is a small community on the ' +
    'Hiwassee River in northern Polk County, almost entirely well and septic. Tennessee license ' +
    '#5045.',
  intro: [
    'Delano is a small community on the Hiwassee River in northern Polk County, almost entirely on ' +
      'private well and septic, with river-adjacent properties that see seasonal occupancy. That ' +
      'combination — rural water and part-time-occupied homes — shapes the plumbing here.',
    'The permit-free work we do across Delano today; permitted jobs we schedule as we confirm Polk ' +
      'County permitting.',
  ],
  localSections: [
    {
      heading: 'River-adjacent and seasonal property',
      paragraphs: [
        'Homes along the Hiwassee that are occupied seasonally are prime candidates for freeze damage, ' +
          'because a pipe can burst and run for weeks in a house no one is in. Emergency work needs no ' +
          'permit, so we can respond fast, and a pre-winter look at freeze-prone runs is cheap ' +
          'insurance against a big loss.',
      ],
    },
    {
      heading: 'Almost entirely well and septic',
      paragraphs: [
        'Delano runs almost entirely on private well and septic. We work the house side — interior ' +
          'plumbing, fixtures, heaters, and treatment — and refer the well and septic systems out. ' +
          'Iron, sulfur, and sediment treatment is often where we help most on well supply.',
      ],
    },
  ],
  commonIssues: [
    'Freeze and burst pipes in seasonally-occupied river homes',
    'House-side plumbing on nearly universal well and septic',
    'Iron, sulfur smell, and sediment on well supply',
    'Aging fixtures and water heaters in older rural homes',
    'Long, exposed service runs prone to freeze',
  ],
  faqs: [
    { q: 'How far is Delano from your base?', a: 'About 22 minutes from Charleston, on the Hiwassee in northern Polk County.' },
    { q: 'My river place froze while it was empty. Can you help?', a: 'Yes. A burst pipe is an emergency and needs no permit, so we can respond across Delano quickly.' },
    { q: 'Do you handle well and septic properties?', a: 'The house side, yes. The systems themselves are separately licensed and referred out.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const GEORGETOWN: LocationContent = {
  quickAnswer:
    'We cover Georgetown for drain cleaning, emergency repair, leak detection, water heater repair, ' +
    'and fixture work — about 20 minutes from our Charleston base. Georgetown sits at the ' +
    'Hamilton–Meigs–Bradley county convergence and is closer to us than to any Chattanooga-based ' +
    'operator. Tennessee license #5045.',
  intro: [
    'Georgetown sits where Hamilton, Meigs, and Bradley counties converge, a rural-residential area ' +
      'that is genuinely closer to our Charleston base than to any Chattanooga-based operator. That ' +
      'proximity is the whole story here: about 20 minutes for us versus a real drive for the ' +
      'Chattanooga shops.',
    'The permit-free work we do across Georgetown today; permitted jobs we schedule as we confirm ' +
      'Hamilton County permitting.',
  ],
  localSections: [
    {
      heading: 'Closer to Charleston than to Chattanooga',
      paragraphs: [
        'Georgetown gets treated as drive-time overflow by Chattanooga-based plumbers, but from our ' +
          'base it is a short run. Drains, emergencies, leaks, water heater repair, and fixtures are ' +
          'all permit-free, so we cover them across Georgetown with no jurisdiction question and less ' +
          'wait than a metro operator would bring.',
      ],
    },
    {
      heading: 'Rural well and septic at the county convergence',
      paragraphs: [
        'Georgetown is rural-residential with heavy well and septic use. We work the house side — ' +
          'interior plumbing, fixtures, heaters, and treatment — and refer the systems themselves out. ' +
          'On well supply, iron, sulfur, and sediment treatment is often where the value is.',
      ],
    },
  ],
  commonIssues: [
    'Drive-time-overflow service from Chattanooga-based operators',
    'House-side plumbing on heavy well and septic use',
    'Iron, sulfur smell, and sediment on well supply',
    'Aging supply lines and water heaters in older rural homes',
    'Freeze exposure on unheated rural runs',
  ],
  faqs: [
    { q: 'How far is Georgetown from your base?', a: 'About 20 minutes from Charleston — closer to us than to any Chattanooga-based operator.' },
    { q: 'Which jobs can you do in Georgetown now?', a: 'All the permit-free work. Permitted jobs are scheduled as we confirm Hamilton County permitting.' },
    { q: 'Do you handle well and septic properties?', a: 'The house side, yes. The systems themselves are separately licensed and referred out.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const BIRCHWOOD: LocationContent = {
  quickAnswer:
    'We cover Birchwood for drain cleaning, emergency repair, leak detection, water heater repair, ' +
    'and fixture work — about 25 minutes from our Charleston base. Birchwood is a rural northern ' +
    'Hamilton County community near the Chickamauga Lake headwaters, predominantly well and septic. ' +
    'Tennessee license #5045.',
  intro: [
    'Birchwood is a rural community in northern Hamilton County near the headwaters of Chickamauga ' +
      'Lake. Chattanooga-based operators treat it as drive-time overflow; from our base it is about ' +
      '25 minutes, so we serve it as home ground rather than the far edge of a route.',
    'The permit-free work we do across Birchwood today; permitted jobs we schedule as we confirm ' +
      'Hamilton County permitting.',
  ],
  localSections: [
    {
      heading: 'Drive-time overflow for others, home ground for us',
      paragraphs: [
        'Because Birchwood is at the far northern edge of Hamilton County, metro plumbers get to it ' +
          'last if at all. We are closer, and the permit-free work — drains, emergencies, leaks, water ' +
          'heater repair, fixtures — we cover here with no jurisdiction question.',
      ],
    },
    {
      heading: 'Well and septic near the lake headwaters',
      paragraphs: [
        'Birchwood runs predominantly on private well and septic. We handle the house side and refer ' +
          'the systems themselves out. Iron, sulfur, and sediment treatment on well supply is often ' +
          'where we add the most value, and lake-adjacent seasonal structures see extra freeze ' +
          'exposure in winter.',
      ],
    },
  ],
  commonIssues: [
    'Last-to-be-served treatment from Chattanooga-based operators',
    'House-side plumbing on predominant well and septic use',
    'Iron, sulfur smell, and sediment on well supply',
    'Freeze exposure on lake-adjacent seasonal structures',
    'Aging supply lines and water heaters in older rural homes',
  ],
  faqs: [
    { q: 'How far is Birchwood from your base?', a: 'About 25 minutes from Charleston, in northern Hamilton County near the Chickamauga Lake headwaters.' },
    { q: 'Which jobs can you do in Birchwood now?', a: 'All the permit-free work. Permitted jobs are scheduled as we confirm Hamilton County permitting.' },
    { q: 'Do you handle well and septic properties?', a: 'The house side, yes. The systems themselves are separately licensed and referred out.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const DECATUR: LocationContent = {
  quickAnswer:
    'We cover Decatur and Meigs County for drain cleaning, emergency repair, leak detection, water ' +
    'heater repair, and fixture work — about 30 minutes from our Charleston base. Decatur is a rural ' +
    'county seat with almost no resident plumbing coverage and heavy well and septic use. Tennessee ' +
    'license #5045.',
  intro: [
    'Decatur is the county seat of Meigs County, north across the Hiwassee, and Meigs is a rural ' +
      'county with almost no resident plumbing coverage. That leaves Decatur depending on plumbers ' +
      'driving in from other counties — and we are about 30 minutes out, which for this area is close.',
    'The permit-free work we do across Decatur today; permitted jobs we schedule as we confirm Meigs ' +
      'County permitting.',
  ],
  localSections: [
    {
      heading: 'A county with almost no resident plumber',
      paragraphs: [
        'Meigs County does not have much in the way of resident plumbing coverage, so Decatur has long ' +
          'relied on out-of-county help that treats it as the end of a route. We serve it as part of ' +
          'our regular area. Drains, emergencies, leaks, water heater repair, and fixtures are all ' +
          'permit-free, so we cover them here without a jurisdiction question.',
      ],
    },
    {
      heading: 'Heavy well and septic use',
      paragraphs: [
        'Decatur and the surrounding county run heavily on private well and septic. We work the house ' +
          'side — interior plumbing, fixtures, heaters, and treatment — and refer the systems ' +
          'themselves out. Iron, sulfur, and sediment treatment on well supply is often the most ' +
          'useful thing we do out here.',
      ],
    },
  ],
  commonIssues: [
    'Almost no resident plumbing coverage anywhere in Meigs County',
    'House-side plumbing on heavy well and septic use',
    'Iron, sulfur smell, and sediment on well supply',
    'Aging supply lines and water heaters in older rural homes',
    'Freeze exposure on unheated rural runs',
  ],
  faqs: [
    { q: 'Is there a plumber based in Decatur?', a: 'Meigs County has very little resident plumbing coverage, so Decatur has relied on out-of-county help. We are about 30 minutes out and serve it as part of our regular area.' },
    { q: 'Which jobs can you do in Decatur now?', a: 'All the permit-free work. Permitted jobs are scheduled as we confirm Meigs County permitting.' },
    { q: 'Do you handle well and septic properties?', a: 'The house side, yes. The systems themselves are separately licensed and referred out.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

const SODDY_DAISY: LocationContent = {
  quickAnswer:
    'We cover Soddy-Daisy for drain cleaning, emergency repair, leak detection, water heater repair, ' +
    'and fixture work — about 40 minutes from our Charleston base. Soddy-Daisy administers its own ' +
    'permitting separately from Chattanooga, and its housing spans a wide range of ages. Tennessee ' +
    'license #5045.',
  intro: [
    'Soddy-Daisy is a former mining community north of Chattanooga with a wide range of housing ' +
      'ages, from older homes to newer construction, and both lake-adjacent and ridge properties. ' +
      'Importantly for plumbing, it administers its own building permitting separately from the City ' +
      'of Chattanooga.',
    'The permit-free work we do across Soddy-Daisy today; permitted jobs we schedule as we confirm ' +
      'City of Soddy-Daisy permitting specifically.',
  ],
  localSections: [
    {
      heading: 'Soddy-Daisy runs its own permitting',
      paragraphs: [
        'Because Soddy-Daisy handles its own permits rather than deferring to Chattanooga, permitted ' +
          'work here is verified against the city itself — and unlike inside Chattanooga city limits, ' +
          'this is a jurisdiction where an LLP is not automatically excluded from pulling. That is ' +
          'exactly the kind of town-by-town detail our scope guard is built to handle: permit-free ' +
          'work runs now, and permitted jobs are scheduled as we confirm Soddy-Daisy specifically.',
      ],
    },
    {
      heading: 'Mixed housing ages, lake and ridge property',
      paragraphs: [
        'The wide span of housing ages means a wide span of plumbing: older homes with aging supply ' +
          'lines and water heaters, newer ones with builder-grade fixtures, and lake and ridge ' +
          'properties with their own freeze and access quirks. All of the permit-free repair work ' +
          'across that range we can handle today.',
      ],
    },
  ],
  commonIssues: [
    'Permitting verified against the city, not Chattanooga',
    'Aging supply lines and water heaters in older homes',
    'Builder-grade fixtures and shutoffs in newer construction',
    'Freeze exposure on lake-adjacent and ridge properties',
    'Hard-water scale on fixtures and water heaters',
  ],
  faqs: [
    { q: 'Is Soddy-Daisy permitting the same as Chattanooga?', a: 'No. Soddy-Daisy administers its own permitting separately from the City of Chattanooga, so permitted work here is confirmed against the city itself. Permit-free work we do today either way.' },
    { q: 'How far is Soddy-Daisy from your base?', a: 'About 40 minutes from Charleston, north of Chattanooga.' },
    { q: 'Which jobs can you do in Soddy-Daisy now?', a: 'All the permit-free work. Permitted jobs are scheduled as we confirm City of Soddy-Daisy permitting.' },
    { q: 'Are you licensed?', a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov.' },
  ],
}

export const LOCATION_CONTENT: Record<string, LocationContent> = {
  'charleston-tn': CHARLESTON,
  'calhoun-tn': CALHOUN,
  'cleveland-tn': CLEVELAND,
  'athens-tn': ATHENS,
  'ooltewah-tn': OOLTEWAH,
  'collegedale-tn': COLLEGEDALE,
  'apison-tn': APISON,
  'harrison-tn': HARRISON,
  'chattanooga-tn': CHATTANOOGA,
  'riceville-tn': RICEVILLE,
  'niota-tn': NIOTA,
  'etowah-tn': ETOWAH,
  'englewood-tn': ENGLEWOOD,
  'benton-tn': BENTON,
  'ocoee-tn': OCOEE,
  'old-fort-tn': OLD_FORT,
  'delano-tn': DELANO,
  'georgetown-tn': GEORGETOWN,
  'birchwood-tn': BIRCHWOOD,
  'decatur-tn': DECATUR,
  'soddy-daisy-tn': SODDY_DAISY,
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
