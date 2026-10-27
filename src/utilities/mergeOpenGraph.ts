import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Aalto Formula Team is a student-run Formula Student team designing, engineering and building a race car from the ground up.',
  images: [
    {
      url: `${getServerSideURL()}/images/hero-car-lines.png`,
    },
  ],
  siteName: 'Aalto Formula Team',
  title: 'Aalto Formula Team',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
