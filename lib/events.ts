/**
 * Team events shown on the /events page.
 *
 * To add an event, copy one of the blocks below and change the details.
 * The order in this list does not matter: the page sorts events by date and
 * moves them from "upcoming" to "past" automatically once the date has passed.
 *
 * - date:     'YYYY-MM-DD'
 * - time:     optional, free text, e.g. '17:00–19:00'
 * - type:     short label shown above the title, e.g. 'AFT On The Grid' (our speaker series), 'Workshop'
 * - image:    optional, put the file in public/images/events/ and write '/images/events/<file>'
 * - link:     optional, e.g. a sign-up form or a LinkedIn post
 */
export type TeamEvent = {
  title: string
  date: string
  time?: string
  type: string
  location?: string
  description: string
  image?: string
  link?: { label: string; href: string }
}

export const events: TeamEvent[] = [
  {
    title: 'Ossi Oikkarinen',
    date: '2026-11-20', // TODO: confirm date
    type: 'AFT On The Grid',
    location: 'Aalto University, Otaniemi',
    description: 'Ossi Oikkarinen joins us to talk about his career and answer questions from students.',
  },
  {
    title: 'Emma Kimiläinen',
    date: '2026-10-15', // TODO: confirm date
    type: 'AFT On The Grid',
    location: 'Aalto University, Otaniemi',
    description:
      'Racing driver Emma Kimiläinen shared her journey through motorsport and what it takes to compete at the top level.',
    image: '/images/emma-kimilainen.jpg',
  },
]
