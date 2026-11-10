import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CalendarDays, Clock, MapPin } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { events } from '@/lib/events'

type Props = {
  params: Promise<{ slug: string }>
}

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = events.find((e) => e.slug === slug)
  if (!event) return {}

  return {
    title: `${event.title} | Aalto Formula Team`,
    description: event.description,
  }
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params
  const event = events.find((e) => e.slug === slug)
  if (!event) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow={event.type} title={event.title} intro={event.description} />
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <li className="flex items-center gap-2">
                <CalendarDays className="size-4 text-brand" aria-hidden="true" />
                {event.date ? (
                  <time dateTime={event.date}>{dateFormat.format(new Date(`${event.date}T00:00:00Z`))}</time>
                ) : (
                  'Date TBD'
                )}
              </li>
              {event.time && (
                <li className="flex items-center gap-2">
                  <Clock className="size-4 text-brand" aria-hidden="true" />
                  {event.time}
                </li>
              )}
              {event.location && (
                <li className="flex items-center gap-2">
                  <MapPin className="size-4 text-brand" aria-hidden="true" />
                  {event.location}
                </li>
              )}
            </ul>

            {event.image && (
              <div className="relative mt-10 aspect-[4/3] overflow-hidden bg-muted">
                <Image src={event.image} alt="" fill sizes="(min-width: 768px) 48rem, 100vw" className="object-cover" />
              </div>
            )}

            {event.article && (
              <div className="mt-10 flex flex-col gap-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                {event.article.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {event.link && (
              <a
                href={event.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand hover:underline"
              >
                {event.link.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            )}

            <div className="mt-12 border-t border-border pt-8">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand hover:underline"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                All events
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
