import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '9m67uprr',
    dataset: 'production',
  },
  typegen: {
    enabled: true,
    path: '../app-dev-portfolio/src/**/*.{ts,tsx,js,jsx,astro}',
    schema: 'schema.json',
    generates: '../app-dev-portfolio/sanity.types.ts',
    overloadClientMethods: true,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
