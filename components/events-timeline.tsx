import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { events, type TeamEvent } from '@/lib/events'

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })

function todayIso() {
  // Compare in Finnish time, so an event stays "upcoming" for the whole day it happens.
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Helsinki' }).format(new Date())
}

function EventCard({ event }: { event: TeamEvent }) {
  const [day, month, year] = event.date ? dateFormat.format(new Date(`${event.date}T00:00:00Z`)).split(' ') : []

  return (
    <li className="relative grid gap-6 pb-12 pl-10 sm:grid-cols-[10rem_1fr] sm:gap-10 sm:pl-14">
      <span
        aria-hidden="true"
        className="absolute left-0 top-1 size-4 -translate-x-1/2 border-2 border-brand bg-brand"
      />
      {event.date ? (
        <time dateTime={event.date} className="font-display text-brand">
          <span className="block whitespace-nowrap text-4xl font-bold uppercase leading-none">
            {day} {month}
          </span>
          <span className="mt-2 block text-xs uppercase tracking-[0.25em]">{year}</span>
        </time>
      ) : (
        <p className="font-display text-brand">
          <span className="block text-4xl font-bold leading-none">TBD</span>
          <span className="mt-2 block text-xs uppercase tracking-[0.25em]">Date coming soon</span>
        </p>
      )}

      <article
        className="group relative flex flex-col overflow-hidden border border-brand bg-background transition-colors sm:flex-row"
      >
        {event.image && (
          <div className="relative aspect-[4/3] shrink-0 bg-muted sm:aspect-auto sm:w-64">
            <Image
              src={event.image}
              alt=""
              fill
              sizes="(min-width: 640px) 16rem, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="flex flex-col p-6 sm:p-8">
          <p className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-brand">{event.type}</p>
          <h3 className="mt-3 text-2xl font-extrabold uppercase tracking-tight">
            {/* The ::after covers the whole card, so clicking anywhere on it opens the event. */}
            <Link href={`/events/${event.slug}`} className="transition-colors after:absolute after:inset-0 group-hover:text-brand">
              {event.title}
            </Link>
          </h3>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{event.description}</p>
          {(event.time || event.location) && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
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
          )}
          {event.link && (
            <a
              href={event.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-6 inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-[0.18em] text-brand hover:underline"
            >
              {event.link.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          )}
          <span
            aria-hidden="true"
            className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-[0.18em] text-brand group-hover:underline"
          >
            Read more
            <ArrowRight className="size-4" />
          </span>
        </div>
      </article>
    </li>
  )
}

const pastDateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

function PastEventCard({ event }: { event: TeamEvent }) {
  return (
    <li>
      <article className="group relative flex h-full flex-col overflow-hidden border border-border bg-background transition-colors hover:border-brand">
        {event.image && (
          <div className="relative aspect-[16/10] bg-muted">
            <Image
              src={event.image}
              alt=""
              fill
              sizes="(min-width: 640px) 28rem, 100vw"
              className="object-cover grayscale-[40%] transition group-hover:grayscale-0"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <p className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-brand">
            {event.type}
            {event.date && (
              <>
                <span aria-hidden="true" className="mx-2 text-muted-foreground">/</span>
                <time dateTime={event.date} className="text-muted-foreground">
                  {pastDateFormat.format(new Date(`${event.date}T00:00:00Z`))}
                </time>
              </>
            )}
          </p>
          <h3 className="mt-3 text-2xl font-extrabold uppercase tracking-tight">
            {/* The ::after covers the whole card, so clicking anywhere on it opens the event. */}
            <Link href={`/events/${event.slug}`} className="transition-colors after:absolute after:inset-0 group-hover:text-brand">
              {event.title}
            </Link>
          </h3>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{event.description}</p>
          <span
            aria-hidden="true"
            className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-bold uppercase tracking-[0.18em] text-brand group-hover:underline"
          >
            Read more
            <ArrowRight className="size-4" />
          </span>
        </div>
      </article>
    </li>
  )
}

export function EventsTimeline() {
  const today = todayIso()
  // Upcoming: the next event first, events without a date yet at the end.
  // Past: the most recent event first.
  const upcoming = events
    .filter((e) => !e.date || e.date >= today)
    .sort((a, b) => (a.date ?? '9999').localeCompare(b.date ?? '9999'))
  const past = events
    .filter((e) => e.date && e.date < today)
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))

  return (
    <section id="events" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="relative ml-2 border-l border-border sm:ml-4">
          <p className="relative -mt-1 mb-10 pl-10 font-display text-xs uppercase tracking-[0.35em] text-brand sm:pl-14">
            Upcoming
          </p>
          {upcoming.length > 0 ? (
            <ol>
              {upcoming.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </ol>
          ) : (
            <p className="pb-12 pl-10 text-muted-foreground sm:pl-14">
              New events are coming soon. Follow us on Instagram and LinkedIn to hear first.
            </p>
          )}
        </div>

        {past.length > 0 && (
          <div className="mt-12">
            <div className="mb-10 flex items-center gap-4" role="separator">
              <span className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground">Past events</span>
              <span aria-hidden="true" className="h-px flex-1 border-t border-dashed border-border" />
            </div>
            <ul className="grid gap-6 sm:grid-cols-2">
              {past.map((e) => (
                <PastEventCard key={e.slug} event={e} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
