import {ImageIcon} from '@sanity/icons/Image'
import {defineField, defineType} from 'sanity'

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Image with alternative text',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'asset',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'localizedString',
      description: 'Describe the image meaningfully for visitors who cannot see it.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'alt.en', media: 'asset'},
  },
})
