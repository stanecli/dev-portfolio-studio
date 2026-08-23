import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '9m67uprr',
    dataset: 'production',
  },
  studioHost: 'dev-portfolio-aronfernbach',
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
    appId: 'v5znc4suvf8m1j32poff2aiy',
  },
})
