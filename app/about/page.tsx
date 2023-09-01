import AboutBar from "@/components/AboutBar";
import OurApproach from "@/components/OurApproach";
import OurExpertise from "@/components/OurExpertise";
import OurStrengths from "@/components/OurStrenghts";
import Values from "@/components/Values";
import Vision from "@/components/Vision";

export default function AboutPage() {
  return (
    <>
      <section className='py-32 flex justify-center flex-col w-full bg-cover bg-no-repeat bg-top z-0' style={{ backgroundImage: `url('/wrld.jpg')` }}>
        <div className='relative w-full text-white flex flex-col justify-center items-center '>
          <h1 className='text-6xl w-3/4 h-1/2 text-center mt-8'>Focused on a covenant with success</h1>
          <h4 className='text-4xl w-3/4 h-1/4 mt-16 mb-16 text-center'>We want to be the catalyst to drive digital growth in your business through the best technical practices and digital tools.</h4>
        </div>
      </section>
      <section>
        <AboutBar />
      </section>
      <section id='exp'>
        <OurExpertise />
      </section>
      <section id='app'>
        <OurApproach />
      </section>
      <section id='vis'>
        <Vision />
      </section>
      <section id='val'>
        <Values />
      </section>
      <section id='strn'>
        <OurStrengths />
      </section>
    </>
  );
}
