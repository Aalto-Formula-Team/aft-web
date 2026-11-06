import { Users } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const subTeams = [
  {
    name: 'Chassis',
    description:
      'Designs the frame, bodywork and aerodynamics. Every other part of the car is built around their work.',
  },
  {
    name: 'Electrical',
    description:
      'Works on the wiring, sensors, data logging and control electronics that bring the car to life.',
  },
  {
    name: 'Suspension',
    description:
      'Works on the kinematics, uprights and dampers that turn power into grip, stability and faster laps.',
  },
  {
    name: 'Partnerships',
    description:
      'Builds long-term partnerships with companies and makes sure we have what we need to race.',
  },
  {
    name: 'Marketing',
    description:
      "Runs the team's brand, content and social media, and makes sure our partners get seen.",
  },
]

export function TeamStructureSection() {
  return (
    <section id="structure" className="scroll-mt-20 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="02 — Team Structure" title="How we are organized." />

        <div className="mt-16 border border-border">
          <div className="flex flex-col gap-4 border-b border-border bg-brand p-8 text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Users className="size-6" aria-hidden="true" />
              <h3 className="text-xl font-bold uppercase tracking-wide">Our Teams</h3>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5">
            {subTeams.map((team, i) => (
              <li
                key={team.name}
                className="group flex flex-col gap-6 border-border p-8 transition-colors hover:bg-muted max-lg:border-b sm:odd:border-r lg:border-r lg:last:border-r-0"
              >
                <span className="font-display text-sm text-brand">{String(i + 1).padStart(2, '0')}</span>
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
