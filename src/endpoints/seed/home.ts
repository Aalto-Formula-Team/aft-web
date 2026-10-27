import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

import { heading, paragraph, richText } from './lexical'

type HomeArgs = {
  heroImage: Media
  teamImages: [Media, Media]
  contactFormID: number
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  teamImages,
  contactFormID,
}) => ({
  slug: 'home',
  title: 'Home',
  _status: 'published',
  hero: {
    type: 'highImpact',
    eyebrow: 'Formula Student · Est. 2026',
    richText: richText(
      heading('h1', 'Aalto Formula Team: Built by students, powered by innovation.'),
      paragraph(
        'Finland’s future in motorsport starts here. We are designing, engineering, and building from the ground up.',
      ),
    ),
    links: [
      {
        link: {
          type: 'custom',
          appearance: 'default',
          label: 'Join Our Journey',
          url: '/#roadmap',
        },
      },
      { link: { type: 'custom', appearance: 'outline', label: 'Sponsor Value', url: '/#sponsor' } },
    ],
    media: heroImage.id,
  },
  layout: [
    {
      blockType: 'teamOverview',
      anchorId: 'about',
      sectionHeader: {
        eyebrow: '01 — About Us',
        title: 'One team. Five disciplines. A single goal.',
        intro:
          'Aalto Formula Team is a newly founded, student-run organization at Aalto University. Guided by our Board, five specialized sub-teams work in parallel to design, engineer and fund a competitive Formula Student car.',
      },
      images: teamImages.map((image) => image.id),
      board: {
        title: 'The Board',
        description:
          'Sets strategy, owns the budget and coordinates the sub-teams so engineering and business decisions move together.',
      },
      subTeams: [
        {
          name: 'Chassis',
          icon: 'boxes',
          description:
            'Designs the frame, bodywork and aerodynamics — the structural backbone every other system is built around.',
        },
        {
          name: 'Electrical',
          icon: 'circuitBoard',
          description:
            'Develops the wiring harness, sensors, data acquisition and control electronics that bring the car to life.',
        },
        {
          name: 'Suspension',
          icon: 'waypoints',
          description:
            'Engineers kinematics, uprights and dampers to translate power into grip, stability and lap time.',
        },
        {
          name: 'Corporate Relations',
          icon: 'handshake',
          description:
            'Builds long-term partnerships with industry, manages sponsor value and secures the resources we race on.',
        },
        {
          name: 'Marketing',
          icon: 'megaphone',
          description:
            "Owns the team's brand, content and channels — amplifying our partners to university and motorsport audiences.",
        },
      ],
    },
    {
      blockType: 'roadmap',
      anchorId: 'roadmap',
      sectionHeader: {
        eyebrow: '02 — Our Roadmap',
        title: 'Design. Build. Race.',
        intro:
          'A structured, milestone-driven plan from blank page to starting grid. Every phase is an opportunity for partners to get involved — and to be seen.',
      },
      milestones: [
        {
          phase: 'Design',
          icon: 'pencilRuler',
          status: 'In progress',
          active: true,
          items: [
            { text: 'Concept & rules analysis' },
            { text: 'CAD, simulation & FEA' },
            { text: 'Design reviews with partners' },
          ],
        },
        {
          phase: 'Build',
          icon: 'wrench',
          status: 'Upcoming',
          items: [
            { text: 'Manufacturing & sourcing' },
            { text: 'Assembly & integration' },
            { text: 'Testing & validation' },
          ],
        },
        {
          phase: 'Race',
          icon: 'flag',
          status: 'Goal',
          items: [
            { text: 'Technical inspection' },
            { text: 'Static & dynamic events' },
            { text: 'Formula Student competition' },
          ],
        },
      ],
    },
    {
      blockType: 'sponsorValue',
      anchorId: 'sponsor',
      sectionHeader: { eyebrow: '03 — Sponsor Value', title: 'Why partner with us?' },
      pillars: [
        {
          title: 'Brand Recognition',
          icon: 'brandBadge',
          body: 'Secure prime logo placement on our website today — and on the physical car, team apparel and marketing materials as the build comes together. Reach a highly engaged university and motorsport audience from day one.',
          points: [
            { text: 'Website placement now' },
            { text: 'Car livery & team apparel' },
            { text: 'Events, content & social' },
          ],
        },
        {
          title: 'Battle-Tested Talent',
          icon: 'network',
          body: 'Gain direct access to a pipeline of elite, hands-on students gaining practical, high-pressure experience in engineering and business — the future hires your organization is looking for.',
          points: [
            { text: 'Recruitment access' },
            { text: 'Workshops & tech talks' },
            { text: 'Real-world problem solving' },
          ],
        },
      ],
      cta: {
        text: "Founding partners shape the team from the very first bolt. Let's build something together.",
        link: { type: 'custom', label: 'Partner With Us', url: '/#contact' },
      },
    },
    {
      blockType: 'contact',
      anchorId: 'contact',
      sectionHeader: {
        eyebrow: '04 — Contact',
        title: 'Start the conversation.',
        intro:
          "Interested in becoming a founding partner? Tell us a little about your organization and we'll get back to you with our partnership deck.",
      },
      details: [
        { label: 'Email', value: 'partners@aaltoformula.fi' },
        { label: 'Location', value: 'Aalto University, Espoo, Finland' },
      ],
      form: contactFormID,
    },
  ],
  meta: {
    title: 'Aalto Formula Team — Built by Students, Powered by Innovation',
    description:
      "Aalto Formula Team is a student-run Formula Student team designing, engineering and building a race car from the ground up. Partner with Finland's future in motorsport.",
    image: heroImage.id,
  },
})
