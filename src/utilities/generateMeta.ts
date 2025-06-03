import type { Metadata } from 'next'
import type { Media, Page, Post, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/images/logo.png'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url
    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | null
}): Promise<Metadata> => {
  const { doc } = args

  const ogImage = getImageURL(doc?.meta?.image)

  const title = doc?.meta?.title
    ? `${doc.meta.title} | BuildPro - Professional Construction & Building Services`
    : 'BuildPro - Professional Construction & Building Services'

  const description =
    doc?.meta?.description ||
    'BuildPro - Your Trusted Partner in Construction! We offer expert building, renovation, and infrastructure development services with a focus on quality, reliability, and safety. Build your future with BuildPro.'

  return {
    title,
    description,
    icons: {
      icon: '/logo.svg',
    },
    openGraph: mergeOpenGraph({
      title,
      description,
      url: Array.isArray(doc?.slug)
        ? `https://www.buildpro.com/${doc.slug.join('/')}`
        : 'https://www.buildpro.com/',
      siteName: 'BuildPro',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'BuildPro - Professional Construction & Building Services',
        },
      ],
      locale: 'en_US',
      type: 'website',
    }),
  }
}
