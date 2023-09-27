import React from 'react'
import { getPost, getSlugs } from '../../lib/sanity.functions';
import Post from '../../../types/Post'
import { PortableText } from '@portabletext/react'
import BlogPostHeader from '@/components/BlogPostHeader';
import { RichTextComponents } from '@/components/RichTextComponents';

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const slugs = await getSlugs();
  const slugRoutes = slugs.map((slug) => slug.slug);
  return slugRoutes.map(slug => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return {
    title: "Not Found",
    description: "The page is not found"
  }

  return {
    title: post.title,
    description: post.overview
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await getPost(slug);

  return (
    <div className="mb-16">
      <BlogPostHeader
        title={post.title}
        overview={post.overview}
        category={post.category}
        cover={post.cover}
      />
      <section className='pt-8'>
        <div className='text-left w-full px-16'><PortableText value={post.content} components={RichTextComponents} /></div>
      </section>
    </div>
  );
}
