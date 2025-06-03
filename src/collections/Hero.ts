import { CollectionConfig } from 'payload'

const Hero: CollectionConfig = {
  slug: 'hero',
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      required: true,
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'highlightedText',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}

export default Hero
