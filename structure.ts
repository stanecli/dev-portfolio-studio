import {CaseIcon} from '@sanity/icons/Case'
import {CogIcon} from '@sanity/icons/Cog'
import {EnvelopeIcon} from '@sanity/icons/Envelope'
import {HomeIcon} from '@sanity/icons/Home'
import {UserIcon} from '@sanity/icons/User'
import type {ComponentType} from 'react'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'

export const SINGLETON_TYPES = new Set([
  'siteSettings',
  'homePage',
  'workPage',
  'aboutPage',
  'contactPage',
])

function singletonListItem(
  S: StructureBuilder,
  typeName: string,
  title: string,
  icon: ComponentType,
) {
  return S.listItem()
    .id(typeName)
    .title(title)
    .icon(icon)
    .child(S.document().id(typeName).schemaType(typeName).documentId(typeName).title(title))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website content')
    .items([
      singletonListItem(S, 'siteSettings', 'Site settings', CogIcon),
      singletonListItem(S, 'homePage', 'Homepage', HomeIcon),
      singletonListItem(S, 'workPage', 'Work page', CaseIcon),
      singletonListItem(S, 'aboutPage', 'About page', UserIcon),
      singletonListItem(S, 'contactPage', 'Contact page', EnvelopeIcon),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId()
        return id ? !SINGLETON_TYPES.has(id) : true
      }),
    ])
