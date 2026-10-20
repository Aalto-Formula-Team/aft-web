'use server'

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
    message: `Thanks, ${name}. Our Corporate Relations team will be in touch shortly.`,
  }
}
