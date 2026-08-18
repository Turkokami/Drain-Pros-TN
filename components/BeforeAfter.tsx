/**
 * BEFORE / AFTER — the strongest proof format this site has.
 *
 * A single job photo says "we did some work". Two ends of the same job says
 * "here is what we changed", and it is the one thing a competitor cannot
 * assemble from stock imagery. The client confirmed three of these pairs on
 * 2026-08-18; before that they were mapped to separate pages and read as
 * unrelated jobs.
 *
 * Deliberately plain: two images, labelled, side by side above `sm` and stacked
 * below it. No slider. A drag-to-reveal control looks impressive and actively
 * gets in the way on a phone, which is where most of this traffic lands.
 */

import { beforeAfterFor, type BeforeAfter as Pair } from '@/lib/gallery'

function Frame({ photo, tag }: { photo: Pair['before']; tag: string }) {
  return (
    <figure className="overflow-hidden rounded-lg border-2 border-verdigris/50 shadow-lift">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
        <span className="absolute left-0 top-0 bg-pine/90 px-3 py-1 font-mono text-spec uppercase text-verdigris">
          {tag}
        </span>
      </div>
    </figure>
  )
}

export function BeforeAfterPair({ slug, heading }: { slug: string; heading?: string }) {
  const pair = beforeAfterFor(slug)
  if (!pair) return null

  return (
    <section aria-label={`Before and after: ${pair.label}`}>
      <h2 className="font-mono text-spec uppercase text-steel">{heading ?? 'Before and after'}</h2>
      <p className="mt-2 max-w-prose text-ink/90">{pair.label} — the same job, both ends.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Frame photo={pair.before} tag="Before" />
        <Frame photo={pair.after} tag="After" />
      </div>
    </section>
  )
}
