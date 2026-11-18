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
    slug: 'ossi-oikarinen',
    title: 'Ossi Oikarinen',
    date: '2026-11-27',
    time: '12:00–14:00',
    type: 'AFT On The Grid',
    location: 'Design Factory, Puumiehenkuja 5A, Espoo',
    description:
      'A fireside chat with Ossi Oikarinen, a Finnish motorsport engineer with a 14-year career in Formula 1 at Arrows, Toyota, BMW Sauber and Ferrari.',
    link: { label: 'Register', href: 'https://luma.com/8lw0sqis?tk=ZC7tBU' },
    article: [
      'What does it take to engineer a Formula 1 car, and how do data, technology and teamwork come together to deliver performance at the highest level of motorsport? Join us for a fireside chat with Ossi Oikarinen, a Finnish motorsport engineer whose 14-year career in Formula 1 includes Arrows, Toyota, BMW Sauber and Ferrari.',
      'From race engineering and vehicle development to testing, data analysis and performance optimisation, we will look at what happens behind the scenes in motorsport and how engineering decisions can make the difference between winning and losing. Ossi will also share his experience of working at the top level of racing, the challenges of the industry and the path that took him from Finland to Formula 1.',
      'The session includes time for your own questions. Whether you study engineering, follow motorsport, or are interested in vehicle development, data analytics or the teamwork behind Formula 1, this is an opportunity to exchange ideas and gain new perspectives.',
    ],
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
