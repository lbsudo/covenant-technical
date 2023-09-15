import IndustryCta from "@/components/IndustryCta";
import IndustryInfo from "@/components/IndustryInfo";

export default function IndustriesPage() {
  const List = [
    "Project plan accelerators",
    "Security profiles and roles",
    "Detailed transaction instructions and training materials",
    "Data load programs, tools, and templates",
    "Forms and reporting",
    "Accounting and controlling",
    "Logistics, product life-cycle management and quality management",
    "Sales and distribution",
    "Production planning and control",
    "Materials management",
  ]

  return (
    <div>
      <section className='py-32 mb-12 flex justify-center w-full flex-col bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/manucover2.jpg')` }}>
        <div className='w-full text-white flex flex-col justify-center items-center relative z-10'>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Manufacturing Services and Solutions</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Streamlining Manufacturing, Integration by intergration to create effecient systems</h4>
        </div>
      </section>
      <section>
        <IndustryInfo
          Title="Implementing Best Practice Solutions For Manufacturing"
          Img="/manucover.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

