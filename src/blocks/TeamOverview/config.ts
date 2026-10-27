import type { Block } from 'payload'

import { anchor } from '@/fields/anchor'
import { icon } from '@/fields/icon'
import { sectionHeader } from '@/fields/sectionHeader'

export const TeamOverview: Block = {
  slug: 'teamOverview',
  interfaceName: 'TeamOverviewBlock',
  labels: {
    singular: 'Team Overview',
    plural: 'Team Overviews',
  },
  fields: [
    anchor,
    sectionHeader,
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      maxRows: 2,
    },
    {
      name: 'board',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'subTeams',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        { name: 'name', type: 'text', required: true },
        icon(),
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}
