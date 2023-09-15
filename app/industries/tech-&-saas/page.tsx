import IndustryCta from "@/components/IndustryCta";
import IndustryInfo from "@/components/IndustryInfo";

export default function IndustriesPage() {
  const List = [
    "End-to-end product development solutions",
    "Shorter software release cycles",
    "An enhanced value chain with the flexibility to implement agile and responsive processes",
    "Rapidly created POCs as and when required",
    "Proven testing methodologies across risk management, functional and compliance testing",
    "A team of expert design consultants with a mobile-first mantra",
    "Rapid prototyping of new ideas with a major focus on user experience",
  ]

  return (
    <div>
      <section className='py-32 mb-12 flex justify-center w-full flex-col bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/techcover.jpg')` }}>
        <div className='w-full text-white flex flex-col justify-center items-center relative z-10'>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>SaaS, HiTech, ISV & Communications</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Working with the latest technology and mainting foundational systems into the future and beyond.</h4>
        </div>
      </section>
      <section>
        <IndustryInfo
          Title="Adapting to Technology to Accelerate Business"
          Img="/codecover.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

