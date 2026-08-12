import type { Metadata } from 'next'
import { Archivo, Source_Sans_3, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader, SiteFooter, StickyCallBar } from '@/components/SiteChrome'
import { businessName } from '@/lib/site'
import { origin } from '@/lib/schema/graph'

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', display: 'swap' })
const source = Source_Sans_3({ subsets: ['latin'], variable: '--font-source', display: 'swap' })
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

const name = businessName()

export const metadata: Metadata = {
  metadataBase: new URL(origin()),
  title: {
    default: `${name} — Licensed Plumber, Charleston & the Bradley–McMinn Corridor, TN`,
    template: `%s | ${name}`,
  },
  description:
    'Licensed Tennessee plumber serving Charleston, Cleveland, Athens, and the US-11 corridor, ' +
    'plus greater Chattanooga. Drain cleaning, emergency repair, water heaters. TN license #5045.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${source.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:block focus:p-3">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1 pb-14 md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <StickyCallBar />
      </body>
    </html>
  )
}
