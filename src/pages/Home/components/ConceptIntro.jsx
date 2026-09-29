import SectionLabel from "../../../components/common/SectionLabel";

export default function ConceptIntro() {
  return (
    <section className="bg-[#f4f1ea] py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="w-24 h-24 border border-[#1a1a1a]/20 flex items-center justify-center">
              <span
                className="text-2xl text-[#a85a3a] font-light font-serif"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ME
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <SectionLabel className="text-[#1a1a1a]/70 mb-8">
              Maison Ember
            </SectionLabel>
            <h2
              className="text-[#1a1a1a] text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] font-light font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A restaurant concept where every detail has{" "}
              <span className="text-[#c98a6a]">intention.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-16">
            <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed font-sans">
              This demonstration imagines a contemporary dining room shaped by
              seasonal ingredients, open-fire cooking, and quietly confident
              hospitality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
