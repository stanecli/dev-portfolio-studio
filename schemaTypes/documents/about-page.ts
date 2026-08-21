import {UserIcon} from '@sanity/icons/User'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [defineArrayMember({type: 'contentSection'})],
      validation: (rule) => rule.required().min(1),
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
