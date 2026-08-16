/**
 * PROBLEM PAGE CONTENT — Phase 3
 *
 * Written for the person with the problem in front of them, not for a search
 * engine. Every page answers three things in order: is this an emergency, what
 * is probably causing it, and what does fixing it involve.
 *
 * Local specifics belong here where they are real — hard water across Bradley
 * County, galvanized supply line in the older McMinn housing stock, septic on
 * the rural Polk and Meigs properties. That is the material a competitor cannot
 * copy from a template.
 *
 * Voice: tradesman's register. Plain verbs, sentence case, no marketing filler.
 * Where a job needs a permit, that reads as something the office handles.
 */

export interface ProblemContent {
  /** Direct answer, first thing on the page. Answers "is this bad?" honestly. */
  quickAnswer: string
  lede: string
  /** How the visitor knows this is their problem. */
  symptoms: string[]
  /** What is actually going on, in order of likelihood. */
  causes: string[]
  /**
   * What we do about it. Optional on purpose: pages where the fix is obvious
   * from the cause (a worn flapper, a dripping spigot) lean on the "Who fixes
   * this" link instead. Pages where the approach is the whole value — cameraing
   * a root intrusion before quoting rather than cabling it again — carry this
   * block, because that is where the trust is won.
   */
  whatWeDo?: string[]
  /** Shown as a warning panel on urgent pages. Written to prevent damage. */
  rightNow?: string[]
  faqs: Array<{ q: string; a: string }>
}

const LICENSED_FAQ = {
  q: 'Are you licensed?',
  a: 'Yes. Tennessee Limited Licensed Plumber #5045, issued by the state Board for Licensing Contractors and verifiable at verify.tn.gov. Across eighteen local competitors, not one publishes their number.',
}

const PRICING_FAQ = {
  q: 'Will I know the price before you start?',
  a: 'Yes. You get one number to approve before any work begins, and it holds once the job starts. This market has a documented habit of quotes climbing mid-job; we built the opposite habit deliberately.',
}

export const PROBLEM_CONTENT: Record<string, ProblemContent> = {
  // =========================================================== WATER HEATER
  'no-hot-water': {
    quickAnswer:
      'Not an emergency unless there is also water on the floor. On a gas heater it is usually the pilot, thermocouple, or gas control; on electric it is usually a failed heating element or thermostat. Both are repairs, and most get done the same visit.',
    lede:
      'No hot water is the most common water heater call there is, and it is worth knowing that it usually is not the whole heater. A tank that has stopped making hot water often has one failed part in it, and swapping that part costs a fraction of a replacement.',
    symptoms: [
      'Nothing hot at any tap in the house',
      'Hot water that runs out in a minute or two when it used to last',
      'Water that is warm but never properly hot',
      'Hot at one tap and not another, which usually points at the fixture instead',
    ],
    causes: [
      'Gas heater: pilot out, a failed thermocouple, or a gas control valve that has quit',
      'Electric heater: a burned-out upper or lower heating element, or a failed thermostat',
      'A tripped breaker or a reset button that has popped on the unit itself',
      'Sediment built up over the burner, common on hard water, insulating the tank from its own flame',
      'A tank genuinely at the end of its life, usually past ten or twelve years',
    ],
    whatWeDo: [
      'Test the actual components rather than guessing from the symptom',
      'Replace elements, thermostats, thermocouples, and gas valves, usually the same visit',
      'Tell you honestly when a repair is worth it and when it is throwing money at a dying tank',
      'Flush sediment where that is what is choking the burner',
      'Size and fit a replacement when the tank really is finished',
    ],
    faqs: [
      {
        q: 'Is it worth repairing or should I replace it?',
        a: 'Depends mostly on age. Under about eight years, a repair usually makes sense. Past twelve, you are often paying to keep a tank alive that will fail again shortly. We will tell you which one you are looking at rather than defaulting to the bigger sale.',
      },
      {
        q: 'Why does my hot water run out so fast now?',
        a: 'Usually sediment taking up space in the bottom of the tank, or a failed lower heating element on an electric unit leaving only the top half heating. Both are fixable.',
      },
      {
        q: 'Can you come out today?',
        a: 'Often, yes. No hot water is not a burst pipe, but it is a real problem in a house with kids, so it goes near the front of the line. Call for a real timing answer.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'water-heater-leaking': {
    quickAnswer:
      'Treat this as urgent. If water is coming from the tank body itself, the tank has failed and it will not get better; shut off the water supply to the heater and call. If it is dripping from a fitting or the relief valve, it may be a repair.',
    lede:
      'A leaking water heater is one of the few plumbing problems that reliably gets worse rather than staying put. Forty or fifty gallons sitting on a floor or a stand is a lot of water, and a tank that has rusted through does not reseal itself.',
    symptoms: [
      'Water pooling on the floor under or around the tank',
      'Rust-coloured staining down the side of the heater or on the stand',
      'A steady drip from the pipe running down the side, which is the relief valve discharge',
      'Damp or buckling flooring near the heater closet',
    ],
    causes: [
      'The tank itself corroded through, which is a replacement, not a repair',
      'A failed temperature and pressure relief valve, often a genuine repair',
      'Loose or corroded supply connections at the top of the tank',
      'A failed drain valve at the bottom',
      'Thermal expansion with no expansion tank, pushing the relief valve open repeatedly',
    ],
    rightNow: [
      'Shut off the cold water supply valve on top of the heater, turning it clockwise.',
      'On a gas unit, turn the gas control to "off". On electric, switch off the breaker.',
      'Do not try to drain a hot tank yourself — it is scalding and it is heavy.',
      'Move anything that matters off the floor nearby, then call.',
    ],
    faqs: [
      {
        q: 'Can a leaking water heater be repaired?',
        a: 'If the leak is at a valve or a fitting, often yes. If it is weeping from the tank body, no — the steel has corroded through and no patch holds. We will show you which one it is.',
      },
      {
        q: 'How much water is actually in there?',
        a: 'Typically forty to fifty gallons in a residential tank, and it does not stop at that if the supply is still open. That is why the first step is shutting the cold inlet.',
      },
      {
        q: 'Why did it fail? It was not that old.',
        a: 'Hard water is the usual answer around here. Scale accelerates corrosion and shortens tank life noticeably across Bradley and McMinn County. If that is what killed this one, we will talk about treatment so the next one lasts longer.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'pilot-light-wont-stay-lit': {
    quickAnswer:
      'Almost always a failed thermocouple, which is an inexpensive part and a same-visit repair. If you also smell gas, stop, leave the house, and call the gas utility from outside before you call anyone else.',
    lede:
      'A pilot that lights and then dies within seconds or minutes is one of the most predictable faults on a gas water heater. The thermocouple is a small safety sensor that tells the gas valve the flame is actually burning; when it weakens, the valve does its job and shuts the gas off.',
    symptoms: [
      'The pilot lights while you hold the button, then goes out when you release it',
      'It stays lit for a few hours or days, then goes out again',
      'You have relit it more than once this month',
      'The pilot flame looks yellow or lazy rather than a crisp blue',
    ],
    causes: [
      'A worn or dirty thermocouple no longer generating enough signal to hold the valve open',
      'A dirty or partly blocked pilot orifice giving a weak flame',
      'A draft in the space pulling the pilot out',
      'A failing gas control valve, less common but real',
      'Blocked combustion air intake on a sealed-combustion unit',
    ],
    faqs: [
      {
        q: 'Can I just replace the thermocouple myself?',
        a: 'People do. It is gas work, though, and the reason the part exists is to shut the gas off when something is wrong. If you are not certain, it is a cheap call for us and it gets tested properly.',
      },
      {
        q: 'I smell gas. What do I do?',
        a: 'Leave the house and call the gas utility from outside, before calling a plumber. Do not flip switches on your way out. That is a gas emergency, not a plumbing one.',
      },
      {
        q: 'How long does the repair take?',
        a: 'Usually well under an hour once we are there.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  // ============================================================ DRAIN/SEWER
  'sewer-backup': {
    quickAnswer:
      'Urgent, and a genuine health issue. Stop running water anywhere in the house — every flush and every load of laundry adds to what is coming up. Sewage backing up usually means the main line is blocked, not the fixture you are looking at.',
    lede:
      'Waste coming up through a floor drain, a tub, or the lowest toilet in the house is the plumbing system telling you the main line out is blocked. Water takes the lowest exit it can find, which is why it shows up in the basement or the ground-floor tub rather than where the blockage actually is.',
    symptoms: [
      'Waste or dark water coming up through a floor drain, shower, or tub',
      'The lowest toilet in the house overflowing when an upstairs fixture is used',
      'Gurgling from a tub or floor drain when the washing machine drains',
      'More than one fixture backing up at once',
    ],
    causes: [
      'A blockage in the main sewer line between the house and the city main or septic tank',
      'Tree roots through a joint in an older clay or cast iron line',
      'A collapsed or bellied section of pipe holding waste',
      'Grease and solids accumulated over years in an older line',
      'On septic properties, a tank that is full or a failing drain field',
    ],
    rightNow: [
      'Stop using water everywhere in the house, including toilets, showers, and the washing machine.',
      'Keep people and pets away from the affected area — this is a health hazard, not just a mess.',
      'Do not pour drain chemicals into it. They will not clear a main line and they make the cleanup dangerous for whoever opens the pipe.',
      'Call. This one is worth the phone rather than a form.',
    ],
    faqs: [
      {
        q: 'Do you cover this after hours?',
        a: 'Yes. We run 24/7 emergency service, and a sewage backup is exactly the kind of call that does not wait for morning.',
      },
      {
        q: 'Will you have to dig?',
        a: 'Usually not to clear it. We cable or jet the line first and camera it to find the cause. Digging only comes into it if the line itself has failed, and you would see the footage before deciding.',
      },
      {
        q: 'My house is on septic. Is this different?',
        a: 'Sometimes. If the house line is blocked, that is ours. If the tank is full or the field is failing, that is separately licensed work in Tennessee and we will tell you plainly and point you to a septic contractor.',
      },
      LICENSED_FAQ,
    ],
  },

  'sewage-smell': {
    quickAnswer:
      'Not usually an emergency, but do not ignore it — sewer gas in a house means there is an open path from the drain system into your living space. Most often it is a dried-out trap or a failed wax ring, both cheap fixes.',
    lede:
      'A sewer smell indoors is a sign, not just a nuisance. The drain system is supposed to be sealed from the house by water sitting in every trap and by properly vented pipework. When you can smell it, one of those seals has failed somewhere.',
    symptoms: [
      'A sewer or rotten-egg smell near a specific drain, or throughout a room',
      'Smell that is worse in a guest bathroom or a floor drain nobody uses',
      'A rocking toilet, or staining on the floor at its base',
      'Smell that gets stronger when the washing machine or a tub drains',
    ],
    causes: [
      'A dried-out P-trap in a fixture that has not been used in weeks',
      'A failed wax ring under a toilet, letting gas past the base',
      'A blocked or improperly terminated vent, so the system cannot breathe and siphons traps dry',
      'A cracked drain line inside a wall or under the floor',
      'On well and septic properties, a venting problem at the tank end',
    ],
    faqs: [
      {
        q: 'The smell is only in the spare bathroom. Why?',
        a: 'Almost certainly a dried-out trap. The water seal in an unused shower or sink evaporates over a few weeks and the barrier is gone. Run the tap for a minute and see if it clears.',
      },
      {
        q: 'Is sewer gas dangerous?',
        a: 'In the concentrations most houses get, it is unpleasant rather than dangerous. It is still a sign of a real defect, and the fixes are usually inexpensive, so it is worth chasing down.',
      },
      {
        q: 'How do you find where it is coming from?',
        a: 'By elimination first, then by camera where it is not obvious. Guessing at drain problems is how people end up paying for the wrong repair.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'main-line-clog': {
    quickAnswer:
      'Urgent. If more than one fixture is backing up at the same time, the blockage is in the main line, not the individual drain. Stop running water and call — plunging a single fixture will not help and may make the backup worse.',
    lede:
      'The tell for a main line clog is that it is never just one fixture. A blocked sink is a sink problem. A blocked sink, plus a gurgling tub, plus a toilet that will not clear, is the single pipe carrying all of it away telling you it is blocked.',
    symptoms: [
      'Two or more fixtures backing up or draining slowly at once',
      'A toilet that bubbles when the sink drains',
      'Water appearing in the tub or shower when the toilet is flushed',
      'A floor drain backing up when the washing machine empties',
    ],
    causes: [
      'Tree roots at a joint in an older clay or cast iron line, the most common cause in the older neighbourhoods around here',
      'Grease and solids built up over years',
      'A bellied section where the pipe has settled and holds water',
      'Wipes and other things that do not break down, regardless of what the packet says',
      'A partially collapsed line in older housing stock',
    ],
    rightNow: [
      'Stop running water throughout the house, not just at the fixture that is backing up.',
      'Skip the drain chemicals. They do not clear a main line and they make the pipe hazardous to open.',
      'If waste has come up into the living space, keep people and pets clear of it.',
    ],
    faqs: [
      {
        q: 'How do you tell a main line clog from a normal blocked drain?',
        a: 'By how many fixtures are affected and which ones. A single slow sink is local. Multiple fixtures, especially the lowest ones in the house, means the main.',
      },
      {
        q: 'Will you camera the line?',
        a: 'When it keeps happening, yes, and it is worth doing. Clearing a line tells you it was blocked. A camera tells you why, so you are deciding about the actual cause instead of paying for the same cabling twice a year.',
      },
      {
        q: 'Do you cover this in Chattanooga?',
        a: 'Yes, inside the city the same as everywhere else we serve.',
      },
      LICENSED_FAQ,
    ],
  },

  'recurring-backups': {
    quickAnswer:
      'A line that backs up in the same place more than once has a cause, and clearing it again will not change that. This is the point to put a camera down it rather than pay for the same cabling twice a year.',
    lede:
      'Drains block. That happens. What is not normal is the same drain blocking in the same spot every few months. That pattern almost always means something structural — roots, a low spot, or a failed section — and cabling it just resets the clock.',
    symptoms: [
      'The same drain cleared more than once in a year',
      'A backup that returns within weeks of being cleared',
      'Gurgling or slow drainage that comes back seasonally, often in wet weather',
      'A previous plumber who cabled it and did not say why it happened',
    ],
    causes: [
      'Roots re-entering at the same joint each season, common in older lines',
      'A bellied section holding water and catching solids every time',
      'A cracked or offset joint snagging whatever passes it',
      'Undersized or improperly graded pipe from an old renovation',
      'A partial collapse that leaves just enough of an opening to pass a cable through',
    ],
    faqs: [
      {
        q: 'Why did cabling not fix it permanently?',
        a: 'Because cabling punches a hole through the blockage. If roots or a low spot caused it, the cause is still there and it fills back in. That is not a failed job, it is the wrong tool for a structural problem.',
      },
      {
        q: 'What does a camera inspection actually tell me?',
        a: 'Where the problem is, how far down the line, and what kind it is — roots, a belly, a crack, or a collapse. You see the footage. That turns a guess into a decision.',
      },
      {
        q: 'Does that mean I need the line replaced?',
        a: 'Not necessarily. Plenty of recurring backups turn out to be a single joint or a section rather than the whole run. We would rather repair the part that failed than sell you a full replacement you do not need.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'kitchen-drain-clog': {
    quickAnswer:
      'Not an emergency, but it will keep happening until the pipe is actually cleaned rather than punched through. Kitchen drains block from grease coating the pipe wall, which is a different problem from the debris blockages other drains get.',
    lede:
      'The kitchen line is the one drain in the house that blocks for a specific, predictable reason. Grease goes down warm and liquid, then cools on the pipe wall and stays there. Every wash adds another layer, and the pipe closes up gradually from the outside in.',
    symptoms: [
      'The kitchen sink draining slower over weeks or months',
      'Standing water that takes a long time to clear',
      'Gurgling from the other side of a double sink',
      'A drain that was cleared recently and has slowed again',
      'A smell from the drain, from the same buildup',
    ],
    causes: [
      'Grease and cooking fat coating the pipe wall, which is far and away the usual cause',
      'Food debris caught on grease that is already there',
      'A garbage disposal sending fine material into a line that is already narrowed',
      'Soap and detergent residue building on top of the grease',
      'A long or poorly graded run under the house, common in manufactured homes where there is less fall',
    ],
    faqs: [
      {
        q: 'Why does it keep coming back after it is cleared?',
        a: 'Because a cable bores a hole through the grease and leaves the rest lining the pipe. It drains again, then closes back in. A kitchen line thick with grease is the clearest case there is for jetting rather than cabling.',
      },
      {
        q: 'Do the store-bought drain chemicals work?',
        a: 'On a light grease film sometimes. On a properly blocked line, generally not, and they make the pipe hazardous for whoever opens it next. We would rather you did not.',
      },
      {
        q: 'Does running hot water help?',
        a: 'It moves the grease further down the line rather than removing it, so it relocates the problem instead of solving it. The blockage just forms somewhere less convenient.',
      },
      {
        q: 'Is my garbage disposal to blame?',
        a: 'It contributes. A disposal grinds food fine enough to pass, but fine material sticks readily to a greasy pipe wall. It is not the root cause; the grease is.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'root-intrusion': {
    quickAnswer:
      'Common and fixable. Roots do not break into a sound pipe — they find a joint or crack that is already leaking and grow toward the water. Clearing them helps; finding where they are getting in is what stops it coming back.',
    lede:
      'Root intrusion is the single most common cause of repeat sewer trouble in older neighbourhoods, and this area has plenty of them. Cast iron and clay lines laid decades ago have joints every few feet, and a mature tree will find any one of them that has started to weep.',
    symptoms: [
      'Repeated main line backups, often worse in spring and after heavy rain',
      'Slow drainage across the whole house that gradually gets worse',
      'Gurgling from the lowest drains',
      'Large trees within twenty or thirty feet of where the sewer line runs',
    ],
    causes: [
      'Clay or cast iron pipe with joints every few feet, standard in older construction',
      'A joint that has shifted with ground movement and started to seep',
      'An existing crack that a root has followed to the water inside',
      'Shallow lines under mature trees, common on older lots',
    ],
    whatWeDo: [
      'Clear the roots so the line drains again',
      'Camera the line to find exactly where they are entering and how bad the pipe is there',
      'Show you the footage so the decision is yours and not a matter of trust',
      'Repair the failed joint or section where that is enough',
      'Replace the run when the pipe is genuinely finished',
    ],
    faqs: [
      {
        q: 'Do I have to take the tree out?',
        a: 'Usually not. The root followed a defect in the pipe. Fix the defect and the pipe stops being a water source. Taking out a mature tree is a big step for a problem that is really about a leaking joint.',
      },
      {
        q: 'Do the chemical root killers work?',
        a: 'They can slow regrowth. They do not repair the joint the roots came through, so they are a delay rather than a fix.',
      },
      {
        q: 'How bad is it likely to be?',
        a: 'Genuinely varies, which is why we camera before quoting. Some are one joint. Some are a run that has been failing for years. You will see which before you decide anything.',
      },
      LICENSED_FAQ,
    ],
  },

  // ============================================================= LEAK/PIPE
  'burst-pipe': {
    quickAnswer:
      'Emergency. Shut the water off at the main valve before anything else, then call. Every minute the main is open is more water into the structure, and water damage costs far more than the pipe repair does.',
    lede:
      'A burst pipe is the plumbing failure with the shortest window to limit damage. The repair itself is usually straightforward. What determines the cost of the day is how fast the water stopped.',
    symptoms: [
      'Water running or spraying where it should not be',
      'A sudden drop in pressure throughout the house',
      'Water coming through a ceiling or down a wall',
      'The sound of running water when everything is turned off',
    ],
    causes: [
      'Freezing, which is the usual cause here in a hard cold snap',
      'Old galvanized supply line that has corroded through',
      'Failed polybutylene, which fails at fittings and along its length',
      'A joint that has worked loose over time',
      'Physical damage from a fastener or from ground movement',
    ],
    rightNow: [
      'Shut off the main water valve to the house. This matters more than anything else you do.',
      'If water is anywhere near electrical outlets or a panel, switch off power at the breaker.',
      'Open the lowest taps in the house to drain the remaining pressure.',
      'Photograph the damage before you clean up, for the insurance claim.',
      'Then call — this is a phone call, not a web form.',
    ],
    faqs: [
      {
        q: 'Where is my main shutoff?',
        a: 'Usually where the supply enters the house, often in a crawlspace, a utility closet, or near the water heater, and there is a meter shutoff at the street. It is worth finding it now rather than at 2am.',
      },
      {
        q: 'Do you answer at night?',
        a: 'Yes. We run 24/7 emergency service and a burst pipe is exactly what that is for.',
      },
      {
        q: 'Will the whole pipe need replacing?',
        a: 'Often just the failed section. But if it is old galvanized or polybutylene, one burst is usually the system telling you the rest is the same age. We will say so honestly rather than sell you a repipe on the spot.',
      },
      LICENSED_FAQ,
    ],
  },

  'frozen-pipes': {
    quickAnswer:
      'Urgent, because a frozen pipe is a burst pipe that has not happened yet. Shut off the main if you can, do not use an open flame to thaw anything, and call. If it has already split, the water damage starts the moment it thaws.',
    lede:
      'Freezing is the seasonal failure around here, and it hits the same places every time: crawlspaces, exterior walls, garages, and the outdoor spigot nobody disconnected in the fall. Rural properties on long runs are especially exposed.',
    symptoms: [
      'No water at one fixture while the rest of the house still works',
      'No water anywhere after a hard freeze',
      'Frost or bulging visible on an accessible pipe',
      'A pipe that thaws and then starts leaking, which means it already split',
    ],
    causes: [
      'Uninsulated pipe in a crawlspace, garage, or exterior wall',
      'An outdoor hose bib left connected over winter',
      'Long, shallow supply runs on rural properties',
      'A crawlspace vent left open through a cold snap',
      'Loss of heat in an empty or seasonal property',
    ],
    rightNow: [
      'Open the affected tap so there is somewhere for water to go as it thaws.',
      'Never use a torch or open flame on a pipe. Warm the space instead, or use a hair dryer at low heat.',
      'Know where your main shutoff is before it thaws — that is when a split starts pouring.',
      'If the property is empty, leave heat on and cabinet doors open under sinks on outside walls.',
    ],
    faqs: [
      {
        q: 'My seasonal place froze while it was empty. Can you help?',
        a: 'Yes, and it is a call we get every winter across the Ocoee and Delano river properties. A burst in an empty house can run for days, so the sooner we are there the better.',
      },
      {
        q: 'How do I stop it happening again?',
        a: 'Insulating the exposed runs, disconnecting hose bibs in the fall, and closing crawlspace vents through winter covers most of it. On a rural long run we may suggest more.',
      },
      {
        q: 'It thawed and now it is leaking. What now?',
        a: 'That is a burst pipe. Shut off the main and call. The split was there before the thaw; the ice was holding it closed.',
      },
      LICENSED_FAQ,
    ],
  },

  'galvanized-pipe-failure': {
    quickAnswer:
      'Not an emergency, but it does not improve. Galvanized steel supply line corrodes from the inside out, so pressure drops gradually and leaks start appearing. Once one section goes, the rest is usually the same age.',
    lede:
      'Galvanized steel supply pipe was standard in houses built before roughly the 1960s, and there is plenty of it left in the older cores of Athens, Niota, Etowah, and Cleveland. It rusts internally, narrowing the bore and reducing flow long before it starts leaking.',
    symptoms: [
      'Chronic low water pressure that has come on gradually over years',
      'Rusty or brown water, especially first thing in the morning',
      'Pressure that drops sharply when a second fixture is opened',
      'Repeated pinhole leaks in the same run of pipe',
      'Visibly rusted, threaded grey pipe in a crawlspace or basement',
    ],
    causes: [
      'Internal corrosion narrowing the pipe over decades, which is what galvanized does',
      'Threaded joints corroding first, since the coating is thinnest at the cut threads',
      'Hard water accelerating scale and corrosion together',
      'Dissimilar metals joined without a dielectric fitting',
    ],
    faqs: [
      {
        q: 'Do I have to repipe the whole house?',
        a: 'Not always, but be sceptical of a patch. If one section has corroded through, the rest of the same-age pipe is on the same clock. We will show you what is actually there and give you the honest version.',
      },
      {
        q: 'What replaces it?',
        a: 'Copper or PEX, both to code. Which one depends on the house, the runs, and what has to be opened up. We will explain the tradeoff rather than just picking for you.',
      },
      {
        q: 'How disruptive is a repipe?',
        a: 'It is one of the larger jobs a house needs, and we scope it properly and give you one number before anything is opened up. Knowing the price up front matters more on this job than almost any other.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  // ====================================================== PRESSURE/QUALITY
  'low-water-pressure': {
    quickAnswer:
      'Not an emergency, but worth diagnosing rather than living with. Low pressure at one fixture is usually that fixture. Low pressure everywhere points at the supply line, the pressure regulator, or corroded pipe.',
    lede:
      'Low pressure is a symptom with a wide range of causes, and the useful first question is whether it is one fixture or the whole house. That single distinction rules out most of the possibilities immediately.',
    symptoms: [
      'Weak flow at one tap while the rest of the house is fine',
      'Pressure across the whole house that has dropped gradually over years',
      'Pressure that falls off sharply when a second fixture is opened',
      'Good cold pressure and weak hot, which usually points at the heater',
    ],
    causes: [
      'A clogged aerator or cartridge at a single fixture, which is the easy one',
      'Corroded galvanized supply line narrowing internally, common in older housing stock',
      'A failed pressure regulator where the house has one',
      'Scale from hard water building up in fixtures and the heater',
      'A partly closed valve, sometimes left that way after previous work',
      'A leak in the service line between the meter and the house',
    ],
    faqs: [
      {
        q: 'It is only the hot side. Why?',
        a: 'Usually sediment or scale in the water heater, or a failing shutoff on the heater itself. That narrows it down a lot.',
      },
      {
        q: 'Could low pressure mean a leak?',
        a: 'It can, particularly if it dropped suddenly rather than gradually. A jump in the water bill alongside it makes that more likely, and it is worth checking before anything else.',
      },
      {
        q: 'Is hard water causing this?',
        a: 'Across Bradley and McMinn County, often partly yes. Scale accumulates in fixtures, valves, and the heater. Treating the cause is usually cheaper than replacing what it keeps damaging.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'brown-water': {
    quickAnswer:
      'Rarely an emergency, but do not drink it until you know the cause. Brown or rusty water is usually iron — either from corroding galvanized pipe inside the house, from the water heater, or from the supply itself on well water.',
    lede:
      'Discoloured water tells you something is shedding iron into the supply, and where it comes from is usually revealed by when it happens. Brown at first draw in the morning points inside the house. Brown all the time points upstream.',
    symptoms: [
      'Rusty or brown water at first draw, clearing after a minute',
      'Discoloured water all the time, at every tap',
      'Only the hot side discoloured, which points at the heater',
      'Staining on fixtures, tubs, and laundry',
      'A metallic taste alongside the colour',
    ],
    causes: [
      'Corroding galvanized supply pipe inside the house, common in pre-1960s construction',
      'A water heater at the end of its life shedding rust from inside the tank',
      'Iron in the supply on a private well, which is very common on the rural properties around here',
      'Disturbed sediment in the city main after work or a hydrant flush, which clears on its own',
      'A failed anode rod in the water heater',
    ],
    faqs: [
      {
        q: 'Is it safe to drink?',
        a: 'Iron itself is more of a taste and staining problem than a health one, but we would not drink discoloured water without knowing why it is discoloured. On a private well it is worth testing properly.',
      },
      {
        q: 'It is only the hot water. What does that mean?',
        a: 'That usually puts it in the water heater — either the tank is corroding or the anode rod is spent. Both are worth looking at before the tank fails outright.',
      },
      {
        q: 'We are on a well. Can you fix it?',
        a: 'We treat the water after it reaches the house, which handles iron, sulphur smell, and sediment. We do not work on the well, pump, or pressure tank — that is separately licensed in Tennessee and we refer it out.',
      },
      LICENSED_FAQ,
    ],
  },

  'water-hammer': {
    quickAnswer:
      'Not an emergency, but not harmless either. That bang is a pressure shock wave hitting a closed valve, and over time it loosens joints and damages fixtures. It is usually a straightforward fix.',
    lede:
      'Water hammer is the thud or bang you hear when a tap, toilet, or washing machine valve shuts quickly. Moving water has momentum, and when it stops abruptly that energy goes into the pipe. Left alone it works joints loose.',
    symptoms: [
      'A bang or thud in the wall when a tap is turned off',
      'Noise when the washing machine or dishwasher valve cycles',
      'Pipes that rattle or knock behind a wall',
      'Noise that has got worse over the last year or two',
    ],
    causes: [
      'Air chambers that have waterlogged and no longer cushion the shock',
      'No arrestors fitted on fast-closing appliance valves',
      'Water pressure that is simply too high, often above 80 psi',
      'Pipe that is not properly strapped and can move when shocked',
      'A failing pressure regulator',
    ],
    faqs: [
      {
        q: 'Can I ignore it?',
        a: 'You can, but the shock is real and it works joints loose over years. On an older system it is a reasonable thing to sort out before it causes a leak.',
      },
      {
        q: 'What is the actual fix?',
        a: 'Usually fitting arrestors at the fast-closing valves, sometimes strapping loose pipe, and checking the house pressure. If the pressure is high, correcting that fixes several problems at once.',
      },
      {
        q: 'Is my water pressure too high?',
        a: 'Easy to measure and worth knowing. High pressure shortens the life of fixtures, appliances, and the water heater, so it tends to be more expensive than it looks.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  // ================================================================ FIXTURE
  'running-toilet': {
    quickAnswer:
      'Not an emergency, but it is quietly expensive. A toilet that runs continuously can waste hundreds of gallons a day, and it is almost always a cheap part inside the tank.',
    lede:
      'A running toilet is the most common plumbing fault there is and one of the least urgent, which is exactly why people live with it for months. The waste adds up on the water bill far faster than most people expect.',
    symptoms: [
      'Water still cycling in the tank long after the flush',
      'A hiss or trickle from the toilet with nobody near it',
      'Having to jiggle the handle to make it stop',
      'A water bill creeping up with no change in use',
      'Visible water running down the inside of the bowl',
    ],
    causes: [
      'A worn flapper no longer sealing, which is the usual answer',
      'A fill valve that does not shut off properly',
      'A float set too high, sending water down the overflow tube',
      'A chain too short or too long, holding the flapper open',
      'Scale from hard water on the flapper seat, common around here',
    ],
    faqs: [
      {
        q: 'How much water does it actually waste?',
        a: 'A continuously running toilet can waste in the hundreds of gallons a day. It is one of the few repairs that regularly pays for itself on the next bill.',
      },
      {
        q: 'Should I just replace the toilet?',
        a: 'Usually not. The mechanism inside the tank is the part that wears, and replacing it is a fraction of a new fixture. If the toilet is cracked or very old, that is a different conversation.',
      },
      {
        q: 'Can you do it in the same visit as something else?',
        a: 'Yes, and that is usually the sensible way to handle it. If we are already out for a drain or a heater, small fixture work while we are there costs you a lot less than a separate trip.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'dripping-hose-bib': {
    quickAnswer:
      'Not urgent in summer. It matters a great deal going into winter, because a leaking outdoor spigot is one of the most reliable ways to burst a pipe inside the wall during a freeze.',
    lede:
      'An outdoor faucet that drips is easy to ignore for most of the year. The reason to deal with it is seasonal: water sitting in a spigot or the pipe behind it is what splits a supply line when the temperature drops.',
    symptoms: [
      'A steady drip from the spout when it is fully closed',
      'Water seeping from around the handle when it is on',
      'Damp on the wall or foundation below the spigot',
      'A spigot that has to be forced hard to stop it dripping',
    ],
    causes: [
      'A worn washer or packing in the valve, which is normal wear',
      'A frost-free spigot that has split internally from an earlier freeze',
      'A hose left connected over winter, holding water in the valve',
      'Corrosion at the connection where it enters the wall',
      'Sediment or scale on the seat, preventing a proper seal',
    ],
    faqs: [
      {
        q: 'Why does this matter before winter?',
        a: 'Because the pipe behind that spigot runs through an exterior wall. Water sitting in it freezes, expands, and splits the line — and you often do not find out until spring when you turn it on and it pours inside the wall.',
      },
      {
        q: 'Is a frost-free spigot immune?',
        a: 'No. A frost-free is designed to drain back, but it cannot if a hose is left connected. That single detail causes a lot of the winter calls we get.',
      },
      {
        q: 'Can this wait?',
        a: 'Through summer, generally. Going into a cold snap, it is worth sorting, and it is small work we can fold into another visit.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },
}

export function getProblemContent(slug: string): ProblemContent | null {
  return PROBLEM_CONTENT[slug] ?? null
}
