import fs from 'fs';
import matter from "gray-matter";
import { PostMetadata } from "@/types";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPost = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPost.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      category: matterResult.data.category,
      cover: matterResult.data.cover,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
}

export default getPostMetadata;
