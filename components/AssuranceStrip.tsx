/**
 * ASSURANCE STRIP — license, insurance, and warranty as checkable data.
 *
 * Same argument as CredentialStrip, extended to the two facts that were pending
 * until the client worksheet came back on 2026-08-16. Every competitor in the
 * August 2026 analysis claims to be "licensed and insured" and not one of them
 * publishes a license number, a carrier, or a warranty term. Printing all three
 * as a spec sheet is the whole differentiator — a claim someone can check beats
 * an adjective.
 *
 * Each row renders only when its fact is confirmed. Nothing here invents a
 * value or softens a limit: the warranty prints both terms and the closet-auger
 * exclusion, because a warranty with visible edges is more credible than a
 * vague one.
 */

import {
  licenseNumber,
  insurance,
  warranty,
  isWomanOwned,
  foundedYear,
  combinedYearsInTrade,
} from '@/lib/site'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="spec-row">
      <dt className="spec-label">{label}</dt>
      <dd className="spec-value text-right">{children}</dd>
    </div>
  )
}

export function AssuranceStrip({ heading = 'What we put in writing' }: { heading?: string }) {
  const ins = insurance()
  const w = warranty()
  const founded = foundedYear()
  const years = combinedYearsInTrade()

  return (
    <section aria-labelledby="assurance-heading" className="border border-ink/15 bg-galv p-6">
      <h2 id="assurance-heading" className="font-mono text-spec uppercase text-steel">
        {heading}
      </h2>

      <dl className="mt-4">
        <Row label="License">
          TN Limited Licensed Plumber #{licenseNumber()}
        </Row>

        {ins && (
          <Row label="Insurance">
            {ins.carrier} · ${(ins.generalLiabilityUsd / 1_000_000).toFixed(0)}M general liability
            {ins.umbrella ? ' + umbrella' : ''}
          </Row>
        )}

        {w && (
          <Row label="Workmanship">
            {w.workmanshipMonths} months from completion
          </Row>
        )}

        {w && (
          <Row label="Drain cleaning">
            {w.drainCleaningDays} days · excludes closet augers
          </Row>
        )}

        {years && <Row label="Experience">{years}+ years combined</Row>}

        {founded && (
          <div className="spec-row border-b-0">
            <dt className="spec-label">Established</dt>
            <dd className="spec-value text-right">
              {founded}
              {isWomanOwned() ? ' · woman-owned' : ''}
            </dd>
          </div>
        )}
      </dl>

      {w && (
        <p className="mt-4 max-w-prose font-body text-sm text-steel">
          The workmanship warranty covers the specific work performed. It does not extend to
          unrelated or pre-existing plumbing conditions, and we would rather say that here than
          discover it with you later.
        </p>
      )}
    </section>
  )
}
