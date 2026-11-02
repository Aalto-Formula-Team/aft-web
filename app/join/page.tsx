import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { MembershipSection } from '@/components/membership-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Join Us | Aalto Formula Team',
  description: 'Apply for membership in Aalto Formula Team and help us design and build a Formula Student race car.',
}

export default function JoinPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Join Us"
          title="Become a member."
          intro="Want to design, build and race a Formula Student car? Apply to join Aalto Formula Team."
        />
        <MembershipSection />
      </main>
      <SiteFooter />
    </>
  )
}
