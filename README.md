# Drain Pros TN

Next.js 15 (App Router) site for **Drain Pros TN**, a Tennessee Limited Licensed
Plumber (#5045) serving Charleston, Cleveland, Athens, the US-11 corridor, and
greater Chattanooga.

Read [`CLAUDE.md`](./CLAUDE.md) before changing anything — it encodes the license
and permit constraints that the scope guard and build-time linter enforce.
Route plan lives in [`docs/BUILD-PHASES.md`](./docs/BUILD-PHASES.md).

## Commands

```bash
npm install
npm run dev            # local dev on http://localhost:3000
npm run typecheck
npm run lint:scope     # development: pending facts are warnings
npm run build          # STRICT: prod lint + next build (real-launch gate)
```

## Two build postures

The scope linter and the registry both gate on completeness:

- **`npm run build`** runs `lint:scope:prod` and refuses to build while business
  facts (phone, legal name, domain, ...) are pending or permit jurisdictions are
  unverified. This is the **real-launch** gate. Do not weaken it.
- **Staging preview** (see [`vercel.json`](./vercel.json)) builds with
  `STAGING=1` and dev-lint. The license/permit/address safety checks stay hard;
  only the "all facts confirmed" gate is deferred, so a preview can go up with
  visible placeholders while facts are gathered.

**To go to production:** resolve the pending items in
[`config/business.ts`](./config/business.ts), verify permit jurisdictions in
[`config/jurisdictions.ts`](./config/jurisdictions.ts), then remove the
`buildCommand` from `vercel.json` so Vercel uses the strict `npm run build`.

## Non-negotiables

1. The home address is never published — this is a service-area business.
2. Never render a service without the scope guard (`sellableServices` /
   `assertSellable`). It stops the site advertising permit-required work where he
   cannot pull a permit.
3. Unverified jurisdictions fail safe to permit-free services only.
4. Defined-term warranties only — no unqualified "lifetime" language.
5. `signal` amber is for emergency CTAs only.
