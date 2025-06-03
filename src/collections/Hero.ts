import { CollectionConfig } from 'payload'

const Hero: CollectionConfig = {
  slug: 'hero',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'sub_title',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'heading_lighted_text',
      type: 'text',
      required: true,
    },
    {
      name: 'button_text',
      type: 'text',
      required: true,
    },
    {
      name: 'background_image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}

export default Hero
