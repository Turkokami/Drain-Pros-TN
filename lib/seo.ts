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
  return {
    title,
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
