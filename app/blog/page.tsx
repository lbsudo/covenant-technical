import InsightPost from "@/components/InsightPost";

export default function BlogPage() {
  return (
    <div>
      <section className='py-32 mb-16 flex justify-center flex-col w-full bg-cover bg-no-repeat bg-top z-0' style={{ backgroundImage: `url('/keys.jpg')` }}>
        <div className='relative w-full text-white flex flex-col justify-center items-center '>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Focused on a covenant with success</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>We want to be the catalyst to drive digital growth in your business through the best technical practices and digital tools.</h4>
        </div>
      </section>
      <section>
        <InsightPost />
      </section>
    </div>
  );
}
