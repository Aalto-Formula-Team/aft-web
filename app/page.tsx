import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { BoardSection } from '@/components/board-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { SponsorSection } from '@/components/sponsor-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <BoardSection />
        <RoadmapSection />
        <SponsorSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
