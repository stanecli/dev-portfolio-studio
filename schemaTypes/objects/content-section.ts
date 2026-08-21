import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const contentSection = defineType({
  name: 'contentSection',
  title: 'Content section',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [defineArrayMember({type: 'localizedText'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'subtitle.en'},
  },
})
