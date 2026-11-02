'use client'

import { useActionState, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { submitMembership, type MembershipState } from '@/app/actions'
import { SectionHeading } from '@/components/section-heading'
import { OTHER_OPTION, membershipQuestions } from '@/lib/membership'

const initialState: MembershipState = { status: 'idle' }

const inputClass =
  'w-full border-0 border-b border-foreground/25 bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-brand focus:outline-none focus:ring-0 aria-invalid:border-destructive'

const labelClass = 'font-display text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground'

const optionClass =
  'flex cursor-pointer items-center gap-3 border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-brand has-[:checked]:border-brand has-[:checked]:bg-brand has-[:checked]:font-semibold has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand'

const steps = [
  'Fill in the application form.',
  'The Board reviews and approves new members.',
  "You'll get an email with an invitation to our Telegram group.",
]

export function MembershipSection() {
  const [state, formAction, pending] = useActionState(submitMembership, initialState)
  const errors = state.errors ?? {}
  const values = state.values ?? {}
  const valueOf = (name: string) => values[name]?.[0]
  const isChecked = (name: string, option: string) => values[name]?.includes(option) ?? false
  // Which questions currently have their free-text "Other" option selected
  const [otherSelected, setOtherSelected] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(membershipQuestions.map((q) => [q.name, isChecked(q.name, OTHER_OPTION)])),
  )
  const selectOther = (name: string, selected: boolean) => setOtherSelected((prev) => ({ ...prev, [name]: selected }))

  const textQuestions = membershipQuestions.filter((q) => q.kind === 'text')
  const choiceQuestions = membershipQuestions.filter((q) => q.kind === 'choice')

  return (
    <section id="apply" className="scroll-mt-20 bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.6fr] lg:px-10">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading eyebrow="01 — Membership" title="Apply to join." />
          <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Membership is open to students from every Aalto school, whether you study engineering, business, science
            or arts. Students from other universities can join as external members. All questions are required.
          </p>
          <ol className="mt-12 flex flex-col gap-6 border-t border-border pt-8">
            {steps.map((step, i) => (
              <li key={step} className="flex items-baseline gap-4">
                <span className="w-6 shrink-0 font-display text-xs text-brand">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-semibold">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {state.status === 'success' ? (
          <div role="status" className="flex flex-col items-start justify-center gap-6 border border-border bg-muted p-10">
            <span className="flex size-12 items-center justify-center bg-brand text-white">
              <Check className="size-6" aria-hidden="true" />
            </span>
            <h3 className="text-3xl font-extrabold uppercase tracking-tight">Application received</h3>
            <p className="text-muted-foreground">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} noValidate className="flex flex-col gap-10">
            <div className="grid gap-8 sm:grid-cols-2">
              {textQuestions.map((q) => (
                <div key={q.name} className="flex flex-col gap-1">
                  <label htmlFor={q.name} className={labelClass}>
                    {q.label}
                  </label>
                  <input
                    id={q.name}
                    name={q.name}
                    type={q.type ?? 'text'}
                    autoComplete={q.autoComplete}
                    placeholder={q.placeholder}
                    defaultValue={valueOf(q.name)}
                    required
                    aria-invalid={!!errors[q.name]}
                    aria-describedby={errors[q.name] ? `${q.name}-error` : undefined}
                    className={inputClass}
                  />
                  {errors[q.name] && (
                    <p id={`${q.name}-error`} className="text-sm text-destructive">
                      {errors[q.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {choiceQuestions.map((q) => (
              <fieldset key={q.name} aria-describedby={errors[q.name] ? `${q.name}-error` : undefined}>
                <legend className={labelClass}>
                  {q.label}
                  {q.multiple && <span className="ml-3 normal-case tracking-normal">· Select all that apply</span>}
                </legend>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {q.options.map((opt) => (
                    <label key={opt} className={optionClass}>
                      <input
                        type={q.multiple ? 'checkbox' : 'radio'}
                        name={q.name}
                        value={opt}
                        defaultChecked={isChecked(q.name, opt)}
                        // A radio choice deselects "Other"; checkboxes leave it alone
                        onChange={q.other && !q.multiple ? () => selectOther(q.name, false) : undefined}
                        className="sr-only"
                      />
                      {opt}
                    </label>
                  ))}
                  {q.other && (
                    <label className={optionClass}>
                      <input
                        type={q.multiple ? 'checkbox' : 'radio'}
                        name={q.name}
                        value={OTHER_OPTION}
                        defaultChecked={isChecked(q.name, OTHER_OPTION)}
                        onChange={(e) => selectOther(q.name, e.target.checked)}
                        className="sr-only"
                      />
                      {q.other.label}
                    </label>
                  )}
                </div>
                {q.other && otherSelected[q.name] && (
                  <input
                    name={`${q.name}Other`}
                    aria-label={q.other.placeholder}
                    placeholder={q.other.placeholder}
                    defaultValue={valueOf(`${q.name}Other`)}
                    autoFocus
                    className={`${inputClass} mt-4`}
                  />
                )}
                {errors[q.name] && (
                  <p id={`${q.name}-error`} className="mt-3 text-sm text-destructive">
                    {errors[q.name]}
                  </p>
                )}
              </fieldset>
            ))}

            {state.status === 'error' && (
              <p role="alert" className="text-sm text-destructive">
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="group inline-flex items-center justify-center gap-3 self-start border border-brand bg-brand px-10 py-5 text-sm font-extrabold uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-brand disabled:opacity-60"
            >
              {pending ? 'Sending…' : 'Send Application'}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
