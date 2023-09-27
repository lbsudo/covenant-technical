import React from "react";
import { getPosts } from '../lib/sanity.functions';
import Post from '../../types/Post'
import BlogGrid from "@/components/BlogGrid";
import BlogHero from "@/components/BlogHero";

export const revalidate = 60;

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <BlogHero />
      </section>
      <section className="pb-16">
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 px-12 pt-12">
          {posts.map((post: Post) => (
            <BlogGrid key={post._id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
