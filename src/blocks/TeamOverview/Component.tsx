import React from 'react'

import type { TeamOverviewBlock as TeamOverviewBlockProps } from '@/payload-types'

import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { SectionHeading } from '@/components/SectionHeading'

export const TeamOverviewBlock: React.FC<TeamOverviewBlockProps> = ({
  anchorId,
  sectionHeader,
  images,
  board,
  subTeams,
}) => {
  return (
    <section id={anchorId || undefined} className="scroll-mt-20 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow={sectionHeader?.eyebrow} title={sectionHeader?.title} />
          {sectionHeader?.intro && (
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {sectionHeader.intro}
            </p>
          )}
        </div>

        {images && images.length > 0 && (
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {images.map((image, i) =>
              typeof image === 'object' ? (
                <div key={i} className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Media
                    fill
                    resource={image}
                    size="(min-width: 640px) 50vw, 100vw"
                    imgClassName="object-cover"
                  />
                </div>
              ) : null,
            )}
          </div>
        )}

        <div className="mt-16 border border-border">
          <div className="flex flex-col gap-4 border-b border-border bg-brand p-8 text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Icon name="landmark" className="size-6" />
              <h3 className="text-xl font-bold uppercase tracking-wide">{board?.title}</h3>
            </div>
            {board?.description && (
              <p className="max-w-xl text-sm leading-relaxed text-white/80">{board.description}</p>
            )}
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5">
            {(subTeams || []).map((team, i) => (
              <li
                key={team.id}
                className="group flex flex-col gap-6 border-border p-8 transition-colors hover:bg-muted max-lg:border-b sm:odd:border-r lg:border-r lg:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <Icon name={team.icon} className="size-6 text-brand" />
                  <span className="font-display text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-wide">{team.name}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {team.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
