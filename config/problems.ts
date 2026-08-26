/**
 * PROBLEM REGISTRY — Phase 3, symptom-led intent
 *
 * These are the pages someone finds at 11pm with water on the floor. They are
 * searched by SYMPTOM, not by service name, which is why they are a separate
 * route group from /services: different intent, different page shape, different
 * CTA. An `urgent` problem leads with the emergency CTA; the rest lead with a
 * normal booking CTA.
 *
 * Every problem binds to a service slug in config/services.ts. That binding is
 * what turns a symptom page into a lead — it is the "here is who fixes this"
 * link, and it keeps these pages from floating free of the service tree.
 *
 * These pages describe SYMPTOMS AND CAUSES. They are not location-gated, because
 * the full service list publishes everywhere (see config/policy.ts).
 */

import { SERVICES } from './services'

export interface Problem {
  slug: string
  /** Page title. Phrased the way someone types it, not the way a plumber says it. */
  name: string
  /** One line for cards and nav. */
  summary: string
  /** Service that resolves this. Must exist in SERVICES. */
  service: string
  /**
   * True when this is a stop-the-water situation. Drives the emergency CTA and
   * the "call, do not fill in a form" framing.
   */
  urgent: boolean
  /** Grouping on the hub page. */
  group: 'water-heater' | 'drain-sewer' | 'sump-pump' | 'leak-pipe' | 'pressure-quality' | 'fixture'
}

export const PROBLEMS: Problem[] = [
  // --- Water heater -------------------------------------------------------
  {
    slug: 'no-hot-water',
    name: 'No Hot Water',
    summary: 'Nothing hot at any tap, or it runs cold in a minute.',
    service: 'water-heater-repair',
    urgent: false,
    group: 'water-heater',
  },
  {
    slug: 'water-heater-leaking',
    name: 'Water Heater Leaking',
    summary: 'Water pooling under or around the tank.',
    service: 'water-heater-repair',
    urgent: true,
    group: 'water-heater',
  },
  {
    slug: 'pilot-light-wont-stay-lit',
    name: 'Pilot Light Will Not Stay Lit',
    summary: 'It lights, then goes out again within minutes or hours.',
    service: 'water-heater-repair',
    urgent: false,
    group: 'water-heater',
  },

  // --- Drain and sewer ----------------------------------------------------
  {
    slug: 'sewer-backup',
    name: 'Sewage Backing Up',
    summary: 'Waste coming up through a floor drain, tub, or toilet.',
    service: 'drain-cleaning',
    urgent: true,
    group: 'drain-sewer',
  },
  {
    slug: 'sewage-smell',
    name: 'Sewage Smell in the House',
    summary: 'A sewer or rotten-egg smell that keeps coming back.',
    service: 'drain-cleaning',
    urgent: false,
    group: 'drain-sewer',
  },
  {
    slug: 'main-line-clog',
    name: 'Main Line Clog',
    summary: 'More than one drain backing up at the same time.',
    service: 'drain-cleaning',
    urgent: true,
    group: 'drain-sewer',
  },
  {
    slug: 'recurring-backups',
    name: 'A Drain That Keeps Backing Up',
    summary: 'Cleared before, and it came back in the same spot.',
    service: 'camera-inspection',
    urgent: false,
    group: 'drain-sewer',
  },
  {
    slug: 'kitchen-drain-clog',
    name: 'Kitchen Drain Keeps Clogging',
    summary: 'The one drain in the house that blocks from grease, not from debris.',
    service: 'drain-cleaning',
    urgent: false,
    group: 'drain-sewer',
  },
  {
    slug: 'root-intrusion',
    name: 'Tree Roots in the Sewer Line',
    summary: 'Roots finding a joint or crack and filling the pipe.',
    service: 'camera-inspection',
    urgent: false,
    group: 'drain-sewer',
  },

  // --- Sump pumps ---------------------------------------------------------
  // Added 2026-08-25. Symptom side of the sump cluster. The electrical boundary
  // is stated on every one of these: we do not wire the circuit.
  {
    slug: 'sump-pump-not-working',
    name: 'Sump Pump Not Turning On',
    summary: 'The pit is filling and the pump is doing nothing about it.',
    service: 'sump-pump-repair',
    urgent: true,
    group: 'sump-pump',
  },
  {
    slug: 'sump-pump-running-constantly',
    name: 'Sump Pump Runs and Never Shuts Off',
    summary: 'Running non-stop, or cycling every couple of minutes in dry weather.',
    service: 'sump-pump-repair',
    urgent: false,
    group: 'sump-pump',
  },
  {
    slug: 'sump-pump-noise',
    name: 'Sump Pump Making a Noise',
    summary: 'Grinding, rattling, or a bang from the pit every time it shuts off.',
    service: 'sump-pump-repair',
    urgent: false,
    group: 'sump-pump',
  },
  {
    slug: 'sump-discharge-line-blocked',
    name: 'Sump Discharge Line Blocked or Frozen',
    summary: 'The pump runs, the pit does not empty, and water comes back down the pipe.',
    service: 'sump-pump-repair',
    urgent: true,
    group: 'sump-pump',
  },
  {
    slug: 'water-in-crawlspace',
    name: 'Standing Water in the Crawlspace',
    summary: 'Water under the house after rain, on a property that may never have had a pump.',
    service: 'sump-pump-replacement',
    urgent: false,
    group: 'sump-pump',
  },

  // --- Leaks and pipes ----------------------------------------------------
  {
    slug: 'burst-pipe',
    name: 'Burst Pipe',
    summary: 'A pipe has split and water is going where it should not.',
    service: 'emergency-plumbing',
    urgent: true,
    group: 'leak-pipe',
  },
  {
    slug: 'frozen-pipes',
    name: 'Frozen Pipes',
    summary: 'No water in a cold snap, or one fixture dead while others work.',
    service: 'emergency-plumbing',
    urgent: true,
    group: 'leak-pipe',
  },
  {
    slug: 'galvanized-pipe-failure',
    name: 'Failing Galvanized Pipe',
    summary: 'Old steel supply line corroding shut from the inside.',
    service: 'repiping',
    urgent: false,
    group: 'leak-pipe',
  },

  // --- Pressure and water quality -----------------------------------------
  {
    slug: 'low-water-pressure',
    name: 'Low Water Pressure',
    summary: 'Weak flow at one fixture or throughout the house.',
    service: 'fixture-repair',
    urgent: false,
    group: 'pressure-quality',
  },
  {
    slug: 'brown-water',
    name: 'Brown or Rusty Water',
    summary: 'Discoloured water from the tap, all the time or just at first.',
    service: 'whole-house-water-filtration',
    urgent: false,
    group: 'pressure-quality',
  },
  {
    slug: 'water-hammer',
    name: 'Banging Pipes (Water Hammer)',
    summary: 'A bang or thud in the wall when a tap or appliance shuts off.',
    service: 'fixture-repair',
    urgent: false,
    group: 'pressure-quality',
  },

  // --- Fixtures -----------------------------------------------------------
  {
    slug: 'running-toilet',
    name: 'Toilet That Keeps Running',
    summary: 'Water cycling in the tank long after the flush.',
    service: 'fixture-repair',
    urgent: false,
    group: 'fixture',
  },
  {
    slug: 'dripping-hose-bib',
    name: 'Dripping Outdoor Faucet',
    summary: 'An outdoor spigot dripping or leaking at the wall.',
    service: 'fixture-repair',
    urgent: false,
    group: 'fixture',
  },
]

export const PROBLEM_GROUPS: Array<{ key: Problem['group']; title: string; blurb: string }> = [
  {
    key: 'leak-pipe',
    title: 'Leaks and burst pipes',
    blurb: 'Water going somewhere it should not. Most of these are a call, not a form.',
  },
  {
    key: 'drain-sewer',
    title: 'Drains and sewer',
    blurb: 'Slow, blocked, backing up, or smelling. The most common reason people call us.',
  },
  {
    key: 'sump-pump',
    title: 'Sump pumps and groundwater',
    blurb:
      'A pump that quit, a pump that will not stop, or water under the house after every storm.',
  },
  {
    key: 'water-heater',
    title: 'Water heaters',
    blurb: 'No hot water, not enough of it, or a tank that has started leaking.',
  },
  {
    key: 'pressure-quality',
    title: 'Pressure and water quality',
    blurb: 'Weak flow, discoloured water, or noise in the pipes.',
  },
  {
    key: 'fixture',
    title: 'Fixtures',
    blurb: 'Toilets, faucets, and spigots. Small jobs that waste real money if left.',
  },
]

export function getProblem(slug: string): Problem | undefined {
  return PROBLEMS.find((p) => p.slug === slug)
}

export function problemsByGroup(group: Problem['group']): Problem[] {
  return PROBLEMS.filter((p) => p.group === group)
}

/** Problems that resolve to a given service. Powers reverse links from service pages. */
export function problemsForService(serviceSlug: string): Problem[] {
  return PROBLEMS.filter((p) => p.service === serviceSlug)
}

/**
 * Every problem must bind to a real service. Called by the linter so a typo
 * cannot ship a page whose "who fixes this" link points nowhere.
 */
export function unboundProblems(): Problem[] {
  const slugs = new Set(SERVICES.map((s) => s.slug))
  return PROBLEMS.filter((p) => !slugs.has(p.service))
}
