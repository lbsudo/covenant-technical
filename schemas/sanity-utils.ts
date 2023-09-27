import { createClient } from "next-sanity";
import { groq } from "next-sanity";
import Post from '../types/Post'
// NEXT_PUBLIC_SANITY_PROJECT_ID=uxa5oo0r
// NEXT_PUBLIC_SANITY_DATASET="production"
// SECRET_SANITY_VIEW_TOKEN=skYuj83dyy82AymmMCDcinpOvJdheOyEGCISVYYl8zrNxHxRSAXcjrjIDEWNovDHhiu288Bhw8EIIC3ssAFnSNu3qisHuUSv6b2hPAmzOlFBuRdccMOCl9wE5P6npSiriNTwqSgMuXIQ68AWnxirntHD6XYeuRTxcs8mF4k3aO6lbUny01qZ
// NEXT_PUBLIC_SANITY_API_VERSION=2023-01-01

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export async function getPosts(): Promise<Post[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return client.fetch(
    groq`*[_type == "post"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "cover": cover.asset->url,
    content
  }`
  )
}
