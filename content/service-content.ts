/**
 * SERVICE PAGE CONTENT
 *
 * Rich, hand-written content for the seven Phase 1 service pages. Every other
 * registered service falls back to `fallbackContent()`, which builds an honest
 * page from the registry (summary, permit status, scope) so internal links never
 * 404 before Phase 3 writes the full page.
 *
 * Voice: tradesman's register. Plain verbs, sentence case, no marketing filler,
 * no em-dash pileups. Quick answers state true coverage INCLUDING the limits —
 * that honesty is the differentiator, not a thing to write around.
 */

import { getService, type Service } from '@/config/services'

export interface ServiceContent {
  /** AEO quick answer. States coverage and its limits in the first breath. */
  quickAnswer: string
  lede: string
  whatWeDo: string[]
  faqs: Array<{ q: string; a: string }>
  // --- Optional long-form fields (rich pages). Rendered when present. ---------
  /** Extra opening paragraphs under the lede. */
  intro?: string[]
  /** "Signs you need this" — problem-intent capture for search and voice. */
  signs?: string[]
  /** Real procedure. Also emitted as HowTo schema for AEO/voice. */
  process?: Array<{ name: string; text: string }>
  /** Deep body sections: a heading and paragraphs. */
  sections?: Array<{ heading: string; paragraphs: string[] }>
  /** Internal links to related services/problems. */
  related?: Array<{ label: string; href: string }>
}

const LICENSED_FAQ = {
  q: 'Are you actually licensed?',
  a: "Yes. Tennessee Limited Licensed Plumber #5045, issued by the state Board for Licensing Contractors and verifiable through the state's public lookup at verify.tn.gov. No competitor in this market puts their number on the page — we lead with ours.",
}

const PRICING_FAQ = {
  q: 'Will I get a price before the work starts?',
  a: 'Yes. You get a number to approve before we begin, not a bill that grows once the truck is in the driveway. Straight pricing is the whole point of how we work.',
}

const WARRANTY_FAQ = {
  q: 'What kind of warranty do you offer?',
  a: 'Manufacturer warranties cover the parts and equipment. Our written workmanship terms are being finalized, and we will state them plainly in writing rather than wave an unqualified "lifetime" promise that means nothing when you try to use it.',
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  'drain-cleaning': {
    quickAnswer:
      'We clear slow and blocked drains, main lines, and recurring backups across the whole ' +
      'service area — Charleston, Cleveland, Athens, the US-11 corridor, and inside Chattanooga ' +
      'city limits. Drain cleaning needs no permit, so it runs everywhere we drive, no exceptions.',
    lede:
      'A blocked drain is the call we get most, and it is the one line of work we can do in every ' +
      'town we serve. There is no permit involved, so a backed-up kitchen line in Chattanooga gets ' +
      'the same response as one in Charleston.',
    intro: [
      'A drain that will not drain does not care what time it is or which county you live in. It ' +
        'is also the plumbing problem most people meet a plumber over for the first time, so we take ' +
        'it seriously even when it looks small. A slow bathroom sink today is often the early warning ' +
        'of a main line that will back up into the house next month.',
      'We clear drains mechanically and we chase the cause, not just the symptom. If a line keeps ' +
        'clogging in the same place, cabling it a second time is not a fix, and we will tell you that ' +
        'to your face rather than book the same call again in the spring.',
    ],
    signs: [
      'Water backing up in a sink, tub, shower, or floor drain',
      'Two or more fixtures draining slowly at the same time',
      'A gurgle from one drain when another fixture runs or the toilet flushes',
      'A sewage or sulfur smell near a floor drain, cleanout, or out in the yard',
      'A drain that clears with store chemicals for a week, then clogs right back up',
      'Water pooling around a basement or crawlspace cleanout',
    ],
    sections: [
      {
        heading: 'Cabling, jetting, and knowing which one you actually need',
        paragraphs: [
          'Most household clogs come out with a cable — a motorized snake that breaks through the ' +
            'blockage and pulls it back or pushes it clear. It is the right tool for a single fixture, ' +
            'a hair or soap clog, or a line that is mostly open but slow.',
          'A main line full of grease, scale, or years of buildup is a different problem, and that is ' +
            'where hydro jetting earns its keep. A jetter scours the inside of the pipe with high-pressure ' +
            'water instead of just punching a hole through the middle, so the line actually runs at full ' +
            'diameter again. We match the method to the line rather than jetting everything or cabling ' +
            'everything, because the wrong tool either underperforms or is money you did not need to spend.',
          'What we will not do is pour chemicals down the line and call it fixed. Store drain chemicals ' +
            'sit in the trap, generate heat, and damage older pipe and seals, and they rarely reach the ' +
            'actual blockage. If a clog needed chemicals to move, it needed a cable or a camera.',
        ],
      },
      {
        heading: 'Why the same drain keeps clogging',
        paragraphs: [
          'A drain that clogs in the same spot on a schedule is telling you something. In the older ' +
            'housing stock common along the US-11 corridor, that is often tree roots finding a joint in ' +
            'a clay or cast iron sewer line, a belly where the pipe has settled and holds water, or a ' +
            'section of pipe that has simply reached the end of its life.',
          'Rather than guess, we can run a camera down the line and show you what is there. That turns ' +
            'a recurring bill into a decision you can actually make: keep clearing it on a maintenance ' +
            'schedule, or repair the one bad section and be done with it. Either way you are choosing ' +
            'with the picture in front of you.',
        ],
      },
      {
        heading: 'Drain cleaning across the corridor, Chattanooga included',
        paragraphs: [
          'Because drain cleaning needs no permit, it is the service we run at full strength everywhere ' +
            'we drive. Charleston, Calhoun, Cleveland, Athens, the corridor towns, the rural Polk and ' +
            'Meigs county properties on septic, and inside Chattanooga city limits all get the same work. ' +
            'It is the wedge that lets us serve the whole footprint honestly, even the towns where ' +
            'permitted work has to go to a partner.',
        ],
      },
    ],
    process: [
      { name: 'Find the right access', text: 'We locate the correct cleanout or fixture to work from, so we are clearing the line from the best angle instead of the easiest one.' },
      { name: 'See or feel the blockage', text: 'We cable to the clog, and on a stubborn or repeat line we camera it first so we know what we are dealing with.' },
      { name: 'Clear it mechanically', text: 'Cable for most clogs, hydro jetting for grease and heavy buildup. No chemicals.' },
      { name: 'Confirm full flow', text: 'We run water and make sure the line drains at full speed, not just enough to look clear for an hour.' },
      { name: 'Tell you the truth about the cause', text: 'If the line has a real problem, we show you and quote the repair. If it was a one-off clog, we say that too.' },
    ],
    related: [
      { label: 'Sewer camera inspection', href: '/services/camera-inspection' },
      { label: 'Recurring backups & emergencies', href: '/services/emergency-plumbing' },
      { label: 'Sewer line repair & replacement', href: '/services/sewer-line-repair' },
      { label: 'Leak detection', href: '/services/leak-detection' },
    ],
    whatWeDo: [
      'Cabling and snaking for kitchen, bath, and laundry lines',
      'Main sewer line clearing when the whole house is backing up',
      'Recurring backups traced to root intrusion or a bellied line',
      'Camera inspection when a line clogs again and you want to see why',
      'A straight call on when a clog is a cleaning and when it is a repair',
    ],
    faqs: [
      {
        q: 'Can you clear a main line clog, or just sink drains?',
        a: 'Both. We cable small fixture lines and run larger equipment on the main sewer line when the whole house is backing up at once.',
      },
      {
        q: 'My drain keeps clogging in the same spot. Why?',
        a: 'A clog that returns to the same place is usually a cause, not bad luck — root intrusion, a low spot in the line, or a section of failing pipe. We can put a camera down to see it instead of guessing.',
      },
      {
        q: 'Do you clear drains in Chattanooga?',
        a: 'Yes. Drain cleaning needs no permit, so we cover Chattanooga city limits for it exactly as we do the rest of the corridor.',
      },
      {
        q: 'Do you use harsh drain chemicals?',
        a: 'No. We clear lines mechanically with cables and, when needed, jetting. Store-bought chemicals damage pipe and rarely touch the actual cause.',
      },
      {
        q: 'Can you tell whether I need a repair instead of a cleaning?',
        a: 'Yes, and we will tell you straight. If a camera shows a broken or root-bound line, cleaning it again in six months is not the fix and we will say so.',
      },
      {
        q: 'How fast can you come out for a drain that is backing up?',
        a: 'We prioritize active backups. Call and you will get a real window, not a vague "sometime today."',
      },
      {
        q: 'Do you offer hydro jetting?',
        a: 'Yes. For grease-packed kitchen lines and main lines with heavy buildup, jetting scours the pipe back to full diameter instead of just poking a hole through the clog. We use it where the line calls for it, not as an automatic upsell.',
      },
      {
        q: 'Will running a cable damage my old pipes?',
        a: 'Used correctly, no. On older or fragile lines we camera first and choose the head and method to match, precisely so we clear the clog without harming the pipe. If a line is too far gone to cable safely, that is itself useful information, and we will tell you.',
      },
      {
        q: 'Can you clear the main line from an outside cleanout?',
        a: 'Yes, and it is often the best access point for a whole-house backup. If your home has an accessible exterior cleanout, we can usually work from there and keep the mess outside.',
      },
      {
        q: 'How much does drain cleaning cost?',
        a: 'It depends on the line, the access, and whether it is a simple cable or a jetting job. What does not vary is that you get one price to approve before we start, and it holds. We would rather quote it honestly than lowball the visit and grow the bill once we are there.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'emergency-plumbing': {
    quickAnswer:
      'Burst pipes, active leaks, and no-shutoff emergencies — we cover the whole corridor ' +
      'including Chattanooga, because stop-the-water emergency work needs no permit. Call and you ' +
      'get a straight answer on how soon we can be there.',
    lede:
      'When water is running where it should not be, the first job is to make it safe, then fix it ' +
      'right. Emergency and repair work carries no permit requirement, so we can respond across the ' +
      'entire service area, Chattanooga included.',
    whatWeDo: [
      'Burst and frozen-pipe leaks',
      'Finding and closing the shutoff when you cannot',
      'Active supply-line and fixture leaks',
      'Water heater leaks and failures',
      'Making the situation safe first, then quoting the repair',
    ],
    faqs: [
      {
        q: 'Are you available after hours?',
        a: 'Our after-hours schedule is being finalized, and we will not promise a 2 a.m. answer we cannot keep. Call the number on this site and you will get a real answer on timing from a person, not an automated queue.',
      },
      {
        q: 'What should I do while I wait for you?',
        a: 'Shut the water off at the main if you can — usually where the line enters the house or at the meter. Closing that valve stops the damage clock while we are on the way. If you cannot find it, call and we will talk you to it.',
      },
      {
        q: 'What actually counts as a plumbing emergency?',
        a: 'An active leak you cannot stop, no water in the house, a sewage backup, or a water heater dumping water. Those move to the front of the line.',
      },
      {
        q: 'Do you cover emergencies inside Chattanooga?',
        a: 'Yes. Emergency and repair work needs no permit, so Chattanooga city limits are covered the same as the rest of the corridor.',
      },
      {
        q: 'My pipe is leaking behind a wall. Can you find it?',
        a: 'Yes. We locate hidden leaks before opening anything up, so we cut in one place instead of chasing it across a wall.',
      },
      {
        q: 'My water heater failed. Can you handle it the same visit?',
        a: 'A repair often gets done on the spot, and it needs no permit. A full replacement is a permitted job, so we do that in the towns where we are cleared to pull a permit.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'leak-detection': {
    quickAnswer:
      'We locate hidden leaks in walls, under slabs, and in buried supply lines, then show you ' +
      'exactly where before anything gets opened up. Leak detection needs no permit, so it runs ' +
      'across the full corridor including Chattanooga.',
    lede:
      'A leak you cannot see still shows up on the water bill and in the framing. The value is ' +
      'finding it precisely, so the repair is one clean cut instead of a wall full of guesses.',
    whatWeDo: [
      'Locating leaks in walls, ceilings, and under concrete slabs',
      'Tracking down the cause of a water bill that jumped for no reason',
      'Pressure testing supply lines to confirm where the loss is',
      'Pinpointing slab leaks before any concrete is opened',
      'Repairing the leak once it is found, where the work is in scope',
    ],
    faqs: [
      {
        q: 'How do you find a leak without tearing up the wall?',
        a: 'We use acoustic and pressure methods to narrow it to a spot, then confirm before opening anything. The goal is one small access point, not exploratory demolition.',
      },
      {
        q: 'My water bill doubled but I see no leak. Can you help?',
        a: 'Yes. A silent jump is usually a running toilet, an underground supply leak, or a slab leak. We test the system to find which one and where.',
      },
      {
        q: 'What is a slab leak and can you locate it?',
        a: 'It is a leak in a water line running under the concrete slab. We locate it from the surface so the fix is targeted rather than opening the whole floor.',
      },
      {
        q: 'Do you fix the leak after you find it?',
        a: 'Yes, when the repair is within our scope. If a find turns out to be well-system or septic-system work, we say so and refer it to the right licensed contractor.',
      },
      {
        q: 'Do you do leak detection in Chattanooga?',
        a: 'Yes. It needs no permit, so it is covered inside Chattanooga city limits along with the rest of the corridor.',
      },
      {
        q: 'How long does leak detection take?',
        a: 'Most locates are done in a single visit. Finding it first is what keeps the repair fast.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'fixture-repair': {
    quickAnswer:
      'Faucets, toilets, sinks, tubs, and shutoff valves — repaired or swapped like-for-like. A ' +
      'straight replacement needs no permit, so we do it corridor-wide including Chattanooga. ' +
      'Moving a fixture to a new spot is a permitted job, handled in the towns where we can pull one.',
    lede:
      'Most fixture work is a same-visit job. Swapping a failed faucet, toilet, or valve for a new ' +
      'one in the same place carries no permit, which is why we can do it everywhere we drive. The ' +
      'line to watch is relocation — moving a fixture is a different, permitted job.',
    whatWeDo: [
      'Faucet, toilet, sink, and tub repair and replacement',
      'Shutoff valve and supply line replacement',
      'Running or leaking toilet repairs',
      'Like-for-like fixture swaps, no permit needed',
      'Honest flags when a request is really a relocation and needs a permit',
    ],
    faqs: [
      {
        q: 'Does swapping a faucet or toilet need a permit?',
        a: 'No. A like-for-like replacement in the same location is permit-free, which is why we can do it across the whole service area, Chattanooga included.',
      },
      {
        q: 'What if I want to move a fixture to a different spot?',
        a: 'That is a relocation, and it does need a permit because it changes the supply and drain runs. We handle it in the corridor towns where we are cleared to pull a permit.',
      },
      {
        q: 'My toilet runs constantly. Is that worth a call?',
        a: 'Yes — a running toilet can waste hundreds of gallons a day and it is usually a quick internal fix.',
      },
      {
        q: 'Can you replace old shutoff valves under my sink?',
        a: 'Yes. Old valves that no longer close are a common and quick fix, and worth doing before you actually need them in a hurry.',
      },
      {
        q: 'Do you provide the fixture or do I buy it?',
        a: 'Either way. We can install a quality fixture we supply or one you have already bought, and we will tell you honestly if the one you picked is going to give you trouble.',
      },
      {
        q: 'Do you cover fixture work in Chattanooga?',
        a: 'Yes, for like-for-like repairs and replacements, since those need no permit. A relocation inside the city goes to a licensed partner.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'water-heater-repair': {
    quickAnswer:
      'No hot water, a pilot that will not stay lit, a leaking tank, or a failed element — we ' +
      'repair water heaters across the corridor including Chattanooga, because a repair needs no ' +
      'permit. A full replacement is a separate, permitted job.',
    lede:
      'Not every water heater problem is a replacement. Many are a thermocouple, an element, or a ' +
      'valve, and a repair carries no permit, so we can do it everywhere we serve. When a tank is ' +
      'genuinely done, we will tell you rather than sell you a repair that will not hold.',
    whatWeDo: [
      'No-hot-water and not-enough-hot-water diagnostics',
      'Pilot, thermocouple, and gas-valve repairs',
      'Heating element and thermostat replacement on electric units',
      'Leaking-fitting and valve repairs',
      'A straight call on repair versus replacement',
    ],
    faqs: [
      {
        q: 'Why do I suddenly have no hot water?',
        a: 'On a gas unit it is often the pilot or thermocouple; on an electric unit, usually an element or thermostat. Both are common repairs, not automatic replacements.',
      },
      {
        q: 'Is it worth repairing or should I just replace it?',
        a: 'Depends on age and what failed. Under about ten years with a bad part, a repair is usually the right money. A leaking tank is a replacement, and we will say so plainly.',
      },
      {
        q: 'Does a water heater repair need a permit?',
        a: 'No. Repairs are permit-free, which is why we can do them across the whole corridor, Chattanooga included.',
      },
      {
        q: 'My tank is leaking from the bottom. Can that be fixed?',
        a: 'A tank leaking from the body is failed and needs replacement — that is the one water-heater problem a repair will not solve. A leak at a fitting on top usually can be repaired.',
      },
      {
        q: 'The pilot will not stay lit. What is that?',
        a: 'Most often a worn thermocouple or a dirty pilot assembly. It is a common, affordable repair.',
      },
      {
        q: 'Can you replace it if it turns out to be done?',
        a: 'Yes, but a replacement is a permitted job, so we schedule that in the towns where we are cleared to pull a permit. Inside Chattanooga, permitted work goes to a licensed partner.',
      },
      WARRANTY_FAQ,
      LICENSED_FAQ,
    ],
  },

  'water-heater-replacement': {
    quickAnswer:
      'We replace tank water heaters sized to the house and haul the old unit off. A replacement ' +
      'needs a permit pulled, so we do this across the Bradley–McMinn corridor as we confirm ' +
      'permitting town by town. Inside Chattanooga city limits, permit-required work goes to a ' +
      'licensed partner — repairs there we still handle ourselves.',
    lede:
      'A water heater replacement is a permitted job, and that permit is not a formality — it is ' +
      'the record that the gas, venting, and connections were done to code. We pull it where we are ' +
      'cleared to, size the tank to how the house actually uses hot water, and take the old one with us.',
    whatWeDo: [
      'Tank replacement sized to the household, not just swapped like-for-like',
      'Correct gas, water, and venting connections to code',
      'Expansion tank and code upgrades where required',
      'Haul-off and disposal of the old unit',
      'The permit pulled and the work inspected, where we are cleared to pull it',
    ],
    faqs: [
      {
        q: 'Why does a replacement need a permit when a repair does not?',
        a: 'A replacement changes the gas, water, and venting connections, and the permit is the record it was done to code and inspected. A repair leaves those connections as they were, so it carries no permit.',
      },
      {
        q: 'Why can you not replace a water heater inside Chattanooga?',
        a: 'A Tennessee Limited Licensed Plumber is not accepted to pull permits inside Chattanooga city limits. Rather than do permitted work without a permit, we send that job to a licensed partner. Repairs and drain work in the city we still handle directly.',
      },
      {
        q: 'What size water heater do I need?',
        a: 'It depends on how many people draw hot water at once, not just the square footage. We size it to real use so you are not paying to reheat a tank that is too big or running out with one that is too small.',
      },
      {
        q: 'Do you take the old unit away?',
        a: 'Yes. Haul-off and disposal of the old tank are part of the job.',
      },
      {
        q: 'Should I go tankless instead while I am at it?',
        a: 'Sometimes it is worth it, sometimes it is not, and it depends on your gas line, venting, and hot-water habits. We will give you the honest trade-off rather than upsell by default.',
      },
      {
        q: 'How long does a replacement take?',
        a: 'A straightforward tank-for-tank replacement is typically a single-day job once the permit is in hand.',
      },
      WARRANTY_FAQ,
      LICENSED_FAQ,
    ],
  },

  'tankless-water-heater-installation': {
    quickAnswer:
      'We convert tank water heaters to tankless, including the gas and venting the change requires. ' +
      'This is permitted work, so we install across the corridor in the towns where we can pull a ' +
      'permit. Inside Chattanooga city limits, permit-required work goes to a licensed partner.',
    lede:
      'Going tankless is not just a swap — it usually means new gas sizing and new venting, which is ' +
      'exactly why it is permitted work. Done right it gives you endless hot water and floor space ' +
      'back. Done as a quick swap it underperforms, so we do the gas and venting properly or not at all.',
    whatWeDo: [
      'Tank-to-tankless conversions, gas and venting included',
      'Gas line sizing to feed the higher demand a tankless unit needs',
      'Correct venting for the new unit',
      'Sizing to your peak flow rate, not a guess',
      'Guidance on hard-water protection so the unit lasts',
    ],
    faqs: [
      {
        q: 'Is a tankless water heater actually worth it?',
        a: 'For the right house, yes — endless hot water, lower standby loss, and reclaimed space. For a small household with a fine existing tank, the payback can be slow. We will tell you which one you are.',
      },
      {
        q: 'Why does tankless cost more to install than a tank?',
        a: 'Because it usually needs a larger gas line and new venting to run at full output. Skipping that is how you end up with a tankless unit that cannot keep up.',
      },
      {
        q: 'Does it need a permit?',
        a: 'Yes. It changes gas and venting, so it is permitted work. We install it in the corridor towns where we are cleared to pull a permit.',
      },
      {
        q: 'Can you install one in Chattanooga?',
        a: 'Not the permitted install, since an LLP cannot pull a permit inside Chattanooga city limits — that goes to a licensed partner. Service and repair on an existing unit in the city we can still do.',
      },
      {
        q: 'Will hard water hurt a tankless unit?',
        a: 'It can. Scale from hard water shortens the life of the heat exchanger, which is why we talk through water treatment when it fits — our water quality work is how that gets handled legally and lasts.',
      },
      {
        q: 'What size tankless unit do I need?',
        a: 'It is sized by flow rate and incoming water temperature, not house size — how many fixtures you want running hot at once. We size it to that so it does not run lukewarm under load.',
      },
      WARRANTY_FAQ,
      LICENSED_FAQ,
    ],
  },
}

/**
 * Honest fallback for any registered service without a hand-written page yet.
 * Built entirely from the registry, so it states scope and permit status
 * correctly and never over-promises.
 */
export function fallbackContent(service: Service): ServiceContent {
  const permitLine = service.requiresPermit
    ? 'This is permitted work, so we do it in the corridor towns where we are cleared to pull a permit. Inside Chattanooga city limits, permit-required work goes to a licensed partner.'
    : 'This work needs no permit, so we cover the full service area for it, Chattanooga included.'

  const ceilingLine = service.ceilingRisk
    ? ' Larger projects can approach our $25,000 per-project ceiling; above that we bring in a partner rather than stretch the license.'
    : ''

  const quickAnswer = `${service.summary} ${permitLine}${ceilingLine}`

  const whatWeDo = [service.summary]
  if (service.permitNote) whatWeDo.push(service.permitNote)
  whatWeDo.push('A straight price before the work starts, and honest scope on what we do and do not do.')

  const faqs: ServiceContent['faqs'] = [
    {
      q: 'Do you cover my town for this?',
      a: service.requiresPermit
        ? 'We cover the Bradley–McMinn corridor and greater Chattanooga, and we do permitted work like this in the towns where we are cleared to pull a permit. Call and we will tell you straight where yours stands.'
        : 'Yes — this work needs no permit, so we cover the whole service area for it, from Charleston and Cleveland to Athens and inside Chattanooga city limits.',
    },
    {
      q: 'Does this job need a permit?',
      a: service.requiresPermit
        ? 'Yes, and we pull it where we are cleared to. The permit is the record the work was done to code, which is worth having.'
        : 'No. This is permit-free work, which is why we can do it everywhere we serve.',
    },
    {
      q: 'Is this within a Limited Licensed Plumber’s scope?',
      a:
        service.licenseScope === 'size-dependent'
          ? 'Yes, up to the $25,000 per-project ceiling on the license. For anything larger we bring in a partner rather than stretch it.'
          : 'Yes. It sits squarely inside the Tennessee Limited Licensed Plumber scope we hold.',
    },
    ...(service.ceilingRisk
      ? [
          {
            q: 'What is the $25,000 ceiling about?',
            a: 'A Limited Licensed Plumber carries a per-project cap of $25,000. Most jobs are well under it. When one would exceed it, we bring in a partner rather than split or understate the work.',
          },
        ]
      : []),
    {
      q: 'What do you not do?',
      a: 'We do not touch septic systems or well systems — tanks, fields, pumps, and pressure tanks are separately licensed in Tennessee and we refer them out. We work the house side of well and septic properties.',
    },
    WARRANTY_FAQ,
    PRICING_FAQ,
    LICENSED_FAQ,
  ]

  return {
    quickAnswer,
    lede: `${service.summary} Here is how we handle it and where. ${permitLine}`,
    whatWeDo,
    faqs,
  }
}

export function getServiceContent(slug: string): ServiceContent | null {
  if (SERVICE_CONTENT[slug]) return SERVICE_CONTENT[slug]
  const service = getService(slug)
  return service ? fallbackContent(service) : null
}
