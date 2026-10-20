import Image from 'next/image'
import { Boxes, CircuitBoard, Handshake, Megaphone, Waypoints, Landmark } from 'lucide-react'
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

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            eyebrow="01 — About Us"
            title="One team. Five disciplines. A single goal."
          />
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Aalto Formula Team is a newly founded, student-run organization at Aalto University. Guided by our Board,
            five specialized sub-teams work in parallel to design, engineer and fund a competitive Formula Student car.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src="/images/team-whiteboard.png"
              alt="Students sketching chassis concepts together at a whiteboard"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src="/images/team-laptops.png"
              alt="Students reviewing suspension CAD models on laptops"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 border border-border">
          <div className="flex flex-col gap-4 border-b border-border bg-brand p-8 text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Landmark className="size-6" aria-hidden="true" />
              <h3 className="text-xl font-bold uppercase tracking-wide">The Board</h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/80">
              Sets strategy, owns the budget and coordinates the sub-teams so engineering and business decisions move
              together.
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
