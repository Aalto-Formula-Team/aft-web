import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { SponsorSection } from '@/components/sponsor-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Contact — Aalto Formula Team',
  description: 'Get in touch with Aalto Formula Team ry, become a partner, and find our association details.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Get in touch."
          intro="Want to partner with us, join the team or just ask a question? Here's how to reach Aalto Formula Team."
        />
        <SponsorSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
