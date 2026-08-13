'use client'

import { useState } from 'react'
import { NAV } from '@/lib/site'

/**
 * Mobile menu toggle. The only client component in the chrome — everything else
 * is static. Phone is passed in as a prop so this bundle never pulls the registry.
 */
export function MobileNav({ phoneNumber }: { phoneNumber: string | null }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center border border-verdigris/40 text-paper"
      >
        <span className="relative block h-3.5 w-5">
          <span className={`absolute left-0 h-0.5 w-5 bg-paper transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
          <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-paper transition-all ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`absolute left-0 h-0.5 w-5 bg-paper transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
        </span>
      </button>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[57px] z-50 overflow-y-auto border-t border-ink/10 bg-paper">
          <nav aria-label="Mobile" className="container-x flex flex-col divide-y divide-ink/10 py-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-4 font-display text-display-md text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={phoneNumber ? `tel:${phoneNumber.replace(/[^\d+]/g, '')}` : '/contact'}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-verdigris px-6 py-3 font-display font-semibold text-ink"
            >
              {phoneNumber ? `Call ${phoneNumber}` : 'Request a callback'}
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
