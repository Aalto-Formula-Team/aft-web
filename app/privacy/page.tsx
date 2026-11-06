import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Aalto Formula Team',
  description: 'How Aalto Formula Team collects, uses and protects your personal data.',
}

const CONTACT_EMAIL = 'info@aaltoformulateam.fi'
const LAST_UPDATED = '06.11.2026'

const collectedData = [
  'Full name',
  'Nationality',
  'Email address',
  'Phone number',
  'Telegram username',
  'School inside Aalto University (or that you are not part of Aalto)',
  'Level of education',
  'Estimated graduation year',
  'Areas of interest in the team',
  'Whether you are a member of AYY',
  'Whether you are interested in joining the board',
]

const rights = [
  ['Right of Access', 'You can request a copy of the data we hold about you.'],
  ['Right to Rectification', 'You can ask us to correct inaccurate or incomplete data.'],
  ['Right to Erasure ("Right to be Forgotten")', 'You can request that we delete your data at any time.'],
  ['Right to Restrict Processing', 'You can ask us to limit how we use your data.'],
  ['Right to Data Portability', 'You can request your data in a structured, machine-readable format.'],
  ['Right to Withdraw Consent', 'You can withdraw your consent for us to process your data at any time.'],
] as const

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="font-display text-sm uppercase tracking-[0.2em] text-brand">{title}</h2>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </section>
  )
}

function List({ children }: { children: ReactNode }) {
  return <ul className="flex list-disc flex-col gap-2 pl-6 marker:text-brand">{children}</ul>
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-brand underline underline-offset-4 hover:text-brand-deep"
    >
      {children}
    </a>
  )
}

function EmailLink() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="font-semibold text-brand underline underline-offset-4 hover:text-brand-deep"
    >
      {CONTACT_EMAIL}
    </a>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Privacy policy."
          intro="How we collect, use and protect your personal data when you visit our website and submit the membership form."
        />

        <div className="mx-auto w-full max-w-3xl px-6 py-20 text-base leading-relaxed text-foreground lg:py-28">
          <p className="text-sm text-muted-foreground">
            <strong className="font-semibold text-foreground">Last updated:</strong> {LAST_UPDATED}
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <p>
              This Privacy Policy explains how Aalto Formula Team (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
              collects, uses and protects your personal data when you visit our website (
              <ExternalLink href="https://www.aaltoformulateam.fi/">https://www.aaltoformulateam.fi/</ExternalLink>)
              and use our membership application form. We are committed to protecting your privacy and handling your
              data in accordance with the EU General Data Protection Regulation (GDPR).
            </p>
          </div>

          <div className="mt-12">
            <Section title="1. Data Controller">
              <p>The Data Controller responsible for your personal data is:</p>
              <List>
                <li>
                  <strong>Aalto Formula Team ry</strong>
                </li>
                <li>
                  <strong>Address:</strong> Otakaari 4, Espoo, Finland
                </li>
                <li>
                  <strong>Email:</strong> <EmailLink />
                </li>
                <li>
                  <strong>Data Protection Contact Person:</strong> Ignacio Wąsowicz-Peinado
                </li>
              </List>
            </Section>

            <Section title="2. What Personal Data We Collect">
              <p>
                When you submit the membership application form on our website, we collect the following information:
              </p>
              <List>
                {collectedData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </List>
              <p>
                This is the only form on our website that collects personal data. Apart from the aggregated analytics
                described in section 4, we do not collect any other personal data about you when you browse the site.
              </p>
            </Section>

            <Section title="3. Purpose and Legal Basis for Processing">
              <p>
                We collect and use your data for the sole purpose of <strong>collecting statistics about our
                members</strong>, for example which schools, levels of education and areas of interest are represented
                in the team. We also use your contact details to manage your membership, which includes contacting you
                and inviting you to our Telegram group once your membership is approved.
              </p>
              <p>
                <strong>Legal Basis (GDPR Article 6):</strong> The processing of this data is based on your{' '}
                <strong>Consent</strong> (Art. 6(1)(a) GDPR) when you voluntarily submit the form, and our{' '}
                <strong>Legitimate Interest</strong> (Art. 6(1)(f) GDPR) in understanding the makeup of our
                membership and planning the team&apos;s activities accordingly.
              </p>
            </Section>

            <Section title="4. How We Handle and Share Your Data">
              <p>
                We do not sell, trade or rent your personal data to third parties. Your data is only accessed by core
                members of Aalto Formula Team involved in managing memberships and compiling member statistics.
              </p>
              <p>
                <strong>Where your data is stored.</strong> Applications are stored in Google Forms and Google
                Workspace, provided by Google. When you press &quot;Send Application&quot;, our website passes your
                answers directly on to Google Forms. Our website host does not store your application data in a
                database or file storage of its own. Google acts as a Data Processor on our behalf. Google may process
                data outside the European Economic Area, in which case the transfer is protected by safeguards such as
                the EU Standard Contractual Clauses or the EU–US Data Privacy Framework.
              </p>
              <p>
                <strong>Website hosting and analytics.</strong> Our website is hosted on Vercel. Like any web host,
                Vercel processes technical data such as your IP address when your browser requests a page. We also use
                Vercel Web Analytics to understand how many people visit the site. It does not use cookies and does not
                build a profile of you or track you across other websites.
              </p>
            </Section>

            <Section title="5. Data Retention: How Long We Keep Your Data">
              <p>We only retain your personal data for as long as necessary to fulfil the purposes described above.</p>
              <List>
                <li>
                  <strong>If you are accepted:</strong> Your data will be transferred to our internal team roster and
                  kept for the duration of your membership.
                </li>
                <li>
                  <strong>If you are not accepted:</strong> Your application data will be securely deleted within 6
                  months after we decide on your application, unless you give us explicit consent to keep it on file for
                  future opportunities.
                </li>
              </List>
            </Section>

            <Section title="6. How We Protect Your Data">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal data
                against unauthorized access, loss or alteration. Access to application data is restricted to
                authorized team members only, and your submission is sent to Google over an encrypted connection.
              </p>
            </Section>

            <Section title="7. Your Data Protection Rights">
              <p>Under the GDPR, you have the following rights regarding your personal data:</p>
              <List>
                {rights.map(([name, description]) => (
                  <li key={name}>
                    <strong>{name}:</strong> {description}
                  </li>
                ))}
              </List>
              <p>
                To exercise any of these rights, please contact us at <EmailLink />.
              </p>
              <p>
                <strong>Right to Lodge a Complaint:</strong> If you believe your data privacy rights have been
                violated, you have the right to lodge a complaint with the Finnish Data Protection Ombudsman
                (Tietosuojavaltuutetun toimisto) at <ExternalLink href="https://tietosuoja.fi/">tietosuoja.fi</ExternalLink>.
              </p>
            </Section>

            <Section title="8. Changes to This Privacy Policy">
              <p>
                We may update this policy occasionally to reflect changes in our processes or legal requirements. The
                latest version will always be available on this page, with the date it was last updated shown at the
                top.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
