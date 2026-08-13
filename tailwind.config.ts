import type { Config } from 'tailwindcss'

/**
 * DESIGN TOKENS — derived from the trade's own material world, not a template.
 *
 * Palette: patinated copper and galvanized steel. The river green reads as
 * Hiwassee/Ocoee water. Signal amber is reserved EXCLUSIVELY for emergency
 * and after-hours CTAs — using it anywhere else destroys its meaning.
 *
 * The colour tokens below are the swap point for brand colours when they land:
 * change the hex values here and the whole site follows. Everything else
 * (type scale, spacing, shadows, motion, blueprint motif) is colour-agnostic.
 *
 * Type: Archivo carries a utilitarian, stamped quality for display. Source Sans 3
 * is the workhorse. IBM Plex Mono is doing real work, not decoration: license
 * numbers, permit authority, and scope data render as spec-sheet facts.
 */
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // BRAND: Drain Pros TN — bold gold + royal navy + black on cream. Matches
        // the logo and the van wrap. Change these hex values to retune the brand.
        ink: '#14181F',            // near-black — body text and dark rules
        night: '#0C0E13',          // true black panel — black + gold (van-wrap / mascot feel)
        pine: '#15294F',           // royal navy — hero, header, footer, dark panels (logo navy)
        'pine-900': '#0E1D3A',     // deeper navy — gradients / overlays
        verdigris: '#D9A520',      // brand gold — primary buttons, wordmark, key borders
        'verdigris-700': '#B8860B', // darker gold — hover
        copper: '#8C6C12',         // deep gold — links, rules, eyebrows (legible on white)
        'copper-700': '#6E5410',
        galv: '#EDEEF0',           // cool light grey — cards, strips, section backgrounds
        bone: '#F5F6F8',           // cool near-white — alternating sections
        paper: '#FFFFFF',          // white page background
        steel: '#565B61',          // cool secondary text
        mist: '#A7B6C6',           // cool light — muted text on dark panels
        // EMERGENCY CTA ONLY. Red rather than amber, so it stays distinct from the
        // gold brand. Never decorative — this is the one hard design rule.
        signal: '#C93A2C',
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        body: ['var(--font-source)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.75rem,7vw,5.75rem)', { lineHeight: '0.94', letterSpacing: '-0.035em', fontWeight: '800' }],
        'display-xl': ['clamp(2.25rem,5vw,3.75rem)', { lineHeight: '0.98', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(1.75rem,3.6vw,2.6rem)', { lineHeight: '1.04', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(1.35rem,2.4vw,1.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'lead': ['1.2rem', { lineHeight: '1.6' }],
        'spec': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'eyebrow': ['0.72rem', { lineHeight: '1.3', letterSpacing: '0.16em' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,32,28,0.05), 0 10px 30px -18px rgba(20,32,28,0.28)',
        lift: '0 2px 6px rgba(20,32,28,0.06), 0 24px 48px -24px rgba(20,32,28,0.35)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      borderRadius: { none: '0', sm: '2px', DEFAULT: '3px', card: '5px', lg: '10px' },
      backgroundImage: {
        // Faint spec-sheet grid for hero / dark panels. Colour-agnostic.
        blueprint:
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
      },
      backgroundSize: { grid: '32px 32px' },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: { 'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both' },
    },
  },
  plugins: [],
} satisfies Config
