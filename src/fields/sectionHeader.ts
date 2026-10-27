import type { GroupField } from 'payload'

export const sectionHeader: GroupField = {
  name: 'sectionHeader',
  type: 'group',
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'title', type: 'text' },
    { name: 'intro', type: 'textarea' },
  ],
}
