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
  'water-heater-01.jpg': {
    alt: 'Water heater work in a Tennessee home',
    caption: 'Water heater service',
  },
  'water-heater-02.jpg': {
    alt: 'Water heater in a crawlspace',
    caption: 'Water heater in a crawlspace',
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
  'pipe-repair-03.jpg': {
    alt: 'Pipe repair on a residential line',
    caption: 'Pipe repair',
  },
  // Client note 2026-08-18: "would be a new valve body" - named correctly rather
  // than described generically.
  'copper-repipe.jpg': {
    alt: 'New valve body installed in a wall recess with copper supply lines',
    caption: 'New valve body installed',
  },
  'toilet-work-01.jpg': {
    alt: 'Toilet repair and reset',
    caption: 'Toilet repair and reset',
  },
  'toilet-work-02.jpg': {
    alt: 'Toilet rebuild',
    caption: 'Toilet rebuild',
  },
  'hose-bib-before.jpg': {
    alt: 'A broken outdoor spigot (hose bib) before repair',
    caption: 'Broken outdoor spigot — before',
  },
  'hose-bib-after.jpg': {
    alt: 'A repaired outdoor spigot (hose bib)',
    caption: 'The same hose bib — repaired',
  },
  'water-service-pumpout.jpg': {
    alt: 'Pumping out a water meter box to work on the service line',
    caption: 'Pumping out a meter box to work the service line',
  },
}
