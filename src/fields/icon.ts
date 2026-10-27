import type { Field } from 'payload'

export const iconKeys = [
  'boxes',
  'circuitBoard',
  'waypoints',
  'handshake',
  'megaphone',
  'landmark',
  'pencilRuler',
  'wrench',
  'flag',
  'network',
  'brandBadge',
] as const

export type IconKey = (typeof iconKeys)[number]

export const icon = (overrides: { required?: boolean } = {}): Field => ({
  name: 'icon',
  type: 'select',
  options: iconKeys.map((value) => ({
    label: value.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()),
    value,
  })),
  ...overrides,
})
