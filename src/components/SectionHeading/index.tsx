import React from 'react'

import { cn } from '@/utilities/ui'

export const SectionHeading = ({
  eyebrow,
  title,
  tone = 'dark',
  className,
}: {
  eyebrow?: string | null
  title?: string | null
  tone?: 'dark' | 'light'
  className?: string
}) => (
  <div className={className}>
    {eyebrow && (
      <p
        className={cn(
          'font-display text-xs uppercase tracking-[0.35em]',
          tone === 'light' ? 'text-white/70' : 'text-brand',
        )}
      >
        {eyebrow}
      </p>
    )}
    {title && (
      <h2
        className={cn(
          'mt-5 text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl',
          tone === 'light' ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
    )}
  </div>
)
