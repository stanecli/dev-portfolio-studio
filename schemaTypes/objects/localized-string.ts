import {TranslateIcon} from '@sanity/icons/Translate'
import {defineField, defineType} from 'sanity'

export const localizedString = defineType({
  name: 'localizedString',
  title: 'Localized string',
  type: 'object',
  icon: TranslateIcon,
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
      description: 'Required source value and fallback for missing translations.',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'hu',
      title: 'Hungarian',
      type: 'string',
      description: 'Optional. The English value is used until this is translated.',
    }),
  ],
})
