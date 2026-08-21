import {CaseIcon} from '@sanity/icons/Case'
import {defineField, defineType} from 'sanity'

export const workPage = defineType({
  name: 'workPage',
  title: 'Work page',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'Search and social sharing',
      type: 'seo',
    }),
  ],
  preview: {
    select: {title: 'title.en'},
  },
})
