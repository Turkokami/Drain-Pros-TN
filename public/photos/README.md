# Work photos

Drop real job photos into this folder (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`)
and they appear automatically in the "Recent work" gallery on the home page —
no code change needed. The gallery hides itself when the folder is empty.

- Use descriptive filenames (e.g. `sewer-camera-inspection.jpg`,
  `water-heater-replacement.jpg`). They become part of the image URL.
- To add a caption + better alt text, add an entry keyed by the exact filename in
  `content/gallery-captions.ts`.
- Keep files reasonably sized (large phone photos are fine; multi-MB is okay but
  smaller loads faster).

The company logo goes in `public/` as `logo.png` (or `logo.svg`) — ask Claude to
wire it into the header once it's there.
