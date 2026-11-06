import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    title: 'Future Talent',
    body: 'Meet motivated students who are getting real, hands-on experience in engineering and business. They could be your next hires.',
    points: ['Recruit directly from our team', 'Host workshops or tech talks for our members', 'Bring your engineering challenges to students'],
  },
  {
    title: 'Put your tech on track',
    body: 'Your parts, materials and software end up in a real race car, designed and tested by engineering students.',
    points: ['Your products proven in a demanding build', 'Honest feedback from the engineers using them', 'A real car to show what your technology can do'],
  },
]

export function SponsorSection() {
  return (
    <section id="sponsor" className="scroll-mt-20 bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="01 — Partner Value" title="Why partner with us?" className="max-w-3xl" />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white sm:p-12"
            >
              <span className="font-display text-sm text-brand transition-colors group-hover:text-white/80">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-8 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">{p.title}</h3>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground transition-colors group-hover:text-white/85">
                {p.body}
              </p>
              <ul className="mt-10 flex flex-col border-t border-border transition-colors group-hover:border-white/20">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="border-b border-border py-4 text-sm font-semibold uppercase tracking-[0.12em] transition-colors group-hover:border-white/20"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-l-2 border-brand pl-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-lg font-semibold">
            As a founding partner, you&apos;re with us from the very first bolt. Let&apos;s build something together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-brand bg-brand px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-transparent hover:text-brand"
          >
            Partner With Us
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
