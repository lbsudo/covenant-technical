import IndustryCta from "@/components/IndustryCta";
import IndustryInfo from "@/components/IndustryInfo";

export default function IndustriesPage() {
  const List = [
    "Create a secure and standardized record of medical data",
    "Ensure on-demand access to patient information",
    "Enable an integrated system of medical systems and applications to capture data",
    "Detect and analyze patterns across data in real-time to identify health conditions, potential treatment methods, and their outcomes (AI)",
  ]

  return (
    <div>
      <section className='py-32 mb-12 flex justify-center w-full flex-col bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/carecover.jpg')` }}>
        <div className='w-full text-white flex flex-col justify-center items-center relative z-10'>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Life Sciences, Pharma, & Healthcare</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Leverage intelligent technologies to drive better care experiences and improved cost savings</h4>
        </div>
      </section>
      <section>
        <IndustryInfo
          Title="Our Healthcare Technical Solutions"
          Img="/carecover2.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

