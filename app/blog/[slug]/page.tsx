import React from 'react';
import fs from 'fs';
import Markdown from "markdown-to-jsx"
import matter from 'gray-matter';
import getPostMetadata from '@/utils/getPostMetadata';

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function page(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className='flex flex-col w-full items-center justify-between'>
      <section className='py-32 px-16 mb-2 flex text-white justify-center flex-col w-full bg-cover bg-no-repeat bg-top z-0' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${post.data.cover}')` }}>
        <div className='relative  w-full flex flex-col justify-center items-center '>
          <h1 className='underline underline-offset-4 text-6xl w-full h-1/2 text-center mt-8'>{post.data.title} </h1>
          <h4 className='text-2xl w-full h-1/4 mt-16 mb-16 text-center'>{post.data.subtitle}</h4>
        </div>
      </section>

      <article className="prose lg:prose-lg xl:prose-xl 2xl:prose-2xl max-w-none px-16 text-left dark:prose-invert">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}
