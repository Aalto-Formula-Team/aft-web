import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { SponsorSection } from '@/components/sponsor-section'
import { PartnershipTiersSection } from '@/components/partnership-tiers-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { SmoothHashScroll } from '@/components/smooth-hash-scroll'

export const metadata: Metadata = {
  title: 'For Companies | Aalto Formula Team',
  description: 'Partnership packages for companies, and how to get in touch with Aalto Formula Team ry.',
}

export default function ForCompaniesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="For companies"
          title="Build with us."
          intro="Help us build our first Formula Student car. See what we offer our partners and start the conversation."
        />
        <SponsorSection />
        <PartnershipTiersSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <SmoothHashScroll />
    </>
  )
}
