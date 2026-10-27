import React from 'react'

import type { RoadmapBlock as RoadmapBlockProps } from '@/payload-types'

import { Icon } from '@/components/Icon'
import { SectionHeading } from '@/components/SectionHeading'

export const RoadmapBlock: React.FC<RoadmapBlockProps> = ({
  anchorId,
  sectionHeader,
  milestones,
}) => {
  return (
    <section id={anchorId || undefined} className="scroll-mt-20 bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow={sectionHeader?.eyebrow} title={sectionHeader?.title} />
          {sectionHeader?.intro && (
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {sectionHeader.intro}
            </p>
          )}
        </div>

        <ol className="relative mt-20 grid gap-12 before:absolute before:top-6 before:bottom-6 before:left-6 before:w-px before:bg-brand/25 lg:grid-cols-3 lg:gap-0 lg:before:inset-x-0 lg:before:bottom-auto lg:before:h-px lg:before:w-auto">
          {(milestones || []).map((m, i) => (
            <li key={m.id} className="relative flex gap-8 lg:flex-col lg:pr-10">
              <div
                className={
                  m.active
                    ? 'relative z-10 flex size-12 shrink-0 items-center justify-center bg-brand text-white'
                    : 'relative z-10 flex size-12 shrink-0 items-center justify-center border border-brand bg-muted text-brand'
                }
              >
                <Icon name={m.icon} className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {m.status && (
                    <span
                      className={
                        m.active
                          ? 'bg-brand px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white'
                          : 'border border-foreground/20 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground'
                      }
                    >
                      {m.status}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-3xl font-extrabold uppercase tracking-tight">{m.phase}</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {(m.items || []).map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span aria-hidden="true" className="h-px w-4 bg-brand" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
