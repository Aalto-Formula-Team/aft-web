import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'tagline',
      type: 'textarea',
    },
    {
      name: 'socials',
      type: 'array',
      maxRows: 6,
      admin: { initCollapsed: true },
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'short',
          type: 'text',
          required: true,
          admin: { description: 'Two-letter abbreviation shown in the footer button, e.g. IG.' },
        },
        { name: 'url', type: 'text', required: true },
      ],
    },
    { name: 'copyright', type: 'text' },
    { name: 'affiliation', type: 'text' },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
