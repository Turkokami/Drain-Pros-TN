import fs from 'node:fs'
import path from 'node:path'
import { GALLERY_CAPTIONS } from '@/content/gallery-captions'

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

export interface GalleryPhoto {
  src: string
  file: string
  alt: string
  caption?: string
}

/**
 * Reads whatever image files live in public/photos at build time. Drop real job
 * photos into that folder and they appear on the site automatically — no code
 * change needed. Captions come from content/gallery-captions.ts when a filename
 * matches. Returns [] if the folder is missing or empty (the gallery then hides).
 */
export function galleryPhotos(): GalleryPhoto[] {
  let files: string[] = []
  try {
    const dir = path.join(process.cwd(), 'public', 'photos')
    files = fs.readdirSync(dir).filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()))
  } catch {
    return []
  }
  // Sort so a BEFORE always precedes its AFTER. A plain alphabetical sort put
  // "hose-bib-after" ahead of "hose-bib-before", which showed the finished
  // spigot first and the broken one second - the story backwards. Mapping the
  // suffixes to -a/-b keeps pairs adjacent and in the right order.
  const orderKey = (f: string) => f.replace('-before', '-a').replace('-after', '-b')
  return files
    .sort((x, y) => orderKey(x).localeCompare(orderKey(y)))
    .map((file) => {
    const meta = GALLERY_CAPTIONS[file]
    return {
      src: `/photos/${encodeURIComponent(file)}`,
      file,
      alt: meta?.alt ?? 'Drain Pros TN plumbing and drain work in the Charleston, TN corridor',
      caption: meta?.caption,
    }
  })
}

/**
 * PHOTO PLACEMENT — real job photos on the pages they belong to.
 *
 * Mapped by hand rather than picked at random, because a drain photo on the
 * water-heater page is worse than no photo: it reads as stock filler and
 * undercuts the whole "these are our actual jobs" argument.
 *
 * A service with no honest match gets nothing. That is deliberate — several
 * services genuinely have no photo yet, and an approximate one is a downgrade.
 * Drop a real photo into public/photos and add the mapping when there is one.
 */
const SERVICE_PHOTOS: Record<string, string> = {
  'drain-cleaning': 'drain-cleaning-01.jpg',
  'emergency-plumbing': 'pipe-repair-01.jpg',
  'camera-inspection': 'sewer-camera-01.jpg',
  'sewer-line-repair': 'pipe-repair-03.jpg',
  'fixture-repair': 'copper-repipe.jpg',
  'repiping': 'copper-repipe.jpg',
  'water-service-line': 'water-service-pumpout.jpg',
  'gas-line-services': 'pipe-repair-02.jpg',
  'septic-property-plumbing': 'drain-cleaning-03.jpg',
}

const PROBLEM_PHOTOS: Record<string, string> = {
  'main-line-clog': 'drain-cleaning-03.jpg',
  'recurring-backups': 'drain-cleaning-02.jpg',
  'root-intrusion': 'sewer-camera-01.jpg',
  'sewer-backup': 'drain-cleaning-04.jpg',
  'kitchen-drain-clog': 'drain-cleaning-01.jpg',
  'burst-pipe': 'pipe-repair-01.jpg',
  'no-hot-water': 'water-heater-01.jpg',
  'water-heater-leaking': 'water-heater-02.jpg',
  'running-toilet': 'toilet-work-02.jpg',
  'dripping-hose-bib': 'hose-bib-after.jpg',
  'galvanized-pipe-failure': 'copper-repipe.jpg',
}

function lookup(file: string | undefined): GalleryPhoto | null {
  if (!file) return null
  const meta = GALLERY_CAPTIONS[file]
  return {
    src: `/photos/${encodeURIComponent(file)}`,
    file,
    alt: meta?.alt ?? 'Drain Pros TN plumbing work in the Charleston, TN corridor',
    caption: meta?.caption,
  }
}

/** Photo for a service page, or null when we have no honest match. */
export function photoForService(slug: string): GalleryPhoto | null {
  return lookup(SERVICE_PHOTOS[slug])
}

/** Photo for a problem page, or null when we have no honest match. */
export function photoForProblem(slug: string): GalleryPhoto | null {
  return lookup(PROBLEM_PHOTOS[slug])
}

/**
 * BEFORE / AFTER PAIRS
 *
 * Three of the job photos are two ends of the same job, confirmed by the client
 * on 2026-08-18. They were previously mapped to separate pages, which quietly
 * misrepresented one job as two - the old heater illustrated "water heater
 * repair" while its replacement illustrated "water heater replacement".
 *
 * Paired they are the strongest evidence on the site. A before and after of the
 * same fixture is the one format a competitor cannot fake with stock imagery.
 */
export interface BeforeAfter {
  label: string
  before: GalleryPhoto
  after: GalleryPhoto
}

const PAIRS: Record<string, { label: string; before: string; after: string }> = {
  'water-heater-replacement': {
    label: 'Water heater replacement',
    before: 'water-heater-01.jpg',
    after: 'water-heater-02.jpg',
  },
  'fixture-repair': {
    label: 'Toilet pulled, repaired, and reset',
    before: 'toilet-work-01.jpg',
    after: 'toilet-work-02.jpg',
  },
  'dripping-hose-bib': {
    label: 'Outdoor spigot repair',
    before: 'hose-bib-before.jpg',
    after: 'hose-bib-after.jpg',
  },
}

/** The before/after pair for a service or problem slug, when one exists. */
export function beforeAfterFor(slug: string): BeforeAfter | null {
  const p = PAIRS[slug]
  if (!p) return null
  const before = lookup(p.before)
  const after = lookup(p.after)
  if (!before || !after) return null
  return { label: p.label, before, after }
}

/** Every pair, for the homepage proof block. */
export function allBeforeAfter(): BeforeAfter[] {
  return Object.keys(PAIRS)
    .map(beforeAfterFor)
    .filter((p): p is BeforeAfter => p !== null)
}

/**
 * PHOTO SETS — for pages where one image undersells the work.
 *
 * Camera inspection is the clearest case: the whole pitch is "you see the
 * footage before you decide", so showing the rig, the access, and the line
 * itself carries the argument better than a single shot. Client asked for more
 * pictures there specifically.
 *
 * Rendered as a plain responsive grid rather than a carousel. A slideshow hides
 * most of its content behind a control nobody presses, and on a phone it fights
 * the page scroll.
 */
const SERVICE_PHOTO_SETS: Record<string, string[]> = {
  'camera-inspection': [
    'sewer-camera-01.jpg',
    'sewer-camera-02.jpg',
    'drain-cleaning-03.jpg',
    'pipe-repair-03.jpg',
  ],
  'drain-cleaning': [
    'drain-cleaning-01.jpg',
    'drain-cleaning-02.jpg',
    'drain-cleaning-03.jpg',
    'drain-cleaning-04.jpg',
  ],
}

/** Extra photos for a service page, beyond the single sidebar image. */
export function photoSetForService(slug: string): GalleryPhoto[] {
  return (SERVICE_PHOTO_SETS[slug] ?? []).map(lookup).filter((p): p is GalleryPhoto => p !== null)
}
