/**
 * PERMIT SUBSECTION
 *
 * Client direction, 2026-08-16: permit talk comes OUT of service descriptions
 * and lives in one subsection of its own, which states when a permit is
 * required and that the call belongs to the Authority Having Jurisdiction.
 *
 * Two reasons this is the right shape. Permit rules vary by address and change
 * without notice, so a blanket claim inside a service description ages badly
 * and can be wrong for a particular town. And a customer reading about drain
 * cleaning does not want a paragraph on permitting — they want to know we will
 * clear the drain. Putting it in one labelled block means the people who care
 * can read it and everyone else can skip it.
 *
 * The lists below are guidance, not a ruling, and the copy says so. The AHJ
 * decides. Do not reintroduce permit prose into service copy — this is the one
 * place it belongs.
 */

export function PermitNote() {
  return (
    <section
      aria-labelledby="permit-heading"
      className="rounded-card border-l-4 border-copper bg-galv p-6"
    >
      <h2 id="permit-heading" className="font-mono text-spec uppercase text-steel">
        Permits
      </h2>

      <p className="mt-3 max-w-prose text-ink/90">
        Some plumbing work requires a permit and an inspection, and some does not. Whether one is
        required for your job is determined by the{' '}
        <strong>Authority Having Jurisdiction</strong> — the city or county building and codes
        office for your address — and it is at their discretion.
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <h3 className="font-mono text-spec uppercase text-copper">Usually requires a permit</h3>
          <ul className="mt-2 space-y-1 text-sm text-ink/90">
            <li>Water heater replacement and tankless conversion</li>
            <li>Whole-house repiping</li>
            <li>Water service line and sewer line replacement</li>
            <li>Gas line installation and repair</li>
            <li>Relocating a fixture to a new position</li>
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-spec uppercase text-copper">Usually does not</h3>
          <ul className="mt-2 space-y-1 text-sm text-ink/90">
            <li>Drain cleaning and clearing blockages</li>
            <li>Emergency and repair work</li>
            <li>Like-for-like fixture replacement</li>
            <li>Water heater repair</li>
            <li>Camera inspection and diagnostics</li>
          </ul>
        </div>
      </div>

      <p className="mt-5 max-w-prose text-sm text-steel">
        This is general guidance rather than a ruling, and it can differ from one town to the next.
        The Authority Having Jurisdiction makes the determination. Where a permit is required, our
        office pulls it and books the inspection as part of the job.
      </p>
    </section>
  )
}
