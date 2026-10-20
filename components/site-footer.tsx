import { AftLogo } from '@/components/aft-logo'
import { navLinks } from '@/lib/site'

const socials = [
  { label: 'Instagram', short: 'IG', href: '#' },
  { label: 'LinkedIn', short: 'IN', href: '#' },
  { label: 'YouTube', short: 'YT', href: '#' },
  { label: 'TikTok', short: 'TT', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:px-10">
        <div className="flex flex-col gap-6">
          <AftLogo size="lg" />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            A student-run Formula Student team affiliated with Aalto University, Espoo, Finland.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-white/60">Navigate</p>
          <ul className="mt-5 flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-semibold uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-white/60">Follow</p>
          <ul className="mt-5 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center border border-white/30 font-display text-xs transition-colors hover:border-white hover:bg-white hover:text-brand"
                >
                  {s.short}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/60 sm:flex-row sm:justify-between lg:px-10">
          <p>{'© 2026 Aalto Formula Team ry. All rights reserved.'}</p>
          <p>In affiliation with Aalto University</p>
        </div>
      </div>
    </footer>
  )
}
