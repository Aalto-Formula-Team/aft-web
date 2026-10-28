import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="01 — Who We Are"
            title="One team. Five disciplines. A single goal."
          />
          <div className="flex max-w-xl flex-col gap-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              Aalto Formula Team (AFT) is a student-run, non-profit association at Aalto University in Espoo, operating
              within the Aalto University Student Union (AYY). Our purpose is to bring Aalto students together to
              design, build and race a Formula Student car — and to grow the recognition of the competition in Finland
              and at Aalto.
            </p>
            <p>
              Guided by our Board, five sub-teams work in parallel: three engineer the car itself — chassis,
              electrical and suspension — while two build the partnerships and communication that make the project
              possible. Students from engineering, business and design all have a place on the team.
            </p>
            <p>
              Beyond the car, we will organize events and excursions and work closely with companies, the university
              and other student associations — giving our members hands-on experience they can&apos;t get in a
              lecture hall.
            </p>
          </div>
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

      </div>
    </section>
  )
}
