import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { EventsTimeline } from '@/components/events-timeline'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Events | Aalto Formula Team',
  description: 'Upcoming and past events from Aalto Formula Team, from speaker events to workshops.',
}

// Rebuild the page hourly so events move from "upcoming" to "past" on their own.
export const revalidate = 3600

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Events"
          title="What's on."
          intro="Our AFT On The Grid speaker series, workshops and more. Here's what's coming up, everybody's welcome to the events."
        />
        <EventsTimeline />
      </main>
      <SiteFooter />
    </>
  )
}
