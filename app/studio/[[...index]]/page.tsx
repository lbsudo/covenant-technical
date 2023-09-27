import { Studio } from './Studio'
import type { Metadata } from 'next'
import { metadata as studioMetadata } from 'next-sanity/studio/metadata'

// Ensures the Studio route is statically generated
export const dynamic = 'force-static'

// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata: Metadata = {
  ...studioMetadata,
}

export default function StudioPage() {
  return <Studio />
}
