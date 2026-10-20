import { Flag, PencilRuler, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const milestones = [
  {
    phase: 'Design',
    icon: PencilRuler,
    status: 'In progress',
    items: ['Concept & rules analysis', 'CAD, simulation & FEA', 'Design reviews with partners'],
  },
  {
    phase: 'Build',
    icon: Wrench,
    status: 'Upcoming',
    items: ['Manufacturing & sourcing', 'Assembly & integration', 'Testing & validation'],
  },
  {
    phase: 'Race',
    icon: Flag,
    status: 'Goal',
    items: ['Technical inspection', 'Static & dynamic events', 'Formula Student competition'],
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="scroll-mt-20 bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="02 — Our Roadmap" title="Design. Build. Race." />
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A structured, milestone-driven plan from blank page to starting grid. Every phase is an opportunity for
            partners to get involved — and to be seen.
          </p>
        </div>

        <ol className="relative mt-20 grid gap-12 before:absolute before:top-6 before:bottom-6 before:left-6 before:w-px before:bg-brand/25 lg:grid-cols-3 lg:gap-0 lg:before:inset-x-0 lg:before:bottom-auto lg:before:h-px lg:before:w-auto">
          {milestones.map((m, i) => {
            const active = i === 0
            return (
              <li key={m.phase} className="relative flex gap-8 lg:flex-col lg:pr-10">
                <div
                  className={
                    active
                      ? 'relative z-10 flex size-12 shrink-0 items-center justify-center bg-brand text-white'
                      : 'relative z-10 flex size-12 shrink-0 items-center justify-center border border-brand bg-muted text-brand'
                  }
                >
                  <m.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={
                        active
                          ? 'bg-brand px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white'
                          : 'border border-foreground/20 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground'
                      }
                    >
                      {m.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-extrabold uppercase tracking-tight">{m.phase}</h3>
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
