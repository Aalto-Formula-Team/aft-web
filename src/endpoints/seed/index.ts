import type { CollectionSlug, Payload, PayloadRequest, File } from 'payload'

import { getServerSideURL } from '@/utilities/getURL'

import { contactForm as contactFormData } from './contact-form'
import { home } from './home'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
]

const navLinks = [
  { label: 'About Us', url: '/#about' },
  { label: 'Our Roadmap', url: '/#roadmap' },
  { label: 'Sponsor Value', url: '/#sponsor' },
  { label: 'Contact', url: '/#contact' },
]

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections...`)

  // Delete media through the Local API so the storage adapter also removes the stored files.
  // Re-uploading a filename that still exists in Vercel Blob fails. Documents are deleted one at
  // a time (and without `req`) because parallel deletes on a pooled Postgres connection can
  // silently leave documents behind.
  const existingMedia = await payload.find({
    collection: 'media',
    depth: 0,
    limit: 0,
    pagination: false,
  })
  for (const doc of existingMedia.docs) {
    await payload.delete({ collection: 'media', id: doc.id, depth: 0 })
  }
  const remainingMedia = await payload.count({ collection: 'media' })
  if (remainingMedia.totalDocs > 0) {
    throw new Error(`Failed to clear media: ${remainingMedia.totalDocs} documents remain`)
  }

  // clear the database (globals are overwritten below)
  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding media...`)

  // The images ship in `public/images`, so the running app can always serve them
  const baseURL = getServerSideURL()
  const [heroBuffer, whiteboardBuffer, laptopsBuffer] = await Promise.all([
    fetchFileByURL(`${baseURL}/images/hero-car-lines.png`),
    fetchFileByURL(`${baseURL}/images/team-whiteboard.png`),
    fetchFileByURL(`${baseURL}/images/team-laptops.png`),
  ])

  // Created one at a time: concurrent uploads on a pooled Postgres connection can roll each other back
  const heroImage = await payload.create({
    collection: 'media',
    data: { alt: 'Abstract line drawing of a Formula Student race car' },
    file: heroBuffer,
  })
  const whiteboardImage = await payload.create({
    collection: 'media',
    data: { alt: 'Students sketching chassis concepts together at a whiteboard' },
    file: whiteboardBuffer,
  })
  const laptopsImage = await payload.create({
    collection: 'media',
    data: { alt: 'Students reviewing suspension CAD models on laptops' },
    file: laptopsBuffer,
  })

  payload.logger.info(`— Seeding inquiry form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding pages...`)

  await payload.create({
    collection: 'pages',
    depth: 0,
    data: home({
      heroImage,
      teamImages: [whiteboardImage, laptopsImage],
      contactFormID: contactForm.id,
    }),
  })

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: navLinks.map((l) => ({ link: { type: 'custom' as const, ...l } })),
        cta: { type: 'custom', label: 'Partner With Us', url: '/#contact' },
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: navLinks.map((l) => ({ link: { type: 'custom' as const, ...l } })),
        tagline:
          'A student-run Formula Student team affiliated with Aalto University, Espoo, Finland.',
        socials: [
          { label: 'Instagram', short: 'IG', url: '#' },
          { label: 'LinkedIn', short: 'IN', url: '#' },
          { label: 'YouTube', short: 'YT', url: '#' },
          { label: 'TikTok', short: 'TT', url: '#' },
        ],
        copyright: '© 2026 Aalto Formula Team ry. All rights reserved.',
        affiliation: 'In affiliation with Aalto University',
      },
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
