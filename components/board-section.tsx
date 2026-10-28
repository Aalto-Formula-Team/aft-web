import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

const board = [
  {
    name: 'Ignacio Wąsowicz-Peinado',
    role: 'Team Captain',
    photo: '/images/board/ignacio-wasowicz.jpg',
    description: 'Leads the team, sets its overall direction and represents AFT towards the university and partners.',
  },
  {
    name: 'Dominika Holásková',
    role: 'Technical Manager',
    photo: '/images/board/dominika-holaskova.jpg',
    description: 'Oversees the engineering sub-teams and makes sure every system comes together as one car.',
  },
  {
    name: 'Khanh Hoang',
    role: 'Operations Manager',
    photo: '/images/board/khanh-hoang.jpg',
    description: "Runs day-to-day operations — planning, finances, logistics and the association's administration.",
  },
  {
    name: 'Anssi Lampinen',
    role: 'Sponsorship Manager',
    photo: '/images/board/anssi-lampinen.jpg',
    description: 'Builds and maintains our partnerships and secures the resources the team needs to build and race.',
  },
  {
    name: 'Jacky Zijin Ji',
    role: 'Marketing Manager',
    photo: '/images/board/jacky-zijin-ji.jpg',
    description: "Manages the team's brand, social media and communication with students, partners and fans.",
  },
]

export function BoardSection() {
  return (
    <section id="board" className="scroll-mt-20 bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="01 — The Board" title="The people behind the team." />
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            The Board sets strategy, owns the budget and coordinates the sub-teams so engineering and business
            decisions move together.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {board.map((member) => (
            <li key={member.name} className="group flex flex-col border border-border bg-background">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-4 sm:p-6">
                <span className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-brand sm:text-[0.65rem] sm:tracking-[0.3em]">
                  {member.role}
                </span>
                <h3 className="text-base font-bold uppercase tracking-wide sm:text-lg">{member.name}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{member.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
