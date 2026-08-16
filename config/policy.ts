/**
 * PUBLISHING POLICY
 *
 * What the WEBSITE publishes. Distinct from what the license permits — that
 * still lives in config/services.ts and config/jurisdictions.ts and is still
 * true. This file only decides how much of it the marketing site puts in front
 * of a visitor.
 *
 * ---------------------------------------------------------------------------
 * CHANGED 2026-08-16, BY CLIENT DIRECTION.
 *
 * The site originally withheld permit-required services in any jurisdiction
 * whose permit authority was not confirmed, and disclosed the per-project
 * ceiling inline. The client has since directed that the office qualifies
 * permitting and job size at intake, not the website. The site's job is to
 * present the complete service list and route the lead; the office decides
 * what it takes, subcontracts, or refers once it has the job in hand.
 *
 * That is a normal division of labor — advertising a service and performing it
 * are different acts, and permit responsibility is settled per job, not per
 * page. The jurisdiction data below is NOT deleted, because the office still
 * needs it. It simply no longer gates what publishes.
 * ---------------------------------------------------------------------------
 *
 * To restore the original fail-safe behavior, flip these back to true. The
 * guard, the linter, and every page follow from these three fields — nothing
 * else needs to change.
 */

export const PUBLISHING = {
  /**
   * When true, permit-required services are withheld from location pages whose
   * jurisdiction is not confirmed 'full'. When false, the full service list
   * publishes everywhere and permitting is handled at intake.
   */
  gateServicesByPermitAuthority: false,

  /**
   * When true, size-dependent services render a per-project ceiling disclosure.
   * When false, job size is qualified by the office during the estimate.
   */
  publishCeilingDisclosure: false,

  /**
   * When true, location pages render a "referred to a partner here" block
   * listing what is withheld locally. Meaningless when gating is off, since
   * nothing is withheld.
   */
  publishWithheldBlock: false,
} as const

/**
 * NOT AFFECTED BY THE ABOVE, DELIBERATELY.
 *
 * Septic systems, well systems, and commercial new construction remain out of
 * scope in config/services.ts and are still hard-blocked by the guard. That is
 * a licensure question, not a permitting one: a Limited Licensed Plumber is not
 * credentialed for that work in Tennessee at all, so no office process makes it
 * sellable. The site continues to sell the house-side work on those properties
 * — which is real, in scope, and already a service pillar.
 */
export const OUT_OF_SCOPE_REMAINS_ENFORCED = true
