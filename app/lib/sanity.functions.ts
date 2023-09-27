import { createClient } from "next-sanity";
import config from "./sanity.client";
import { groq } from "next-sanity";
import Post from '../../types/Post'


export async function getPosts() {
  return createClient(config).fetch(
    groq`*[_type == "post"]{
    _id,
    _createdAt,
    title,
    overview,
    "slug": slug.current,
    "cover": cover.asset->url,
    content
}`
  )
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(config).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    overview,
    category,
    "slug": slug.current,
    "cover": cover.asset->url,
    content
  }`,
    { slug: slug }
  )
}

export async function getSlugs(): Promise<Post[]> {
  return createClient(config).fetch(
    groq`*[_type == "post"]
    {
    "slug": slug.current,
    }`,
  )
}
