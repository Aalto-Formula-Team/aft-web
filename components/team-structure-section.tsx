import { Boxes, CircuitBoard, Handshake, Megaphone, Waypoints, Users } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const subTeams = [
  {
    name: 'Chassis',
    icon: Boxes,
    description:
      'Designs the frame, bodywork and aerodynamics — the structural backbone every other system is built around.',
  },
  {
    name: 'Electrical',
    icon: CircuitBoard,
    description:
      'Develops the wiring harness, sensors, data acquisition and control electronics that bring the car to life.',
  },
  {
    name: 'Suspension',
    icon: Waypoints,
    description:
      'Engineers kinematics, uprights and dampers to translate power into grip, stability and lap time.',
  },
  {
    name: 'Corporate Relations',
    icon: Handshake,
    description:
      'Builds long-term partnerships with industry, manages sponsor value and secures the resources we race on.',
  },
  {
    name: 'Marketing',
    icon: Megaphone,
    description:
      "Owns the team's brand, content and channels — amplifying our partners to university and motorsport audiences.",
  },
]

export function TeamStructureSection() {
  return (
    <section id="structure" className="scroll-mt-20 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="02 — Team Structure" title="How we are organized." />
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            The Board leads five sub-teams that work in parallel — three on the engineering of the car and two on the
            partnerships and communication that make it possible.
          </p>
        </div>

        <div className="mt-16 border border-border">
          <div className="flex flex-col gap-4 border-b border-border bg-brand p-8 text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Users className="size-6" aria-hidden="true" />
              <h3 className="text-xl font-bold uppercase tracking-wide">Our Teams</h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/80">
              Five specialized sub-teams, each led by its own members and coordinated by the Board.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5">
            {subTeams.map((team, i) => (
              <li
                key={team.name}
                className="group flex flex-col gap-6 border-border p-8 transition-colors hover:bg-muted max-lg:border-b sm:odd:border-r lg:border-r lg:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <team.icon className="size-6 text-brand" aria-hidden="true" />
                  <span className="font-display text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-wide">{team.name}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{team.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
