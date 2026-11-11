# Keyword fixes, November 2026

Implements `DrainProsTN-Keyword-Fixes-Nov2026.pdf`. Two commits, branch
`seo/drainpros-keyword-fixes-nov-2026`. Nothing pushed to `main`.

**74 titles changed, 1 H1 changed, 102 pages rebuilt.** No slug changed, no
NAP/license/phone touched, woman-owned positioning kept.

---

## Acceptance checklist

| Check | Result |
|---|---|
| No slug changes | PASS |
| NAP, license, phone untouched | PASS (`config/business.ts` diff is empty) |
| Woman-owned positioning kept | PASS (title H1 + eyebrow) |
| Titles <= 60 chars | PASS (102/102) |
| No duplicate titles | PASS |
| Metas <= 155 chars | PASS (102/102; 97 were over before) |
| One H1 per page | PASS |
| "TN Corridor" gone from titles | PASS |
| Never bare "Charleston" in a title | PASS |
| FAQPage JSON-LD, 3+ Q&As, parses | PASS |
| No out-of-scope work presented as offered | PASS |
| No Middle/West TN town presented as served | PASS |
| No `streetAddress` | PASS |
| Build passes | PASS (`lint:scope:prod` PASS, 63 withheld, typecheck clean) |

---

## Three things in the brief that the registry already answers

**Athens is not a draft - it is already live.** The brief lists Athens under
"needs Kevin's confirmation, build as noindex". `/service-areas/athens-tn` has
been published since Phase 2, is `tier: 'primary'`, and `CLAUDE.md` ranks
Athens / McMinn County as market priority #3, "weakest competitor field in the
region". It now carries 70 inbound internal links. Making it noindex would be
a regression, so it was left published. No action needed.

**Dayton is explicitly excluded, not unconfirmed.**
`OPERATIONS.excludedAreas` records `['Dayton', 'Soddy-Daisy', 'Lookout
Mountain']`. The brief proposes a Dayton draft page pending confirmation; the
registry already says no. Not built. This only needs Kevin if he wants the
exclusion changed.

**A septic city page cannot be built.** The brief notes competitors ranking for
"septic tank service cleveland tn". Septic *system* work is a hard licensure
block in the guard, not a policy flag - no office process makes it sellable.
The existing property pages (`/services/septic-property-plumbing`) already
capture the legal half, lead with "Plumbing for...", and disclose the exclusion
in the meta.

## One deviation

The brief proposes "Sump Pump Not Working? 7 Things to Check". That page lists
five causes and five symptoms, not seven of anything, so the title would
overstate its own content. Used **"Sump Pump Not Working? What to Check
First"**.

---

## Needs Kevin's confirmation

**Tankless flushing / descaling.** Search Console shows "tankless water heater
cleaning ooltewah" at 25 impressions, position 12.8. The only tankless service
in the registry is `tankless-water-heater-installation`; there is no flushing
or maintenance service. Two questions, because the answer to the second
decides where it can publish:

1. Does Drain Pros do tankless descaling / flushing as a service?
2. If so, is it permit-free? Tankless *installation* is permit-required and is
   therefore withheld in the seven Hamilton County towns, Ooltewah included.
   If flushing is maintenance rather than installation, it could publish there
   - which is where the search is coming from.

Nothing was added for this. No draft page was created.

---

## How title length is handled now

The root layout appends `" | Drain Pros TN"` (16 chars) through
`title.template`. That pushed keyword-bearing titles past 60, where Google
truncates - and the searched words are what get cut. `buildMetadata` now
measures the composed title and emits an absolute title (dropping the brand
suffix) when it would run long. The brand is still in the H1, the URL and the
knowledge panel.

Same idea for metas: `trimMeta` cuts at a sentence boundary where one fits,
a word boundary otherwise, never mid-word.

---

## Internal linking added

Cross-cluster links were impossible before, because a page could only reach its
own bound service's children. Two optional registry fields fix that:
`relatedServices` and `relatedGuides`, on both `Problem` and `Guide`.

- All five P3 drain pages now link **both** `drain-cleaning` and
  `camera-inspection`. `root-intrusion` - 675 impressions at position 78, the
  second largest impression page on the site - previously linked neither
  drain cleaning nor the hydro-jetting guide.
- All ten sump pages now link **both** sump services.
- The three sump pages that actually discuss outlets, breakers or a dedicated
  circuit now link `/guides/what-we-refer-out`. The electrical boundary was
  already stated in prose on each of them.
- Homepage links Cleveland with the anchor "plumber in Cleveland, TN".

Every town link still runs through `assertSellable`, so the link graph cannot
contradict the guard. Withheld count is unchanged at 63.

---

## Already satisfied - verified, not changed

- FAQPage JSON-LD with 3+ Q&As on every problem and guide page
- Town pages link `/about` and `/reviews` (footer + `CredentialStrip`)
- `/permits/polk-county` links Benton
- `/services/water-heater-replacement` links `/guides/expansion-tanks`
- `/services/drain-cleaning` links `/guides/hydro-jetting-vs-cabling`
- All four host variants 301 to `https://www.drainprostn.com` in one hop
- `LocalBusiness` schema has locality + region and no street address; the
  license is on the `Person` node that holds it, with `recognizedBy` and
  `validThrough`
- "McMinnville" appears nowhere in the repo

---

## Still outside the repo

The largest single lever is still not a code change. `http://drainprostn.com/`
holds **5,322 of 13,450 impressions and 20 of 37 clicks** at position 1.6 -
those are Google Business Profile map impressions, which is why a site with
three backlinks appears to rank #1-3 for "plumber" and "emergency plumber".
Repointing the GBP website field is the fix, and it is five minutes.

---

## Old -> new titles

| Page | Old title | New title |
|---|---|---|
| `/` | Woman-Owned Plumber in Charleston, TN & Bradley County | **Plumber & Drain Cleaning in Cleveland & Charleston, TN** |
| `/services` | Plumbing Services — Charleston & the Bradley–McMinn Corridor | **Plumbing Services in Cleveland & Charleston, TN** |
| `/service-areas` | Service Areas — Charleston, Cleveland, Athens & the TN Corridor | **Plumber in Bradley, McMinn & Hamilton County, TN** |
| `/services/drain-cleaning` | Drain Cleaning — Charleston & the TN Corridor | **Drain Cleaning in Cleveland & Charleston, TN \| Drain Pros TN** |
| `/services/emergency-plumbing` | Emergency Plumbing — Charleston & the TN Corridor | **Emergency Plumber in Cleveland & Charleston, TN** |
| `/services/fixture-repair` | Fixture Repair & Replacement — Charleston & the TN Corridor | **Fixture Repair & Replacement in Charleston, TN** |
| `/services/garbage-disposal` | Garbage Disposal Repair & Install — Charleston & the TN Corridor | **Garbage Disposal Repair & Install in Charleston, TN** |
| `/services/camera-inspection` | Sewer Camera Inspection — Charleston & the TN Corridor | **Sewer Camera Inspection in Cleveland & Chattanooga, TN** |
| `/services/water-heater-repair` | Water Heater Repair — Charleston & the TN Corridor | **Water Heater Repair in Cleveland & Charleston, TN** |
| `/services/water-heater-replacement` | Water Heater Replacement — Charleston & the TN Corridor | **Water Heater Replacement in Cleveland, TN \| Drain Pros TN** |
| `/services/tankless-water-heater-installation` | Tankless Water Heater Installation — Charleston & the TN Corridor | **Tankless Water Heater Installation in Charleston, TN** |
| `/services/whole-house-water-filtration` | Whole-House Water Filtration — Charleston & the TN Corridor | **Whole-House Water Filtration in Charleston, TN** |
| `/services/water-softener-installation` | Water Softener Installation — Charleston & the TN Corridor | **Water Softener Installation in Charleston, TN** |
| `/services/well-water-treatment` | Well Water Treatment — Charleston & the TN Corridor | **Well Water Treatment in Charleston, TN \| Drain Pros TN** |
| `/services/well-property-plumbing` | Plumbing for Well-Water Homes — Charleston & the TN Corridor | **Plumbing for Well-Water Homes in Charleston, TN** |
| `/services/septic-property-plumbing` | Plumbing for Septic Homes — Charleston & the TN Corridor | **Plumbing for Septic Homes in Charleston, TN \| Drain Pros TN** |
| `/services/sump-pump-repair` | Sump Pump Repair — Charleston & the TN Corridor | **Sump Pump Repair in Cleveland & Ooltewah, TN \| Drain Pros TN** |
| `/services/sump-pump-replacement` | Sump Pump Replacement — Charleston & the TN Corridor | **Sump Pump Replacement in Cleveland & Ooltewah, TN** |
| `/services/repiping` | Whole-House Repiping — Charleston & the TN Corridor | **Whole-House Repiping in Charleston, TN \| Drain Pros TN** |
| `/services/water-service-line` | Water Service Line Replacement — Charleston & the TN Corridor | **Water Line Repair & Replacement in Cleveland, TN** |
| `/services/sewer-line-repair` | Sewer Line Repair & Replacement — Charleston & the TN Corridor | **Sewer Line Repair & Replacement in Charleston, TN** |
| `/services/gas-line-services` | Gas Line Installation & Repair — Charleston & the TN Corridor | **Gas Line Installation & Repair in Charleston, TN** |
| `/service-areas/charleston-tn` | Plumber in Charleston, TN — Bradley County \| Drain Pros TN | **Plumber & Drain Cleaning in Charleston, TN \| Drain Pros TN** |
| `/service-areas/calhoun-tn` | Plumber in Calhoun, TN — McMinn County \| Drain Pros TN | **Plumber & Drain Cleaning in Calhoun, TN \| Drain Pros TN** |
| `/service-areas/cleveland-tn` | Plumber in Cleveland, TN — Bradley County \| Drain Pros TN | **Plumber & Drain Cleaning in Cleveland, TN \| Drain Pros TN** |
| `/service-areas/athens-tn` | Plumber in Athens, TN — McMinn County \| Drain Pros TN | **Plumber & Drain Cleaning in Athens, TN \| Drain Pros TN** |
| `/service-areas/ooltewah-tn` | Plumber in Ooltewah, TN — Hamilton County \| Drain Pros TN | **Plumber & Drain Cleaning in Ooltewah, TN \| Drain Pros TN** |
| `/service-areas/collegedale-tn` | Plumber in Collegedale, TN — Hamilton County \| Drain Pros TN | **Plumber & Drain Cleaning in Collegedale, TN \| Drain Pros TN** |
| `/service-areas/apison-tn` | Plumber in Apison, TN — Hamilton County \| Drain Pros TN | **Plumber & Drain Cleaning in Apison, TN \| Drain Pros TN** |
| `/service-areas/harrison-tn` | Plumber in Harrison, TN — Hamilton County \| Drain Pros TN | **Plumber & Drain Cleaning in Harrison, TN \| Drain Pros TN** |
| `/service-areas/riceville-tn` | Plumber in Riceville, TN — McMinn County \| Drain Pros TN | **Plumber & Drain Cleaning in Riceville, TN \| Drain Pros TN** |
| `/service-areas/niota-tn` | Plumber in Niota, TN — McMinn County \| Drain Pros TN | **Plumber & Drain Cleaning in Niota, TN \| Drain Pros TN** |
| `/service-areas/etowah-tn` | Plumber in Etowah, TN — McMinn County \| Drain Pros TN | **Plumber & Drain Cleaning in Etowah, TN \| Drain Pros TN** |
| `/service-areas/englewood-tn` | Plumber in Englewood, TN — McMinn County \| Drain Pros TN | **Plumber & Drain Cleaning in Englewood, TN \| Drain Pros TN** |
| `/service-areas/benton-tn` | Plumber in Benton, TN — Polk County \| Drain Pros TN | **Plumber & Drain Cleaning in Benton, TN \| Drain Pros TN** |
| `/service-areas/ocoee-tn` | Plumber in Ocoee, TN — Polk County \| Drain Pros TN | **Plumber & Drain Cleaning in Ocoee, TN \| Drain Pros TN** |
| `/service-areas/old-fort-tn` | Plumber in Old Fort, TN — Polk County \| Drain Pros TN | **Plumber & Drain Cleaning in Old Fort, TN \| Drain Pros TN** |
| `/service-areas/delano-tn` | Plumber in Delano, TN — Polk County \| Drain Pros TN | **Plumber & Drain Cleaning in Delano, TN \| Drain Pros TN** |
| `/service-areas/georgetown-tn` | Plumber in Georgetown, TN — Hamilton County \| Drain Pros TN | **Plumber & Drain Cleaning in Georgetown, TN \| Drain Pros TN** |
| `/service-areas/birchwood-tn` | Plumber in Birchwood, TN — Hamilton County \| Drain Pros TN | **Plumber & Drain Cleaning in Birchwood, TN \| Drain Pros TN** |
| `/service-areas/decatur-tn` | Plumber in Decatur, TN — Meigs County \| Drain Pros TN | **Plumber & Drain Cleaning in Decatur, TN \| Drain Pros TN** |
| `/service-areas/chattanooga-tn` | Plumber in Chattanooga, TN — Hamilton County \| Drain Pros TN | **Plumber & Drain Cleaning in Chattanooga, TN \| Drain Pros TN** |
| `/problems/no-hot-water` | No Hot Water — What It Means and What to Do \| Drain Pros TN | **No Hot Water — Causes & Fixes \| Drain Pros TN** |
| `/problems/water-heater-leaking` | Water Heater Leaking — What It Means and What to Do | **Water Heater Leaking or Dripping? What to Do Now** |
| `/problems/pilot-light-wont-stay-lit` | Pilot Light Will Not Stay Lit — What It Means and What to Do | **Pilot Light Will Not Stay Lit — Causes & Fixes** |
| `/problems/sewer-backup` | Sewage Backing Up — What It Means and What to Do | **Sewer Backup in Your Home: What to Do First \| Drain Pros TN** |
| `/problems/sewage-smell` | Sewage Smell in the House — What It Means and What to Do | **Sewer Smell or Rotten Egg Smell in the House? Causes** |
| `/problems/main-line-clog` | Main Line Clog — What It Means and What to Do | **Main Sewer Line Clog: Signs & How It's Cleared** |
| `/problems/recurring-backups` | A Drain That Keeps Backing Up — What It Means and What to Do | **Drain Keeps Backing Up? Causes & Fixes \| Drain Pros TN** |
| `/problems/kitchen-drain-clog` | Kitchen Drain Keeps Clogging — What It Means and What to Do | **Kitchen Drain Keeps Clogging — Causes & Fixes** |
| `/problems/root-intrusion` | Tree Roots in the Sewer Line — What It Means and What to Do | **Tree Roots in Sewer Line: Signs, Camera Check & Fixes** |
| `/problems/sump-pump-not-working` | Sump Pump Not Turning On — What It Means and What to Do | **Sump Pump Not Working? What to Check First \| Drain Pros TN** |
| `/problems/sump-pump-running-constantly` | Sump Pump Runs and Never Shuts Off — What It Means and What to Do | **Sump Pump Runs and Never Shuts Off — Causes & Fixes** |
| `/problems/sump-pump-noise` | Sump Pump Making a Noise — What It Means and What to Do | **Noisy Sump Pump: What the Sounds Mean \| Drain Pros TN** |
| `/problems/sump-discharge-line-blocked` | Sump Discharge Line Blocked or Frozen — What It Means and What to Do | **Sump Pump Discharge Line Blocked or Frozen \| Drain Pros TN** |
| `/problems/water-in-crawlspace` | Standing Water in the Crawlspace — What It Means and What to Do | **Standing Water in the Crawlspace — Causes & Fixes** |
| `/problems/burst-pipe` | Burst Pipe — What It Means and What to Do \| Drain Pros TN | **Burst Pipe — Causes & Fixes \| Drain Pros TN** |
| `/problems/frozen-pipes` | Frozen Pipes — What It Means and What to Do \| Drain Pros TN | **Frozen Pipes in Tennessee: Prevent & Thaw Safely** |
| `/problems/galvanized-pipe-failure` | Failing Galvanized Pipe — What It Means and What to Do | **Failing Galvanized Pipe — Causes & Fixes \| Drain Pros TN** |
| `/problems/low-water-pressure` | Low Water Pressure — What It Means and What to Do | **Low Water Pressure in the House? Common Causes** |
| `/problems/brown-water` | Brown or Rusty Water — What It Means and What to Do | **Brown Water From the Tap? What It Means \| Drain Pros TN** |
| `/problems/water-hammer` | Banging Pipes (Water Hammer) — What It Means and What to Do | **Water Hammer: Why Pipes Bang & How to Stop It** |
| `/problems/running-toilet` | Toilet That Keeps Running — What It Means and What to Do | **Running Toilet: Why It Keeps Running & the Fix** |
| `/problems/dripping-hose-bib` | Dripping Outdoor Faucet — What It Means and What to Do | **Outdoor Faucet Dripping? Repair in Charleston, TN** |
| `/guides/water-heater-lifespan` | How Long Should a Water Heater Last? \| Drain Pros TN | **How Long Does a Water Heater Last in Tennessee?** |
| `/guides/anode-rods` | The Anode Rod, and Why Your Tank Rusted Out \| Drain Pros TN | **What Is an Anode Rod? Signs Yours Is Bad \| Drain Pros TN** |
| `/guides/expansion-tanks` | Do I Need an Expansion Tank? \| Drain Pros TN | **Do You Need an Expansion Tank? Tennessee Code, Explained** |
| `/guides/water-heater-venting` | Water Heater Venting, Explained \| Drain Pros TN | **Water Heater Venting: What Homeowners Should Know** |
| `/guides/pedestal-vs-submersible` | Pedestal or Submersible Sump Pump? \| Drain Pros TN | **Pedestal vs. Submersible Sump Pump \| Drain Pros TN** |
| `/permits/bradley-county` | Plumbing Permits in Bradley County, TN \| Drain Pros TN | **Plumbing Permits in Bradley County, TN — How We Handle Them** |
| `/permits/mcminn-county` | Plumbing Permits in McMinn County, TN \| Drain Pros TN | **Plumbing Permits in McMinn County, TN — How We Handle Them** |
| `/permits/hamilton-county` | Plumbing Permits in Hamilton County, TN \| Drain Pros TN | **Plumbing Permits in Hamilton County, TN — How We Handle Them** |
| `/permits/polk-county` | Plumbing Permits in Polk County, TN \| Drain Pros TN | **Plumbing Permits in Polk County, TN — How We Handle Them** |
| `/permits/meigs-county` | Plumbing Permits in Meigs County, TN \| Drain Pros TN | **Plumbing Permits in Meigs County, TN — How We Handle Them** |
