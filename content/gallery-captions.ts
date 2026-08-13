/**
 * Optional captions for the work gallery, keyed by the exact filename in
 * public/photos. Any photo without an entry still shows, just without a caption.
 * Fill these in as real job photos are added.
 *
 * Example:
 *   'sewer-camera-inspection.jpg': {
 *     alt: 'Sewer camera inspection at an exterior cleanout in Charleston, TN',
 *     caption: 'Camera inspection before any digging — see the line, then decide.',
 *   },
 */
export const GALLERY_CAPTIONS: Record<string, { alt: string; caption?: string }> = {}
