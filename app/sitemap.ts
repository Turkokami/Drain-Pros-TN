import type { MetadataRoute } from 'next'
import { SERVICES } from '@/config/services'
import { LOCATIONS } from '@/config/locations'
import { origin } from '@/lib/schema/graph'

/**
 * Sitemap driven entirely by the registries, so it can never drift from what the
 * site actually renders. Base URL comes from `origin()`, which is the confirmed
 * domain once set and a dev placeholder until then.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = origin()
  const now = new Date()

  const staticRoutes = ['', '/services', '/service-areas', '/about', '/contact', '/reviews']
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`)
  const locationRoutes = LOCATIONS.map((l) => `/service-areas/${l.slug}`)

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))
}
