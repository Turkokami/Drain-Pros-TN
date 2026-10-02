# CLAUDE.md — Build Instructions

Read this before writing anything. It encodes constraints that will cost the client
his plumbing license if you get them wrong.

**Stack:** Next.js 15 (App Router) · TypeScript strict · Tailwind · Vercel
**Client:** Kevin Alex-Clayton Krishan — home-based plumber, Charleston, Tennessee
**Repo status:** Phase 0–1 scaffold complete. Phases 2–5 are yours.

---

## The four rules

These are enforced by `npm run lint:scope`, which runs before every build. Do not
weaken the linter to make a build pass. If the linter blocks you, the content is
wrong, not the linter.

### 1. The home address is never published

373 Forest Hills Dr does not appear in this repo and must not be added. This is a
**service-area business**. There is no `streetAddress` property anywhere in the
schema layer — do not add one, do not embed a map centered on the home, do not
write "visit us" or "our shop."

Publishing it risks Google Business Profile suspension and puts a residential
address into permanent circulation. Linter check `[1]` scans every file.

### 2. Never render a service without asking the guard

```ts
// WRONG — will ship work he cannot legally permit
{SERVICES.map(s => <ServiceCard key={s.slug} service={s} />)}

// RIGHT
{sellableServices(location.slug).map(s => <ServiceCard key={s.slug} service={s} />)}
```

`assertSellable(serviceSlug, locationSlug?)` in `lib/scope-guard.ts` is the only
correct way to decide whether a service may appear. What it enforces now depends
on `config/policy.ts`:

| Constraint | Status | Effect |
|---|---|---|
| No septic or well **system** work | Confirmed | Hard block, always. Not policy-controlled. |
| $25,000 per-project ceiling | Confirmed, not published | Office qualifies job size at the estimate |
| Permit authority per jurisdiction | **All 14 verified** | **Gates publishing — the gate is ON** |

**Current, as of 2026-08-25.** The gate is ON. The 2026-08-16 direction to
publish everything everywhere was reversed once the license holder confirmed the
actual arrangement in Hamilton County: permit-required jobs there are
**referred** to a licensed partner who performs the work and attends the
inspection. Drain Pros does not do them. Advertising those services on a
Hamilton town page is a claim about who does the work that is not true.

**63 of 380 service x location combinations are withheld.** Chattanooga,
Ooltewah, Collegedale, Apison, Harrison, Georgetown and Birchwood publish 8
permit-free services. Corridor towns publish all 19.

The septic/well block is *not* part of that change and stays hard. It is a
licensure question, not a permitting one — no office process makes it sellable.
The house-side work on those properties is in scope and already a pillar.

### 3. The permit map is fully verified

All thirteen authorities were called and answered on 2026-08-16. Nothing is
`unverified` any more.

**Accept an application from #5045** (1-3 day turnaround): Bradley County, City
of Cleveland, McMinn County, City of Athens, Polk County, Meigs County.

**Decline it** — work referred to a licensed partner: City of Chattanooga,
Hamilton County, Collegedale, Red Bank, East Ridge.

The whole gate is one field: `PUBLISHING.gateServicesByPermitAuthority` in
`config/policy.ts`. The guard, linter check `[7]`, the location pages and the
ScopeStrip withheld block all follow from it.

### 4. Defined-term warranties only

Never publish unqualified "lifetime" warranty, guarantee, or coverage language.
A brandable guarantee name backed by written terms is fine. Linter check `[3]`.

---

## Where facts live

**`config/business.ts` is the single source of truth.** No page, component, or
schema file may hardcode a business fact. If you need the phone number, import it.

Facts carry a status:

```ts
{ status: 'confirmed', value: '5045', source: 'TN license card', confirmedOn: '2026-08-12' }
{ status: 'pending',   blocks: ['NAP', 'all CTAs', 'schema telephone'] }
```

`fact()` returns the value when confirmed, `null` in development, and **throws in
production**. That is how a placeholder phone number is prevented from shipping.

To resolve a pending item: change the status, add the value, record source and
date. Nothing else changes.

### Nothing is pending

Every registry fact is confirmed as of 2026-08-18, which is why
`lint:scope:prod` reports **PASS - safe to publish** and `vercel.json` runs the
real build with no `STAGING` escape hatch. A deploy now genuinely refuses to
ship an unverified claim.

Confirmed and live: legal name (Alpha Services LLC), entity type, phone, email,
domain (`https://www.drainprostn.com`, www is canonical), founding year (2025),
combined trade experience (20 years, across BOTH owners - never write it as time
in business), insurance (UFG, $1M + umbrella), warranty (12-month workmanship /
30-day drain cleaning, excluding closet augers), ownership (**Kayla Krishan**
owns it, Kevin holds the license, woman-owned), Google review and profile URLs,
and the GBP as a service-area business with the address hidden.

`OPEN_QUESTIONS` in `config/business.ts` tracks items that are NOT referenced in
rendered copy - currently the referral partner's identity. Those are reported by
the linter as `[8b]` and never gate a build, because an unresolved value there
cannot put a placeholder in front of a customer.

---

## Positioning — do not drift from this

**Build a Bradley–McMinn corridor plumbing company that also serves greater
Chattanooga.** Not a Chattanooga plumbing company.

Market priority, which drives IA and internal linking:

1. **Charleston / Calhoun** — home base, zero competition, owns the county seam
2. **Cleveland / Bradley County** — primary revenue market, thin middle tier
3. **Athens / McMinn County** — weakest competitor field in the region
4. **Ooltewah / Collegedale / Harrison** — growth corridor, one real rival
5. **Hamilton County outside the city line** — verify permitting per town
6. **Chattanooga city limits** — drain and emergency only

Service pillars, in order:

- **Core: drain cleaning + emergency + repair.** Permit-free, so it runs at full
  strength everywhere including Chattanooga. This is the revenue engine and it
  matches what Kevin says he actually focuses on.
- **Water heaters and tankless.** Proven local demand — one Chattanooga competitor
  built 372 reviews on water heaters alone. Corridor-targeted, since it needs permits.
- **Water quality and filtration.** Active named demand, no competitor owns it.
- **Well and septic property plumbing.** Not the systems — the houses. Content
  authority and search capture. Filtration is how it monetizes legally.

Brand posture: **licensed owner-operator, straight pricing, answers after hours.**
Competitor reviews document mid-job price revisions at the volume shops (one quote
went from ~$1,200 to ~$1,995 after work started). Do not attack them by name. Just
be the opposite and let the contrast do the work.

---

## Writing standard

Location pages must carry material a competitor cannot copy: which utility serves
the town, the housing stock era, septic vs. city sewer, real local jobs. The linter
requires at least three `localFacts` per location before it will publish. **A thin
location page is worse than no location page.**

Every page opens with an AEO quick-answer block that states true coverage
*including limits*. Do not write around the constraints — writing them plainly is
the differentiator. "Permit-required work inside the city goes to a licensed
partner" builds more trust than a service list that quietly omits things.

No em-dash-heavy marketing voice. Plain verbs. Sentence case. A tradesman's register.

---

## Design system

Tokens in `tailwind.config.ts`. Derived from the trade's material world — patinated
copper, galvanized steel, river green — not a generic contractor blue.

**`signal` amber is reserved exclusively for emergency and after-hours CTAs.**
Using it decoratively destroys its meaning. This is the one hard design rule.

The signature is the **spec-sheet treatment**: license number, permit authority,
and per-jurisdiction scope rendered in IBM Plex Mono with hairline rules, like a
data sheet rather than a trust badge. See `components/ScopeStrip.tsx`. That
treatment is the visual argument that the credential is a checkable fact. No
competitor in this market surfaces a license number at all — do not bury it.

---

## Build order

Detailed route manifest in `docs/BUILD-PHASES.md`.

- **Phase 0** — done, except the permit map. Registry, jurisdictions, guard, linter.
- **Phase 1** — core site + 12 service pages + credentials. ~22 routes. *Partially scaffolded.*
- **Phase 2** — 21 location pages. Scaffolded via `[slug]`; needs content depth per town.
- **Phase 3** — opportunity clusters, ~34 routes. Where the position is won.
- **Phase 4** — authority + conversion, ~18 routes. Permit guidance by county, pricing transparency.
- **Phase 5** — ongoing content and reviews.

**Run in parallel from day one, before any page is written:** review generation.
Reviews are the only dimension that cannot be compressed by building faster.
Reaching the top of this market needs roughly 250–350 genuine reviews over two
years. Everything else in this repo can be finished in weeks; that cannot.

---

## Commands

```bash
npm run lint:scope        # development — pending items are warnings
npm run lint:scope:prod   # strict — pending items fail
npm run build             # runs strict lint, then next build
npm run typecheck
```

Current state: **106 routes live.** 19 services, 20 locations, 22 problems, 26
guides, 5 county permit pages. 63 service x location combinations withheld by
the guard, all of them in Hamilton County.

Phase 3 is complete. Phase 4 is partly done - permit guidance by county and the
credential/estimate guides are live; commercial, the reference library, and the
utility pages are not.

**Internal linking is load-bearing and easy to break.** Service pages link down
to their problems, their guides, and every town the guard allows. That last one
is driven by `served`, so the link graph can never contradict the guard. Before
the first GSC data (2026-10-02) location pages had three inbound links each and
Athens had one impression in six weeks; after wiring it they have twenty-two.
If you add a route group, give it reciprocal links or it will not be found.
