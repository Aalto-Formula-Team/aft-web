import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'

const linkClass = [
  'inline-flex items-center justify-center gap-3 border border-white bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-brand transition-colors hover:bg-transparent hover:text-white',
  'inline-flex items-center justify-center border border-white/50 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white/10',
]

export const HighImpactHero: React.FC<Page['hero']> = ({ eyebrow, links, media, richText }) => {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-brand pt-16 text-white lg:pt-20"
    >
      {media && typeof media === 'object' && (
        <Media
          fill
          priority
          resource={media}
          size="100vw"
          imgClassName="-z-10 object-cover object-[70%_center] opacity-70 mix-blend-screen"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand via-brand/80 to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        {eyebrow && (
          <p className="font-display text-xs uppercase tracking-[0.35em] text-white/75">
            {eyebrow}
          </p>
        )}
        {richText && (
          <RichText
            data={richText}
            enableGutter={false}
            enableProse={false}
            className={cn(
              '[&_h1]:mt-6 [&_h1]:max-w-4xl [&_h1]:text-balance [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:uppercase [&_h1]:leading-[0.95] [&_h1]:tracking-tight sm:[&_h1]:text-6xl lg:[&_h1]:text-7xl',
              '[&_p]:mt-8 [&_p]:max-w-xl [&_p]:text-pretty [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-white/85',
            )}
          />
        )}
        {Array.isArray(links) && links.length > 0 && (
          <ul className="mt-12 flex flex-col gap-4 sm:flex-row">
            {links.map(({ link }, i) => (
              <li key={i}>
                <CMSLink {...link} className={linkClass[i] ?? linkClass[1]} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
    </section>
  )
}
