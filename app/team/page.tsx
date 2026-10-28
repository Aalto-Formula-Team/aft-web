import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { BoardSection } from '@/components/board-section'
import { TeamStructureSection } from '@/components/team-structure-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Our Team — Aalto Formula Team',
  description: 'Meet the Board of Aalto Formula Team and see how our sub-teams are organized.',
}

export default function TeamPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our Team"
          title="Meet the team."
          intro="Aalto Formula Team is run by students, for students. Meet the Board leading the project and the sub-teams building the car."
        />
        <BoardSection />
        <TeamStructureSection />
      </main>
      <SiteFooter />
    </>
  )
}
