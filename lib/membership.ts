// Mirrors the "Aalto Formula Team - Membership Application Form" Google Form.
// Submissions are posted to that form, so responses keep landing in the same place.
// If a question is added or changed in Google Forms, update it here too (entry IDs come from the form).

export const MEMBERSHIP_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeNLr7SccTXINUYgUctOGb_oa--qcSutsCgk7UnIdjV7y3vZg/formResponse'

export const OTHER_OPTION = '__other_option__'

type TextQuestion = {
  kind: 'text'
  name: string
  label: string
  entry: string
  type?: 'text' | 'email' | 'tel'
  autoComplete?: string
  placeholder?: string
}

type ChoiceQuestion = {
  kind: 'choice'
  name: string
  label: string
  entry: string
  options: readonly string[]
  // Checkboxes instead of a single choice; the Google Forms question must be "Checkboxes" too
  multiple?: boolean
  // Free-text "Other" choice; the matching question in Google Forms must have "Other" enabled too
  other?: { label: string; placeholder: string; error: string }
}

export type MembershipQuestion = TextQuestion | ChoiceQuestion

export const membershipQuestions: readonly MembershipQuestion[] = [
  { kind: 'text', name: 'name', label: 'First and last name', entry: 'entry.1997598431', autoComplete: 'name', placeholder: 'Jane Virtanen' },
  { kind: 'text', name: 'nationality', label: 'Nationality', entry: 'entry.1777710196', placeholder: 'Finnish' },
  { kind: 'text', name: 'phone', label: 'Phone number', entry: 'entry.1986286879', type: 'tel', autoComplete: 'tel', placeholder: '+358 40 123 4567' },
  { kind: 'text', name: 'telegram', label: 'Telegram account', entry: 'entry.1452064084', placeholder: '@username' },
  { kind: 'text', name: 'email', label: 'Email address', entry: 'entry.604001984', type: 'email', autoComplete: 'email', placeholder: 'jane.virtanen@aalto.fi' },
  {
    kind: 'choice',
    name: 'school',
    label: 'School',
    entry: 'entry.1777087113',
    options: [
      'ENG (School of Engineering)',
      'BIZ (School of Business)',
      'CHEM (School of Chemical Engineering)',
      'SCI (School of Science)',
      'ELEC (School of Electrical Engineering)',
      'ARTS (School of Arts, Design and Architecture)',
    ],
    other: {
      label: 'Other (not part of Aalto)',
      placeholder: 'Which school do you attend?',
      error: 'Please tell us which school you attend.',
    },
  },
  {
    kind: 'choice',
    name: 'level',
    label: 'Level of education',
    entry: 'entry.445895684',
    options: ["Bachelor's Degree", "Master's Degree", 'Doctoral Degree'],
  },
  { kind: 'text', name: 'graduation', label: 'Estimated graduation year', entry: 'entry.269387373', placeholder: '2029' },
  {
    kind: 'choice',
    name: 'area',
    label: 'Area of interest in the team',
    entry: 'entry.2031899050',
    multiple: true,
    options: [
      'Testing & Validation',
      'Manufacturing',
      'Vehicle Dynamics',
      'Brakes System',
      'Aerodynamics',
      'Suspension & Steering',
      'Chassis & Composites',
      'Battery System',
      'Powertrain',
      'Electronics System',
    ],
    other: { label: 'Other', placeholder: 'Tell us which area…', error: 'Please tell us your area of interest.' },
  },
  { kind: 'choice', name: 'ayy', label: 'Member of AYY', entry: 'entry.1187280712', options: ['Yes', 'No'] },
  {
    kind: 'choice',
    name: 'board',
    label: 'Are you interested in becoming a part of the board?',
    entry: 'entry.1209809501',
    options: ["Yes, I'm interested", 'No, thanks', 'Maybe'],
  },
]
