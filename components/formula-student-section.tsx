import { ArrowRight, Gauge, NotebookPen } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

// Event descriptions on the official Formula Student Germany site
const FSG_ABOUT = 'https://www.formulastudent.de/fsg/about'

const events = [
  {
    title: 'Static Events',
    icon: NotebookPen,
    body: 'Teams present and defend their work to industry judges — how the car was engineered, what it costs to build and how it could be brought to market.',
    points: [
      { label: 'Engineering design', href: `${FSG_ABOUT}#c927` },
      { label: 'Cost & manufacturing', href: `${FSG_ABOUT}#c928` },
      { label: 'Business plan presentation', href: `${FSG_ABOUT}#c929` },
    ],
  },
  {
    title: 'Dynamic Events',
    icon: Gauge,
    body: 'On track, the car is tested for straight-line speed, cornering, handling and reliability — finishing with a long endurance race where efficiency counts too.',
    points: [
      { label: 'Acceleration & skid pad', href: `${FSG_ABOUT}#c933` },
      { label: 'Autocross', href: `${FSG_ABOUT}#c935` },
      { label: 'Endurance & efficiency', href: `${FSG_ABOUT}#c936` },
    ],
  },
]

export function FormulaStudentSection() {
  return (
    <section id="formula-student" className="scroll-mt-20 bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="02 — Formula Student" title="What is Formula Student?" />
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Formula Student is an international engineering competition for university students. Teams design, build
            and race their own single-seat race car — and are judged not only on lap times, but on how well the whole
            project is engineered and run.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {events.map((e, i) => (
            <article key={e.title} className="flex flex-col border border-border bg-background p-8 sm:p-12">
              <div className="flex items-start justify-between text-brand">
                <e.icon className="size-10" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-display text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-12 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">{e.title}</h3>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{e.body}</p>
              <ul className="mt-10 flex flex-col border-t border-border">
                {e.points.map((pt) => (
                  <li key={pt.label} className="border-b border-border">
                    <a
                      href={pt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:text-brand"
                    >
                      {pt.label}
                      <ArrowRight
                        className="size-4 text-brand transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
