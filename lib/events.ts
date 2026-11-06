/**
 * Team events shown on the /events page.
 *
 * To add an event, copy one of the blocks below and change the details.
 * The order in this list does not matter: the page sorts events by date and
 * moves them from "upcoming" to "past" automatically once the date has passed.
 *
 * - slug:     the event's web address, e.g. 'emma-kimilainen' gives /events/emma-kimilainen
 * - date:     'YYYY-MM-DD'
 * - time:     optional, free text, e.g. '17:00–19:00'
 * - type:     short label shown above the title, e.g. 'AFT On The Grid' (our speaker series), 'Workshop'
 * - image:    optional, put the file in public/images/events/ and write '/images/events/<file>'
 * - link:     optional, e.g. a sign-up form or a LinkedIn post
 * - article:  optional, the text on the event's own page, one string per paragraph
 */
export type TeamEvent = {
  slug: string
  title: string
  date: string
  time?: string
  type: string
  location?: string
  description: string
  image?: string
  link?: { label: string; href: string }
  article?: string[]
}

export const events: TeamEvent[] = [
  {
    slug: 'ossi-oikkarinen',
    title: 'Ossi Oikkarinen',
    date: '2026-11-27',
    type: 'AFT On The Grid',
    location: 'Aalto University, Otaniemi',
    description: 'Ossi Oikkarinen joins us to talk about his career and answer questions from students.',
    article: ['Signup page coming soon'],
  },
  {
    slug: 'emma-kimilainen',
    title: 'Emma Kimiläinen',
    date: '2026-11-03',
    type: 'AFT On The Grid',
    location: 'Aalto University, Otaniemi',
    description:
      'Racing driver Emma Kimiläinen shared her journey through motorsport and what it takes to compete at the top level.',
    image: '/images/emma-kimilainen.jpg',
  },
]
