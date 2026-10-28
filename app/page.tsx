import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { FormulaStudentSection } from '@/components/formula-student-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <FormulaStudentSection />
        <RoadmapSection />
      </main>
      <SiteFooter />
    </>
  )
}
