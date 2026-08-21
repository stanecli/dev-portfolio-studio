import {CaseIcon} from '@sanity/icons/Case'
import {defineArrayMember, defineField, defineType, type SlugIsUniqueValidator} from 'sanity'

const isUniqueProjectSlug: SlugIsUniqueValidator = (slug, context) =>
  context.defaultIsUnique(slug, context)

export const project = defineType({
  name: 'project',
  title: 'Project',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title.en', maxLength: 96, isUnique: isUniqueProjectSlug},
      validation: (rule) =>
        rule.required().custom((slug) => {
          if (!slug?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug.current)) return true
          return 'Use lowercase letters, numbers, and single hyphens only'
        }),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'localizedText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(1).unique(),
    }),
    defineField({
      name: 'links',
      title: 'Project links',
      type: 'array',
      of: [defineArrayMember({type: 'link'})],
    }),
    defineField({
      name: 'featured',
      title: 'Featured project',
      type: 'boolean',
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Project story',
      type: 'localizedPortableText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'Search and social sharing',
      type: 'seo',
    }),
  ],
  preview: {
    select: {title: 'title.en', subtitle: 'summary.en', media: 'coverImage.asset'},
  },
})
