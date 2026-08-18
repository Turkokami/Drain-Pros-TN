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
  'pipe-repair-01.jpg': {
    alt: 'Underground drain line repair with new PVC and a wye fitting',
    caption: 'Underground drain line repair',
  },
  // Client note 2026-08-18: this is the BEFORE shot, not the finished work.
  // Labelling it plainly so it reads as a diagnosis rather than our handiwork.
  // An "after" photo exists and was emailed; swap or pair it in when we have it.
  'pipe-repair-02.jpg': {
    alt: 'Corroded cast iron pipe in a crawlspace, photographed before repair',
    caption: 'Before: corroded line found on inspection',
  },
  // Client note 2026-08-18: this is the new valve body (source file pipe2.jpg).
  // Named for what it is rather than described generically.
  'pipe-repair-03.jpg': {
    alt: 'New valve body installed on a residential water line',
    caption: 'New valve body installed',
  },
  'copper-repipe.jpg': {
    alt: 'Copper and PVC pipe work in a wall',
    caption: 'Copper and PVC pipe work',
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
  'water-service-pumpout.jpg': {
    alt: 'Pumping out a water meter box to work on the service line',
    caption: 'Pumping out a meter box to work the service line',
  },
}
