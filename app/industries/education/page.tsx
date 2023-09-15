import IndustryCta from "@/components/IndustryCta";
import IndustryInfo from "@/components/IndustryInfo";

export default function IndustriesPage() {
  const List = [
    "Computer-based learning systems",
    "Automated learning systems",
    "Intelligent Tutoring",
    "AI-Based Education Apps",
    "AI-based apps that simplify learning processes ",
    "eLearning Chatbots",
    "Deliver human-like experiences to students, reduce ambiguity, and help learners pursue result-oriented conversations",
  ]

  return (
    <div>
      <section className='py-32 mb-12 flex justify-center w-full flex-col bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/educover2.jpg')` }}>
        <div className='w-full text-white flex flex-col justify-center items-center relative z-10'>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Non-Profit, Government, & Private Education </h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>Develop a strategic roadmap to enable the education of the future and enable better learning outcomes</h4>
        </div>
      </section>
      <section>
        <IndustryInfo
          Title="Education Through Innovation"
          Img="/educover.jpg"
          Offerings={List}
        />
      </section>
      <section>
        <IndustryCta />
      </section>
    </div>
  );
}

