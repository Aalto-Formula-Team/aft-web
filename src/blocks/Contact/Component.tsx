import React from 'react'

import type { ContactBlock as ContactBlockProps } from '@/payload-types'

import { FormBlock } from '@/blocks/Form/Component'
import { SectionHeading } from '@/components/SectionHeading'

export const ContactBlock: React.FC<ContactBlockProps> = ({
  anchorId,
  sectionHeader,
  details,
  form,
}) => {
  return (
    <section id={anchorId || undefined} className="scroll-mt-20 bg-brand py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-10">
        <div>
          <SectionHeading
            eyebrow={sectionHeader?.eyebrow}
            title={sectionHeader?.title}
            tone="light"
          />
          {sectionHeader?.intro && (
            <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-white/80">
              {sectionHeader.intro}
            </p>
          )}
          {details && details.length > 0 && (
            <dl className="mt-12 flex flex-col gap-6 border-t border-white/20 pt-8">
              {details.map((d) => (
                <div key={d.id}>
                  <dt className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
                    {d.label}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold">{d.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {form && typeof form === 'object' && (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <FormBlock enableIntro={false} form={form as any} variant="onBrand" />
        )}
      </div>
    </section>
  )
}
