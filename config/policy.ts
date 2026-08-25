/**
 * PUBLISHING POLICY
 *
 * What the WEBSITE publishes. Distinct from what the license permits — that
 * still lives in config/services.ts and config/jurisdictions.ts and is still
 * true. This file only decides how much of it the marketing site puts in front
 * of a visitor.
 *
 * ---------------------------------------------------------------------------
 * REVERSED 2026-08-25. The gate is back ON.
 *
 * The 2026-08-16 change below rested on the office "handling permitting" in
 * jurisdictions that decline the licence. Checking with the license holder,
 * that is not the arrangement: in Hamilton County the JOB IS REFERRED to a
 * licensed partner, who performs the work and attends the inspection. Drain
 * Pros does not do it.
 *
 * So the earlier reasoning does not hold. Advertising a service on a page for
 * a town where someone else performs it is not under-selling avoided, it is a
 * claim about who does the work that is not true. The gate goes back on, and
 * the referral is described in plain copy rather than implied.
 *
 * This affects Hamilton County only. Bradley, Cleveland, Athens, McMinn, Polk
 * and Meigs all confirmed they accept an application from #5045, so the
 * corridor - the actual revenue market - is untouched.
 * ---------------------------------------------------------------------------
 *
 * SUPERSEDED — CHANGED 2026-08-16, BY CLIENT DIRECTION.
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
  gateServicesByPermitAuthority: true,

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
  publishWithheldBlock: true,
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
