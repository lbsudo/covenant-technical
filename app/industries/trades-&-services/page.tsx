import IndustryCta from "@/components/IndustryCta";
import IndustryInfo from "@/components/IndustryInfo";

export default function IndustriesPage() {
  const List = [
    "Native Digital Platforms",
    "Performance Marketing",
    "Digital Customer Lead Managment",
    "Digital Strategy",
    "Project Organization Solutions",
    "Information Architecture",
  ]

  return (
    <div>
      <section className='py-32 mb-12 flex justify-center w-full flex-col bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/tradecover.jpg')` }}>
        <div className='w-full text-white flex flex-col justify-center items-center relative z-10'>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Trades & Services</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Building digital soulutions for independent and corporate contractors, tradesmen, and service providers</h4>
        </div>
      </section>
      <section>
        <IndustryInfo
          Title="Level Up Your Trade"
          Img="/trade.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

