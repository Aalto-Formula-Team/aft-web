type Child = { [k: string]: unknown; type: string; version: number }

const text = (value: string): Child => ({
  type: 'text',
  detail: 0,
  format: 0,
  mode: 'normal',
  style: '',
  text: value,
  version: 1,
})

const block = (type: string, extra: Record<string, unknown>, value: string): Child => ({
  type,
  children: [text(value)],
  direction: 'ltr',
  format: '',
  indent: 0,
  version: 1,
  ...extra,
})

export const heading = (tag: 'h1' | 'h2' | 'h3', value: string) => block('heading', { tag }, value)

export const paragraph = (value: string) => block('paragraph', { textFormat: 0 }, value)

export const richText = (...children: Child[]) => ({
  root: {
    type: 'root' as const,
    children,
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
})
