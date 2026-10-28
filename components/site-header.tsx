'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { AftLogo } from '@/components/aft-logo'
import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-brand">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
        <Link href="/" aria-label="Aalto Formula Team home" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <AftLogo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-white/85 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:text-white hover:after:w-full',
                  active && 'text-white after:w-full',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact#sponsor"
            className="hidden whitespace-nowrap border border-white bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-brand transition-colors hover:bg-transparent hover:text-white sm:inline-block"
          >
            Partner With Us
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/15 bg-brand px-6 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className="block border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact#sponsor"
            onClick={() => setOpen(false)}
            className="mt-6 block bg-white px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-brand"
          >
            Partner With Us
          </Link>
        </nav>
      )}
    </header>
  )
}
