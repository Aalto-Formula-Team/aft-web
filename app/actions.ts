'use server'

import { MEMBERSHIP_FORM_URL, OTHER_OPTION, membershipQuestions } from '@/lib/membership'

export type InquiryState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'company' | 'email' | 'message', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  const get = (key: string) => String(formData.get(key) ?? '').trim()
  const name = get('name')
  const company = get('company')
  const email = get('email')
  const message = get('message')

  const errors: InquiryState['errors'] = {}
  if (!name || name.length > 120) errors.name = 'Please enter your name.'
  if (company.length > 160) errors.company = 'Company name is too long.'
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = 'Please enter a valid email.'
  if (message.length < 10 || message.length > 4000) errors.message = 'Please write at least a short message.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please check the highlighted fields.', errors }
  }

  // Prototype: in production this would create a document in a Payload CMS "inquiries" collection.
  return {
    status: 'success',
    message: `Thanks, ${name}. Our Partnerships team will be in touch shortly.`,
  }
}

export type MembershipState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Record<string, string>
  // Echoed back on error so the form can be re-filled instead of cleared (lists, since checkboxes repeat a name)
  values?: Record<string, string[]>
}

export async function submitMembership(_prev: MembershipState, formData: FormData): Promise<MembershipState> {
  const get = (key: string) => String(formData.get(key) ?? '').trim()
  const errors: Record<string, string> = {}
  const body = new URLSearchParams()
  const values: Record<string, string[]> = {}
  for (const [k, v] of formData.entries()) {
    if (!k.startsWith('$')) (values[k] ??= []).push(String(v))
  }

  for (const q of membershipQuestions) {
    const value = get(q.name)
    if (q.kind === 'text') {
      if (!value || value.length > 200) errors[q.name] = 'This field is required.'
      else if (q.type === 'email' && !EMAIL_RE.test(value)) errors[q.name] = 'Please enter a valid email.'
      else body.append(q.entry, value)
      continue
    }

    const picked = q.multiple ? formData.getAll(q.name).map(String) : [value]
    const valid = (v: string) => q.options.includes(v) || (!!q.other && v === OTHER_OPTION)
    if (picked.length === 0 || !picked.every(valid)) {
      errors[q.name] = q.multiple ? 'Please choose at least one option.' : 'Please choose an option.'
      continue
    }
    for (const v of picked) body.append(q.entry, v)
    if (picked.includes(OTHER_OPTION)) {
      const other = get(`${q.name}Other`)
      if (!other || other.length > 200) errors[q.name] = q.other!.error
      else body.append(`${q.entry}.other_option_response`, other)
    }
  }

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please check the highlighted fields.', errors, values }
  }

  try {
    const res = await fetch(MEMBERSHIP_FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    if (!res.ok) throw new Error(`Google Forms responded ${res.status}`)
  } catch (err) {
    console.error('Membership submission failed', err)
    return {
      status: 'error',
      message: 'Something went wrong sending your application. Please try again in a moment.',
      values,
    }
  }

  return {
    status: 'success',
    message: `Thanks, ${get('name').split(' ')[0]}! Once your membership is approved you'll get an email with an invitation to our Telegram group.`,
  }
}
