import type { Block } from 'payload'

import { anchor } from '@/fields/anchor'
import { sectionHeader } from '@/fields/sectionHeader'

export const Contact: Block = {
  slug: 'contact',
  interfaceName: 'ContactBlock',
  fields: [
    anchor,
    sectionHeader,
    {
      name: 'details',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
      ],
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
  ],
}
