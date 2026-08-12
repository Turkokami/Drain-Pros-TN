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
        ink: '#14201C',        // near-black with a green cast — river depth
        pine: '#0E1814',       // deepest panel — dark sections, hero underlay
        verdigris: '#2E7268',  // patinated copper — primary
        'verdigris-700': '#245C53',
        copper: '#B4633A',     // raw copper — accent, links, rules
        'copper-700': '#8F4C2A',
        galv: '#E7EAE8',       // galvanized sheet — cool section backgrounds
        bone: '#F1EEE7',       // warm off-white — alternating sections
        paper: '#F8F9F8',      // page background
        steel: '#5A6663',      // secondary text
        mist: '#8A938F',       // tertiary / on-dark muted
        signal: '#E8A317',     // EMERGENCY CTA ONLY. Never decorative.
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
