'use client'

import { useActionState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { submitInquiry, type InquiryState } from '@/app/actions'
import { SectionHeading } from '@/components/section-heading'

const initialState: InquiryState = { status: 'idle' }

const inputClass =
  'w-full border-0 border-b border-white/40 bg-transparent px-0 py-3 text-base text-white placeholder:text-white/45 transition-colors focus:border-white focus:outline-none focus:ring-0 aria-invalid:border-orange-300'

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-white/70">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-orange-200">
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactSection() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState)
  const e = state.errors ?? {}

  return (
    <section id="contact" className="scroll-mt-20 bg-brand py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-10">
        <div>
          <SectionHeading eyebrow="04 — Contact" title="Start the conversation." tone="light" />
          <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-white/80">
            Interested in becoming a founding partner? Tell us a little about your organization and we&apos;ll get back
            to you with our partnership deck.
          </p>
          <dl className="mt-12 flex flex-col gap-6 border-t border-white/20 pt-8">
            <div>
              <dt className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-white/60">Email</dt>
              <dd className="mt-1 text-lg font-semibold">partners@aaltoformula.fi</dd>
            </div>
            <div>
              <dt className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-white/60">Location</dt>
              <dd className="mt-1 text-lg font-semibold">Aalto University, Espoo, Finland</dd>
            </div>
          </dl>
        </div>

        {state.status === 'success' ? (
          <div role="status" className="flex flex-col items-start justify-center gap-6 border border-white/30 p-10">
            <span className="flex size-12 items-center justify-center bg-white text-brand">
              <Check className="size-6" aria-hidden="true" />
            </span>
            <h3 className="text-3xl font-extrabold uppercase tracking-tight">Inquiry received</h3>
            <p className="text-white/85">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} noValidate className="flex flex-col gap-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <Field id="name" label="Name" error={e.name}>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Jane Virtanen"
                  aria-invalid={!!e.name}
                  aria-describedby={e.name ? 'name-error' : undefined}
                  className={inputClass}
                />
              </Field>
              <Field id="company" label="Company" error={e.company}>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  placeholder="Company Oy"
                  aria-invalid={!!e.company}
                  aria-describedby={e.company ? 'company-error' : undefined}
                  className={inputClass}
                />
              </Field>
            </div>
            <Field id="email" label="Email" error={e.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="jane@company.fi"
                aria-invalid={!!e.email}
                aria-describedby={e.email ? 'email-error' : undefined}
                className={inputClass}
              />
            </Field>
            <Field id="message" label="Message" error={e.message}>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your partnership interests…"
                aria-invalid={!!e.message}
                aria-describedby={e.message ? 'message-error' : undefined}
                className={`${inputClass} resize-none`}
              />
            </Field>

            {state.status === 'error' && (
              <p role="alert" className="text-sm text-orange-200">
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="group inline-flex items-center justify-center gap-3 self-start border border-white bg-white px-10 py-5 text-sm font-extrabold uppercase tracking-[0.2em] text-brand transition-colors hover:bg-transparent hover:text-white disabled:opacity-60"
            >
              {pending ? 'Sending…' : 'Send Inquiry'}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
