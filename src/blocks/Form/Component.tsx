'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/utilities/ui'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: DefaultTypedEditorState
}

// Styles the shadcn inputs for use on the brand-red background (v0 contact section).
const onBrandClass = [
  '[&_label]:mb-1 [&_label]:flex [&_label]:font-display [&_label]:text-[0.65rem] [&_label]:font-normal [&_label]:uppercase [&_label]:tracking-[0.3em] [&_label]:text-white/70',
  '[&_:is(input,textarea)]:h-auto [&_:is(input,textarea)]:resize-none [&_:is(input,textarea)]:rounded-none [&_:is(input,textarea)]:border-x-0 [&_:is(input,textarea)]:border-t-0 [&_:is(input,textarea)]:border-white/40 [&_:is(input,textarea)]:bg-transparent [&_:is(input,textarea)]:px-0 [&_:is(input,textarea)]:py-3 [&_:is(input,textarea)]:text-base [&_:is(input,textarea)]:text-white [&_:is(input,textarea)]:shadow-none [&_:is(input,textarea)]:placeholder:text-white/45',
  '[&_:is(input,textarea):focus-visible]:border-white [&_:is(input,textarea):focus-visible]:outline-none [&_:is(input,textarea):focus-visible]:ring-0',
  '[&_.text-red-500]:text-orange-200',
].join(' ')

export const FormBlock: React.FC<
  {
    id?: string
    variant?: 'default' | 'onBrand'
  } & FormBlockType
> = (props) => {
  const {
    variant = 'default',
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
  } = props

  const formMethods = useForm({
    defaultValues: formFromProps.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  const onBrand = variant === 'onBrand'

  return (
    <div className={cn(!onBrand && 'container lg:max-w-[48rem]', onBrand && onBrandClass)}>
      {enableIntro && introContent && !hasSubmitted && (
        <RichText className="mb-8 lg:mb-12" data={introContent} enableGutter={false} />
      )}
      <div className={cn(!onBrand && 'p-4 lg:p-6 border border-border rounded-[0.8rem]')}>
        <FormProvider {...formMethods}>
          {!isLoading && hasSubmitted && confirmationType === 'message' && onBrand && (
            <div
              role="status"
              className="flex flex-col items-start justify-center gap-6 border border-white/30 p-10 text-white"
            >
              <span className="flex size-12 items-center justify-center bg-white text-brand">
                <Check className="size-6" aria-hidden="true" />
              </span>
              <RichText
                data={confirmationMessage}
                enableGutter={false}
                enableProse={false}
                className="[&_h2]:text-3xl [&_h2]:font-extrabold [&_h2]:uppercase [&_h2]:tracking-tight [&_p]:mt-6 [&_p]:text-white/85"
              />
            </div>
          )}
          {!isLoading && hasSubmitted && confirmationType === 'message' && !onBrand && (
            <RichText data={confirmationMessage} />
          )}
          {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
          {error && (
            <div role="alert" className={cn(onBrand && 'mb-6 text-sm text-orange-200')}>
              {`${error.status || '500'}: ${error.message || ''}`}
            </div>
          )}
          {!hasSubmitted && (
            <form id={formID} onSubmit={handleSubmit(onSubmit)}>
              <div className={cn('mb-4 last:mb-0', onBrand && 'grid gap-8 sm:grid-cols-2')}>
                {formFromProps &&
                  formFromProps.fields &&
                  formFromProps.fields?.map((field, index) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
                    if (Field) {
                      const fieldWidth = 'width' in field ? field.width : undefined
                      return (
                        <div
                          className={cn(
                            'mb-6 last:mb-0',
                            onBrand && 'mb-0',
                            onBrand && (!fieldWidth || fieldWidth > 50) && 'sm:col-span-2',
                          )}
                          key={index}
                        >
                          <Field
                            form={formFromProps}
                            {...field}
                            {...(onBrand ? { width: undefined } : {})}
                            {...formMethods}
                            control={control}
                            errors={errors}
                            register={register}
                          />
                        </div>
                      )
                    }
                    return null
                  })}
              </div>

              {onBrand ? (
                <button
                  form={formID}
                  type="submit"
                  disabled={isLoading}
                  className="group mt-8 inline-flex items-center justify-center gap-3 border border-white bg-white px-10 py-5 text-sm font-extrabold uppercase tracking-[0.2em] text-brand transition-colors hover:bg-transparent hover:text-white disabled:opacity-60"
                >
                  {isLoading ? 'Sending…' : submitButtonLabel}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <Button form={formID} type="submit" variant="default">
                  {submitButtonLabel}
                </Button>
              )}
            </form>
          )}
        </FormProvider>
      </div>
    </div>
  )
}
