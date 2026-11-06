import { Cpu, Flag, PencilRuler, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const milestones = [
  {
    phase: 'Design',
    icon: PencilRuler,
    status: 'In progress',
    date: 'From 09/2026',
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
    date: '08/2027 · FS Germany',
    items: ['Technical inspection', 'Static & dynamic events', 'Formula Student Germany, Hockenheimring'],
  },
  {
    phase: 'Driverless',
    icon: Cpu,
    status: 'Long-term goal',
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
            Our plan from a blank page to the starting grid. Design starts in September 2026, and we&apos;re aiming
            for our first race at Formula Student Germany in August 2027. Further ahead, we want to take on driverless
            racing too. Partners can get involved at every stage.
          </p>
        </div>

        <ol className="relative mt-20 grid gap-12 before:absolute before:top-6 before:bottom-6 before:left-6 before:w-px before:bg-brand/25 lg:grid-cols-4 lg:gap-0 lg:before:inset-x-0 lg:before:bottom-auto lg:before:h-px lg:before:w-auto">
          {milestones.map((m, i) => {
            const active = i === 0
            return (
              <li key={m.phase} className="relative flex gap-8 lg:flex-col lg:pr-10">
                <div
                  className={
                    active
                      ? 'relative z-10 flex size-12 shrink-0 items-center justify-center bg-brand text-white'
                      : 'relative z-10 flex size-12 shrink-0 items-center justify-center border border-brand bg-background text-brand'
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
                  {'date' in m && (
                    <p className="mt-2 font-display text-xs uppercase tracking-[0.3em] text-brand">{m.date}</p>
                  )}
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
