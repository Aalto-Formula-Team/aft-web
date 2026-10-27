import type { Block } from 'payload'

import { anchor } from '@/fields/anchor'
import { icon } from '@/fields/icon'
import { sectionHeader } from '@/fields/sectionHeader'

export const Roadmap: Block = {
  slug: 'roadmap',
  interfaceName: 'RoadmapBlock',
  fields: [
    anchor,
    sectionHeader,
    {
      name: 'milestones',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        { name: 'phase', type: 'text', required: true },
        icon(),
        { name: 'status', type: 'text' },
        {
          name: 'active',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Highlights this milestone as the current phase.',
          },
        },
        {
          name: 'items',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },
  ],
}
