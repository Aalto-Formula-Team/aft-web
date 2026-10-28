import Image from 'next/image'

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand pt-16 text-white lg:pt-20">
      <Image
        src="/images/hero-car-lines.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[70%_center] opacity-70 mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand via-brand/80 to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="font-display text-xs uppercase tracking-[0.35em] text-white/75">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-white/85">{intro}</p>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
    </section>
  )
}
