import type { Metadata } from 'next'
import { businessName } from '@/lib/site'

/**
 * Shared metadata builder so every page emits consistent canonical, OpenGraph,
 * and Twitter tags. `title` is the page-specific part; the root layout template
 * appends the business name to the document <title>.
 */
/**
 * Meta descriptions are capped at 155 characters. Most pages reuse their
 * on-page quick answer, which must state coverage limits in full and so runs
 * long. Prefer cutting at a sentence boundary; fall back to a word boundary
 * with an ellipsis. Never cut mid-word.
 */
function trimMeta(text: string, max = 155): string {
  const s = text.trim()
  if (s.length <= max) return s

  const sentences = s.match(/[^.!?]+[.!?]+/g) ?? []
  let built = ''
  for (const sentence of sentences) {
    if ((built + sentence).trim().length > max) break
    built += sentence
  }
  if (built.trim().length >= 80) return built.trim()

  const cut = s.slice(0, max - 1)
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\s]+$/, '') + '…'
}

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
  const meta = trimMeta(description)
  const composed = `${title} | ${name}`
  const titleField = composed.length <= 60 ? title : { absolute: title }

  return {
    title: titleField,
    description: meta,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${name}`,
      description: meta,
      url: path,
      siteName: name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${name}`, description: meta },
  }
}
