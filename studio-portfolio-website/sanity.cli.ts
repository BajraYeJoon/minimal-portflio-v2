import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'bajra-portfoliov2',

  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'z68c4dv3',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  deployment: { autoUpdates: true },
})
