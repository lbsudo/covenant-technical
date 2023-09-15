import IndustryCta from "@/components/IndustryCta";
import IndustryInfo from "@/components/IndustryInfo";

export default function IndustriesPage() {
  const List = [
    "Artificial Intelligence (AI) tailored recommendations for travelers ",
    "Blockchain’s removing the layers between consumers and sellers.",
    "Internet of Things",
  ]

  return (
    <div>
      <section className='py-32 mb-12 flex justify-center w-full flex-col bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/travelcover2.jpg')` }}>
        <div className='w-full text-white flex flex-col justify-center items-center relative z-10'>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Logistics, Travel, & Hospitality</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Unravel the art and science of converting travelers with comprehensive travel technology</h4>
        </div>
      </section>
      <section>
        <IndustryInfo
          Title="Innovation in Hospitality"
          Img="/travelcover.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

