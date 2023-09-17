import InsightPost from "@/components/InsightPost";
// import { client } from "@/app/lib/sanity";
import { Post } from "@/app/lib/interface";
import { getPosts } from "@/sanity/sanity-utils";


export default async function BlogPage({ }) {
  // const postData = (await getData()) as Post[];
  const postData = (await getPosts()) as Post[];
  return (
    <div>
      <section className='py-32 mb-16 flex justify-center flex-col w-full bg-cover bg-no-repeat bg-top z-0' style={{ backgroundImage: `url('/keys.jpg')` }}>
        <div className='relative w-full text-white flex flex-col justify-center items-center '>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Focused on a covenant with success</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>We want to be the catalyst to drive digital growth in your business through the best technical practices and digital tools.</h4>
        </div>
      </section>
      <section>
        <InsightPost data={postData} />
      </section>
    </div>
  );
}
