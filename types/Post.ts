import { PortableTextBlock } from "sanity";

type Post = {
  _id: string,
  _CreatedAt: Date;
  title: string;
  overview: string;
  category: string;
  slug: string;
  cover: string;
  content: PortableTextBlock[];
}

export default Post;
