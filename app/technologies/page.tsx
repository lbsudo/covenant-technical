import AllServices from "@/components/AllServices";

export default function TechnologiesPage() {
  return (
    <div>
      <section className='py-32 flex justify-center flex-col w-full bg-cover bg-no-repeat bg-top z-0' style={{ backgroundImage: `url('/laptopcover.jpg')` }}>
        <div className='relative w-full text-white flex flex-col justify-center items-center '>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Technologies We Work with</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Working with the best tech in the business to get the best results for out clients.</h4>
        </div>
      </section>
      <section className="w-full">
        <AllServices />
      </section>
    </div>
  );
}
