import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="01 — Who We Are"
            title="Engineers, designers and business minds. One car."
          />
          <div className="flex max-w-xl flex-col gap-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              Aalto Formula Team (AFT) is a student-run, non-profit association at Aalto University in Espoo, under
              the Aalto University Student Union (AYY). We bring Aalto students together to design, build and race a
              Formula Student car, and we want more people in Finland and at Aalto to know about the competition.
            </p>
            <p>
              Our Board leads five sub-teams that work side by side. Three of them work on the car itself (chassis,
              electrical and suspension), and two take care of partnerships and communication. Whether you study
              engineering, business or design, there&apos;s a place for you on the team.
            </p>
            <p>
              Beyond the car, we will organize events and excursions and work with companies, the university and other
              student associations. It&apos;s the kind of hands-on experience you can&apos;t get in a lecture hall.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src="/images/board/board.jpg"
              alt="The Aalto Formula Team board"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src="/images/emma-kimilainen.jpg"
              alt="Racing driver Emma Kimiläinen speaking on stage"
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
