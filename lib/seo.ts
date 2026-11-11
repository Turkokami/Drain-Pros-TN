import type { Metadata } from 'next'
import { businessName } from '@/lib/site'

/**
 * Shared metadata builder so every page emits consistent canonical, OpenGraph,
 * and Twitter tags. `title` is the page-specific part; the root layout template
 * appends the business name to the document <title>.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
}): Metadata {
  const name = businessName()

  // The root layout appends " | Drain Pros TN" via title.template. That pushes
  // a keyword-bearing title past the 60-character budget, where Google cuts it
  // and the searched words are what get cut. When the composed title would run
  // long, emit an absolute title so the brand suffix is dropped instead -- the
  // brand is already in the H1, the URL and the knowledge panel.
  const composed = `${title} | ${name}`
  const titleField = composed.length <= 60 ? title : { absolute: title }

  return {
    title: titleField,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${name}`,
      description,
      url: path,
      siteName: name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${name}`, description },
  }
}
