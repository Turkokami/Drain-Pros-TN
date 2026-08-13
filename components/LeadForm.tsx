'use client'

import { useState } from 'react'

/**
 * Lead capture form. Submits to Web3Forms (https://web3forms.com) — a static-site
 * friendly form-to-email service, so no backend is required. Set the access key
 * in the NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY env var (the owner gets a free key by
 * entering their email at web3forms.com). Until the key is set, the form shows a
 * tap-to-call panel instead of a submit that would fail.
 */

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

const inputBase =
  'w-full rounded-md border border-ink/20 bg-white px-3 py-2.5 text-ink shadow-sm outline-none ' +
  'transition focus:border-verdigris focus:ring-2 focus:ring-verdigris/30 placeholder:text-steel/60'

export function LeadForm({ service, phone }: { service?: string; phone: string | null }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  const telHref = phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : '/contact'

  // Not wired yet: show a call panel rather than a form that cannot deliver.
  if (!ACCESS_KEY) {
    return (
      <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-card">
        <h3 className="font-display text-display-md text-ink">Request service</h3>
        <p className="mt-2 text-ink/80">
          The fastest way to get on the schedule is a call. Online booking is being connected — until
          then, reach us directly.
        </p>
        <a
          href={telHref}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#E7BB3E] to-[#C08B12] px-6 py-3 font-display text-base font-bold text-ink shadow-[0_8px_20px_-6px_rgba(217,165,32,0.6)] ring-1 ring-inset ring-white/25 transition-all hover:-translate-y-0.5"
        >
          {phone ? `Call ${phone}` : 'Request a callback'}
        </a>
      </div>
    )
  }

  if (status === 'ok') {
    return (
      <div className="rounded-lg border border-verdigris/40 bg-white p-6 shadow-card">
        <h3 className="font-display text-display-md text-ink">Thanks — we’ve got it.</h3>
        <p className="mt-2 text-ink/80">
          We’ll reach out shortly to get you on the schedule. Have a plumbing emergency and need help
          now?
        </p>
        <a
          href={telHref}
          className="mt-4 inline-flex items-center gap-2 font-display font-bold text-copper"
        >
          {phone ? `Call ${phone}` : 'Call us'} →
        </a>
      </div>
    )
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', ACCESS_KEY as string)
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-ink/10 bg-white p-6 shadow-card">
      <h3 className="font-display text-display-md text-ink">Request service</h3>
      <p className="mt-1 text-sm text-steel">
        Tell us what’s going on and we’ll get you on the schedule. Straight pricing, approved before
        we start.
      </p>

      {/* Web3Forms meta */}
      <input
        type="hidden"
        name="subject"
        value={`New service request${service ? ` — ${service}` : ''} — Drain Pros TN`}
      />
      <input type="hidden" name="from_name" value="Drain Pros TN website" />
      {service && <input type="hidden" name="service" value={service} />}
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-eyebrow uppercase text-steel">Name</span>
          <input name="name" required autoComplete="name" className={`mt-1 ${inputBase}`} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="font-mono text-eyebrow uppercase text-steel">Phone</span>
          <input name="phone" type="tel" required autoComplete="tel" className={`mt-1 ${inputBase}`} placeholder="(423) 000-0000" />
        </label>
        <label className="block">
          <span className="font-mono text-eyebrow uppercase text-steel">Email (optional)</span>
          <input name="email" type="email" autoComplete="email" className={`mt-1 ${inputBase}`} placeholder="you@email.com" />
        </label>
        <label className="block">
          <span className="font-mono text-eyebrow uppercase text-steel">Town or ZIP</span>
          <input name="location" autoComplete="postal-code" className={`mt-1 ${inputBase}`} placeholder="Cleveland, TN" />
        </label>
      </div>

      <label className="mt-3 block">
        <span className="font-mono text-eyebrow uppercase text-steel">What do you need?</span>
        <textarea
          name="message"
          rows={3}
          required
          defaultValue={service ? `I need help with ${service.toLowerCase()}.` : ''}
          className={`mt-1 ${inputBase}`}
          placeholder="Describe the problem — a backed-up drain, a leak, a water heater, etc."
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#E7BB3E] to-[#C08B12] px-6 py-3 font-display text-base font-bold text-ink shadow-[0_8px_20px_-6px_rgba(217,165,32,0.6)] ring-1 ring-inset ring-white/25 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'sending' ? 'Sending…' : 'Request service'}
      </button>

      {status === 'error' && (
        <p className="mt-3 text-sm text-signal">
          Something went wrong sending that. Please call{' '}
          <a href={telHref} className="font-semibold underline">
            {phone ?? 'us'}
          </a>{' '}
          and we’ll take care of you.
        </p>
      )}
      <p className="mt-3 text-xs text-steel">
        We only use your details to reach you about this request.
      </p>
    </form>
  )
}
