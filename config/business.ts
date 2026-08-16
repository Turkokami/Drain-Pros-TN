/**
 * BUSINESS REGISTRY — SINGLE SOURCE OF TRUTH
 *
 * Every fact about this business lives here and nowhere else. No page, component,
 * or schema file may hardcode a business fact. If you need one, import it.
 *
 * Facts carry a status. `confirmed` facts render. `pending` facts throw at build
 * time in production. This is deliberate: it is how we guarantee that a
 * placeholder phone number or an unverified license claim can never ship.
 *
 * To resolve a pending item: change status to 'confirmed', add the value, and
 * record the date and source. Nothing else in the codebase needs to change.
 */

export type Fact<T> =
  | { status: 'confirmed'; value: T; source: string; confirmedOn: string }
  | { status: 'pending'; blocks: string[]; askedOn?: string }

export class PendingFactError extends Error {
  constructor(key: string, blocks: string[]) {
    super(
      `Registry item "${key}" is still pending and blocks: ${blocks.join(', ')}.\n` +
        `Resolve it in config/business.ts before building for production.`
    )
    this.name = 'PendingFactError'
  }
}

/**
 * Read a fact. Throws in production if unresolved; returns null in dev so the
 * site still renders.
 *
 * STAGING escape hatch: setting STAGING=1 makes pending facts return null even in
 * a production build, so a preview deploy can go up with placeholders while facts
 * are gathered. This is opt-in and OFF by default — a real launch build (no
 * STAGING flag) still refuses to ship a placeholder phone number or unverified
 * claim. This mirrors the linter's BUILD_TARGET split; it does not weaken it.
 */
export function fact<T>(key: string, f: Fact<T>): T | null {
  if (f.status === 'confirmed') return f.value
  const stagingBypass = process.env.STAGING === '1'
  if (process.env.NODE_ENV === 'production' && !stagingBypass) {
    throw new PendingFactError(key, f.blocks)
  }
  return null
}

/** Read a fact or fall back to visible placeholder text in dev. */
export function factOr<T>(key: string, f: Fact<T>, fallback: T): T {
  return fact(key, f) ?? fallback
}

// ---------------------------------------------------------------------------
// CONFIRMED — verified from the Tennessee license card, August 2026
// ---------------------------------------------------------------------------

export const LICENSE = {
  holderName: {
    status: 'confirmed',
    value: 'Kevin Alex-Clayton Krishan',
    source: 'TN license card, photographed Aug 2026',
    confirmedOn: '2026-08-12',
  } as Fact<string>,

  /** Spelling is fixed. Hyphenated middle. Never normalize or autocorrect. */
  number: {
    status: 'confirmed',
    value: '5045',
    source: 'TN license card',
    confirmedOn: '2026-08-12',
  } as Fact<string>,

  classification: {
    status: 'confirmed',
    value: 'Limited Licensed Plumber',
    source: 'TN license card',
    confirmedOn: '2026-08-12',
  } as Fact<string>,

  issuingAuthority: {
    status: 'confirmed',
    value: 'Tennessee Department of Commerce and Insurance, Board for Licensing Contractors',
    source: 'TN license card',
    confirmedOn: '2026-08-12',
  } as Fact<string>,

  /** ISO date. A build after this date must fail — see scripts/check-registry.ts */
  expiresOn: {
    status: 'confirmed',
    value: '2027-05-31',
    source: 'TN license card',
    confirmedOn: '2026-08-12',
  } as Fact<string>,

  /** Per-project ceiling in USD. Work above requires CMC-A. */
  projectCeilingUsd: {
    status: 'confirmed',
    value: 25000,
    source: 'Confirmed directly by license holder, Aug 2026',
    confirmedOn: '2026-08-12',
  } as Fact<number>,

  verifyUrl: {
    status: 'confirmed',
    value: 'https://verify.tn.gov/',
    source: 'TN Board for Licensing Contractors public lookup',
    confirmedOn: '2026-08-12',
  } as Fact<string>,

  /** Confirmed OUT of scope. See config/services.ts — these must never be sold. */
  excludedWork: {
    status: 'confirmed',
    value: [
      'Septic system installation, repair, or pumping',
      'Well system installation or repair',
      'Any single project above the per-project ceiling',
    ],
    source: 'Confirmed directly by license holder, Aug 2026',
    confirmedOn: '2026-08-12',
  } as Fact<string[]>,
} as const

// ---------------------------------------------------------------------------
// PENDING — blocks production build until resolved
// ---------------------------------------------------------------------------

export const IDENTITY = {
  /** Registered entity. "Drain Pros TN" is the DBA and the public-facing name. */
  legalName: {
    status: 'confirmed',
    value: 'Alpha Services LLC',
    source: 'Client worksheet returned 2026-08-16 — "Alpha Services LLC DBA Drain Pros TN"',
    confirmedOn: '2026-08-16',
  } as Fact<string>,

  displayName: {
    status: 'confirmed',
    value: 'Drain Pros TN',
    source: 'Confirmed by client via GitHub repo and Vercel project naming (Drain-Pros-TN / drain-pros-tn)',
    confirmedOn: '2026-08-12',
  } as Fact<string>,

  entityType: {
    status: 'confirmed',
    value: 'LLC',
    source: 'Client worksheet returned 2026-08-16',
    confirmedOn: '2026-08-16',
  } as Fact<string>,

  /** Must be a dedicated business line with call tracking. NOT a personal cell. */
  phone: {
    status: 'confirmed',
    value: '(423) 413-6876',
    source: 'Confirmed by client — business number on the Drain Pros TN logo/marketing',
    confirmedOn: '2026-08-12',
  } as Fact<string>,

  /**
   * Client's current working address. It is a Gmail rather than a domain
   * mailbox; we advised a domain address and they chose this for now. Revisit
   * once the domain is registered — an @drainprostn.com address reads more
   * established and is worth the switch.
   */
  email: {
    status: 'confirmed',
    value: 'alphaservicesplumbing@gmail.com',
    source: 'Client worksheet returned 2026-08-16',
    confirmedOn: '2026-08-16',
  } as Fact<string>,

  /**
   * Housecall Pro online booking. Third-party hosted, so it is NOT under the
   * street-address rule enforced by lint check [1] — but it is still public and
   * still carries the brand, so it was inspected before being wired in. As of
   * 2026-08-16 the landing screen shows the logo, "Welcome to Drain Pros TN",
   * and a zip-code service-area gate: no address, no phone, nothing that leaks
   * the home location. Re-check if HCP account settings change, because we do
   * not control what that page renders.
   */
  bookingUrl: {
    status: 'confirmed',
    value:
      'https://book.housecallpro.com/book/Drain-Pros-TN/9b5b36f0b9c04d8d989aedbd6e16fb57?v2=true',
    source: 'Provided by client; landing screen inspected for address leakage 2026-08-16',
    confirmedOn: '2026-08-16',
  } as Fact<string>,

  /**
   * STILL THE BLOCKER. The client has NOT registered a domain. Their stated
   * preference is drainprostn.com. Until it is bought and pointed here, every
   * schema @id and canonical URL renders against a placeholder origin.
   * Register it, then set this to confirmed — nothing else needs to change.
   */
  domain: {
    status: 'pending',
    blocks: ['canonical URLs', 'sitemap', 'all schema @id values'],
    askedOn: '2026-08-16',
  } as Fact<string>,

  /**
   * COMBINED trade experience across both owners, NOT time in business. The
   * business was founded in 2025. Copy must never imply twenty years of Drain
   * Pros TN — say "two decades of combined experience" and nothing stronger.
   */
  combinedYearsInTrade: {
    status: 'confirmed',
    value: 20,
    source: 'Client worksheet returned 2026-08-16 — "a combined time of two decades between Kayla and Kevin"',
    confirmedOn: '2026-08-16',
  } as Fact<number>,

  foundedYear: {
    status: 'confirmed',
    value: 2025,
    source: 'Client worksheet returned 2026-08-16',
    confirmedOn: '2026-08-16',
  } as Fact<number>,
} as const

/**
 * OWNERSHIP
 *
 * The site was originally built around Kevin as a solo owner-operator. The
 * client worksheet corrected that: the business is owned by Kayla Krishan and
 * operated by both of them, and Kevin is the license holder. Two things follow.
 *
 * Copy must not describe a one-man operation or say work is "handled by the
 * license holder himself" — the client asked for exactly that change.
 *
 * And this is a woman-owned business, which is a genuine differentiator no
 * competitor in the August 2026 analysis surfaces. It belongs on the about page
 * and in the trust blocks, stated plainly rather than as a badge.
 */
export const OWNERSHIP = {
  owner: {
    status: 'confirmed',
    value: 'Kayla Krishan',
    source: 'Client worksheet returned 2026-08-16 — "LLC owner: Kayla Krishan"',
    confirmedOn: '2026-08-16',
  } as Fact<string>,

  womanOwned: {
    status: 'confirmed',
    value: true,
    source: 'Client worksheet returned 2026-08-16 — "Woman Owned business, owned by Kayla Krishan"',
    confirmedOn: '2026-08-16',
  } as Fact<boolean>,

  /** Both operate the business day to day. The license is Kevin's. */
  operators: {
    status: 'confirmed',
    value: [
      {
        name: 'Kayla Krishan',
        role: 'Owner',
        background: 'Started in the trade with Roto-Rooter',
      },
      {
        name: 'Kevin Alex-Clayton Krishan',
        role: 'Licensed plumber, TN LLP #5045',
        background:
          'Gas system installation and service, moving into the water and sewer side of plumbing',
      },
    ],
    source: 'Client worksheet returned 2026-08-16',
    confirmedOn: '2026-08-16',
  } as Fact<Array<{ name: string; role: string; background: string }>>,
} as const

export const OPERATIONS = {
  /**
   * Real availability. Not aspirational. If he does not actually answer at 2 AM,
   * this must say so — the emergency positioning depends on it being true.
   */
  hours: {
    status: 'confirmed',
    value: { afterHours: true, weekends: true, note: '24/7 emergency service' },
    source: 'Confirmed by client — "24/7 Emergency" on the van wrap, banner, and flyer',
    confirmedOn: '2026-08-13',
  } as Fact<{ afterHours: boolean; weekends: boolean; note: string }>,

  /**
   * Drive time, not radius — the client answered in minutes and named explicit
   * exclusions that are inside the hour but still out of area. Honour the
   * exclusion list over the drive time.
   */
  serviceDriveTimeMinutes: {
    status: 'confirmed',
    value: 60,
    source: 'Client worksheet returned 2026-08-16 — "within 1hr drive time one way"',
    confirmedOn: '2026-08-16',
  } as Fact<number>,

  /** Named by the client as OUT of area even though some are inside the hour. */
  excludedAreas: {
    status: 'confirmed',
    value: ['Dayton', 'Soddy-Daisy', 'Lookout Mountain'],
    source: 'Client worksheet returned 2026-08-16',
    confirmedOn: '2026-08-16',
  } as Fact<string[]>,

  insurance: {
    status: 'confirmed',
    value: { carrier: 'UFG Insurance', generalLiabilityUsd: 1_000_000, umbrella: true },
    source: 'Client worksheet returned 2026-08-16 — "UFG Insurance, 1 million general liability with an umbrella policy"',
    confirmedOn: '2026-08-16',
  } as Fact<{ carrier: string; generalLiabilityUsd: number; umbrella: boolean }>,

  /**
   * STANDING RULE: defined-term warranties only. Never publish unqualified
   * "lifetime" wording. A brandable guarantee name backed by written terms is fine.
   */
  /**
   * Defined-term warranty, which is what the standing rule requires. Two
   * distinct terms — publish BOTH wherever warranty language appears, and never
   * compress them into one number. The closet-auger exclusion is the client's
   * wording and is deliberate; do not soften it.
   */
  warranty: {
    status: 'confirmed',
    value: {
      workmanshipMonths: 12,
      drainCleaningDays: 30,
      terms:
        'One-year workmanship warranty on plumbing from the date of completion. Applies only to ' +
        'the specific work performed and does not cover unrelated or pre-existing plumbing ' +
        'conditions. Drain cleaning carries a 30-day warranty unless specified otherwise, ' +
        'excluding closet augers.',
    },
    source: 'Client worksheet returned 2026-08-16',
    confirmedOn: '2026-08-16',
  } as Fact<{ workmanshipMonths: number; drainCleaningDays: number; terms: string }>,

  /**
   * They do not solicit Facebook reviews at all — everything goes to the Google
   * Business Profile. So the baseline is zero and there is nothing to migrate;
   * the review programme starts on Google.
   */
  reviewPlatform: {
    status: 'confirmed',
    value: { platform: 'Google Business Profile', facebookReviewsRequested: false },
    source: 'Client worksheet returned 2026-08-16 — "we do not request reviews on facebook, only on our google business profile"',
    confirmedOn: '2026-08-16',
  } as Fact<{ platform: string; facebookReviewsRequested: boolean }>,

  /** Roughly 15-20 jobs a week. Sets a realistic review-generation target. */
  jobsPerWeek: {
    status: 'confirmed',
    value: { low: 15, high: 20 },
    source: 'Client worksheet returned 2026-08-16',
    confirmedOn: '2026-08-16',
  } as Fact<{ low: number; high: number }>,
} as const

// ---------------------------------------------------------------------------
// SERVICE AREA BUSINESS — hard constraint
// ---------------------------------------------------------------------------

/**
 * HOME-BASED. The street address is NEVER published — not on the site, not in
 * schema, not in a single citation, not on the GBP.
 *
 * There is intentionally no `streetAddress` field anywhere in this codebase.
 * Do not add one. Do not embed a map centered on the home. Do not write
 * "visit us". Publishing it risks GBP suspension and puts a residential
 * address into permanent circulation.
 */
export const SAB = {
  isServiceAreaBusiness: true,
  publishStreetAddress: false,
  addressLocality: 'Charleston',
  addressRegion: 'TN',
  postalCode: '37310',
  country: 'US',
  /** Town-center centroid for areaServed geometry. NOT the home address. */
  approximateCenter: { lat: 35.2856, lng: -84.7616 },
} as const

export const NAP_RULE = `
Canonical NAP is: {displayName} + {phone} + "Charleston, TN".
Use this exact string in every citation. No street address. No variants.
` as const
