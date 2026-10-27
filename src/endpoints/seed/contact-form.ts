import { RequiredDataFromCollectionSlug } from 'payload'

import { heading, paragraph, richText } from './lexical'

export const contactForm: RequiredDataFromCollectionSlug<'forms'> = {
  title: 'Partner inquiry',
  confirmationType: 'message',
  confirmationMessage: richText(
    heading('h2', 'Inquiry received'),
    paragraph('Thanks for reaching out. Our Corporate Relations team will be in touch shortly.'),
  ),
  fields: [
    {
      name: 'name',
      blockName: 'name',
      blockType: 'text',
      label: 'Name',
      required: true,
      width: 50,
    },
    {
      name: 'company',
      blockName: 'company',
      blockType: 'text',
      label: 'Company',
      required: false,
      width: 50,
    },
    {
      name: 'email',
      blockName: 'email',
      blockType: 'email',
      label: 'Email',
      required: true,
      width: 100,
    },
    {
      name: 'message',
      blockName: 'message',
      blockType: 'textarea',
      label: 'Message',
      required: true,
      width: 100,
    },
  ],
  submitButtonLabel: 'Send Inquiry',
}
