/**
 * Captions + alt text for the work gallery, keyed by the exact filename in
 * public/photos. Any photo without an entry still shows, just without a caption.
 * These are categorized from the source filenames — tweak any that are off.
 */
export const GALLERY_CAPTIONS: Record<string, { alt: string; caption?: string }> = {
  'drain-cleaning-01.jpg': {
    alt: 'Drain cleaning with a drain machine at a home in the Charleston TN corridor',
    caption: 'Clearing a blocked drain line',
  },
  'drain-cleaning-02.jpg': {
    alt: 'Cabling a blocked drain line',
    caption: 'Cabling a stubborn drain',
  },
  'drain-cleaning-03.jpg': {
    alt: 'Running a drain machine at an outdoor cleanout',
    caption: 'Clearing a main line from the cleanout',
  },
  'drain-cleaning-04.jpg': {
    alt: 'Drain cleaning on a residential line',
    caption: 'Drain cleaning on site',
  },
  'sewer-camera-01.jpg': {
    alt: 'Sewer camera inspection at a cleanout',
    caption: 'Camera inspection — see the line before any digging',
  },
  'sewer-camera-02.jpg': {
    alt: 'Sewer camera inspection rig on the job',
    caption: 'Sewer camera on site',
  },
  // BEFORE/AFTER PAIR (source waterheater1.jpg / waterheater2.jpg). Same job,
  // both ends - confirmed by client 2026-08-18. Render them together via
  // beforeAfterPairs() in lib/gallery.ts; separated they read as two unrelated
  // jobs, which is what they were doing before this was flagged.
  'water-heater-01.jpg': {
    alt: 'The old water heater in place before replacement',
    caption: 'Before',
  },
  'water-heater-02.jpg': {
    alt: 'The replacement water heater installed and connected',
    caption: 'After',
  },
  // Client correction 2026-08-18, confirmed against the photograph: this is the
  // water METER in its pit with copper service line running out into the
  // trench, joined with a compression coupling. It is a water service repair on
  // the house side of the meter, not a drain line.
  'pipe-repair-01.jpg': {
    alt: 'Copper water service line repaired in a trench just past the water meter',
    caption: 'Water service line repair after the meter',
  },
  // Client note 2026-08-18: this is the BEFORE shot, not the finished work.
  // Labelling it plainly so it reads as a diagnosis rather than our handiwork.
  // An "after" photo exists and was emailed; swap or pair it in when we have it.
  'pipe-repair-02.jpg': {
    alt: 'Corroded cast iron pipe in a crawlspace, photographed before repair',
    caption: 'Before: corroded line found on inspection',
  },
  // Source pipe2.jpg. Inspected the photograph directly: new PVC drain main
  // tied into the existing cast iron with a coupling. Not a valve body - that
  // is copper-repipe.jpg. Client asked for it captioned as a partial cast iron
  // replacement and moved off the fixtures page, which is correct: this is
  // drain work, not fixture work.
  'pipe-repair-03.jpg': {
    alt: 'New PVC main drain line tied into existing cast iron in a crawlspace',
    caption: 'Partial cast iron replacement',
  },
  // The "copper and valve body" photo. Brass mixing valve with copper supply,
  // tub spout drop and shower riser - named by the client 2026-08-18.
  'copper-repipe.jpg': {
    alt: 'New tub and shower valve body with copper supply lines in an open wall',
    caption: 'New tub/shower valve body',
  },
  // BEFORE/AFTER PAIR (source toilet1.jpg / toilet2.jpg). Same job, both ends -
  // confirmed by client 2026-08-18.
  'toilet-work-01.jpg': {
    alt: 'Toilet pulled and the flange exposed, before the repair',
    caption: 'Before',
  },
  'toilet-work-02.jpg': {
    alt: 'The same toilet reset and finished after the repair',
    caption: 'After',
  },
  // BEFORE/AFTER PAIR (source Broken spigot.jpg / repaired spigot.jpg).
  'hose-bib-before.jpg': {
    alt: 'A broken outdoor spigot before repair',
    caption: 'Before',
  },
  'hose-bib-after.jpg': {
    alt: 'The same outdoor spigot after repair',
    caption: 'After',
  },
  // Pumping the flooded meter pit dry so the service line can be worked on -
  // part of the same kind of job as pipe-repair-01.
  'water-service-pumpout.jpg': {
    alt: 'Pumping out a water meter box to work on the service line',
    caption: 'Pumping out a meter box to work the service line',
  },
}
