import { ArrowRight, BadgeCheck, CarFront, Network } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

function BrandIcon() {
  return (
    <span className="relative inline-flex">
      <CarFront className="size-10" strokeWidth={1.5} aria-hidden="true" />
      <BadgeCheck
        className="absolute -right-2 -top-2 size-5 fill-brand text-white"
        strokeWidth={2}
        aria-hidden="true"
      />
    </span>
  )
}

const pillars = [
  {
    title: 'Brand Recognition',
    icon: <BrandIcon />,
    body: 'Secure prime logo placement on our website today — and on the physical car, team apparel and marketing materials as the build comes together. Reach a highly engaged university and motorsport audience from day one.',
    points: ['Website placement now', 'Car livery & team apparel', 'Events, content & social'],
  },
  {
    title: 'Battle-Tested Talent',
    icon: <Network className="size-10" strokeWidth={1.5} aria-hidden="true" />,
    body: 'Gain direct access to a pipeline of elite, hands-on students gaining practical, high-pressure experience in engineering and business — the future hires your organization is looking for.',
    points: ['Recruitment access', 'Workshops & tech talks', 'Real-world problem solving'],
  },
]

export function SponsorSection() {
  return (
    <section id="sponsor" className="scroll-mt-20 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="03 — Sponsor Value" title="Why partner with us?" className="max-w-3xl" />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white sm:p-12"
            >
              <div className="flex items-start justify-between text-brand transition-colors group-hover:text-white">
                {p.icon}
                <span className="font-display text-xs text-muted-foreground transition-colors group-hover:text-white/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-12 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">{p.title}</h3>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground transition-colors group-hover:text-white/85">
                {p.body}
              </p>
              <ul className="mt-10 flex flex-col border-t border-border transition-colors group-hover:border-white/20">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-center justify-between border-b border-border py-4 text-sm font-semibold uppercase tracking-[0.12em] transition-colors group-hover:border-white/20"
                  >
                    {pt}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-l-2 border-brand pl-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-lg font-semibold">
            Founding partners shape the team from the very first bolt. Let&apos;s build something together.
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
