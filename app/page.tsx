import HomeCta from "@/components/home/HomeCta";
import MotionBar from "@/components/home/MotionBar";
import TechServices from "@/components/home/TechServices";
import HomeTechnologies from "@/components/home/HomeTechnologies";
import ContactCTA from "@/components/home/ContactCTA";
import HomeHero from '@/components/home/HomeHero';


export default async function Home() {
  return (
    <div>
      <section className="relative w-full h-screen overflow-hidden">
        <HomeHero />
      </section>
      <section>
        <HomeCta />
      </section>
      <section>
        <TechServices />
      </section>
      <section>
        <MotionBar />
      </section>
      <section>
        <HomeTechnologies />
      </section>
      <section>
        <ContactCTA />
      </section>
    </div>
  );
}
