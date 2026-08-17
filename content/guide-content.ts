/**
 * GUIDE PAGE CONTENT — Phase 3
 *
 * Decision content. Someone here is choosing, not bleeding. So each page leads
 * with a recommendation rather than a warning, and every comparison ends with
 * an actual answer instead of "it depends on your needs."
 *
 * HONESTY RULE, and it matters more here than anywhere else on the site: these
 * pages do not quote numbers we have not verified. No regional water-hardness
 * figures, no invented prices, no manufacturer lifespan claims dressed up as
 * local data. Where a number would help, the page says we test or measure at
 * the house — which is true, and is better positioning than a made-up average
 * a customer could check and find wrong.
 *
 * Voice: tradesman's register. Explain the mechanism, then say what you would
 * do. No unqualified warranty or "lifetime" language anywhere (linter [3]).
 */

export interface GuideContent {
  /** The recommendation, up front. Answers the question in the title directly. */
  quickAnswer: string
  lede: string
  sections: Array<{ heading: string; paragraphs: string[] }>
  /** Rendered as a table on comparison guides. */
  comparison?: {
    columns: [string, string]
    rows: Array<{ factor: string; a: string; b: string }>
  }
  /** Our actual recommendation. The thing competitors will not commit to. */
  verdict?: string
  faqs: Array<{ q: string; a: string }>
}

const LICENSED_FAQ = {
  q: 'Are you licensed?',
  a: 'Yes. Tennessee Limited Licensed Plumber #5045, verifiable at verify.tn.gov. Across eighteen local competitors, not one publishes their number.',
}

const PRICING_FAQ = {
  q: 'Will I know the price before you start?',
  a: 'Yes. One number to approve before the work begins, and it holds. This market has a documented habit of quotes climbing mid-job; we built the opposite habit deliberately.',
}

export const GUIDE_CONTENT: Record<string, GuideContent> = {
  // ============================================================ WATER HEATING
  'water-heater-sizing': {
    quickAnswer:
      'Size to peak simultaneous demand, not to the number on the old tank. For most households here that means a 40 or 50 gallon tank, but a house with two teenagers and a soaking tub needs more than a couple in the same square footage does. We size to how the house actually gets used.',
    lede:
      'The most common sizing mistake is replacing like for like. The tank that came out was sized for whoever lived there when it was fitted, which may have been three owners ago. Household size, fixture count, and habits all changed since.',
    sections: [
      {
        heading: 'What actually determines the size',
        paragraphs: [
          'The number that matters is peak simultaneous demand — how much hot water the house needs during its busiest hour, not across a day. A shower running while the dishwasher fills is the kind of moment that decides whether a tank is big enough.',
          'Then recovery rate: how fast the unit reheats once it is drawn down. A gas heater recovers considerably faster than an electric one of the same capacity, which means a smaller gas tank can serve a house that would need a larger electric one.',
        ],
      },
      {
        heading: 'Why bigger is not automatically better',
        paragraphs: [
          'An oversized tank keeps more water hot than the house will use, and pays for that in standby loss every hour of every day. It also costs more up front and takes more space in a closet that usually does not have any spare.',
          'The honest answer is that most houses land in a fairly narrow band, and the sizing conversation is about the handful that do not — the large family, the soaking tub, the home with a hot tub feed or an unusual fixture count.',
        ],
      },
      {
        heading: 'What we do',
        paragraphs: [
          'We ask how many people, how many bathrooms, and what the worst morning looks like. Then we look at the space, the fuel, and the existing connections, because a tank that will not fit through the closet door is not a recommendation.',
          'If the old unit was genuinely the wrong size, we say so and explain why, rather than quietly fitting the same thing again.',
        ],
      },
    ],
    verdict:
      'Do not replace on capacity alone. Tell us what the busiest hour in your house looks like and we will size to that, which is usually cheaper than guessing high and always cheaper than guessing low.',
    faqs: [
      {
        q: 'Can I just get the same size as the old one?',
        a: 'Often that is right, but confirm rather than assume. The old size reflects whoever fitted it and whoever lived there then. If you have been running out of hot water, that is the house telling you the sizing was wrong.',
      },
      {
        q: 'Does a bigger tank cost more to run?',
        a: 'Yes, modestly. It holds more water hot around the clock whether you use it or not. That is why oversizing is not a free safety margin.',
      },
      {
        q: 'How long does a replacement take?',
        a: 'Typically a few hours for a straight tank swap.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'tank-vs-tankless': {
    quickAnswer:
      'For most households in this corridor, a good tank heater is the better value. Tankless earns its cost in a house with high or unpredictable hot water demand, a long expected stay, and — importantly here — water treatment to protect it. Without treatment, hard water works against a tankless unit harder than it works against a tank.',
    lede:
      'Tankless gets sold as the obvious upgrade. It is genuinely better at some things and genuinely worse at others, and which side you land on depends less on the units than on your house and how long you are staying in it.',
    sections: [
      {
        heading: 'What tankless is actually good at',
        paragraphs: [
          'It does not run out. For a household that regularly drains a tank — several showers back to back, a large family, a soaking tub — that is a real quality-of-life difference rather than a spec-sheet one.',
          'It takes up far less space, which matters when the heater lives in a closet you would rather use for something else. And it has no standby loss, because it is not keeping forty gallons hot overnight.',
        ],
      },
      {
        heading: 'What it costs you',
        paragraphs: [
          'The install is a bigger job. Going tankless usually means new gas sizing and new venting, because the unit fires far harder than a tank does when it runs. That is a real cost and it is the part most quotes gloss over.',
          'It is also less forgiving of hard water. A tank tolerates scale for years, gradually. A tankless heat exchanger has narrow passages, and scale in those passages hurts performance quickly. In this area that means a tankless install without treatment is working against itself.',
        ],
      },
      {
        heading: 'How long you are staying',
        paragraphs: [
          'The efficiency saving is real but it is a slow payback. If you expect to be in the house a long time, that math works. If you might move in a few years, you are largely paying for the convenience rather than recovering the cost.',
        ],
      },
    ],
    comparison: {
      columns: ['Tank', 'Tankless'],
      rows: [
        { factor: 'Up-front cost', a: 'Lower', b: 'Higher, mostly from gas and venting work' },
        { factor: 'Runs out of hot water', a: 'Yes, then recovers', b: 'No' },
        { factor: 'Space used', a: 'A closet or corner', b: 'Wall-mounted, much smaller' },
        { factor: 'Standby loss', a: 'Keeps water hot around the clock', b: 'None' },
        { factor: 'Hard water tolerance', a: 'Degrades slowly over years', b: 'Sensitive — treatment strongly advised here' },
        { factor: 'Install complexity', a: 'Usually a straight swap', b: 'Gas sizing and venting typically change' },
        { factor: 'Best for', a: 'Most households, predictable demand', b: 'High demand, long stay, treated water' },
      ],
    },
    verdict:
      'If you are replacing a tank, staying put, and nobody is running out of hot water — fit another tank and put the difference toward water treatment. If your household genuinely outruns a tank and you are staying, tankless is worth it, and we would treat the water at the same time rather than after the damage starts.',
    faqs: [
      {
        q: 'Will tankless lower my bills?',
        a: 'Somewhat, mostly by removing standby loss. It is a slow payback rather than a dramatic one, and it should not be the only reason to switch.',
      },
      {
        q: 'Do I really need water treatment with tankless?',
        a: 'In this area we would strongly advise it. Scale is the main thing that shortens a tankless unit, and the narrow passages in a heat exchanger are exactly where it does the most harm.',
      },
      {
        q: 'Can you convert my existing setup?',
        a: 'Yes. It changes gas sizing and venting, which is the bulk of the work.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'gas-vs-electric-water-heater': {
    quickAnswer:
      'If the house already has gas to the heater location, gas is usually the better choice — it recovers faster and generally costs less to run. If it does not, the cost of bringing gas to it often outweighs the benefit, and a well-sized electric unit is the sensible answer.',
    lede:
      'This decision is usually made for you by what is already at the heater location. Where it is genuinely open, the trade-off comes down to recovery speed against install cost.',
    sections: [
      {
        heading: 'Recovery is the real difference',
        paragraphs: [
          'A gas heater reheats a drawn-down tank substantially faster than an electric one of the same size. In practice that means a household can get away with a smaller gas tank than electric, because it refills the hot water faster between demands.',
          'That is why a house that keeps running out on electric sometimes solves the problem by going gas at the same capacity, rather than by going to a bigger electric tank.',
        ],
      },
      {
        heading: 'What each one needs to be safe',
        paragraphs: [
          'Gas needs proper venting and combustion air, and that is not a formality — it is the part that matters most for safety. Venting is where we see the worst work from rushed installs.',
          'Electric needs adequate circuit capacity at the panel. On an older house that occasionally means panel work, which changes the numbers.',
        ],
      },
      {
        heading: 'Switching fuel',
        paragraphs: [
          'Going from electric to gas means running a gas line and venting the unit. Going the other way means panel and circuit capacity. Either way it is a bigger job than a like-for-like replacement, and we would quote it as one rather than surprise you partway through.',
        ],
      },
    ],
    comparison: {
      columns: ['Gas', 'Electric'],
      rows: [
        { factor: 'Recovery speed', a: 'Faster', b: 'Slower' },
        { factor: 'Typical running cost', a: 'Usually lower', b: 'Usually higher' },
        { factor: 'Up-front unit cost', a: 'Higher', b: 'Lower' },
        { factor: 'Needs venting', a: 'Yes, and it matters for safety', b: 'No' },
        { factor: 'Needs panel capacity', a: 'Minimal', b: 'Yes, a dedicated circuit' },
        { factor: 'Works in a power cut', a: 'Some models, depending on ignition', b: 'No' },
        { factor: 'Best when', a: 'Gas is already at the location', b: 'No gas present, or a smaller household' },
      ],
    },
    verdict:
      'Use what is already there unless there is a reason not to. Bringing a new gas line to a heater that does not have one rarely pays for itself on running cost alone — but if you are running out of hot water on electric, gas is worth pricing properly before you buy a bigger tank.',
    faqs: [
      {
        q: 'Is gas actually cheaper to run?',
        a: 'Generally yes, though it depends on local rates and how much hot water you use. The bigger practical difference for most people is recovery speed rather than the bill.',
      },
      {
        q: 'Is a gas heater safe?',
        a: 'Yes, when it is vented correctly and inspected. Venting is exactly the part that gets cut short on rushed work, which is why we do not rush it.',
      },
      {
        q: 'Can you switch me from electric to gas?',
        a: 'Yes, where gas is available. It means running the line and venting the unit, so we scope and price it properly first.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'water-heater-lifespan': {
    quickAnswer:
      'Ten to fifteen years is the usual range for a tank heater, but water quality moves that number more than brand does. In hard water, without treatment or anode maintenance, tanks routinely fall short of it. That is the single biggest reason a heater here fails earlier than the label suggested.',
    lede:
      'People are often told a water heater lasts twelve years and then feel cheated when theirs goes at seven. The label is not lying exactly — it is describing a tank in reasonable water that got some maintenance. Change either of those and the number moves.',
    sections: [
      {
        heading: 'What actually kills a tank',
        paragraphs: [
          'Corrosion, almost always. A steel tank holding hot water wants to rust, and it is protected by a sacrificial anode rod that corrodes instead. When the rod is used up and nobody replaces it, the tank starts corroding, and once the steel goes there is no repair.',
          'Sediment accelerates it. Hard water drops minerals out as it heats, and they settle on the bottom of the tank directly over the burner on a gas unit. That insulates the steel from its own flame, makes the burner work harder, and overheats the metal.',
        ],
      },
      {
        heading: 'Why this matters more here',
        paragraphs: [
          'Hard water is a real factor across this corridor, and we see its effects on heaters constantly — scale on elements, sediment in tanks, and units failing noticeably short of their expected life.',
          'We do not publish a regional hardness figure, because the honest answer is that it varies by supply and by property, and a number pulled off a regional average would be wrong for plenty of houses. We test at the house instead.',
        ],
      },
      {
        heading: 'What actually extends it',
        paragraphs: [
          'Checking the anode rod every few years and replacing it when it is spent. Flushing sediment periodically. And where the water is genuinely hard, treating it, which addresses the cause rather than the symptom.',
          'None of that is expensive relative to a replacement, which is why it is worth doing on a tank you intend to keep.',
        ],
      },
    ],
    verdict:
      'If your last heater failed early, the useful question is not which brand to buy next but what killed the last one. Usually it is water quality, and fitting the same tank into the same water gets you the same result.',
    faqs: [
      {
        q: 'Mine is 9 years old and fine. Should I replace it?',
        a: 'Not on age alone. But it is a sensible point to check the anode rod, because a rod replaced at nine years can add years to a tank that would otherwise start corroding.',
      },
      {
        q: 'Does brand matter much?',
        a: 'Less than people expect. Water quality, correct sizing, and whether anyone ever serviced it matter more than the badge.',
      },
      {
        q: 'Is it worth flushing an old tank?',
        a: 'On a tank that has never been flushed and is well along in life, sometimes disturbing heavy sediment causes more trouble than it solves. We will tell you honestly when it is worth it and when the tank is simply near the end.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'anode-rods': {
    quickAnswer:
      'The anode rod is a sacrificial metal rod inside the tank that corrodes so the steel does not. It is consumable. When it is gone and nobody replaced it, the tank itself starts rusting — which is why so many heaters fail from the inside out.',
    lede:
      'Almost nobody outside the trade knows this part exists, and it is the single component that most determines how long a tank heater lasts. It is also cheap and replaceable, which makes the general ignorance of it genuinely costly.',
    sections: [
      {
        heading: 'How it works',
        paragraphs: [
          'A steel tank full of hot water is an ideal environment for corrosion. The anode is made of a metal that corrodes more readily than steel, so the chemistry attacks it first. As long as there is anode left, the tank is protected.',
          'It gets consumed doing that job. Depending on water chemistry and use, a rod can be largely gone in a handful of years — sooner in hard or aggressive water.',
        ],
      },
      {
        heading: 'What happens when it is spent',
        paragraphs: [
          'The protection stops and the tank begins corroding from the inside. You will not see it. The first sign is usually rusty water, and the second is a leak from the tank body, which is the point at which the heater is finished.',
          'That is the failure mode behind most "the tank just went" calls. It did not just go. It had been going for a while with nothing left protecting it.',
        ],
      },
      {
        heading: 'What to do about it',
        paragraphs: [
          'Have it checked every few years, and replaced when it is depleted. It is a modest job on a tank you plan to keep, and it is the cheapest life extension available for a water heater.',
          'If the water is hard, treating it slows the whole process down, because aggressive water consumes the rod faster as well as scaling the tank.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I know if mine needs replacing?',
        a: 'It has to be pulled and looked at. If it is heavily eaten away or down to the core wire, it is done. That check is quick and it is worth folding into another visit.',
      },
      {
        q: 'Is it worth doing on an older heater?',
        a: 'If the tank is already well along and showing rust in the water, possibly not — the corrosion may already have started. On a mid-life tank it is clearly worth it.',
      },
      {
        q: 'My hot water smells like rotten eggs. Is that the rod?',
        a: 'It can be. Certain water chemistry reacting with a magnesium anode produces exactly that smell, and switching rod type often solves it. On a private well it may instead be sulfur in the supply, which is a treatment question.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'expansion-tanks': {
    quickAnswer:
      'If your house is on a closed system — which most are now, because of a check valve or pressure regulator at the meter — then yes, you need one, and code generally requires it on a water heater replacement. It is a small tank that gives heated water somewhere to expand.',
    lede:
      'Water expands when it is heated. In an old open system it could push back into the main. Modern systems usually have a check valve or regulator that stops backflow, which means that expansion has nowhere to go and pressure rises every heating cycle.',
    sections: [
      {
        heading: 'What the pressure does',
        paragraphs: [
          'On a closed system without an expansion tank, every heating cycle spikes the pressure. The relief valve on the heater opens to release it, which is exactly what it is for — but it was designed as a safety device, not a daily-use valve.',
          'The visible symptom is usually a heater relief valve that drips. People replace the valve, the new one drips too, and the actual cause is never addressed.',
        ],
      },
      {
        heading: 'What it costs you if you skip it',
        paragraphs: [
          'Repeated pressure spikes shorten the life of the heater, the fixtures, and the supply joints. It is a small part working against your whole plumbing system every time the heater fires.',
          'It also tends to shorten the tank itself, which makes skipping it a poor trade against the cost of the part.',
        ],
      },
      {
        heading: 'How we handle it',
        paragraphs: [
          'On a replacement we check whether the system is closed and whether an expansion tank is present and actually working — a waterlogged one is as good as absent. If one is needed, it goes in as part of the job and the inspector sees it.',
        ],
      },
    ],
    faqs: [
      {
        q: 'My heater relief valve keeps dripping. Is this why?',
        a: 'Very often, yes. A relief valve that discharges repeatedly on a closed system is usually telling you about thermal expansion rather than a failed valve.',
      },
      {
        q: 'How do I know if my system is closed?',
        a: 'A check valve or pressure regulator at the meter makes it closed, and most modern installations have one. It is a quick thing for us to confirm.',
      },
      {
        q: 'Can an expansion tank fail?',
        a: 'Yes. They waterlog over time and stop absorbing anything. An expansion tank that is present is not automatically an expansion tank that is working, which is why we check rather than tick a box.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'water-heater-venting': {
    quickAnswer:
      'Venting is the part of a gas water heater install that matters most for safety, and it is the part most often cut short on a rushed job. The unit has to move combustion gases out of the house completely and reliably. Getting that wrong is a carbon monoxide risk, not a code technicality.',
    lede:
      'Nobody shops for venting. It is the least interesting part of a water heater and the one most worth getting right, because the failure mode is not a leak or a cold shower.',
    sections: [
      {
        heading: 'The three arrangements',
        paragraphs: [
          'Atmospheric venting relies on hot gases rising naturally up a flue. It is simple and it works, but it depends on adequate combustion air and a properly sized, properly pitched flue.',
          'Power venting uses a fan to push exhaust out, which allows the heater to sit where a natural flue is not practical. Direct vent draws combustion air from outside and exhausts outside through a sealed path, which is the arrangement you want in a tight space or a confined closet.',
        ],
      },
      {
        heading: 'Where it goes wrong',
        paragraphs: [
          'Reusing an old flue that was sized for a different appliance. Insufficient combustion air after a closet was sealed up or a house was tightened. Improper pitch, so exhaust does not draw. Or a vent terminating somewhere it can find its way back inside.',
          'These are the failures we find on units that were swapped quickly and never inspected. The heater works, so nobody questions it.',
        ],
      },
      {
        heading: 'Why an inspected install is worth having',
        paragraphs: [
          'An inspection on a water heater replacement is largely about gas and venting. That is the record that the combustion side was done correctly, and it is the thing you would want to be able to point at if you ever sell the house.',
          'It is also the reason we do not rush this part. Venting is invisible once the job is finished, which is exactly why it is the part that gets cut short by whoever is in a hurry.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can the new heater use the existing vent?',
        a: 'Sometimes, but it has to be verified rather than assumed. A different unit can have different requirements, and reusing an unsuitable flue is one of the more common serious mistakes.',
      },
      {
        q: 'Do I need a carbon monoxide detector?',
        a: 'Any house with gas appliances should have one, regardless of how good the venting is. It is inexpensive insurance against a failure you cannot smell.',
      },
      {
        q: 'What if my existing install is wrong?',
        a: 'We will tell you plainly and show you what we are looking at. It is not a sales tactic — bad venting is one of the few plumbing faults that is genuinely dangerous rather than just expensive.',
      },
      LICENSED_FAQ,
    ],
  },

  'hard-water-and-water-heaters': {
    quickAnswer:
      'Hard water shortens water heater life, and it does it in two ways at once: scale settles in the tank and insulates the burner or coats the elements, and aggressive water consumes the anode rod faster. Treating the water is usually cheaper over time than replacing heaters early.',
    lede:
      'If you have replaced a water heater sooner than you expected, the water is the first place to look. A heater is where hard water does its most expensive work, because heating is what makes minerals drop out of solution in the first place.',
    sections: [
      {
        heading: 'The mechanism',
        paragraphs: [
          'Dissolved minerals stay in solution while water is cold. Heat it, and they come out and deposit on the nearest hot surface — the bottom of a gas tank, or directly on the elements of an electric one.',
          'On a gas heater that layer sits between the burner and the water, so the burner runs longer to do the same job and the steel above it runs hotter than it should. On electric, scale forms on the element itself until it burns out.',
        ],
      },
      {
        heading: 'The symptoms people notice first',
        paragraphs: [
          'Popping or rumbling from the tank, which is water flashing to steam under a sediment layer. Hot water that runs out sooner than it used to, because sediment is occupying volume. Elements failing repeatedly on an electric unit.',
          'Then, eventually, a tank that fails years before it should have.',
        ],
      },
      {
        heading: 'What actually helps',
        paragraphs: [
          'Flushing the tank periodically removes sediment before it builds into a problem, and it is worth doing on a heater you intend to keep.',
          'Treating the water addresses the cause. A softener stops the minerals reaching the heater at all, which protects the fixtures and appliances at the same time. That is the difference between managing the symptom and fixing it.',
          'We test the water at the house rather than quoting a regional average, because hardness varies by supply and by property across this corridor and a number from somewhere else would be wrong for plenty of houses.',
        ],
      },
    ],
    verdict:
      'If you are replacing a heater that failed early, price the treatment alongside it. Fitting the same tank into the same water gets the same outcome, and the second replacement costs more than the softener would have.',
    faqs: [
      {
        q: 'Is my water hard enough to matter?',
        a: 'Worth testing rather than assuming. We test at the house, because it varies by supply and property and a regional figure would be wrong for a lot of homes.',
      },
      {
        q: 'Will a softener fix a heater that is already scaled?',
        a: 'It stops it getting worse and protects everything downstream. Existing sediment in an old tank does not undo itself, so on a heater near the end the honest sequence is treatment plus replacement.',
      },
      {
        q: 'Does this affect tankless too?',
        a: 'More so, because the passages in a heat exchanger are narrow. If you are considering tankless in this area, treatment should be part of the conversation rather than an afterthought.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  // ============================================================ WATER QUALITY
  'hard-water-in-bradley-county': {
    quickAnswer:
      'Hard water is a real and common issue across this corridor, and its cost shows up gradually — scaled heaters, spotted fixtures, more soap, shorter appliance life. Whether treatment is worth it for your house depends on what your water actually tests at, which is why we test rather than quote an area average.',
    lede:
      'Water hardness is the mineral content — mostly calcium and magnesium — that the water picked up on its way to you. It is not a health problem. It is a plumbing and appliance problem, and it is one that accumulates quietly enough that most people never connect the symptoms to the cause.',
    sections: [
      {
        heading: 'Why it varies so much around here',
        paragraphs: [
          'This corridor is served by several different utilities, and a large number of rural properties in Polk, Meigs, and outer McMinn County are on private wells. Those are entirely different water sources with entirely different chemistry.',
          'That is why we will not print a hardness number for the region. A figure that is right for a Cleveland Utilities address can be badly wrong for a well two counties over, and quoting one would be the kind of claim a customer could check and find false.',
        ],
      },
      {
        heading: 'What it actually costs you',
        paragraphs: [
          'Water heaters are where it shows up most expensively, because heating is what makes the minerals precipitate. Then fixtures, valves, and cartridges that scale up and stop sealing. Then dishwashers and washing machines.',
          'Day to day it is spotting on glassware and fixtures, soap that will not lather, and laundry that feels stiff. Those are the symptoms people mention; the appliance life is the part that costs real money.',
        ],
      },
      {
        heading: 'What treatment involves',
        paragraphs: [
          'A softener at the main line exchanges the hardness minerals before the water reaches anything. That protects the whole house rather than one fixture.',
          'It is not the answer to every water complaint. Iron, sulfur smell, and sediment are different problems with different fixes, and a softener sized for hardness will not solve them. Specifying against an actual test is how you avoid paying for the wrong equipment.',
        ],
      },
    ],
    verdict:
      'Get it tested before you buy anything. If it comes back hard, treatment usually pays for itself through what it stops replacing. If it comes back moderate, we will tell you that too rather than sell you a system you do not need.',
    faqs: [
      {
        q: 'What is the hardness here?',
        a: 'It genuinely varies by supply and by property, and we would rather test yours than quote an area figure that might be wrong for your address. The test is quick.',
      },
      {
        q: 'Is hard water bad for you?',
        a: 'No. It is a plumbing and appliance issue rather than a health one. The reason to treat it is what it does to your equipment.',
      },
      {
        q: 'We are on a well. Is it different?',
        a: 'Usually yes, and often more complicated — wells commonly bring iron and sulfur alongside hardness. We treat the water after it reaches the house. The well, pump, and pressure tank themselves are separately licensed in Tennessee and we refer those out.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'iron-and-sulfur-in-well-water': {
    quickAnswer:
      'Orange or brown staining is iron. A rotten-egg smell is usually sulfur, either in the water or produced in the water heater. They are separate problems with separate fixes, and a water softener on its own is not the answer to either.',
    lede:
      'Iron and sulfur are the two complaints we hear most from well properties, and they are frequently misdiagnosed. People buy a softener because that is what gets advertised, and are then surprised the staining and the smell are still there.',
    sections: [
      {
        heading: 'Iron — the staining one',
        paragraphs: [
          'Iron shows up as orange or reddish-brown staining on fixtures, in tubs, and in laundry. Water may run clear from the tap and then stain as it sits, because the iron oxidises on contact with air.',
          'How it is treated depends on what form it is in and how much there is, which is a testing question rather than a guessing one. This is exactly where buying equipment off a shelf goes wrong.',
        ],
      },
      {
        heading: 'Sulfur — the smell one',
        paragraphs: [
          'The rotten-egg smell is hydrogen sulfide. The important diagnostic step is whether it is on the cold side as well as the hot. Smell on both usually means it is in the supply. Smell only on the hot side often means it is being produced in the water heater, where certain water chemistry reacts with a magnesium anode rod.',
          'That distinction matters a lot, because the second case is often solved by changing the anode rod rather than by installing a treatment system.',
        ],
      },
      {
        heading: 'What we do',
        paragraphs: [
          'Test first, then specify to what is actually there. Treating the water after it reaches the house is squarely our work.',
          'The well itself, the pump, and the pressure tank are separately licensed in Tennessee. We do not touch those, and we will say so plainly and point you to a well contractor rather than take it on.',
        ],
      },
    ],
    verdict:
      'Do not buy treatment equipment before testing. Iron, sulfur, and hardness are three different problems, and the system that fixes one will not fix the others. If the smell is only on the hot side, ask about the anode rod before anything else.',
    faqs: [
      {
        q: 'The smell is only in the hot water. Why?',
        a: 'That usually points at a reaction in the water heater involving the anode rod rather than sulfur in the supply. Changing the rod type often resolves it, which is a much smaller job than a treatment system.',
      },
      {
        q: 'Will a softener remove iron?',
        a: 'It can handle small amounts as a side effect, but it is not an iron filter and it is not the right tool if iron is the main complaint. Sizing a softener to do an iron filter’s job is a common and expensive mistake.',
      },
      {
        q: 'Do you work on the well itself?',
        a: 'No. Well drilling, pumps, and pressure tanks are separately licensed in Tennessee. We do all the plumbing in the house the well feeds, including treatment, and refer the system itself to a well contractor.',
      },
      LICENSED_FAQ,
    ],
  },

  'sediment-in-water': {
    quickAnswer:
      'Grit or cloudiness usually means sediment — sand, silt, or rust particles. On a well it often comes from the formation or a failing pump. On city supply it is frequently stirred up by main work or a hydrant flush and clears on its own. Persistent sediment is worth filtering, because it wears valves and fixtures.',
    lede:
      'Sediment is the least glamorous water problem and one of the most mechanically damaging. Fine grit passing through valves and cartridges acts like a very slow abrasive.',
    sections: [
      {
        heading: 'Where it comes from',
        paragraphs: [
          'On a private well, sediment usually originates in the formation the well draws from, or from a pump that is drawing too close to the bottom. Rural properties across Polk and Meigs County see this regularly.',
          'On city supply it is usually temporary and follows disturbance — a main repair, a hydrant flush, or a pressure change. If it clears in a day or two, that is what it was.',
          'Sediment only on the hot side is a different story and generally means the water heater has been accumulating it.',
        ],
      },
      {
        heading: 'What it damages',
        paragraphs: [
          'Faucet cartridges and shower valves, which start dripping because grit prevents a clean seal. Toilet fill valves. Appliance inlet screens. And it accumulates in the bottom of the water heater, where it insulates the burner.',
          'None of these are dramatic failures. They are a steady tax on everything the water touches.',
        ],
      },
      {
        heading: 'What filtering involves',
        paragraphs: [
          'A sediment filter at the main line catches particles before they reach anything, and it is straightforward. The specification comes down to particle size and how much sediment there is, which is a testing question.',
          'If sediment is heavy and constant on a well, that is worth investigating rather than just filtering — a filter that clogs every few weeks is telling you something upstream needs attention.',
        ],
      },
    ],
    faqs: [
      {
        q: 'My water went cloudy suddenly. Should I worry?',
        a: 'If it is on city supply and clears within a day or two, it was almost certainly disturbance from main work or a flush. Persistent cloudiness is worth looking at.',
      },
      {
        q: 'Cloudy water that clears from the bottom up?',
        a: 'That is air, not sediment. Harmless, and usually follows work on the line somewhere.',
      },
      {
        q: 'Only the hot water has grit in it.',
        a: 'That points at the water heater accumulating sediment. Flushing it may help, and if the tank is well along in life we will tell you honestly whether it is worth the effort.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'well-water-testing': {
    quickAnswer:
      'A private well is not tested by anyone but you. At minimum, test annually for bacteria and nitrates, and test for hardness, iron, and sulfur before buying any treatment equipment. Test again any time the taste, smell, or colour changes.',
    lede:
      'City water is tested continuously by the utility. A private well has no such arrangement — the responsibility sits entirely with the property owner, and a lot of well owners have never had a test done at all.',
    sections: [
      {
        heading: 'What to test for, and why',
        paragraphs: [
          'Bacteria and nitrates are the health items, and they are the reason for an annual test regardless of whether anything seems wrong. Neither has a taste or a smell.',
          'Hardness, iron, sulfur, and sediment are the equipment items. They are what determines whether treatment is worth it and what kind, which is why testing has to come before buying anything.',
        ],
      },
      {
        heading: 'When to test outside the annual check',
        paragraphs: [
          'After any change in taste, smell, or colour. After flooding, or after work on the well or pump. After a nearby land use changes. And when buying a property with a well, before closing rather than after.',
          'Tennessee county health departments and independent labs both handle water testing. We will tell you what to ask for based on what you are seeing.',
        ],
      },
      {
        heading: 'What we do with the results',
        paragraphs: [
          'Specify treatment to what is actually in the water. That is the entire point of testing first — it is the difference between a system that solves your problem and one that solves a problem you did not have.',
          'We treat the water after it reaches the house. The well, the pump, and the pressure tank are separately licensed work in Tennessee, and we refer those out rather than stretch our scope.',
        ],
      },
    ],
    verdict:
      'Test before you buy equipment, and test annually regardless. A treatment system specified without a test is a guess with a price tag on it.',
    faqs: [
      {
        q: 'How often should I test?',
        a: 'Annually for bacteria and nitrates as a baseline, and again any time the water changes in taste, smell, or appearance.',
      },
      {
        q: 'Where do I get it tested?',
        a: 'County health departments and independent labs both do it. What matters is testing for the right things, and we can tell you what to ask for based on your symptoms.',
      },
      {
        q: 'Can you fix a bacteria problem?',
        a: 'Treatment at the house is our work. If the issue traces back to the well itself — casing, cap, or contamination at the source — that is separately licensed and we refer it to a well contractor.',
      },
      LICENSED_FAQ,
    ],
  },

  'scale-damage': {
    quickAnswer:
      'Scale is what hard water leaves behind on anything it heats or flows through. It shortens water heater life, seizes valves and cartridges, blocks aerators and shower heads, and reduces the life of dishwashers and washing machines. It is a slow cost rather than a dramatic one, which is why it usually goes unaddressed.',
    lede:
      'Nobody calls a plumber about scale. They call about a dripping shower valve, a water heater that failed early, or a dishwasher that stopped cleaning properly — and often those are the same problem wearing different clothes.',
    sections: [
      {
        heading: 'Where it does the most damage',
        paragraphs: [
          'The water heater, without much competition. Heat is what drives minerals out of solution, so the heater takes the brunt — sediment on the tank bottom over the burner, or scale directly on electric elements.',
          'Then anything with a moving seal. Shower cartridges, faucet valves, and toilet fill valves all rely on a clean seat, and mineral deposits are exactly what prevents that. A shower that has started dripping is often a scaled cartridge rather than a worn one.',
        ],
      },
      {
        heading: 'The appliances people forget',
        paragraphs: [
          'Dishwashers and washing machines heat water internally and scale up the same way. Their performance drops off, they use more detergent to achieve the same result, and they fail sooner.',
          'Ice makers, coffee plumbing, and any small-passage appliance are similarly affected, and tankless heaters most of all because their passages are the narrowest in the house.',
        ],
      },
      {
        heading: 'Managing it versus fixing it',
        paragraphs: [
          'Descaling fixtures and flushing the heater manages the symptoms and is worth doing. It does not change what is arriving at the house.',
          'Treatment at the main line addresses the cause and protects everything downstream at once, which is why the arithmetic usually favours it if the water tests genuinely hard. We would test first rather than assume.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is scale actually costing me money?',
        a: 'In hard water, yes — mostly through equipment replaced sooner than it should have been. The water heater is the biggest single item, and it is rarely attributed to the water.',
      },
      {
        q: 'Can scale be removed once it is there?',
        a: 'From fixtures and aerators, largely yes. From inside a water heater that has been accumulating for years, only partly. Prevention is meaningfully more effective than cleanup here.',
      },
      {
        q: 'Do the magnetic or electronic descalers work?',
        a: 'We would not specify one. If you want the hardness minerals dealt with, a properly sized softener does that measurably, and you can test the water before and after to confirm it.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'taste-and-odor': {
    quickAnswer:
      'What it tastes or smells like narrows the cause considerably. Chlorine points at city treatment. Rotten eggs points at sulfur or the water heater anode. Metallic points at iron or corroding pipe. Musty or earthy usually points at organic matter, more common on a well.',
    lede:
      'Taste and smell complaints are the most common water quality calls and the easiest to misdiagnose, because the obvious fix — a filter — is not always the right one. The useful first step is describing it precisely.',
    sections: [
      {
        heading: 'Chlorine or a swimming-pool smell',
        paragraphs: [
          'That is municipal disinfection doing its job, and it is a taste issue rather than a safety one. Carbon filtration handles it, either at the point of use or at the main line for the whole house.',
        ],
      },
      {
        heading: 'Rotten eggs',
        paragraphs: [
          'Hydrogen sulfide. The diagnostic question is whether it is on the cold side too. Both sides usually means it is in the supply, which is a treatment question. Hot side only usually means it is being generated in the water heater by a reaction with the anode rod, and changing the rod type often solves it outright.',
          'That distinction is worth making before anyone quotes you a treatment system.',
        ],
      },
      {
        heading: 'Metallic, musty, or earthy',
        paragraphs: [
          'A metallic taste generally means iron, either from the supply on a well or from corroding galvanized pipe inside an older house. If it comes with brown water at first draw, the pipe is the more likely culprit.',
          'Musty or earthy tastes usually mean organic matter and are more common on private wells, particularly after heavy rain. That is worth a proper test rather than a guess, since it can indicate surface water reaching the supply.',
        ],
      },
    ],
    verdict:
      'Describe the taste or smell precisely, and note whether it is hot, cold, or both, and whether it is worse at first draw. Those three details narrow it down more than any amount of guesswork, and they often point at a cheap fix rather than an expensive system.',
    faqs: [
      {
        q: 'Is water that tastes bad unsafe?',
        a: 'Not necessarily — chlorine taste and sulfur smell are both unpleasant rather than dangerous. But a change in taste on a private well is worth testing, because some genuinely unsafe things have no taste at all.',
      },
      {
        q: 'Will a filter fix any of these?',
        a: 'Carbon filtration handles chlorine and many taste and odor issues well. It does not fix hardness, heavy iron, or a sulfur problem originating in the water heater. Matching the fix to the cause is the whole point of identifying it first.',
      },
      {
        q: 'Only the hot water tastes wrong.',
        a: 'That points at the water heater rather than the supply, and the anode rod is the usual suspect. Worth checking before considering a treatment system.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  // ================================================================== DRAINS
  'hydro-jetting-vs-cabling': {
    quickAnswer:
      'A cable punches a hole through a blockage. A jetter scours the pipe wall. For a one-off clog a cable is usually the right, cheaper answer. For grease, scale, or a line that keeps blocking in the same place, cabling is a temporary fix and jetting is the one that lasts.',
    lede:
      'These are different tools for different problems, and the honest version is that most calls only need the cheaper one. Selling a jetting job on a simple clog is a good way to overcharge someone, so it is worth understanding which is which.',
    sections: [
      {
        heading: 'What a cable actually does',
        paragraphs: [
          'A drain cable, or snake, is a flexible steel line driven down the pipe with a cutting head on the end. It bores through whatever is blocking the line and restores flow.',
          'For most blockages that is exactly what is needed and it is done in one visit. Where it falls short is when the problem is a coating on the pipe wall rather than a plug in the middle of it — the cable makes an opening, and the grease or scale around that opening is still there to catch the next thing that passes.',
        ],
      },
      {
        heading: 'What jetting does differently',
        paragraphs: [
          'A jetter pushes a high-pressure hose down the line with a nozzle that fires backward, scouring the pipe wall as it is pulled through. It removes the buildup rather than boring through it.',
          'That matters most on grease from a kitchen line, on scale in an older pipe, and on lines with fine root hair. It effectively returns the pipe closer to its original diameter rather than leaving a channel through the middle of the obstruction.',
        ],
      },
      {
        heading: 'When neither is the answer',
        paragraphs: [
          'If the pipe has a belly, an offset joint, or a collapsed section, no amount of clearing fixes it. That is the case for cameraing the line before spending more on repeat clearing — you are otherwise paying to manage a structural problem indefinitely.',
          'We would rather show you the footage and let you decide than sell you the same clearing twice a year.',
        ],
      },
    ],
    comparison: {
      columns: ['Cabling', 'Hydro jetting'],
      rows: [
        { factor: 'What it does', a: 'Bores through the blockage', b: 'Scours the pipe wall clean' },
        { factor: 'Cost', a: 'Lower', b: 'Higher' },
        { factor: 'Best for', a: 'A one-off clog, solid obstructions', b: 'Grease, scale, fine roots, repeat blockages' },
        { factor: 'How long it lasts', a: 'Until the surrounding buildup catches again', b: 'Longer, because the buildup is gone' },
        { factor: 'On fragile old pipe', a: 'Generally gentler', b: 'Needs assessment first — we camera before jetting' },
        { factor: 'Fixes a structural fault', a: 'No', b: 'No — that needs repair, not clearing' },
      ],
    },
    verdict:
      'First blockage in that line? Cable it. Third blockage in the same spot, or a kitchen line thick with grease? Jetting is the one that actually changes the outcome. And if a camera shows a belly or a break, neither one is the answer and we will say so.',
    faqs: [
      {
        q: 'Will jetting damage my old pipes?',
        a: 'It can on pipe that has already failed, which is why we assess the line before jetting rather than after. On sound pipe it is safe and it is the more thorough option.',
      },
      {
        q: 'Why did my drain block again so quickly?',
        a: 'Usually because the cable made an opening through buildup that is still lining the pipe. That is the classic case for jetting, or for a camera if it keeps happening in the same spot.',
      },
      {
        q: 'Do you cover this everywhere?',
        a: 'Yes. It runs across the whole service area including inside Chattanooga city limits.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  // ======================================================== WORKING WITH US
  'what-is-a-limited-licensed-plumber': {
    quickAnswer:
      'It is a Tennessee licence class that covers residential and light commercial plumbing, issued by the state Board for Licensing Contractors. Ours is #5045 and you can check it yourself at verify.tn.gov. Most companies in this market say "licensed" and stop there — the number is the part that means anything.',
    lede:
      'Almost every plumbing advert in southeast Tennessee contains the word "licensed", and almost none of them contain a number. That is worth understanding, because the two are not the same claim.',
    sections: [
      {
        heading: 'What the class actually is',
        paragraphs: [
          'Tennessee licences plumbing work through the Board for Licensing Contractors, part of the Department of Commerce and Insurance. A Limited Licensed Plumber is the credential for residential and light commercial plumbing — the drains, supply lines, fixtures, water heaters, and gas work in and around a house.',
          'It is a real state licence with a real number, an issuing authority, and an expiry date. Ours is #5045 and it runs through May 2027. All of that is on every page of this site and it links straight to the state lookup.',
        ],
      },
      {
        heading: 'Why "licensed" on its own tells you nothing',
        paragraphs: [
          'Nobody checks. That is the honest reason the word gets used so freely — it costs nothing to type and almost no customer follows it up, so an unlicensed operator and a licensed one look identical in an advert.',
          'Publishing the number changes that, because it makes the claim falsifiable. Anyone can put #5045 into verify.tn.gov and see whether it is current. Across the eighteen local competitors reviewed in August 2026, not one published theirs.',
        ],
      },
      {
        heading: 'What it does not cover',
        paragraphs: [
          'A plumbing licence is not a septic licence and it is not a well licence. Septic tanks, drain fields, well drilling, pumps, and pressure tanks are separately licensed trades in Tennessee, and we refer all of that out rather than stretch a credential to cover it.',
          'Knowing where a licence stops is as useful as knowing what it covers. A contractor who takes on work outside theirs is telling you something about how they will handle the rest of the job.',
        ],
      },
    ],
    verdict:
      'Ask any plumber for their licence number before they start, then look it up. It takes a minute, it costs nothing, and it is the single most useful piece of due diligence available to you. Ours is #5045.',
    faqs: [
      {
        q: 'How do I check a Tennessee plumbing licence?',
        a: 'Go to verify.tn.gov and search the number or the name. It will show you the class, the status, and the expiry. If a contractor will not give you a number, that is your answer.',
      },
      {
        q: 'Is a Limited Licensed Plumber less qualified than other classes?',
        a: 'It is a different scope, not a lesser one. It is the credential for residential and light commercial plumbing, which is the work most homeowners actually need. Larger commercial and industrial projects sit under different classifications.',
      },
      {
        q: 'Does the licence cover septic or wells?',
        a: 'No. Those are separately licensed in Tennessee. We do all the plumbing inside a house on well or septic, and refer the systems themselves to the right contractor.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'how-our-estimates-work': {
    quickAnswer:
      'We diagnose before we quote, give you one number, and that number holds once the work starts. The reason we are specific about this is that quotes climbing mid-job is a documented pattern in this market — one competitor review describes a job going from roughly $1,200 to $1,995 after work began.',
    lede:
      'The complaint that comes up most in local plumbing reviews is not bad work. It is a price that moved. Someone approves a number, the job starts, and the figure at the end is not the figure at the beginning.',
    sections: [
      {
        heading: 'Diagnose first, quote second',
        paragraphs: [
          'Most price surprises trace back to quoting before anyone knew what the job actually was. A sewer line quoted blind, a leak quoted before it was located, a water heater quoted without looking at the venting.',
          'So we find the problem first. Camera down the line, locate the leak, test the components — then price the work the house actually needs. That step is why the number holds.',
        ],
      },
      {
        heading: 'One number, before anything starts',
        paragraphs: [
          'You get a figure to say yes or no to before the first tool comes out, including at nine at night on an emergency call. If you say no, that is a complete answer and nobody is annoyed about it.',
          'On a bigger job — a repipe, a sewer replacement, a long service line — that matters more, not less, which is why we scope those properly rather than starting and discovering.',
        ],
      },
      {
        heading: 'When something genuinely changes',
        paragraphs: [
          'Occasionally opening something up reveals a condition nobody could have seen: a second failure behind the first, a section of pipe worse than the camera suggested. That is real and it happens in this trade.',
          'When it does, the work stops and we talk to you before anything else is done. What we will not do is keep working and present a larger number at the end. The difference between a revised estimate you agreed to and a bill that grew is consent, and it is the entire point.',
        ],
      },
    ],
    verdict:
      'Ask any plumber whether the quote holds once work begins, and ask what happens if they find something unexpected. The answer to the second question tells you more than the first. Ours: we stop and ask you.',
    faqs: [
      {
        q: 'Do you charge for the estimate?',
        a: 'We tell you up front how a diagnostic works when you call, so there is no surprise on the doorstep. The goal is a clear number you can accept or decline before any work happens.',
      },
      {
        q: 'What if you find something worse once you start?',
        a: 'We stop and talk to you before continuing. You get a revised number to approve or decline. That is different from a bill that quietly grew, and the difference is that you agreed to it.',
      },
      {
        q: 'Do you quote over the phone?',
        a: 'We will give you an honest sense of what something usually involves, but a real number comes after we have seen the job. A confident phone quote on a sewer line is how people end up with a price that moves.',
      },
      {
        q: 'Is emergency work priced differently?',
        a: 'You still approve a number before the repair starts. Making the situation safe comes first, then the price conversation, then the fix.',
      },
      LICENSED_FAQ,
    ],
  },

  // ========================================================= RURAL PROPERTY
  'what-we-refer-out': {
    quickAnswer:
      'Septic systems and well systems. Tanks, drain fields, pumping, well drilling, pumps, and pressure tanks are separately licensed trades in Tennessee and we do not touch them. We do all the plumbing in the house those systems serve, which is most of what people actually call about.',
    lede:
      'Most contractors handle scope by not mentioning it, and you find the boundary partway through a job. We would rather put it on a page. Knowing what someone does not do tells you more about them than a list of what they do.',
    sections: [
      {
        heading: 'Septic — the tank is not ours, the house is',
        paragraphs: [
          'The septic tank, the drain field, and pumping the system are separately licensed work in Tennessee. We do not install them, repair them, or pump them, and we would not take that job if you offered it.',
          'What we do is everything on the house side of the system: the drain lines, the fixtures, the vents, and septic-safe plumbing inside the home. When a house on septic has a backup, the first job is working out whether it is the house line or the system — and we will tell you plainly which one it is even when the answer means we are not the ones fixing it.',
        ],
      },
      {
        heading: 'Wells — the same line, in the same place',
        paragraphs: [
          'Well drilling, pump replacement, and pressure tank service are separately licensed. We do not do them.',
          'We do the plumbing from the house side onward, including water treatment, which is how most well-water complaints actually get solved. Iron staining, sulfur smell, sediment, and hardness are all treated after the water reaches the house, and that is squarely our work.',
        ],
      },
      {
        heading: 'Slab and exterior leak detection',
        paragraphs: [
          'This one is different from the two above — it is not a licensing boundary, it is a ' +
            'decision. Pinpointing a leak under a concrete slab or out in the yard is a specialist ' +
            'trade with equipment we do not carry, and doing it badly means breaking concrete in the ' +
            'wrong place.',
          'So we refer that locating work to American Leak Detection. We repair leaks we can reach, ' +
            'and on a leak behind a wall we can attempt to locate it before opening anything up — ' +
            'though on a serious one, more than one area may need to be opened to find it. But for a ' +
            'slab or an exterior line, the right answer is the people who do it every day.',
        ],
      },
      {
        heading: 'Why we put this in writing',
        paragraphs: [
          'Because the alternative is discovering it mid-job, which is worse for you and worse for us. A contractor who takes on work outside their license is telling you something about how they will handle the rest of it.',
          'When a job is outside our scope we say so and point you to a contractor we would use ourselves. That referral costs you nothing and it is a better outcome than a plumber improvising on a septic field.',
        ],
      },
    ],
    verdict:
      'If your problem is inside the house, it is ours. If it is the tank, the field, the well, or the pump, it is not, and we will tell you that on the phone rather than after we have arrived.',
    faqs: [
      {
        q: 'My septic is backing up. Can you help at all?',
        a: 'We can determine whether it is the house line or the system, which is genuinely useful because they look identical from inside the house. If it is the house line, we clear it. If it is the tank or field, we point you to a septic contractor.',
      },
      {
        q: 'Can you fix my well pump?',
        a: 'No. Pumps and pressure tanks are separately licensed in Tennessee. We handle the plumbing and the water treatment from the house side, and refer the well itself out.',
      },
      {
        q: 'Can you find a leak under my slab?',
        a: 'We refer slab and exterior leak detection to American Leak Detection. It is specialist locating work and they have the equipment for it. We can attempt to locate a leak behind a wall before opening anything, and we handle the repair once a leak is found and reachable.',
      },
      {
        q: 'Is there anything else you turn down?',
        a: 'Commercial new construction, which is a different scale of project. Beyond that, if a job is genuinely beyond what we should take on, we say so rather than learn on your house.',
      },
      LICENSED_FAQ,
    ],
  },

  'rural-crawlspace-runs': {
    quickAnswer:
      'Country houses fail differently from town houses, and the crawlspace is usually why. Long unheated runs, open vents, and pipe hung in still air mean rural properties freeze sooner and hide leaks longer. Most of it is preventable with insulation and knowing where your shutoff is.',
    lede:
      'A lot of the properties we serve across Polk, Meigs, and outer McMinn County sit over open crawlspaces, on acreage, with plumbing running further and colder than the same house in town would.',
    sections: [
      {
        heading: 'Why they freeze first',
        paragraphs: [
          'A crawlspace with open vents is effectively outdoors. Pipe hung under a floor in that space has no heat around it, and on a hard freeze the exposed runs go first — usually the longest run, or the one nearest a vent.',
          'The other regular culprit is the outdoor spigot. A hose left connected over winter stops a frost-free spigot draining back, which puts water in the pipe inside the wall exactly where it will split.',
        ],
      },
      {
        heading: 'Why leaks hide longer',
        paragraphs: [
          'In a house on a slab, a leak shows up on the floor. Over a crawlspace it drips into dirt, and it can run for months before anyone notices anything except a water bill creeping up.',
          'That is why an unexplained bill increase on a rural property is worth taking seriously, and why we start by isolating the supply and checking the meter rather than opening anything up.',
        ],
      },
      {
        heading: 'What actually helps',
        paragraphs: [
          'Insulating the exposed runs, closing crawlspace vents through winter, and disconnecting hose bibs in the fall covers most freeze failures. None of it is expensive relative to one burst pipe.',
          'Knowing exactly where the main shutoff is matters more on a rural property than anywhere else, because the response time on a burst is longer and every minute of it is water into the crawlspace.',
        ],
      },
    ],
    verdict:
      'Before winter: disconnect the hoses, close the crawlspace vents, and find your main shutoff. Those three cost nothing and prevent most of the calls we get in a cold snap.',
    faqs: [
      {
        q: 'How do I know if I have a crawlspace leak?',
        a: 'A water bill that has climbed without a change in use is the usual first sign. Shut everything off and watch the meter — if it is still moving, water is going somewhere.',
      },
      {
        q: 'Is closing the crawlspace vents safe?',
        a: 'For winter, generally yes, and it is common practice around here. Moisture management matters, so it is worth doing thoughtfully rather than sealing everything permanently.',
      },
      {
        q: 'Do you cover the rural properties, or just the towns?',
        a: 'We cover them. Being based in Charleston puts us closer to a lot of these properties than the Cleveland and Chattanooga operators who treat them as the end of a route.',
      },
      LICENSED_FAQ,
    ],
  },

  'long-service-runs': {
    quickAnswer:
      'On acreage, the water line from the meter or well to the house can run hundreds of feet. That distance costs you pressure, adds freeze exposure, and makes a leak much harder to find — which is why locating it properly before digging matters far more here than on a town lot.',
    lede:
      'A long service run is the plumbing problem unique to rural property. The pipe is longer, it is buried across ground nobody has looked at in decades, and when it fails the failure could be anywhere along it.',
    sections: [
      {
        heading: 'Pressure over distance',
        paragraphs: [
          'Every foot of pipe costs a little pressure, and so does every fitting and every foot of elevation gain. On a short town run that is negligible. On a three-hundred-foot run up a rise it is very much not.',
          'Undersized pipe makes it worse. A line that was adequate for the original house often is not after a bathroom was added, and the symptom is pressure that collapses when a second fixture opens.',
        ],
      },
      {
        heading: 'Finding a leak in a long run',
        paragraphs: [
          'The wrong approach is trenching along the line hoping to find it. The right one is isolating the run, confirming the leak is in it rather than in the house, and then locating the failure point before any digging starts.',
          'That diagnostic step is worth far more than it costs on a long run, because the difference between one targeted excavation and a trench across a field is enormous.',
        ],
      },
      {
        heading: 'Freeze exposure',
        paragraphs: [
          'Long runs are often shallower than they should be, particularly where they cross rock or were laid quickly. Shallow pipe freezes, and on a run that length there is a lot of it to go wrong.',
          'When we replace a service line, depth and routing get done properly rather than quickly.',
        ],
      },
    ],
    verdict:
      'If pressure has fallen off gradually or the bill has climbed, get the run isolated and tested before anyone puts a shovel in the ground. On a long line, locating the problem is most of the value.',
    faqs: [
      {
        q: 'My pressure is bad at the far end of the property. Is that fixable?',
        a: 'Usually. It comes down to pipe size, run length, and elevation. Sometimes it is a partly closed valve or a failing regulator rather than the run at all, which is a much cheaper answer.',
      },
      {
        q: 'How do you find a leak in a 300-foot line?',
        a: 'By isolating sections and using pressure and acoustic methods to narrow it down before digging. Trenching on a guess is how people end up with a ruined yard and the leak still running.',
      },
      {
        q: 'Do you replace whole service lines?',
        a: 'Yes, across the whole service area.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },

  'manufactured-homes': {
    quickAnswer:
      'Manufactured homes use different materials, different pipe sizes, and different fittings than site-built houses, and they are plumbed for transport as well as for use. That means some parts are not interchangeable with standard fixtures, and a plumber who does not work on them regularly will fit the wrong thing.',
    lede:
      'There are a lot of manufactured homes across this corridor, and they are frequently treated as an afterthought by contractors set up for site-built work. The plumbing is not worse — it is genuinely different, and the differences matter for repairs.',
    sections: [
      {
        heading: 'What is actually different',
        paragraphs: [
          'Supply pipe is often a smaller diameter than in a site-built house, and drain runs are shallower with less fall because everything sits within a shallow floor cavity. That changes how a blockage behaves and how a fixture has to be plumbed.',
          'Some fixtures and water heaters are specific to manufactured homes and are not interchangeable with standard units. Fitting a standard heater where a manufactured-home unit is required is a real and reasonably common mistake.',
        ],
      },
      {
        heading: 'Where the failures concentrate',
        paragraphs: [
          'Underbelly runs are exposed and freeze readily, especially where insulation has been damaged or animals have been in it. Shutoffs and connections work loose over time from settling.',
          'And because there is less fall on drain lines, kitchen and laundry drains block sooner than the equivalent in a site-built house.',
        ],
      },
      {
        heading: 'How we approach them',
        paragraphs: [
          'With the right parts. That sounds obvious and it is exactly what goes wrong when a crew that rarely works on these turns up with standard fittings.',
          'The work itself is ordinary plumbing and squarely within scope. We are not doing anything exotic — we are just not treating a manufactured home like a site-built one.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you work on mobile and manufactured homes?',
        a: 'Yes, and regularly. There are a lot of them across this corridor and they get treated as an afterthought by plenty of contractors.',
      },
      {
        q: 'Can I use a standard water heater in mine?',
        a: 'Often not. Many manufactured homes require a unit specifically listed for that use. Fitting a standard one where the listing does not allow it is a mistake we get called out to correct.',
      },
      {
        q: 'My underbelly line froze. Can it be prevented?',
        a: 'Largely, yes — repairing damaged insulation and skirting, and making sure the underbelly is intact, addresses most of it. It is worth doing before winter rather than after.',
      },
      PRICING_FAQ,
      LICENSED_FAQ,
    ],
  },
}

export function getGuideContent(slug: string): GuideContent | null {
  return GUIDE_CONTENT[slug] ?? null
}
