/**
 * PERMIT JURISDICTION MAP
 *
 * A Tennessee Limited Licensed Plumber is accepted to pull permits statewide
 * EXCEPT in the largest municipalities. Chattanooga is confirmed excluded and
 * sits inside the service footprint.
 *
 * This is a GEOGRAPHIC constraint, not a service constraint. Work can still be
 * performed inside Chattanooga — only permit-required work is off the table.
 *
 * VERIFIED 2026-08-16 — all thirteen answered by the client. Six accept a
 * permit from LLP #5045 with a 1-3 day turnaround; four do not; three cover
 * areas the client does not serve. As of 2026-08-16 this no
 * longer restricts what a location page publishes — see config/policy.ts. This
 * data now tells the OFFICE which desk a permitted job files with and how long
 * each one takes, which is scheduling information rather than a publishing gate.
 *
 * Keep it accurate anyway. If the gate is ever switched back on, every page
 * follows from these values again.
 */

export type PermitAuthority =
  /** Confirmed he can pull permits here. Full service list renders. */
  | 'full'
  /** Confirmed he cannot. Permit-free services only. */
  | 'none'
  /** Not yet verified. Treated as 'none' until someone calls the office. */
  | 'unverified'

export type County =
  | 'Bradley'
  | 'McMinn'
  | 'Hamilton'
  | 'Polk'
  | 'Meigs'
  | 'Rhea'

export interface Jurisdiction {
  /** The body that issues plumbing permits here. */
  id: string
  name: string
  county: County
  permitAuthority: PermitAuthority
  /** Who to call to verify. Fill in as verification proceeds. */
  verificationContact?: string
  verifiedOn?: string
  note?: string
}

export const JURISDICTIONS: Record<string, Jurisdiction> = {
  // --- CONFIRMED --------------------------------------------------------
  'city-of-chattanooga': {
    id: 'city-of-chattanooga',
    name: 'City of Chattanooga',
    county: 'Hamilton',
    permitAuthority: 'none',
    verifiedOn: '2026-08-12',
    note:
      'Confirmed by license holder: LLP is not accepted to pull permits in Chattanooga, ' +
      'Knoxville, or Nashville. Permit-free work only. Drain cleaning is the wedge here.',
  },

  // --- UNVERIFIED — BLOCKING ---------------------------------------------
  // Each of these must be called individually. Do not assume county rules
  // apply inside incorporated towns; most administer their own permitting.

  'bradley-county': {
    id: 'bradley-county',
    name: 'Bradley County',
    county: 'Bradley',
    permitAuthority: 'full',
    verifiedOn: '2026-08-16',
    verificationContact: 'Bradley County Building & Codes',
    note: 'Accepts LLP #5045. Permit turnaround 1-3 days.',
  },
  'city-of-cleveland': {
    id: 'city-of-cleveland',
    name: 'City of Cleveland',
    county: 'Bradley',
    permitAuthority: 'full',
    verifiedOn: '2026-08-16',
    verificationContact: 'Cleveland Building & Codes Department',
    note: 'Accepts LLP #5045. Permit turnaround 1-3 days.',
  },
  'mcminn-county': {
    id: 'mcminn-county',
    name: 'McMinn County',
    county: 'McMinn',
    permitAuthority: 'full',
    verifiedOn: '2026-08-16',
    verificationContact: 'McMinn County Building Inspector',
    note: 'Accepts LLP #5045. Permit turnaround 1-3 days.',
  },
  'city-of-athens': {
    id: 'city-of-athens',
    name: 'City of Athens',
    county: 'McMinn',
    permitAuthority: 'full',
    verifiedOn: '2026-08-16',
    verificationContact: 'Athens Codes Enforcement',
    note: 'Accepts LLP #5045. Permit turnaround 1-3 days.',
  },
  'hamilton-county': {
    id: 'hamilton-county',
    name: 'Hamilton County (unincorporated)',
    county: 'Hamilton',
    permitAuthority: 'none',
    verifiedOn: '2026-08-16',
    verificationContact: 'Hamilton County Building Inspection',
    note: 'Does NOT accept a permit application from an LLP. Permitted work here files through a licensed partner.',
  },
  'city-of-collegedale': {
    id: 'city-of-collegedale',
    name: 'City of Collegedale',
    county: 'Hamilton',
    permitAuthority: 'none',
    verifiedOn: '2026-08-16',
    verificationContact: 'Collegedale Building & Codes',
    note: 'Does NOT accept a permit application from an LLP. Permitted work here files through a licensed partner.',
  },
  'city-of-soddy-daisy': {
    id: 'city-of-soddy-daisy',
    name: 'City of Soddy-Daisy',
    county: 'Hamilton',
    permitAuthority: 'none',
    verifiedOn: '2026-08-16',
    note: 'Not applicable — the client does not serve Soddy-Daisy. See OPERATIONS.excludedAreas.',
  },
  'city-of-red-bank': {
    id: 'city-of-red-bank',
    name: 'City of Red Bank',
    county: 'Hamilton',
    permitAuthority: 'none',
    verifiedOn: '2026-08-16',
    note: 'Does NOT accept a permit application from an LLP. Permitted work here files through a licensed partner.',
  },
  'city-of-east-ridge': {
    id: 'city-of-east-ridge',
    name: 'City of East Ridge',
    county: 'Hamilton',
    permitAuthority: 'none',
    verifiedOn: '2026-08-16',
    note: 'Does NOT accept a permit application from an LLP. Permitted work here files through a licensed partner.',
  },
  'town-of-signal-mountain': {
    id: 'town-of-signal-mountain',
    name: 'Town of Signal Mountain',
    county: 'Hamilton',
    permitAuthority: 'none',
    verifiedOn: '2026-08-16',
    note: 'Not applicable — outside the served area.',
  },
  'polk-county': {
    id: 'polk-county',
    name: 'Polk County',
    county: 'Polk',
    permitAuthority: 'full',
    verifiedOn: '2026-08-16',
    note: 'Accepts LLP #5045. Permit turnaround 1-3 days.',
  },
  'meigs-county': {
    id: 'meigs-county',
    name: 'Meigs County',
    county: 'Meigs',
    permitAuthority: 'full',
    verifiedOn: '2026-08-16',
    note: 'Accepts LLP #5045. Permit turnaround 1-3 days.',
  },
  'rhea-county': {
    id: 'rhea-county',
    name: 'Rhea County',
    county: 'Rhea',
    permitAuthority: 'none',
    verifiedOn: '2026-08-16',
    note: 'Not applicable — Dayton is outside the served area. See OPERATIONS.excludedAreas.',
  },
}

/** Fails safe: anything not explicitly 'full' cannot carry permitted work. */
export function canPullPermit(jurisdictionId: string): boolean {
  return JURISDICTIONS[jurisdictionId]?.permitAuthority === 'full'
}

export function pendingVerification(): Jurisdiction[] {
  return Object.values(JURISDICTIONS).filter((j) => j.permitAuthority === 'unverified')
}
