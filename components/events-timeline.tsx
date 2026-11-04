import Image from 'next/image'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { events, type TeamEvent } from '@/lib/events'
import { cn } from '@/lib/utils'

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })

function todayIso() {
  // Compare in Finnish time, so an event stays "upcoming" for the whole day it happens.
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Helsinki' }).format(new Date())
}

function EventCard({ event, past }: { event: TeamEvent; past: boolean }) {
  const [day, month, year] = dateFormat.format(new Date(`${event.date}T00:00:00Z`)).split(' ')

  return (
    <li className="relative grid gap-6 pb-12 pl-10 sm:grid-cols-[7rem_1fr] sm:gap-10 sm:pl-14">
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-0 top-1 size-4 -translate-x-1/2 border-2',
          past ? 'border-border bg-muted' : 'border-brand bg-brand',
        )}
      />
      <time dateTime={event.date} className={cn('font-display', past ? 'text-muted-foreground' : 'text-brand')}>
        <span className="block text-4xl font-bold leading-none">{day}</span>
        <span className="mt-2 block text-xs uppercase tracking-[0.25em]">
          {month} {year}
        </span>
      </time>

      <article
        className={cn(
          'flex flex-col overflow-hidden border bg-background sm:flex-row',
          past ? 'border-border' : 'border-brand',
        )}
      >
        {event.image && (
          <div className="relative aspect-[4/3] shrink-0 bg-muted sm:aspect-auto sm:w-64">
            <Image
              src={event.image}
              alt=""
              fill
              sizes="(min-width: 640px) 16rem, 100vw"
              className={cn('object-cover', past && 'grayscale-[40%]')}
            />
          </div>
        )}
        <div className="flex flex-col p-6 sm:p-8">
          <p className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-brand">{event.type}</p>
          <h3 className="mt-3 text-2xl font-extrabold uppercase tracking-tight">{event.title}</h3>
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
              className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-[0.18em] text-brand hover:underline"
            >
              {event.link.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </article>
    </li>
  )
}

export function EventsTimeline() {
  const today = todayIso()
  // One continuous timeline, newest date at the top.
  const sorted = [...events].sort((a, b) => b.date.localeCompare(a.date))
  const upcoming = sorted.filter((e) => e.date >= today)
  const past = sorted.filter((e) => e.date < today)

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
                <EventCard key={`${e.date}-${e.title}`} event={e} past={false} />
              ))}
            </ol>
          ) : (
            <p className="pb-12 pl-10 text-muted-foreground sm:pl-14">
              New events are coming soon. Follow us on Instagram and LinkedIn to hear first.
            </p>
          )}

          {past.length > 0 && (
            <>
              <div className="relative mb-12 flex items-center gap-4 pl-10 sm:pl-14" role="separator">
                <span aria-hidden="true" className="absolute left-0 h-px w-6 -translate-x-1/2 bg-brand" />
                <span className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  Past events
                </span>
                <span aria-hidden="true" className="h-px flex-1 border-t border-dashed border-border" />
              </div>
              <ol>
                {past.map((e) => (
                  <EventCard key={`${e.date}-${e.title}`} event={e} past />
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
