import React from 'react';
import fs from 'fs';
import Markdown from "markdown-to-jsx"
import matter from 'gray-matter';
import getPostMetadata from '@/utils/getPostMetadata';
// import { Post } from "@/app/lib/interface";
// import { getPost } from "@/sanity/sanity-utils";
// import { get } from '@/sanity/sanity-utils';

type props = {
  params: { post: string };
}

// const getPostContent = (slug: string) => {
//   const folder = "posts/";
//   const file = `${folder}${slug}.md`;
//   const content = fs.readFileSync(file, "utf8");
//   const matterResult = matter(content);
//   return matterResult;
// }

// export const generateStaticParams = async (props: any) => {
//   const slug = props.params.slug
//   const post = getPost(slug);
//   return post
// }

export default async function page(props: any) {
  // const slug = props.params.slug;
  // const post = await getPost(slug);
  return (
    <div className='flex flex-col w-full items-center justify-between text-currentColor'>
      {/* <section className='py-32 px-16 mb-2 flex text-white justify-center flex-col w-full bg-cover bg-no-repeat bg-top z-0' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${post.thumbnail}')` }}> */}
      {/*   <div className='relative  w-full flex flex-col justify-center items-center '> */}
      {/* <h1 className='underline underline-offset-4 text-6xl w-full h-1/2 text-center mt-8'>{post.title} </h1> */}
      {/* <h4 className='text-2xl w-full h-1/4 mt-16 mb-16 text-center'>{post.overview}</h4> */}
      {/*   </div> */}
      {/* </section> */}

      {/* <article className=" max-w-none px-16 text-left text-white"> */}
      {/*   <p>{post.content}</p> */}
      {/* </article> */}
    </div>
  )
}
