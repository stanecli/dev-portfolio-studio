import {TranslateIcon} from '@sanity/icons/Translate'
import {defineField, defineType} from 'sanity'

export const localizedText = defineType({
  name: 'localizedText',
  title: 'Localized text',
  type: 'object',
  icon: TranslateIcon,
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 4,
      description: 'Required source value and fallback for missing translations.',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'hu',
      title: 'Hungarian',
      type: 'text',
      rows: 4,
      description: 'Optional. The English value is used until this is translated.',
    }),
  ],
})
