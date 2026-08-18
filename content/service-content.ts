/**
 * SERVICE PAGE CONTENT
 *
 * Rich, hand-written content for the seven Phase 1 service pages. Every other
 * registered service falls back to `fallbackContent()`, which builds an honest
 * page from the registry (summary, permit status, scope) so internal links never
 * 404 before Phase 3 writes the full page.
 *
 * Voice: tradesman's register. Plain verbs, sentence case, no marketing filler,
 * no em-dash pileups. Quick answers state true coverage across the whole service
 * area; where a job needs a permit, that reads as something the office handles
 * rather than a limit on what publishes. See config/policy.ts.
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

/**
 * Defined-term warranty, confirmed 2026-08-16. Both terms are stated together
 * and the closet-auger exclusion is the client's own wording — do not soften it
 * or compress the two terms into one number. Stating real limits is the point:
 * a specific warranty a customer can hold you to beats an unqualified
 * "lifetime" promise that means nothing when they try to use it.
 */
const WARRANTY_FAQ = {
  q: 'What kind of warranty do you offer?',
  a: 'A one-year workmanship warranty on plumbing from the date of completion, covering the specific work performed — it does not extend to unrelated or pre-existing conditions. Drain cleaning carries a 30-day warranty unless we state otherwise, excluding closet augers. Manufacturer warranties cover the parts and equipment separately. That is the whole of it, in writing.',
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  'drain-cleaning': {
    quickAnswer:
      'We clear slow and blocked drains, main lines, and recurring backups across the whole ' +
      'service area — Charleston, Cleveland, Athens, the US-11 corridor, and inside Chattanooga ' +
      'city limits. Drain cleaning runs everywhere we drive, no exceptions.',
    lede:
      'A blocked drain is the call we get most, and it is the one line of work we can do in every ' +
      'town we serve. A backed-up kitchen line in Chattanooga gets ' +
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
          'Drain cleaning runs at full strength everywhere we drive. Charleston, Calhoun, Cleveland, ' +
            'Athens, the corridor towns, the rural Polk and Meigs county properties on septic, and ' +
            'inside Chattanooga city limits all get the same work, and none of it waits on paperwork. ' +
            'It is usually the first call a household makes to us, and often the start of the rest.',
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
        a: 'Yes. Drain cleaning is covered inside Chattanooga city limits exactly as it is across the rest of the corridor.',
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
        a: 'On older and aged cast iron or galvanized drain systems, it is always a possibility.',
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
      'including Chattanooga. Call and you get a straight answer on how soon we can be there.',
    lede:
      'When water is running where it should not be, the first job is to make it safe, then fix it ' +
      'right. We respond across the entire service area, Chattanooga included.',
    intro: [
      'A plumbing emergency is really two problems at once: the damage happening right now, and the ' +
        'repair underneath it. The order matters. We stop the water first so the damage stops ' +
        'growing, then we deal with the fix once the situation is stable and you know what it costs.',
      'That is the whole reason we can promise the same urgency in Chattanooga that we bring to ' +
        'Charleston: we move as fast as the situation needs, wherever you are in the corridor.',
    ],
    signs: [
      'Water actively leaking and you cannot find or reach the shutoff',
      'No water in the house at all, or a sudden loss of pressure everywhere',
      'A burst or frozen pipe, especially in a wall, crawlspace, or garage',
      'Sewage backing up into a tub, floor drain, or the lowest fixtures',
      'A water heater dumping water or leaking from the tank body',
      'A steady drip inside a wall or ceiling that is spreading',
    ],
    sections: [
      {
        heading: 'The first thing to do is shut the water off',
        paragraphs: [
          'While we are on the way, the single most useful thing you can do is close the main shutoff. ' +
            'In most homes it is where the water line enters the house — often in a crawlspace, ' +
            'basement, garage, or an outside box near the meter. Turning that valve clockwise until it ' +
            'stops isolates the whole house and stops the damage clock.',
          'If you cannot find it or it will not turn, call and we will talk you through it while we ' +
            'drive. ' +
            'For a single fixture, the smaller shutoff under the sink or behind the toilet may be ' +
            'enough. This is exactly why we flag old shutoff valves that no longer close on ordinary ' +
            'service calls — the middle of an emergency is the worst time to discover one is seized.',
        ],
      },
      {
        heading: 'Same-visit repairs, and the bigger jobs underneath them',
        paragraphs: [
          'Most emergencies are resolved the same visit: a burst section replaced, a failed valve ' +
            'swapped, a leak found and repaired, a water heater repaired.',
          'Sometimes the emergency turns up a bigger job underneath it — a full water heater ' +
            'replacement, a repipe, a sewer line. In that case we make the situation safe now and ' +
            'schedule the real repair properly. You get the stop-the-bleeding fix immediately and a ' +
            'straight answer about what the rest will take.',
        ],
      },
    ],
    process: [
      { name: 'Make it safe', text: 'Stop the water at the shutoff and get the active damage under control before anything else.' },
      { name: 'Find the real source', text: 'Track the leak or failure to its actual origin, including hidden leaks behind walls, so the fix is targeted.' },
      { name: 'Stabilize', text: 'Get you back to usable water where we can, even if the full repair is a follow-up.' },
      { name: 'Quote before we repair', text: 'You get a price to approve before the repair work starts, even at 9 p.m.' },
      { name: 'Fix it and flag the cause', text: 'Repair it to code, and tell you honestly if it points to a larger job worth planning.' },
    ],
    related: [
      { label: 'Drain cleaning & backups', href: '/services/drain-cleaning' },
      { label: 'Water heater repair', href: '/services/water-heater-repair' },
      { label: 'Water heater replacement', href: '/services/water-heater-replacement' },
    ],
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
        a: 'Yes — we run 24/7 emergency service. A burst pipe or an active leak at 2 a.m. is exactly the call we are set up to take. Call (423) 413-6876 and you get a real person, not an automated queue.',
      },
      {
        q: 'What should I do while I wait for you?',
        a: 'Shut the water off at the main if you can — usually where the line enters the house or at the meter. Closing that valve stops the damage clock while we are on the way. If you cannot find it, call and we will talk you through it.',
      },
      {
        q: 'What actually counts as a plumbing emergency?',
        a: 'An active leak you cannot stop, no water in the house, a sewage backup, or a water heater dumping water. Those move to the front of the line.',
      },
      {
        q: 'Do you cover emergencies inside Chattanooga?',
        a: 'Yes. Emergency and repair work is covered inside Chattanooga city limits the same as the rest of the corridor.',
      },
      {
        q: 'My pipe is leaking behind a wall. Can you find it?',
        a: 'We can attempt to locate it without opening a wall first. In serious situations, multiple areas may need to be opened to locate it.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'fixture-repair': {
    quickAnswer:
      'Faucets, toilets, sinks, tubs, and shutoff valves — repaired or swapped like-for-like. A ' +
      'straight replacement is usually a same-visit job, corridor-wide including Chattanooga. Moving ' +
      'a fixture to a new spot is a different job, and we will tell you which one yours is.',
    lede:
      'Most fixture work is a same-visit job. Swapping a failed faucet, toilet, or valve for a new ' +
      'one in the same place is usually a same-visit job. The line to watch is relocation — moving a ' +
      'fixture is a different job with more behind it.',
    intro: [
      'Fixtures are the plumbing you actually touch every day, so when one fails it is both an ' +
        'annoyance and, quietly, a cost. A dripping faucet or a running toilet wastes more water than ' +
        'people expect, and a fixture installed poorly leaks in places you do not see until there is ' +
        'a stain on the ceiling below.',
      'We install fixtures we supply or ones you have already bought, and either way we do the parts ' +
        'that matter but never show — the shutoff, the supply line, the seal — properly, so the new ' +
        'fixture is not the source of the next call.',
    ],
    signs: [
      'A faucet that drips no matter how hard you turn it off',
      'A toilet that runs, refills on its own, or rocks when you sit',
      'Low flow from a single faucet or showerhead',
      'A shutoff valve under a sink that no longer closes fully',
      'A corroded or weeping supply line behind a fixture',
      'A fixture you want moved, not just replaced',
    ],
    sections: [
      {
        heading: 'Like-for-like versus relocation, and why it matters',
        paragraphs: [
          'Replacing a fixture in the same spot — a new faucet where the old one was, a new toilet on ' +
            'the same flange — is usually a same-visit job. That is why we can do it across the whole ' +
            'service area, Chattanooga included.',
          'Moving a fixture to a new location is a different job. It changes the supply and drain ' +
            'runs, so there is more behind it than a swap. We tell you up front which side of that line ' +
            'your project is on, because it changes the price and the timeline.',
        ],
      },
      {
        heading: 'Old shutoffs and supply lines are worth doing now',
        paragraphs: [
          'The small valve under a sink or behind a toilet is the thing that lets you stop water at ' +
            'that fixture in a hurry. On older homes those valves are often seized, and the braided or ' +
            'plastic supply lines feeding them have a real service life. Neither is expensive to ' +
            'replace on a planned visit.',
          'Both become expensive on an unplanned one. A supply line that lets go while you are out is a ' +
            'flooded floor; a shutoff that will not close turns a five-minute fix into an emergency. ' +
            'When we are already under a sink, replacing a tired valve or line is cheap insurance.',
        ],
      },
    ],
    process: [
      { name: 'Confirm repair or replace', text: 'Some fixtures are a quick internal repair; some are past it. We tell you which, honestly.' },
      { name: 'Handle the hidden parts', text: 'Shutoff, supply line, and seal done right, since that is where the next leak starts.' },
      { name: 'Set it true', text: 'Fixtures mounted level and sealed so they do not rock, drip, or weep.' },
      { name: 'Test under real use', text: 'Run it, fill it, and check for leaks before we call it done.' },
    ],
    related: [
      { label: 'Garbage disposal', href: '/services/garbage-disposal' },
      { label: 'Emergency plumbing', href: '/services/emergency-plumbing' },
      { label: 'Water heater repair', href: '/services/water-heater-repair' },
    ],
    whatWeDo: [
      'Faucet, toilet, sink, and tub repair and replacement',
      'Shutoff valve and supply line replacement',
      'Running or leaking toilet repairs',
      'Like-for-like fixture swaps, usually same-visit',
      'Honest flags when a request is really a relocation',
    ],
    faqs: [
      {
        q: 'What if I want to move a fixture to a different spot?',
        a: 'That is a relocation rather than a swap, because it changes the supply and drain runs. We handle it across the whole service area.',
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
        a: 'Yes, both like-for-like swaps and relocations, inside the city the same as everywhere else we serve.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'water-heater-repair': {
    quickAnswer:
      'No hot water, a pilot that will not stay lit, a leaking tank, or a failed element — we ' +
      'repair water heaters across the corridor including Chattanooga, because a repair needs no ' +
      'repair. A full replacement is a separate job.',
    lede:
      'Not every water heater problem is a replacement. Many are a thermocouple, an element, or a ' +
      'valve, and we can do that everywhere we serve. When a tank is ' +
      'genuinely done, we will tell you rather than sell you a repair that will not hold.',
    intro: [
      'A water heater rarely fails politely. It goes out on the coldest morning, or it starts leaking ' +
        'the day before company arrives. The good news is that a lot of what looks like a dead heater ' +
        'is a single failed part, and parts are a straightforward repair we can do anywhere we serve.',
      'The judgment call that matters is repair versus replace, and it is one people get sold on ' +
        'wrong all the time. We give you the honest version: a young tank with a bad part is worth ' +
        'repairing, and a tank leaking from its body is not.',
    ],
    signs: [
      'No hot water at all, or it runs out far faster than it used to',
      'A pilot light that will not stay lit on a gas unit',
      'Popping, rumbling, or crackling from the tank (usually sediment)',
      'Rusty or discolored hot water',
      'Water pooling around the base of the heater',
      'A recovery time that keeps getting longer between showers',
    ],
    sections: [
      {
        heading: 'Gas versus electric: what actually fails',
        paragraphs: [
          'On a gas water heater, the usual suspects are the thermocouple or the gas control valve — ' +
            'the parts that keep the pilot lit and the burner firing. A pilot that will not stay lit is ' +
            'one of the most common calls we get, and it is usually an affordable repair, not a new ' +
            'unit.',
          'On an electric water heater, it is typically a heating element or a thermostat. A single ' +
            'failed element is why a lot of people suddenly get lukewarm water or run out fast. Both ' +
            'are common, and both are repairs.',
        ],
      },
      {
        heading: 'Repair or replace: how we decide with you',
        paragraphs: [
          'Age and failure decide it. Under roughly ten years with a bad part, a repair is ' +
            'usually the right move and we will do it. A tank leaking from the body itself is failed ' +
            'and no repair fixes that — that one is a replacement, and we will say so plainly rather ' +
            'than patch it to get through the week.',
          'Sediment plays into it too. In the hard water common across southeast Tennessee, minerals ' +
            'collect in the bottom of the tank, which is what causes the rumbling and shortens the ' +
            'unit’s life. It is worth knowing whether treatment makes sense so the next heater ' +
            'lasts longer than this one did.',
        ],
      },
    ],
    process: [
      { name: 'Diagnose the real fault', text: 'Pin down whether it is a part, sediment, or a failed tank before quoting anything.' },
      { name: 'Repair what is worth repairing', text: 'Thermocouples, valves, elements, and thermostats are fixes we do on the spot.' },
      { name: 'Be straight about replacement', text: 'If the tank is done, we say so and lay out the replacement honestly rather than a repair that will not hold.' },
      { name: 'Flag the cause', text: 'If hard water is eating your heaters, we tell you, because a fourth failed tank is not bad luck.' },
    ],
    related: [
      { label: 'Water heater replacement', href: '/services/water-heater-replacement' },
      { label: 'Tankless installation', href: '/services/tankless-water-heater-installation' },
      { label: 'Whole-house filtration', href: '/services/whole-house-water-filtration' },
      { label: 'Emergency plumbing', href: '/services/emergency-plumbing' },
    ],
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
        a: 'Age and failure decide it. Under about ten years with a bad part, a repair is usually the right move. A leaking tank is a replacement, and we will say so plainly.',
      },
      {
        q: 'My tank is leaking from the bottom. Can that be fixed?',
        a: 'A tank leaking from the body is failed and needs replacement — that is the one water-heater problem a repair will not solve. A leak at a fitting on top usually can be repaired.',
      },
      {
        q: 'The pilot will not stay lit. What is that?',
        a: 'Most often a worn thermocouple or a dirty pilot assembly. It is a common, affordable repair.',
      },
      WARRANTY_FAQ,
      LICENSED_FAQ,
    ],
  },

  'water-heater-replacement': {
    quickAnswer:
      'We replace tank water heaters sized to the house and haul the old unit off, across the ' +
      'Bradley–McMinn corridor and greater Chattanooga. Tennessee license #5045.',
    lede:
      'A water heater replacement is the job where getting the gas, venting, and connections right ' +
      'matters most. We size the tank to how the house actually uses hot water, fit it properly, and ' +
      'take the old one with us.',
    intro: [
      'A replacement is the job people most often get sold wrong, because the easy version is to pull ' +
        'the old tank and drop in whatever is on the truck. Done that way it usually works, and it ' +
        'usually costs you either capacity you needed or money you did not.',
      'We treat it as a real install: the right size for how your household actually uses hot water, ' +
        'the gas and venting connected to code, the expansion tank and safety pieces the code calls ' +
        'for, and the old unit hauled off.',
    ],
    signs: [
      'The tank is leaking from its body, not a fitting — this one is not repairable',
      'The unit is past about ten to twelve years old',
      'Persistent rusty water even after the lines run clear',
      'You are on the second or third repair in a short span',
      'It can no longer keep up with the household’s hot-water demand',
      'Heavy rumbling from years of sediment that flushing no longer fixes',
    ],
    sections: [
      {
        heading: 'Sizing it to the house, not the box it came in',
        paragraphs: [
          'The right size is set by how many people draw hot water at the same time, not by square ' +
            'footage or by matching whatever number was on the old tank. An undersized unit leaves you ' +
            'cold at the end of a morning; an oversized one costs more to buy and to keep hot.',
          'We size it to real use, and we will tell you honestly if your existing tank was the wrong ' +
            'size all along. Getting this right is most of the value of doing a replacement properly.',
        ],
      },
    ],
    process: [
      { name: 'Size it to your household', text: 'Match the tank to real simultaneous demand, not the number on the old one.' },
      { name: 'Install to code', text: 'Gas, water, and venting done right, plus the expansion tank and safety pieces the code requires.' },
      { name: 'Haul the old one off', text: 'The old tank leaves with us — disposal is part of the job.' },
      { name: 'Talk about longevity', text: 'If hard water shortened the last one, we cover what would make this one last.' },
    ],
    related: [
      { label: 'Water heater repair', href: '/services/water-heater-repair' },
      { label: 'Tankless installation', href: '/services/tankless-water-heater-installation' },
      { label: 'Whole-house filtration', href: '/services/whole-house-water-filtration' },
      { label: 'Gas line services', href: '/services/gas-line-services' },
    ],
    whatWeDo: [
      'Tank replacement sized to the household, not just swapped like-for-like',
      'Correct gas, water, and venting connections to code',
      'Expansion tank and code upgrades where required',
      'Haul-off and disposal of the old unit',
      'The old unit hauled away as part of the job',
    ],
    faqs: [
      {
        q: 'Why can you not replace a water heater inside Chattanooga?',
        a: 'Yes. We replace water heaters inside Chattanooga city limits the same as everywhere else we serve.',
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
        a: 'A straightforward tank-for-tank replacement is typically a single-day job.',
      },
      WARRANTY_FAQ,
      LICENSED_FAQ,
    ],
  },

  'tankless-water-heater-installation': {
    quickAnswer:
      'We convert tank water heaters to tankless, including the gas and venting the change requires. ' +
      'We install across the whole service area, Chattanooga included. Tennessee license #5045.',
    lede:
      'Going tankless is not just a swap — it usually means new gas sizing and new venting, which is ' +
      'exactly why it has to be done properly. Done right it gives you endless hot water and floor space ' +
      'back. Done as a quick swap it underperforms, so we do the gas and venting properly or not at all.',
    intro: [
      'Tankless is genuinely great for the right house and genuinely oversold for the wrong one. It ' +
        'heats water on demand instead of keeping a tank hot around the clock, so you get endless hot ' +
        'water and reclaim the floor space the old tank used. That is real, when the install is done ' +
        'right.',
      'The catch is that the install is the whole game. A tankless unit pulls far more gas at once ' +
        'than a tank does, and it vents differently, so a proper conversion usually means new gas ' +
        'sizing and new venting. Skip that and you get an expensive unit that runs lukewarm under ' +
        'load. We would rather talk you out of it than install one that disappoints.',
    ],
    signs: [
      'You keep running out of hot water as the household has grown',
      'You want the floor space the old tank takes up',
      'Your tank is due for replacement anyway and you are weighing options',
      'High hot-water usage where on-demand heating pays off',
      'You are tired of paying to keep a tank hot when no one is using it',
      'Hard water keeps shortening the life of your tank heaters',
    ],
    sections: [
      {
        heading: 'Why tankless costs more to install than a tank',
        paragraphs: [
          'A tankless unit fires hard to heat water instantly, which means it needs a gas line sized ' +
            'to feed that demand and venting rated for it. On a lot of homes the existing gas line and ' +
            'flue were sized for a tank and are not enough. Upgrading them is most of the cost ' +
            'difference, and it is not optional if you want the unit to perform.',
          'This is exactly why a quick swap that ignores the gas and ' +
            'venting is the classic way to end up unhappy with tankless. We do the full conversion or ' +
            'we tell you it is not worth it for your setup.',
        ],
      },
      {
        heading: 'Hard water and keeping a tankless unit alive',
        paragraphs: [
          'Tankless units are more sensitive to hard water than tanks are, because scale builds up ' +
            'inside the heat exchanger, which is the expensive part. In the hard water common across ' +
            'southeast Tennessee, that matters.',
          'That is why we talk through water treatment when it fits a tankless install. Our water ' +
            'quality work is how the scale problem gets handled properly, and it is the difference ' +
            'between a tankless unit that lasts and one that needs service far too soon.',
        ],
      },
    ],
    process: [
      { name: 'Check if it fits your house', text: 'Honest read on gas, venting, and hot-water habits before anyone commits to tankless.' },
      { name: 'Size to peak flow', text: 'Sized by how many fixtures run hot at once and the incoming water temperature, not house size.' },
      { name: 'Upgrade gas and venting', text: 'The larger gas line and correct venting the unit actually needs.' },
      { name: 'Install and commission', text: 'Set it, test it under load, and confirm it holds temperature, not just lights up.' },
      { name: 'Set up for longevity', text: 'Cover hard-water protection so the heat exchanger is not the first thing to go.' },
    ],
    related: [
      { label: 'Water heater replacement', href: '/services/water-heater-replacement' },
      { label: 'Water heater repair', href: '/services/water-heater-repair' },
      { label: 'Whole-house filtration', href: '/services/whole-house-water-filtration' },
      { label: 'Gas line services', href: '/services/gas-line-services' },
    ],
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
        q: 'Can you install one in Chattanooga?',
        a: 'Yes. We install tankless inside Chattanooga city limits the same as everywhere else, and we service and repair existing units too.',
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

  'garbage-disposal': {
    quickAnswer:
      'We repair jammed and failed garbage disposals and replace units that are past saving, across ' +
      'the whole service area including Chattanooga. We do it ' +
      'everywhere we drive.',
    lede:
      'A garbage disposal is a small appliance that fails in loud, inconvenient ways. Most of the ' +
      'time it is a jam or a reset, sometimes it is a leak at the connections, and eventually every ' +
      'unit reaches the end. All of it is work we handle anywhere we serve.',
    whatWeDo: [
      'Clearing jams and freeing seized units',
      'Diagnosing units that seem dead but only tripped a reset',
      'Replacing failed or leaking disposals',
      'Clean drain and dishwasher connections that do not leak under the sink',
    ],
    intro: [
      'The good news with disposals is that a dead-sounding unit is often not dead. A jam or a ' +
        'tripped reset mimics a failed motor, and clearing it is quick. When a unit truly is done, ' +
        'usually from a seized motor or a leaking body, a replacement is straightforward and the ' +
        'connections underneath are where the care actually matters.',
    ],
    signs: [
      'A hum with no spin, which usually means a jam rather than a dead motor',
      'Nothing at all when you flip the switch (often a tripped reset)',
      'Water leaking from under the unit or at the drain connection',
      'Persistent bad smell that cleaning does not fix',
      'Loud rattling that suggests something is loose inside',
    ],
    sections: [
      {
        heading: 'Jam, reset, or genuinely finished',
        paragraphs: [
          'A disposal that only hums is almost always jammed, not burned out, and freeing it brings ' +
            'it back. A unit that is completely silent has often just tripped its reset button. We ' +
            'check the simple things first, because replacing a disposal that only needed a reset is ' +
            'the kind of unnecessary sale we do not make.',
          'When a unit is genuinely done — a seized motor or a leaking housing — replacement is quick, ' +
            'and the part that matters is doing the drain and dishwasher connections cleanly so the new ' +
            'one does not leak under the sink.',
        ],
      },
    ],
    process: [
      { name: 'Check the simple faults', text: 'Jam and reset first, because those masquerade as a dead unit and cost nothing to rule out.' },
      { name: 'Find any leak', text: 'Confirm whether water is coming from the unit body or the connections.' },
      { name: 'Repair or replace honestly', text: 'Free a jam and it lives; replace it only when it is truly finished.' },
      { name: 'Seal the connections', text: 'Drain and dishwasher lines connected cleanly so the new unit does not leak.' },
    ],
    related: [
      { label: 'Drain cleaning', href: '/services/drain-cleaning' },
      { label: 'Fixture repair', href: '/services/fixture-repair' },
    ],
    faqs: [
      { q: 'My disposal just hums. Is it dead?', a: 'Usually not. A hum with no spin is almost always a jam, and freeing it brings the unit back. We check that before ever talking about replacement.' },
      { q: 'Do you cover disposal work in Chattanooga?', a: 'Yes. Disposal repair and replacement run inside Chattanooga city limits the same as everywhere else we serve.' },
      { q: 'Is it worth repairing or should I replace it?', a: 'A jam or a reset is a repair, full stop. A seized motor or a leaking body is a replacement, and we will tell you plainly which one you have.' },
      { q: 'Can you fix a disposal that is leaking?', a: 'Yes. We find whether the leak is the unit body or the connections. A connection leak is often a simple fix; a leaking body means the unit is done.' },
      WARRANTY_FAQ,
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'camera-inspection': {
    quickAnswer:
      'We run a sewer camera down the line so you can see the actual problem before anyone digs or ' +
      'quotes a repair. Camera inspection we do across the whole service area ' +
      'including Chattanooga.',
    lede:
      'A camera turns a guess into a picture. Instead of cabling the same recurring clog every few ' +
      'months or breaking concrete to find out what is wrong, we put a camera down the line and show ' +
      'you exactly what is there. It is the difference between deciding blind ' +
      'and deciding with the facts.',
    whatWeDo: [
      'Sewer camera runs to locate the real cause of a backup',
      'Pre-purchase sewer line inspections before you close',
      'Verifying a line’s condition before any dig or replacement',
      'Showing you the footage so a repair is something you can confirm',
    ],
    intro: [
      'Most of the value in a camera inspection is that it prevents the wrong repair. A line that ' +
        'keeps backing up in the same spot has a cause, and the camera tells you whether that cause ' +
        'is roots, a belly, grease, or a broken section — which are four very different fixes.',
      'It is also the honest way to sell a big repair. If we are going to tell you a sewer line needs ' +
        'work, you should get to see the same thing we are seeing.',
    ],
    signs: [
      'A drain that keeps clogging in the same place no matter how often it is cleared',
      'Multiple fixtures backing up at once, pointing to the main line',
      'You are buying a home and want to know the sewer line’s real condition',
      'A quote to dig or replace a line, and you want to confirm it first',
      'Sewage smell or wet spots in the yard over the sewer run',
    ],
    sections: [
      {
        heading: 'Seeing the cause instead of guessing at it',
        paragraphs: [
          'Roots, a belly where the pipe has settled and holds water, grease buildup, and a cracked ' +
            'or collapsed section all cause backups, and they all need different answers. Cabling ' +
            'clears roots for a while; it does nothing for a belly or a break. The camera tells us ' +
            'which one you actually have so the money goes to the right fix.',
          'On older lines common along the corridor and in Chattanooga’s older neighborhoods, that ' +
            'distinction matters a lot, because clay and cast iron fail in ways a cable cannot solve.',
        ],
      },
      {
        heading: 'Before you buy, and before you dig',
        paragraphs: [
          'A camera inspection is worth doing at two moments in particular: before buying a home, so ' +
            'the sewer line is not an expensive surprise after closing, and before any dig or ' +
            'replacement, so you can confirm the work is actually needed. Either way, you see the ' +
            'footage, not just our word for it.',
        ],
      },
    ],
    process: [
      { name: 'Access the line', text: 'We enter through the right access point so the camera reaches the section that matters.' },
      { name: 'Run and record', text: 'The camera travels the line while we watch for roots, bellies, grease, and breaks.' },
      { name: 'Show you the footage', text: 'You see exactly what we see, so a repair recommendation is something you can verify.' },
      { name: 'Match the fix to the cause', text: 'Cleaning for a clog, repair for a break — decided from the picture, not a guess.' },
    ],
    related: [
      { label: 'Drain cleaning', href: '/services/drain-cleaning' },
      { label: 'Sewer line repair', href: '/services/sewer-line-repair' },
      { label: 'Emergency & backups', href: '/services/emergency-plumbing' },
    ],
    faqs: [
      { q: 'When is a camera inspection worth it?', a: 'When a drain keeps clogging in the same spot, when you are buying a home, or before any dig or line replacement so you can confirm the work is needed.' },
      { q: 'Do you cover camera inspections in Chattanooga?', a: 'Yes. It is covered inside Chattanooga city limits along with the rest of the corridor.' },
      { q: 'Will I get to see the footage?', a: 'Yes. The whole point is that you see what we see, so any repair recommendation is something you can verify rather than take on faith.' },
      { q: 'Can a camera tell me if I need a repair or just a cleaning?', a: 'That is exactly what it is for. Roots and grease are a cleaning; a belly or a break is a repair. The camera shows which one you have.' },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'whole-house-water-filtration': {
    quickAnswer:
      'We install whole-house water filtration at the main line to handle sediment, iron, sulfur, ' +
      'and taste before the water reaches any tap — on both city and private-well supply. It is ' +
      'is fitted at the main line so every tap is treated. We install across the whole service area. ' +
      'Tennessee license #5045.',
    lede:
      'Filtration at the main line treats every tap in the house at once instead of one faucet at a ' +
      'time. In an area with the hard water and well-water iron and sulfur common across southeast ' +
      'Tennessee, that is often the difference between fighting the symptoms and fixing the cause.',
    whatWeDo: [
      'Whole-house sediment, iron, and sulfur filtration at the point of entry',
      'Systems sized and specified to your actual water, not a generic setup',
      'Filtration for both city water and private-well supply',
      'Honest guidance on what filtration will and will not fix',
    ],
    intro: [
      'People usually come to filtration through a symptom: staining on fixtures, a sulfur smell, ' +
        'sediment in the aerators, or a water heater that keeps failing early from scale and iron. ' +
        'Treating it at the main line solves it for the whole house rather than one sink at a time.',
    ],
    sections: [
      {
        heading: 'Match the system to the water, not the brochure',
        paragraphs: [
          'The right filtration depends on what is actually in your water, which is different on city ' +
            'supply than on a private well, and different from one well to the next. We specify the ' +
            'system to the problem — sediment, iron, sulfur, taste — instead of installing the same box ' +
            'everywhere and hoping. That is the difference between filtration that works and an ' +
            'expensive appliance that does not touch your actual issue.',
        ],
      },
    ],
    process: [
      { name: 'Identify what is in the water', text: 'Sediment, iron, sulfur, or taste — the problem sets the system, not the other way around.' },
      { name: 'Size it to the house', text: 'Specified to your flow and your water so it performs and does not choke pressure.' },
      { name: 'Install at the point of entry', text: 'At the main line, so every tap is treated.' },
      { name: 'Confirm the result', text: 'Verify the water improved on the thing you called about.' },
    ],
    related: [
      { label: 'Water softener installation', href: '/services/water-softener-installation' },
      { label: 'Well water treatment', href: '/services/well-water-treatment' },
      { label: 'Water heater replacement', href: '/services/water-heater-replacement' },
    ],
    faqs: [
      { q: 'What does whole-house filtration actually remove?', a: 'Depending on the system, sediment, iron, sulfur smell, and taste and odor issues. We specify it to what is actually in your water rather than promise it fixes everything.' },
      { q: 'Will it help my water heater last longer?', a: 'Often, yes. Scale, iron, and sediment shorten water heater life, so treating them at the main line is part of why the next heater lasts longer than the last.' },
      { q: 'City water or well water — does it matter?', a: 'Yes. City and well water carry different problems, so the system is specified differently. We handle both.' },
      WARRANTY_FAQ,
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'water-softener-installation': {
    quickAnswer:
      'We install water softeners to take the hardness out of your water and protect your heaters, ' +
      'fixtures, and appliances from scale. We install across the whole service area. Tennessee ' +
      'license #5045.',
    lede:
      'Hard water is not a health problem, but it is a plumbing and appliance problem, and across ' +
      'southeast Tennessee it is common. A softener addresses the cause — the mineral hardness ' +
      'itself — rather than replacing scaled-up heaters and fixtures over and over.',
    whatWeDo: [
      'Water softener installation sized to the household and the water',
      'Protection for water heaters, fixtures, and appliances from scale',
      'Pairing with filtration where the water needs both',
      'Straight talk on whether a softener is what your water actually needs',
    ],
    intro: [
      'The case for a softener is cumulative: scale shortens the life of water heaters, clouds glass ' +
        'and fixtures, stiffens laundry, and coats the inside of pipes and appliances over years. If ' +
        'you are on your third early water heater, hardness is often the quiet reason.',
    ],
    sections: [
      {
        heading: 'What a softener does, and what it does not',
        paragraphs: [
          'A softener removes the calcium and magnesium that make water hard, which is what protects ' +
            'your heaters, fixtures, and appliances from scale. It is not a filter for iron, sulfur, ' +
            'sediment, or taste — those are treatment or filtration problems. Some homes need both, and ' +
            'we will tell you honestly which you need rather than sell a softener as a cure-all.',
        ],
      },
    ],
    process: [
      { name: 'Confirm hardness is the issue', text: 'Softening solves hardness; if your real problem is iron or sulfur, we point you to treatment instead.' },
      { name: 'Size to the household', text: 'Matched to your water and usage so it regenerates efficiently.' },
      { name: 'Install to code', text: 'Plumbed in properly and tested before we leave.' },
      { name: 'Set it and verify', text: 'Dialed in to your water and confirmed working.' },
    ],
    related: [
      { label: 'Whole-house filtration', href: '/services/whole-house-water-filtration' },
      { label: 'Well water treatment', href: '/services/well-water-treatment' },
      { label: 'Water heater replacement', href: '/services/water-heater-replacement' },
    ],
    faqs: [
      { q: 'Do I need a softener or a filter?', a: 'A softener handles hardness — scale on heaters and fixtures. A filter handles iron, sulfur, sediment, and taste. Some homes need both, and we will tell you which yours needs.' },
      { q: 'Will it stop my water heaters from failing early?', a: 'It helps, because scale from hard water is a major cause of early water heater failure. If hardness is your problem, softening addresses the cause.' },
      { q: 'Is hard water bad for my health?', a: 'No. It is a plumbing and appliance problem, not a health one — but it is a real, cumulative cost.' },
      WARRANTY_FAQ,
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'well-water-treatment': {
    quickAnswer:
      'We treat iron, sulfur smell, and sediment on private-well supply — after the water reaches ' +
      'the house. We treat the water, not the well: the well, pump, and pressure tank are separately ' +
      'licensed work we refer out. Tennessee license #5045.',
    lede:
      'Well water is its own world. Iron stains, a rotten-egg sulfur smell, and sediment are the ' +
      'usual complaints, and all of them are treatable — on the house side, after the water comes in ' +
      'from the well. That distinction is not a technicality; it is the line our license draws.',
    whatWeDo: [
      'Iron and sulfur-smell treatment on private-well supply',
      'Sediment filtration for well water',
      'Treatment specified to your specific well water',
      'A clear line: we treat the water, we do not service the well system',
    ],
    intro: [
      'The most important thing to understand about how we help well-water homes is where we work. ' +
        'We treat the water once it is in the house plumbing. The well itself, the pump, and the ' +
        'pressure tank are separately licensed in Tennessee, and we refer those to a well contractor. ' +
        'Everything on the house side of that line, we handle.',
    ],
    sections: [
      {
        heading: 'We treat the water, not the well',
        paragraphs: [
          'This is the honest boundary and it matters. Iron, sulfur, and sediment treatment happens ' +
            'after the water reaches the house, which is house-side plumbing squarely inside our scope. ' +
            'Drilling, pump replacement, and pressure-tank service are well-system work that is ' +
            'separately licensed, and we will refer you to the right contractor rather than pretend ' +
            'they are ours. Copy that blurs that line does you no favors; we keep it clear.',
        ],
      },
      {
        heading: 'Iron, sulfur, and sediment',
        paragraphs: [
          'Iron leaves the orange-brown staining on fixtures and laundry. Sulfur is the rotten-egg ' +
            'smell, especially in hot water. Sediment clogs aerators and wears fixtures. Each has its ' +
            'own treatment, and the right system depends on your specific well, which is why we specify ' +
            'it to your water rather than install a generic setup.',
        ],
      },
    ],
    process: [
      { name: 'Understand your well water', text: 'Iron, sulfur, and sediment each need a different answer, so we start with what is actually in it.' },
      { name: 'Specify the treatment', text: 'Sized and matched to your water, on the house side of the system.' },
      { name: 'Install to code', text: 'Plumbed in properly and tested before we leave.' },
      { name: 'Refer what is not ours', text: 'If the real issue is the well, pump, or pressure tank, we point you to the right contractor.' },
    ],
    related: [
      { label: 'Whole-house filtration', href: '/services/whole-house-water-filtration' },
      { label: 'Plumbing for well-water homes', href: '/services/well-property-plumbing' },
      { label: 'Water softener installation', href: '/services/water-softener-installation' },
    ],
    faqs: [
      { q: 'Do you service the well itself?', a: 'No. We treat the water after it reaches the house. The well, pump, and pressure tank are separately licensed in Tennessee, and we refer those to a well contractor.' },
      { q: 'Can you get rid of the rotten-egg smell?', a: 'Yes — that sulfur smell is a common, treatable well-water issue, handled on the house side.' },
      { q: 'Why is my water staining everything orange?', a: 'That is iron in the well water, and it is treatable at the house. We specify the system to your specific water.' },
      WARRANTY_FAQ,
      LICENSED_FAQ,
    ],
  },

  'well-property-plumbing': {
    quickAnswer:
      'We handle the plumbing inside well-water homes — water lines, fixtures, heaters, and ' +
      'treatment — the house side only. The well, pump, and pressure tank are separately licensed ' +
      'and we refer them out. This we cover across the whole service area ' +
      'including Chattanooga. Tennessee license #5045.',
    lede:
      'A house on well water is still a house, and the plumbing inside it — the lines, fixtures, ' +
      'heaters, and water treatment — is squarely our work. The well system itself is not, and ' +
      'keeping that line clear is how we stay honest and inside the license.',
    whatWeDo: [
      'Water lines, fixtures, and water heaters in well-water homes',
      'Iron, sulfur, and sediment treatment on the house side',
      'Repairs and installs on the home plumbing, straightforward',
      'Clear referral for the well, pump, and pressure tank',
    ],
    intro: [
      'Well-water properties are common across the rural corridor we serve, and they often get told ' +
        'that everything about their water is one specialized job. It is not. The house side — the ' +
        'plumbing you live with — is ordinary plumbing we do everywhere.',
    ],
    sections: [
      {
        heading: 'House side only, and who we refer to',
        paragraphs: [
          'Everything from where the water enters the house onward is ours: supply lines, fixtures, ' +
            'water heaters, and treatment for iron, sulfur, and sediment. The well itself, the pump, ' +
            'and the pressure tank are separately licensed work, and we refer those to a well ' +
            'contractor. If your problem turns out to be the pump or the tank, we will tell you plainly ' +
            'and point you to the right person rather than take on work that is not ours.',
        ],
      },
    ],
    related: [
      { label: 'Well water treatment', href: '/services/well-water-treatment' },
      { label: 'Whole-house filtration', href: '/services/whole-house-water-filtration' },
      { label: 'Water heater repair', href: '/services/water-heater-repair' },
    ],
    faqs: [
      { q: 'Do you work on well-water homes?', a: 'Yes — the house side. Water lines, fixtures, heaters, and treatment inside the home are all ordinary plumbing we do everywhere.' },
      { q: 'Do you fix the well pump or pressure tank?', a: 'No. The well, pump, and pressure tank are separately licensed in Tennessee, and we refer those to a well contractor.' },
      { q: 'Do you cover well-water homes in Chattanooga?', a: 'Yes, the house-side work is covered inside Chattanooga along with the rest of the area.' },
      { q: 'Can you improve my well water?', a: 'Yes, on the house side — iron, sulfur, and sediment treatment after the water reaches the home.' },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'septic-property-plumbing': {
    quickAnswer:
      'We handle the plumbing inside septic homes — drain lines, fixtures, and septic-safe plumbing ' +
      'inside the house. The tank, drain field, and pumping are separately licensed and we refer ' +
      'them out. This we cover across the whole service area including ' +
      'Chattanooga. Tennessee license #5045.',
    lede:
      'On a septic property, the plumbing inside the house is ours; the septic system in the yard is ' +
      'not. Drain lines, fixtures, and the habits that keep a septic system healthy are house-side ' +
      'work.',
    whatWeDo: [
      'Drain lines and fixtures inside septic homes',
      'Septic-safe plumbing repairs and installs',
      'Clearing house-side drain clogs on septic properties',
      'Clear referral for the tank, drain field, and pumping',
    ],
    intro: [
      'Septic homes are common across the rural stretch of our service area, and the interior ' +
        'plumbing works the same as on any home — with a few habits that keep the system downstream ' +
        'healthy. All of that house-side work is squarely ours.',
    ],
    sections: [
      {
        heading: 'House side only, and who we refer to',
        paragraphs: [
          'Everything inside the house — the drain lines, the fixtures, the clogs that back up into ' +
            'the home — is ours to handle. The septic tank, the drain field, and pumping the tank are ' +
            'separately licensed and we refer those to a septic contractor. When a backup turns out to ' +
            'be the drain field rather than a house-side clog, we will say so and point you to the ' +
            'right contractor instead of cabling a line that is not the problem.',
        ],
      },
    ],
    related: [
      { label: 'Drain cleaning', href: '/services/drain-cleaning' },
      { label: 'Sewer camera inspection', href: '/services/camera-inspection' },
      { label: 'Fixture repair', href: '/services/fixture-repair' },
    ],
    faqs: [
      { q: 'Do you work on septic homes?', a: 'Yes — the house side. Drain lines, fixtures, and septic-safe plumbing inside the home are ordinary plumbing we do everywhere, straightforward.' },
      { q: 'Do you pump or repair the septic tank?', a: 'No. The tank, drain field, and pumping are separately licensed in Tennessee, and we refer those to a septic contractor.' },
      { q: 'My drains are backing up on a septic property. Can you help?', a: 'Yes, when it is a house-side clog. If a camera shows the issue is actually the drain field, we tell you and refer it to a septic contractor rather than keep cabling.' },
      { q: 'Do you cover septic homes in Chattanooga?', a: 'Yes, the house-side work is covered inside Chattanooga along with the rest of the area.' },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  repiping: {
    quickAnswer:
      'We replace failing galvanized or polybutylene supply lines with modern pipe throughout the ' +
      'house. We do repipes across the whole service area. Tennessee license #5045.',
    lede:
      'A repipe is the honest answer when the pipe itself has failed rather than one section of it. ' +
      'Galvanized steel and polybutylene both reach a point where patching a leak just moves the ' +
      'next one down the line, and at that point replacing the supply lines is the fix that lasts.',
    whatWeDo: [
      'Whole-house replacement of failing galvanized or polybutylene supply lines',
      'Modern copper or PEX repipes done to code',
      'Honest assessment of whether you need a full repipe or a targeted repair',
      'One scoped price you approve before the work starts',
    ],
    signs: [
      'Chronic low water pressure throughout the house',
      'Rusty or discolored water, especially on the hot side',
      'Repeated pinhole leaks in the same system',
      'Known polybutylene (gray plastic) supply lines',
      'Galvanized steel pipe that has corroded internally over decades',
    ],
    sections: [
      {
        heading: 'When a repipe is the honest answer',
        paragraphs: [
          'One leak is a repair. A pattern of leaks in the same aging system is the pipe telling you ' +
            'it is done. Galvanized steel corrodes from the inside until pressure drops and pinholes ' +
            'appear; polybutylene became known for failing at fittings and along the line. When we see ' +
            'either failing systemically, we will tell you that a repipe is the real fix rather than ' +
            'sell you a string of repairs that never gets ahead of it.',
        ],
      },
      {
        heading: 'The price, stated plainly',
        paragraphs: [
          'A repipe is one of the larger jobs a house will ever need, so we scope it properly and ' +
            'give you one number to approve before anything is opened up. You hear the price from ' +
            'us before the work starts, not after.',
        ],
      },
    ],
    related: [
      { label: 'Water service line replacement', href: '/services/water-service-line' },
      { label: 'Fixture repair', href: '/services/fixture-repair' },
    ],
    faqs: [
      { q: 'How do I know if I need a repipe or just a repair?', a: 'One leak is a repair. A pattern of leaks, chronic low pressure, or known polybutylene is usually the whole system talking. We assess it honestly rather than default to the bigger job.' },
      { q: 'What is wrong with polybutylene pipe?', a: 'Polybutylene (gray plastic) supply line became known for failing at fittings and along its length. If your home has it, a repipe is often the durable answer.' },
      { q: 'How is a repipe priced?', a: 'We scope the whole house first — what pipe is in there, how many runs, and what has to be opened up — then give you one number to approve. It does not move once the work starts.' },
      WARRANTY_FAQ,
      LICENSED_FAQ,
    ],
  },

  'water-service-line': {
    quickAnswer:
      'We replace the water service line — the pipe that runs from the meter to your house — when ' +
      'it fails. You get one scoped price before any digging starts. We do it across the whole ' +
      'service area. Tennessee license #5045.',
    lede:
      'The water service line is the single pipe carrying all of your water from the meter to the ' +
      'house, and when it fails you see it in the yard, on the bill, and at every tap. Replacing it ' +
      'is a real job, and on rural properties with long runs it can be a substantial one.',
    whatWeDo: [
      'Replacement of the line from the meter (or well) to the house',
      'Locating the failure precisely before any dig',
      'Modern service line installed to code',
      'One scoped price you approve before the work starts',
    ],
    signs: [
      'A wet or unusually green strip of yard along the line’s path',
      'A water bill that jumped with no change in usage',
      'Dropping pressure throughout the whole house at once',
      'Air or sputtering at the taps',
      'A known old or undersized service line on an older property',
    ],
    sections: [
      {
        heading: 'Find the failure before you trench',
        paragraphs: [
          'On a long rural run, the difference between locating the break and guessing is the ' +
            'difference between one targeted repair and trenching the whole yard. We locate the failure ' +
            'first so the work is as contained as the situation allows, then replace the line to code.',
        ],
      },
      {
        heading: 'The price, stated plainly',
        paragraphs: [
          'A long rural run is a bigger job than a suburban one, so we locate the failure and ' +
            'scope the run before quoting. You hear one number before the work starts.',
        ],
      },
    ],
    related: [
      { label: 'Whole-house repiping', href: '/services/repiping' },
      { label: 'Sewer line repair', href: '/services/sewer-line-repair' },
    ],
    faqs: [
      { q: 'How do I know my service line is failing?', a: 'A wet or green strip along its path, a jump in the bill, or dropping pressure throughout the house are the usual signs. We locate the failure to confirm before any dig.' },
      { q: 'Will you have to dig up my whole yard?', a: 'We locate the failure first precisely, so the dig is as contained as the run allows rather than trenching on a guess.' },
      { q: 'How is it priced on a long rural run?', a: 'By the run. We locate the failure and measure what actually has to be replaced before quoting, so a long run is priced as a long run rather than discovered halfway through.' },
      WARRANTY_FAQ,
      LICENSED_FAQ,
    ],
  },

  'sewer-line-repair': {
    quickAnswer:
      'We repair and replace collapsed, root-bound, and broken sewer lines — and we camera the line ' +
      'first so the fix matches the problem, and you get one scoped price up front. We do it across ' +
      'the whole service area. Tennessee license #5045.',
    lede:
      'A failing sewer line is the plumbing problem people most want a second opinion on, and ' +
      'rightly so, because it is often quoted blind. We camera it first, show you the actual ' +
      'condition, and match the repair to what is really wrong instead of defaulting to a full ' +
      'replacement.',
    whatWeDo: [
      'Repair and replacement of collapsed, root-bound, and broken sewer lines',
      'Camera inspection first, so the fix matches the problem',
      'Honest repair-versus-replace guidance with the footage to back it',
      'One scoped price you approve before the work starts',
    ],
    signs: [
      'Repeated whole-house backups from the main line',
      'A drain that keeps clogging in the same spot after cleaning',
      'Sewage smell or wet, sunken spots in the yard over the line',
      'Multiple fixtures backing up at once',
      'Older clay or cast iron sewer line on an aging property',
    ],
    sections: [
      {
        heading: 'Camera first, dig once',
        paragraphs: [
          'The most expensive way to handle a sewer line is to dig on a guess. We put a camera down ' +
            'first and show you whether it is roots, a belly, a crack, or a full collapse, because ' +
            'those are different repairs. Sometimes the honest answer is a targeted repair rather than ' +
            'replacing the whole run, and you should get to see the footage that decides it.',
        ],
      },
      {
        heading: 'The price, stated plainly',
        paragraphs: [
          'Because we camera the line before quoting, a spot repair gets priced as a spot repair ' +
            'and a full replacement gets priced as one. You hear which it is before anything starts.',
        ],
      },
    ],
    related: [
      { label: 'Sewer camera inspection', href: '/services/camera-inspection' },
      { label: 'Drain cleaning', href: '/services/drain-cleaning' },
      { label: 'Water service line replacement', href: '/services/water-service-line' },
    ],
    faqs: [
      { q: 'Do I really need a full sewer replacement?', a: 'Not always. We camera the line first and show you the footage. Roots or a single break can be a targeted repair; a collapsed run is a replacement. You decide with the picture in front of you.' },
      { q: 'My drain keeps backing up in the same spot. Is that the sewer line?', a: 'Often, yes — roots, a belly, or a failed section. A camera tells us which, so cleaning it again is not the default answer if it needs a repair.' },
      { q: 'Why do sewer quotes vary so much?', a: 'Because most are given blind. We camera the line first and price the repair the line actually needs, which is why our number holds once the work starts.' },
      WARRANTY_FAQ,
      LICENSED_FAQ,
    ],
  },

  'gas-line-services': {
    quickAnswer:
      'We install and repair gas lines for appliances, water heaters, and heating, done to code ' +
      'across the whole service area. Gas is not a place to cut corners, and we do not. ' +
      'Tennessee license #5045.',
    lede:
      'Gas is the work where doing it right matters most: done wrong it is dangerous, and done right ' +
      'it is invisible and lasts for decades. We run and repair gas lines for appliances, water ' +
      'heaters, and heat, sized correctly and tested before anything goes into service.',
    whatWeDo: [
      'Running new gas lines for appliances, water heaters, and heating',
      'Repairing and extending existing gas lines',
      'Gas sizing for the appliances the line actually has to feed',
      'Pressure testing before the line goes into service',
    ],
    intro: [
      'Most gas calls come with another project attached: a new range, a tankless water heater that ' +
        'needs more gas than the old tank, a heater, or a suspected leak. Whatever the reason, the ' +
        'line has to be sized for the load and tested before it is used.',
    ],
    sections: [
      {
        heading: 'Sized for the appliance, and tested',
        paragraphs: [
          'A gas line that is undersized starves the appliance; one that is done sloppily is a hazard. ' +
            'We size the line for what it actually has to feed — which is exactly why a tankless water ' +
            'heater often needs a larger line than the tank it replaced — and we test it before it goes ' +
            'into service.',
        ],
      },
    ],
    related: [
      { label: 'Tankless water heater installation', href: '/services/tankless-water-heater-installation' },
      { label: 'Water heater replacement', href: '/services/water-heater-replacement' },
      { label: 'Emergency plumbing', href: '/services/emergency-plumbing' },
    ],
    faqs: [
      { q: 'Do you run gas lines for a new range or heater?', a: 'Yes. We run and extend gas lines for appliances, water heaters, and heating, sized for the load and tested before use.' },
      { q: 'Why does my tankless install need a bigger gas line?', a: 'A tankless unit fires much harder than a tank, so it needs more gas at once. Sizing the line for that load is part of why a proper tankless install costs more.' },
      { q: 'I smell gas. What should I do?', a: 'Treat it as an emergency: leave, and call your gas utility from outside. Once it is safe, we can locate and repair the line.' },
      WARRANTY_FAQ,
      LICENSED_FAQ,
    ],
  },
}

/**
 * Honest fallback for any registered service without a hand-written page yet.
 * Built entirely from the registry, so it states scope
 * correctly and never over-promises.
 */
export function fallbackContent(service: Service): ServiceContent {
  // Permit talk lives in components/PermitNote.tsx, never in service copy.
  const coverageLine = 'We cover the whole service area for it, Chattanooga included.'

  const ceilingLine = service.ceilingRisk
    ? ' Bigger jobs get scoped and priced before anything starts, so the number you approve is the number you pay.'
    : ''

  const quickAnswer = `${service.summary} ${coverageLine}${ceilingLine}`

  const whatWeDo = [service.summary]
  whatWeDo.push('A straight price before the work starts, and honest scope on what we do and do not do.')

  const faqs: ServiceContent['faqs'] = [
    {
      q: 'Do you cover my town for this?',
      a: 'Yes — we cover the whole service area for it, from Charleston and Cleveland to Athens and inside Chattanooga city limits.',
    },
    {
      q: 'Is this within a Limited Licensed Plumber’s scope?',
      a: 'Yes. It sits squarely inside the Tennessee Limited Licensed Plumber scope we hold, license #5045, verifiable at verify.tn.gov.',
    },
    ...(service.ceilingRisk
      ? [
          {
            q: 'This sounds like a big job. How does pricing work?',
            a: 'We scope it properly first, then give you one number to approve before anything starts. On a job this size that matters more than anywhere else, and it is exactly where this market has a documented habit of quotes climbing mid-job.',
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
    lede: `${service.summary} Here is how we handle it and where. ${coverageLine}`,
    whatWeDo,
    faqs,
  }
}

export function getServiceContent(slug: string): ServiceContent | null {
  if (SERVICE_CONTENT[slug]) return SERVICE_CONTENT[slug]
  const service = getService(slug)
  return service ? fallbackContent(service) : null
}
