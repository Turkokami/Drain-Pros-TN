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
| Permit authority per jurisdiction | Confirmed for Chattanooga only | **No longer gates publishing** |

**Changed 2026-08-16 by client direction.** The site used to withhold
permit-required services wherever permit authority was not confirmed. It no
longer does. The office qualifies permitting and job size at intake; the site's
job is to present the complete service list and route the lead. All 18 services
publish in all 21 towns.

The septic/well block is *not* part of that change and stays hard. It is a
licensure question, not a permitting one — no office process makes it sellable.
The house-side work on those properties is in scope and already a pillar.

### 3. Permit data is still real, it just does not gate the site

`config/jurisdictions.ts` is unchanged and still accurate: Chattanooga is
confirmed `none`, everything else is `unverified`. The office needs that. It
simply no longer decides what publishes.

To restore the original fail-safe behavior, flip
`PUBLISHING.gateServicesByPermitAuthority` back to `true` in `config/policy.ts`.
The guard, the linter check `[7]`, the location pages, and the ScopeStrip
withheld block all follow from that one field.

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

### Currently pending — blocks production build

| Item | Blocks |
|---|---|
| Legal + display business name | Domain, GBP, all schema, every page |
| Business phone (dedicated line, not a cell) | NAP, all CTAs, every citation |
| Domain | Canonical URLs, sitemap, all schema `@id` values |
| Years in trade, founding year | E-E-A-T depth on the about page |
| Real after-hours availability | Emergency positioning, hours schema |
| Insurance carrier and coverage | Trust blocks, commercial page |
| Warranty terms | All warranty language sitewide |
| Facebook review count | Reviews baseline |
| Permit authority per jurisdiction | Office scheduling only — no longer a publishing gate |

The last one used to be the gate on the whole build. It is not any more, but the
thirteen calls are still worth making, because the office needs to know which
desk each town files with and how long each takes. `npm run lint:scope` still
prints the list with contacts every run.

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

Current state: **0 combinations withheld**. All 21 locations × 18 services
publish, because the permit gate is off (see `config/policy.ts`). The 13
unverified jurisdictions are still reported by `lint:scope` every run, but as an
**office to-do rather than a publishing gate** — they no longer block a build.

The only guard still withholding anything is the septic/well/commercial-new-
construction block, and those never appear in `SERVICES` to begin with.
