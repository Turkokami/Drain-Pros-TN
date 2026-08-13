/**
 * WORK GALLERY
 *
 * Renders real job photos from public/photos. Hides itself entirely when there
 * are none, so the site is never showing an empty or placeholder gallery.
 * Optionally cap the number shown with `limit`.
 */

import { galleryPhotos } from '@/lib/gallery'
import { Section, SectionHeading } from '@/components/ui'

export function WorkGallery({ limit }: { limit?: number }) {
  const all = galleryPhotos()
  if (all.length === 0) return null
  const photos = limit ? all.slice(0, limit) : all

  return (
    <Section tone="paper">
      <SectionHeading
        eyebrow="Recent work"
        title="Real jobs across the corridor"
        intro="Drain cleaning, sewer repair, water heaters, and fixture work from around Charleston, Cleveland, Athens, and greater Chattanooga."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <figure
            key={p.file}
            className="overflow-hidden rounded-card border border-ink/10 bg-galv shadow-card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            {p.caption && <figcaption className="p-3 text-sm text-steel">{p.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </Section>
  )
}
