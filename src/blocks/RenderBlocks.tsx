import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ContactBlock } from '@/blocks/Contact/Component'
import { RoadmapBlock } from '@/blocks/Roadmap/Component'
import { SponsorValueBlock } from '@/blocks/SponsorValue/Component'
import { TeamOverviewBlock } from '@/blocks/TeamOverview/Component'

const blockComponents = {
  contact: ContactBlock,
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  roadmap: RoadmapBlock,
  sponsorValue: SponsorValueBlock,
  teamOverview: TeamOverviewBlock,
}

// Sections that bring their own full-bleed background and spacing.
const fullBleed = new Set(['teamOverview', 'roadmap', 'sponsorValue', 'contact'])

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className={fullBleed.has(blockType) ? undefined : 'my-16'} key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
