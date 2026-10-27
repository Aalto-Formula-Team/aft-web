import {
  BadgeCheck,
  Boxes,
  CarFront,
  CircuitBoard,
  Flag,
  Handshake,
  Landmark,
  Megaphone,
  Network,
  PencilRuler,
  Waypoints,
  Wrench,
  type LucideProps,
} from 'lucide-react'
import React from 'react'

import type { IconKey } from '@/fields/icon'
import { cn } from '@/utilities/ui'

const icons: Record<Exclude<IconKey, 'brandBadge'>, React.ComponentType<LucideProps>> = {
  boxes: Boxes,
  circuitBoard: CircuitBoard,
  waypoints: Waypoints,
  handshake: Handshake,
  megaphone: Megaphone,
  landmark: Landmark,
  pencilRuler: PencilRuler,
  wrench: Wrench,
  flag: Flag,
  network: Network,
}

export const Icon = ({
  name,
  className,
  strokeWidth,
}: {
  name?: IconKey | null
  className?: string
  strokeWidth?: number
}) => {
  if (!name) return null

  if (name === 'brandBadge') {
    return (
      <span className="relative inline-flex">
        <CarFront className={className} strokeWidth={strokeWidth} aria-hidden="true" />
        <BadgeCheck
          className={cn('absolute -right-2 -top-2 size-5 fill-brand text-white')}
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>
    )
  }

  const Component = icons[name]
  return <Component className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
