import {EnvelopeIcon} from '@sanity/icons/Envelope'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact page',
  type: 'document',
  icon: EnvelopeIcon,
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
      name: 'formCallToAction',
      title: 'Form call to action',
      type: 'link',
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
