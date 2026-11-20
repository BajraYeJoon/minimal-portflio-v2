import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'z68c4dv3'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'portfolio-website',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
