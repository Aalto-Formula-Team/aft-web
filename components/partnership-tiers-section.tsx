import { ArrowRight, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Tier = {
  name: string
  place: string
  cash: string
  inKind: string
  licenceNote?: boolean
  medal: string
  medalText: string
  medalTint: string
  step: string
  order: string
  benefits: string[]
  merch: string[]
}

const tiers: Tier[] = [
  {
    name: 'Bronze',
    place: '3',
    medal: '#8a4a1c',
    medalText: '#7a4018',
    medalTint: '#fbf3ec',
    step: 'lg:h-20',
    order: 'order-3',
    cash: '500 €',
    inKind: '1 000 €',
    benefits: ['Name and logo on website', 'Logo on car (small)', 'Limited access to recruiting'],
    merch: ['T-shirts: medium logo on the back', 'Hoodies: small logo on the back'],
  },
  {
    name: 'Silver',
    place: '2',
    medal: '#a7adb4',
    medalText: '#5c636b',
    medalTint: '#f3f5f7',
    step: 'lg:h-28',
    order: 'order-2 lg:order-1',
    cash: '2 000 €',
    inKind: '3 500 €',
    licenceNote: true,
    benefits: [
      'Name and logo on website',
      'Logo on car (medium, choose your spot)',
      'Unlimited recruiting',
      'Invitation to our car reveal event',
    ],
    merch: ['T-shirts: medium logo on the back or sleeves', 'Hoodies: medium logo on the back'],
  },
  {
    name: 'Gold',
    place: '1',
    medal: '#c9a227',
    medalText: '#8a6d0f',
    medalTint: '#fffaf0',
    step: 'lg:h-36',
    order: 'order-1 lg:order-2',
    cash: '5 000 €',
    inKind: '7 500 €',
    licenceNote: true,
    benefits: [
      'Name and logo on website',
      'Logo on car (big, choose your spot)',
      'Unlimited recruiting',
      'Invitation to our car reveal event',
      'Opportunity to organise events with us and get to know the team',
    ],
    merch: [
      'T-shirts: front or sleeves',
      'Hoodies: front or sleeves',
      'Caps: one of the sides',
      'Jackets: back or sleeves',
    ],
  },
]

const mainBenefits = [
  'We include your name in all our communications next to the team name: “Aalto Formula Team powered by <your company>”',
  'Your logo appears everywhere together with the AFT logo',
  'Name and logo at the top of our website',
  'Logo on car: first pick of the spots you want, up to 2 spots',
  'Unlimited recruiting',
  'Invitation to speak at our car reveal event, possibility to organise other events',
  'Team merch: T-shirts, hoodies and jackets with a large logo in the centre of the back and a smaller one on the front, caps with your logo on the front, all next to the team logo',
]

const mainExtras = [
  'Paint the car in your company’s colours',
  'Exclusivity: no new partners from your industry during the contract. Existing partners may renew at their current tier.',
  'Borrowing the car, for example for a promotional event at your office (after the season is over)',
  'A visit to a test track with the team',
  'Or tell us what would serve you best',
]

function List({ items, inverted }: { items: string[]; inverted?: boolean }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed">
          <Check
            className={cn('mt-0.5 size-4 shrink-0', inverted ? 'text-white' : 'text-brand')}
            strokeWidth={2.5}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function PartnershipTiersSection() {
  return (
    <section id="partnership" className="scroll-mt-20 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="02 — Packages" title="Partnership packages." className="max-w-3xl" />

        <div className="mt-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.12fr_1fr] lg:items-end lg:gap-2">
            {tiers.map((t) => (
              <div key={t.name} className={cn('flex flex-col', t.order)}>
                <article
                  className="flex flex-col border border-b-0 border-border p-8 max-lg:border-b sm:p-10"
                  style={{
                    borderTop: `4px solid ${t.medal}`,
                    background: `linear-gradient(${t.medalTint}, var(--background) 60%)`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-3xl font-extrabold uppercase tracking-tight" style={{ color: t.medalText }}>
                      {t.name}
                    </h3>
                    <span className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground lg:hidden">
                      {t.place === '1' ? '1st' : t.place === '2' ? '2nd' : '3rd'}
                    </span>
                  </div>
                  <p className="mt-6 whitespace-nowrap font-display text-2xl font-bold">
                    {t.cash}
                    <span className="px-2 font-normal text-muted-foreground">/</span>
                    {t.inKind}
                    {t.licenceNote && <span aria-label="see note on software licences">*</span>}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">Cash / in-kind</p>

                  <div className="mt-8 border-t border-border pt-8">
                    <List items={t.benefits} />
                  </div>

                  <div className="mt-8 border-t border-border pt-8">
                    <p className="mb-4 font-display text-[0.65rem] uppercase tracking-[0.3em] text-brand">
                      Logo on team merch
                    </p>
                    <List items={t.merch} />
                  </div>
                </article>
                <div
                  aria-hidden="true"
                  className={cn('hidden justify-center bg-brand pt-3 font-display text-4xl font-bold text-white lg:flex', t.step)}
                  style={{ borderTop: `8px solid ${t.medal}` }}
                >
                  {t.place}
                  <sup className="ml-1 mt-1 text-sm">{t.place === '1' ? 'ST' : t.place === '2' ? 'ND' : 'RD'}</sup>
                </div>
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="-mx-3 hidden h-5 rounded-t bg-brand-deep lg:block" />
        </div>

        <p className="mt-8 text-center text-sm font-semibold">Smaller contributions are also welcome, contact us.</p>

        <article className="mt-16 bg-foreground p-8 text-white sm:p-12">
          <div className="flex flex-col justify-between gap-6 border-b border-white/20 pb-10 lg:flex-row lg:items-end">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.35em] text-white/60">Only one available</p>
              <h3 className="mt-4 text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">Main partner</h3>
            </div>
            <div className="lg:text-right">
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">Starting at</p>
              <p className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                <span className="whitespace-nowrap">15 000 €</span>
                <span className="px-2 font-normal text-white/50">/</span>
                <span className="whitespace-nowrap">25 000 €*</span>
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">Cash / in-kind</p>
            </div>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <List items={mainBenefits} inverted />
            <div className="border-t border-white/20 pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="mb-4 font-display text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
                Plus extras agreed together, for example
              </p>
              <List items={mainExtras} inverted />
            </div>
          </div>

          <a
            href="#contact"
            className="mt-12 inline-flex items-center gap-3 border border-white bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-transparent hover:text-white"
          >
            Talk to us
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </article>

        <p className="mt-6 text-xs text-muted-foreground">
          * For Silver, Gold and Main partner, the value of software licences is agreed separately.
        </p>
      </div>
    </section>
  )
}
