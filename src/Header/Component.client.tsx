'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

import type { Header } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [open, setOpen] = useState(false)
  const navItems = data?.navItems || []
  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-brand">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
        <Link
          href="/"
          aria-label="Aalto Formula Team home"
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Logo />
        </Link>

        <HeaderNav data={data} />

        <div className="flex items-center gap-3">
          <CMSLink
            {...data?.cta}
            className="hidden border border-white bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-brand transition-colors hover:bg-transparent hover:text-white sm:inline-block"
          />
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
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-white/15 bg-brand px-6 pb-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map(({ link }, i) => (
              <li key={i} onClick={close}>
                <CMSLink
                  {...link}
                  className="block border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white"
                />
              </li>
            ))}
          </ul>
          <div onClick={close}>
            <CMSLink
              {...data?.cta}
              className="mt-6 block bg-white px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-brand"
            />
          </div>
        </nav>
      )}
    </header>
  )
}
