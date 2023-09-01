import IndustryGrid from "@/components/IndustryGrid";

export default function IndustriesPage() {
  return (
    <div>
      <section className='py-32 mb-12 flex justify-center w-full flex-col bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/industry.jpg')` }}>
        <div className='w-full text-white flex flex-col justify-center items-center relative z-10'>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Industries We Work With</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>We work with a wide range of business industries and hope we can work with you next.</h4>
        </div>
      </section>
      <section>
        <IndustryGrid />
      </section>
    </div>
  );
}

