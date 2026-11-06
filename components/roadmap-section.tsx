import { Cpu, Flag, PencilRuler, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type Tag = { label: string; style: 'active' | 'date' | 'outline' }

const tagClass: Record<Tag['style'], string> = {
  active: 'bg-brand px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white',
  date: 'font-display text-xs uppercase tracking-[0.3em] text-brand',
  outline:
    'border border-foreground/20 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground',
}

const milestones: {
  phase: string
  icon: typeof Flag
  tag?: Tag
  items: string[]
}[] = [
  {
    phase: 'Design',
    icon: PencilRuler,
    tag: { label: 'In progress', style: 'active' },
    items: ['Concept & rules analysis', 'CAD, simulation & FEA', 'Design reviews with partners'],
  },
  {
    phase: 'Build',
    icon: Wrench,
    items: ['Manufacturing & sourcing', 'Assembly & integration', 'Testing & validation'],
  },
  {
    phase: 'Race',
    icon: Flag,
    tag: { label: '08/2027 · FS Germany', style: 'date' },
    items: [
      'Electric vehicle (EV) class',
      'Technical inspection, static & dynamic events',
      'Formula Student Germany, Hockenheimring',
    ],
  },
  {
    phase: 'Driverless',
    icon: Cpu,
    tag: { label: 'Long-term goal', style: 'outline' },
    items: ['Perception, planning & control', 'An autonomous system on our own car', 'The FS Germany Driverless Cup'],
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="scroll-mt-20 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="03 — Our Timeline" title="Design. Build. Race." />
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Our plan from a blank page to the starting grid. Design starts in September 2026, and we&apos;re aiming for
            our first race at Formula Student Germany in August 2027. Further ahead, we want to take on driverless
            racing too. Partners can get involved at every stage.
          </p>
        </div>

        <ol className="mt-20 grid gap-12 lg:grid-cols-4 lg:gap-0">
          {milestones.map((m, i) => {
            const active = i === 0
            return (
              <li key={m.phase} className="relative flex gap-8 lg:flex-col lg:pr-10">
                {i < milestones.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-12 -bottom-12 left-6 flex flex-col lg:top-18 lg:right-0 lg:bottom-auto lg:left-12 lg:flex-row"
                  >
                    {i === milestones.length - 2 ? (
                      // The step into Driverless is further away in time: solid ends, dashed middle.
                      <>
                        <span className="h-6 w-px shrink-0 bg-brand/40 lg:h-px lg:w-8" />
                        {/* Six dashes with gaps as long as the dashes, at any width. */}
                        {Array.from({ length: 13 }, (_, k) => (
                          <span key={k} className={k % 2 ? 'w-px flex-1 bg-brand/40 lg:h-px lg:w-auto' : 'flex-1'} />
                        ))}
                        <span className="h-6 w-px shrink-0 bg-brand/40 lg:h-px lg:w-8" />
                      </>
                    ) : (
                      <span className="flex-1 w-px bg-brand/25 lg:h-px lg:w-auto" />
                    )}
                  </span>
                )}
                <div className="flex shrink-0 flex-col">
                  <div className="mb-4 hidden h-8 items-end lg:flex">
                    {m.tag && <span className={tagClass[m.tag.style]}>{m.tag.label}</span>}
                  </div>
                  <div
                    className={
                      active
                        ? 'relative z-10 flex size-12 shrink-0 items-center justify-center bg-brand text-white'
                        : 'relative z-10 flex size-12 shrink-0 items-center justify-center border border-brand bg-background text-brand'
                    }
                  >
                    <m.icon className="size-5" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  {m.tag && (
                    <div className="mb-4 lg:hidden">
                      <span className={tagClass[m.tag.style]}>{m.tag.label}</span>
                    </div>
                  )}
                  <h3 className="flex items-baseline gap-3 text-3xl font-extrabold uppercase tracking-tight lg:mt-6">
                    <span className="font-display text-xs font-normal tracking-normal text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {m.phase}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span aria-hidden="true" className="h-px w-4 bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
