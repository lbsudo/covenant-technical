import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const dataset = "production";
const projectId = "uxa5oo0r";

export default defineConfig({
  basePath: "/studio",
  name: 'default',
  title: 'Currency Covenant',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
