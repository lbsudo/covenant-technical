import { createClient, groq } from "next-sanity"
import { Post } from '../app/lib/interface'

const projectId = "c0418d6f";
const dataset = "production";
const apiVersion = "2023-01-01";

export async function getPosts(): Promise<Post[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      overview,
      category,
      "thumbnail": thumbnail.asset->url,
      "slug": slug.current,
      content,
    }`
  )
}

export async function getPost(slug: string): Promise<Post> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "post" && slug.current == "${slug}"]{
      _id,
      _createdAt,
      title,
      overview,
      category,
      "thumbnail": thumbnail.asset->url,
      "slug": slug.current,
      content,
    }`,
    { slug }
  );
}
