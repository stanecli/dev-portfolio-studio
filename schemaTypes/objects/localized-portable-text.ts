import {TranslateIcon} from '@sanity/icons/Translate'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const localizedPortableText = defineType({
  name: 'localizedPortableText',
  title: 'Localized Portable Text',
  type: 'object',
  icon: TranslateIcon,
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'array',
      description: 'Required source value and fallback for missing translations.',
      of: [defineArrayMember({type: 'block'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'hu',
      title: 'Hungarian',
      type: 'array',
      description: 'Optional. The English value is used until this is translated.',
      of: [defineArrayMember({type: 'block'})],
      validation: (rule) => rule.min(1),
    }),
  ],
})
