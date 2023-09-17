import HomeCta from "@/components/HomeCta";
import MotionBar from "@/components/MotionBar";
import TechServices from "@/components/TechServices";
import HomeTechnologies from "@/components/HomeTechnologies";
import getPostMetadata from "@/utils/getPostMetadata";
import { PostMetadata } from "@/types";
import BlogPreview from "@/components/BlogPreview";
import ContactCTA from "@/components/ContactCTA";


export default function Home() {

  const postMetadata: PostMetadata[] = getPostMetadata();

  return (
    <div>

      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/Wavess.mp4" type="video/mp4" />
          {/* Add additional source elements for different video formats if needed */}
        </video>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h4 className="text-4xl w-3/4 h-1/4 mt-8 mb-20">
            Leading the way in the next era of digital commerce in design, development, strategy, and technology
          </h4>
          <h1 className="text-7xl w-3/4 h-1/2">
            THRIVE IN THE <span className="text-purple-500 underline decoration-white">DIGITAL ERA</span>
          </h1>
          <h4 className="text-4xl w-3/4 h-1/4 mt-16 mb-16">
            Spearheading your brand’s digital transformation through innovative design, specialized customer experience, and utilizing the best development technology focused on commerce success.
          </h4>
        </div>
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
        <BlogPreview list={postMetadata} />
      </section>
      <section>
        <ContactCTA />
      </section>
    </div>
  );
}
