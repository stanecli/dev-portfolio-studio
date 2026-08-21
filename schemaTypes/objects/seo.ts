import {SearchIcon} from '@sanity/icons/Search'
import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'Search and social sharing',
  type: 'object',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      description: 'Aim for 60 characters or fewer in each language.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
      description: 'Aim for 160 characters or fewer in each language.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socialImage',
      title: 'Social image',
      type: 'imageWithAlt',
    }),
  ],
  preview: {
    select: {title: 'title.en', subtitle: 'description.en', media: 'socialImage.asset'},
  },
})
