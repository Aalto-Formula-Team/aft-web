import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const socials = footerData?.socials || []

  return (
    <footer className="mt-auto border-t border-white/15 bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:px-10">
        <div className="flex flex-col gap-6">
          <Link href="/">
            <Logo size="lg" />
          </Link>
          {footerData?.tagline && (
            <p className="max-w-xs text-sm leading-relaxed text-white/70">{footerData.tagline}</p>
          )}
        </div>

        <nav aria-label="Footer">
          <p className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
            Navigate
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            {navItems.map(({ link }, i) => (
              <li key={i}>
                <CMSLink
                  {...link}
                  className="text-sm font-semibold uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-white"
                />
              </li>
            ))}
          </ul>
        </nav>

        {socials.length > 0 && (
          <div>
            <p className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
              Follow
            </p>
            <ul className="mt-5 flex gap-3">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    aria-label={s.label}
                    className="flex size-11 items-center justify-center border border-white/30 font-display text-xs transition-colors hover:border-white hover:bg-white hover:text-brand"
                  >
                    {s.short}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/60 sm:flex-row sm:justify-between lg:px-10">
          <p>{footerData?.copyright}</p>
          <p>{footerData?.affiliation}</p>
        </div>
      </div>
    </footer>
  )
}
