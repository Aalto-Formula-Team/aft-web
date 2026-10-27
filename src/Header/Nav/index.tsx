'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
      {navItems.map(({ link }, i) => (
        <CMSLink
          key={i}
          {...link}
          className="relative text-xs font-semibold uppercase tracking-[0.2em] text-white/85 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:text-white hover:after:w-full"
        />
      ))}
    </nav>
  )
}
