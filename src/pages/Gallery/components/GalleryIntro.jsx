import SectionLabel from "../../../components/common/SectionLabel";

export default function GalleryIntro() {
  return (
    <section className="bg-[#f4f1ea] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionLabel className="text-[#1a1a1a]/70 mb-8">
              Selected Frames
            </SectionLabel>
            <h2
              className="text-[#1a1a1a] text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] font-light font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Light. Texture. Gesture.
            </h2>
          </div>

          <div className="lg:pt-16">
            <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed font-sans">
              Hover to explore the gallery. Photography is presented as visual demonstration
              material and does not depict a real Maison Ember location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
