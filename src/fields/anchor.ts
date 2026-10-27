import type { TextField } from 'payload'

export const anchor: TextField = {
  name: 'anchorId',
  type: 'text',
  label: 'Anchor ID',
  admin: {
    description: 'Used as the section id so nav links like "#about" can scroll to it.',
  },
}
