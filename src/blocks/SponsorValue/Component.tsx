import { ArrowRight } from 'lucide-react'
import React from 'react'

import type { SponsorValueBlock as SponsorValueBlockProps } from '@/payload-types'

import { Icon } from '@/components/Icon'
import { CMSLink } from '@/components/Link'
import { SectionHeading } from '@/components/SectionHeading'

export const SponsorValueBlock: React.FC<SponsorValueBlockProps> = ({
  anchorId,
  sectionHeader,
  pillars,
  cta,
}) => {
  return (
    <section id={anchorId || undefined} className="scroll-mt-20 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={sectionHeader?.eyebrow}
          title={sectionHeader?.title}
          className="max-w-3xl"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {(pillars || []).map((p, i) => (
            <article
              key={p.id}
              className="group flex flex-col border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white sm:p-12"
            >
              <div className="flex items-start justify-between text-brand transition-colors group-hover:text-white">
                <Icon name={p.icon} className="size-10" strokeWidth={1.5} />
                <span className="font-display text-xs text-muted-foreground transition-colors group-hover:text-white/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-12 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                {p.title}
              </h3>
              {p.body && (
                <p className="mt-6 text-pretty leading-relaxed text-muted-foreground transition-colors group-hover:text-white/85">
                  {p.body}
                </p>
              )}
              <ul className="mt-10 flex flex-col border-t border-border transition-colors group-hover:border-white/20">
                {(p.points || []).map((pt) => (
                  <li
                    key={pt.id}
                    className="flex items-center justify-between border-b border-border py-4 text-sm font-semibold uppercase tracking-[0.12em] transition-colors group-hover:border-white/20"
                  >
                    {pt.text}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {cta?.text && (
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-l-2 border-brand pl-6 sm:flex-row sm:items-center">
            <p className="max-w-xl text-lg font-semibold">{cta.text}</p>
            <CMSLink
              {...cta.link}
              className="inline-flex items-center gap-3 border border-brand bg-brand px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-transparent hover:text-brand"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </CMSLink>
          </div>
        )}
      </div>
    </section>
  )
}
