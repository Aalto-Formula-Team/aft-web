import { cn } from '@/lib/utils'

export function AftMonogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="500 485 550 215"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <polygon points="610,487 716,698 674,698 610,573 549,698 504,698" />
      <polygon points="661,487 1048,487 1028,523 961,523 961,698 924,698 924,523 681,523" />
      <polygon points="696,561 873,561 873,598 760,598 818,696 774,696" />
    </svg>
  )
}

export function AftLogo({ className, size = 'md' }: { className?: string; size?: 'md' | 'lg' }) {
  return (
    <span className={cn('flex items-center gap-3 text-white', className)}>
      <AftMonogram className={size === 'lg' ? 'h-12 w-auto' : 'h-8 w-auto'} />
      <span
        className={cn(
          'font-display font-normal uppercase leading-[1.05] tracking-[0.18em]',
          size === 'lg' ? 'text-sm' : 'text-[0.6rem]',
        )}
      >
        <span className="block">Aalto</span>
        <span className="block">Formula</span>
        <span className="block">Team</span>
      </span>
      <span className="sr-only">Aalto Formula Team</span>
    </span>
  )
}
