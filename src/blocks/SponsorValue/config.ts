import type { Block } from 'payload'

import { anchor } from '@/fields/anchor'
import { icon } from '@/fields/icon'
import { link } from '@/fields/link'
import { sectionHeader } from '@/fields/sectionHeader'

export const SponsorValue: Block = {
  slug: 'sponsorValue',
  interfaceName: 'SponsorValueBlock',
  labels: {
    singular: 'Sponsor Value',
    plural: 'Sponsor Values',
  },
  fields: [
    anchor,
    sectionHeader,
    {
      name: 'pillars',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        { name: 'title', type: 'text', required: true },
        icon(),
        { name: 'body', type: 'textarea' },
        {
          name: 'points',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      fields: [{ name: 'text', type: 'textarea' }, link({ appearances: false })],
    },
  ],
}
