// import 'server-only'

import { QueryParams } from 'next-sanity'

// import type {QueryParams} from '@sanity/client'


import { draftMode } from 'next/headers'

import { client } from './sanity.client'

export const token = "skYuj83dyy82AymmMCDcinpOvJdheOyEGCISVYYl8zrNxHxRSAXcjrjIDEWNovDHhiu288Bhw8EIIC3ssAFnSNu3qisHuUSv6b2hPAmzOlFBuRdccMOCl9wE5P6npSiriNTwqSgMuXIQ68AWnxirntHD6XYeuRTxcs8mF4k3aO6lbUny01qZ"

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled
  if (isDraftMode && !token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
  }

  return client.fetch<QueryResponse>(query, params, {
    cache: 'force-cache',
    ...(isDraftMode && {
      cache: undefined,
      token: token,
      perspective: 'previewDrafts',
    }),
    next: {
      ...(isDraftMode && { revalidate: 30 }),
      tags,
    },
  })
}
