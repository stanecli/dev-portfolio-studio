import {HomeIcon} from '@sanity/icons/Home'
import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Hero heading',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubHeading',
      title: 'Hero supporting text',
      type: 'localizedText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryCallToAction',
      title: 'Primary call to action',
      type: 'link',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'secondaryCallToAction',
      title: 'Secondary call to action',
      type: 'link',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'biography',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactCallToAction',
      title: 'Contact call to action',
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
    select: {title: 'heroHeading.en'},
  },
})
