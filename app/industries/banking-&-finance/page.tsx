import IndustryCta from "@/components/IndustryCta";
import IndustryInfo from "@/components/IndustryInfo";

export default function IndustriesPage() {
  const List = [
    "Cloud-Based Software-as-a-Service (SaaS)",
    "CRM, financial accounting, and KYC verification",
    "AI Customer Engagement",
    "Blockchain cryptographic security",
    "Built-in blockchain redundancy ",
    "Secure B2B interactions",
  ]

  return (
    <div>
      <section className='py-32 mb-12 flex justify-center w-full flex-col bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bankcover.jpg')` }}>
        <div className='w-full text-white flex flex-col justify-center items-center relative z-10'>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Fintech, Banking, Financial Services & Insurance</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>FinTech software solutions designed to unlock security, agility, and operational efficiency</h4>
        </div>
      </section>
      <section>
        <IndustryInfo
          Title="Innovative Banking Solutions"
          Img="/bankcover2.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

