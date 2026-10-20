import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-brand pt-16 text-white lg:pt-20"
    >
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

      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <p className="font-display text-xs uppercase tracking-[0.35em] text-white/75">
          Formula Student · Est. 2026
        </p>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Aalto Formula Team: Built by students, powered by innovation.
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
          {"Finland’s future in motorsport starts here. We are designing, engineering, and building from the ground up."}
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#roadmap"
            className="group inline-flex items-center justify-center gap-3 border border-white bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-brand transition-colors hover:bg-transparent hover:text-white"
          >
            Join Our Journey
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#sponsor"
            className="inline-flex items-center justify-center border border-white/50 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Sponsor Value
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
    </section>
  )
}
