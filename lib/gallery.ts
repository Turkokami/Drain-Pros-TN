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
