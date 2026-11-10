/**
 * Team events shown on the /events page.
 *
 * To add an event, copy one of the blocks below and change the details.
 * The order in this list does not matter: the page sorts events by date and
 * moves them from "upcoming" to "past" automatically once the date has passed.
 *
 * - slug:     the event's web address, e.g. 'emma-kimilainen' gives /events/emma-kimilainen
 * - date:     'YYYY-MM-DD', or leave it out if the date is not set yet (shows as 'TBD'
 *             at the end of the upcoming events)
 * - time:     optional, free text, e.g. '17:00–19:00'
 * - type:     short label shown above the title, e.g. 'AFT On The Grid' (our speaker series), 'Workshop'
 * - image:    optional, put the file in public/images/events/ and write '/images/events/<file>'
 * - link:     optional, e.g. a sign-up form or a LinkedIn post
 * - article:  optional, the text on the event's own page, one string per paragraph
 */
export type TeamEvent = {
  slug: string
  title: string
  date?: string
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
    slug: 'mika-salo',
    title: 'Mika Salo',
    date: '2027-01-21',
    type: 'AFT On The Grid',
    location: 'Aalto University, Otaniemi',
    description: 'Former Formula 1 driver Mika Salo joins us to talk about his career and answer questions from students.',
    article: ['Signup details coming soon.'],
  },
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
    article: [
      "Having Emma Kimiläinen as a guest speaker gave us a valuable opportunity to gain insight into the world of professional motorsport and the experiences behind a successful racing career. Emma is a Finnish professional racing driver who has competed in several international championships, including the W Series, and has more recently made a successful transition into electric powerboat racing. As part of Team Brady in the E1 Series, she won the World Championship in both 2024 and 2025. Her career is a great example of how determination, adaptability, and passion can open doors to new opportunities.",
      "One of the main takeaways from Emma's talk was the importance of perseverance when pursuing ambitious goals. She shared experiences from her career, including the challenges and setbacks she has faced along the way, highlighting that success is rarely a straightforward journey. Her return to racing after a four-year break and her transition from car racing to electric powerboat racing demonstrated the importance of being open to change, stepping outside one's comfort zone, and continuously learning. She also discussed the challenges of working in a traditionally male-dominated industry and the importance of creating more opportunities and visibility for women in motorsport.",
      "Overall, the talk offered valuable lessons that extend beyond motorsport itself. Emma's experiences highlighted the importance of resilience, self-confidence, and adaptability, as well as having the courage to pursue opportunities even when the outcome is uncertain. Her journey showed us that setbacks do not necessarily prevent success and that being willing to take on new challenges can lead to unexpected opportunities. It was an inspiring reminder that these qualities are relevant not only in professional sports but also in our own studies and future careers.",
    ],
  },
]
