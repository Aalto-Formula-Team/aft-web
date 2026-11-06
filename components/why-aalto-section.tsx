import { SectionHeading } from '@/components/section-heading'

const points = [
  {
    title: 'Talent in one place',
    body: 'Around 16,000 students in technology, business and art share one campus in Otaniemi. Our team draws on all of them.',
  },
  {
    title: 'Students who start things',
    body: 'Aaltoes, the student community that started Slush, began in 2009 because students saw a gap and filled it. Today Aalto produces about half of all Finnish university startups.',
  },
  {
    title: "Today's team, tomorrow's founders",
    body: 'Aalto alumni co-founded companies like Wolt. The people building this car will go on to build companies, technologies and industries.',
  },
  {
    title: 'A startup on wheels',
    body: 'A small team, a tight budget, a hard deadline and a product that has to work when the lights go green.',
  },
]

export function WhyAaltoSection() {
  return (
    <section id="why-aalto" className="scroll-mt-20 bg-foreground py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="02 — Why Aalto" title="Built at Aalto." tone="light" />
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            We&apos;re a new team, but we come from a community that is used to making things happen.
          </p>
        </div>

        <ul className="mt-16 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <li key={p.title} className="flex flex-col gap-6 bg-foreground p-8">
              <span className="font-display text-sm text-white/60">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wide">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
