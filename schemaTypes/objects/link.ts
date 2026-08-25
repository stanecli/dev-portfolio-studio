import {LinkIcon} from '@sanity/icons/Link'
import {defineField, defineType} from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'localizedString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Destination',
      type: 'url',
      description: 'Use a site path, an HTTP(S) URL, or a mailto or tel link.',
      validation: (rule) =>
        rule.required().uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']}),
    }),
  ],
  preview: {
    select: {title: 'label.en', subtitle: 'url'},
  },
})
