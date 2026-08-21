import {LinkIcon} from '@sanity/icons/Link'
import {defineField, defineType} from 'sanity'

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      description: 'Short service identifier, such as GitHub, LinkedIn, or Email.',
      validation: (rule) => rule.required().min(1),
    }),
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
      description: 'Use a site path, an HTTP(S) URL, or a mailto link.',
      validation: (rule) =>
        rule.required().uri({allowRelative: true, scheme: ['http', 'https', 'mailto']}),
    }),
  ],
  preview: {
    select: {title: 'label.en', subtitle: 'url'},
  },
})
