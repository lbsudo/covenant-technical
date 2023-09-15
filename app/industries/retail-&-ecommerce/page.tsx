import IndustryCta from "@/components/IndustryCta";
import IndustryInfo from "@/components/IndustryInfo";

export default function IndustriesPage() {
  const List = [
    "Automated Fraud Protection to Prevent Costly Chargebacks (AI)",
    "Blockchain Payments",
    "Supply Chain Managment",
    "Decentralized Marketplace",
    "Robotic Process Automation",
    "Native ECommerce Platforms",
  ]

  return (
    <div>
      <section className='py-32 mb-12 flex justify-center w-full flex-col bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/retailcover.jpg')` }}>
        <div className='w-full text-white flex flex-col justify-center items-center relative z-10'>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Ecommerce Software & Custom Retail Solutions</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Ecommerce solutions built on digital intelligence to deliver higher levels of customer satisfaction</h4>
        </div>
      </section>
      <section>
        <IndustryInfo
          Title="Retail Innovation Through Tech"
          Img="/ecomcover.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

