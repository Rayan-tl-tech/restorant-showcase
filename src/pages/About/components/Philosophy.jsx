import SectionLabel from "../../../components/common/SectionLabel";

export default function Philosophy() {
  return (
    <section className="bg-[#f4f1ea] py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionLabel className="text-[#1a1a1a]/70 mb-8">
              Our Imagined Philosophy
            </SectionLabel>
            <h2
              className="text-[#1a1a1a] text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] font-light font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Less noise. <span className="italic">More</span> feeling.
            </h2>
          </div>

          <div className="lg:pt-16">
            <p
              className="text-[#1a1a1a] text-2xl md:text-3xl leading-snug mb-6 font-light font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Maison Ember is a fictional identity created to demonstrate the power of
              thoughtful restaurant storytelling.
            </p>
            <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed font-sans">
              Its imagined philosophy is simple: let ingredients speak, let hospitality
              feel natural, and let the room unfold at an unhurried pace. This content is
              intentionally replaceable for a future restaurant client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
