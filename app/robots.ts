import type { MetadataRoute } from 'next'
import { IDENTITY } from '@/config/business'
import { origin } from '@/lib/schema/graph'

/** AI assistants and AI search crawlers, named explicitly and allowed under the same rules as everyone else. Site guide: /llms.txt */
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'GoogleOther',
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  'DuckAssistBot',
  'Amazonbot',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'MistralAI-User',
  'cohere-ai',
  'YouBot',
  'CCBot',
  'Bytespider',
]

/**
 * SAFE-BY-DEFAULT ROBOTS
 *
 * Until the real domain is confirmed, the site is running as a staging preview
 * with placeholder contact facts. We disallow all crawling so a placeholder page
 * never gets indexed under a temporary URL. The moment IDENTITY.domain is
 * confirmed, this flips to full allow with the sitemap advertised.
 */
export default function robots(): MetadataRoute.Robots {
  const domainConfirmed = IDENTITY.domain.status === 'confirmed'

  if (!domainConfirmed) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  const base = origin()
  return {
    rules: [{ userAgent: '*', allow: '/' }, { userAgent: AI_BOTS, allow: '/' }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
