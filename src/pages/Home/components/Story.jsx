import SectionLabel from "../../../components/common/SectionLabel";
import PrimaryButton from "../../../components/common/PrimaryButton";
import Reveal from "../../../components/common/Reveal";
import { HOME_IMAGES } from "../data/homeData";

export default function Story() {
  return (
    <section className="bg-[#f4f1ea] py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <Reveal animation="fade-scale" delay={100}>
                <div className="aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={HOME_IMAGES.storyInterior}
                    alt="Restaurant interior"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal animation="fade-scale" delay={260}>
                <div className="aspect-[4/5] overflow-hidden bg-[#1a1a1a] mt-12 lg:mt-20">
                  <img
                    src={HOME_IMAGES.storyChef}
                    alt="Chef plating food"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal animation="fade-left" delay={160}>
              <SectionLabel className="text-[#1a1a1a]/70 mb-8">
                The Story, Reimagined
              </SectionLabel>
              <h2
                className="text-[#1a1a1a] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-8 font-light font-serif"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Rooted in craft.<br />
                Made for now.
              </h2>
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed mb-10 font-sans">
                This flexible narrative area demonstrates how a restaurant can
                share its point of view without losing visual momentum.
              </p>

              <blockquote className="border-l-2 border-[#a85a3a] pl-6 mb-10">
                <p
                  className="text-[#1a1a1a] text-2xl md:text-3xl leading-snug italic font-light font-serif"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "A dining story told through texture, warmth, and a precise
                  sense of place."
                </p>
              </blockquote>

              <PrimaryButton variant="outline" to="/about">
                Discover the Concept
              </PrimaryButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
