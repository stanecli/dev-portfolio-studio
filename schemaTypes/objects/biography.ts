import {UserIcon} from '@sanity/icons/User'
import {defineField, defineType} from 'sanity'

export const biography = defineType({
  name: 'biography',
  title: 'Biography',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'localizedText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'summary.en', media: 'portrait.asset'},
  },
})
