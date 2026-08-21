import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {SINGLETON_TYPES, structure} from './structure'

const RESTRICTED_SINGLETON_ACTIONS = new Set(['delete', 'duplicate'])

export default defineConfig({
  name: 'default',
  title: 'dev-portfolio',

  projectId: '9m67uprr',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (previousActions, {schemaType}) =>
      SINGLETON_TYPES.has(schemaType)
        ? previousActions.filter((action) => !RESTRICTED_SINGLETON_ACTIONS.has(action.action ?? ''))
        : previousActions,
    newDocumentOptions: (previousOptions) =>
      previousOptions.filter((option) => !SINGLETON_TYPES.has(option.templateId)),
  },
})
