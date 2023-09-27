import HomeCta from "@/components/HomeCta";
import MotionBar from "@/components/MotionBar";
import TechServices from "@/components/TechServices";
import HomeTechnologies from "@/components/HomeTechnologies";
import ContactCTA from "@/components/ContactCTA";
import HomeHero from '@/components/HomeHero';


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
