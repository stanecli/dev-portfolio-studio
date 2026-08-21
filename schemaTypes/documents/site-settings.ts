import {CogIcon} from '@sanity/icons/Cog'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site title',
      type: 'string',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'contactDetails',
      title: 'Contact details',
      type: 'array',
      of: [defineArrayMember({type: 'link'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [defineArrayMember({type: 'socialLink'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default search and social sharing',
      type: 'seo',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'siteTitle'},
  },
})
