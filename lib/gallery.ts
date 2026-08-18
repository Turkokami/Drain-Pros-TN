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
  return files.sort().map((file) => {
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
  'sewer-line-repair': 'sewer-camera-02.jpg',
  'water-heater-repair': 'water-heater-01.jpg',
  'water-heater-replacement': 'water-heater-02.jpg',
  'fixture-repair': 'pipe-repair-03.jpg',
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
