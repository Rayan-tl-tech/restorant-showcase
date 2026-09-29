import SectionLabel from "../../../components/common/SectionLabel";
import PrimaryButton from "../../../components/common/PrimaryButton";

export default function ChefTeam() {
  return (
    <section className="bg-[#f4f1ea] py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionLabel className="text-[#1a1a1a]/70 mb-8">
              Chef & Team Placeholder
            </SectionLabel>
            <h2
              className="text-[#1a1a1a] text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] font-light font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A space for the people<br />
              behind the experience.
            </h2>
          </div>

          <div className="lg:pt-16">
            <p
              className="text-[#1a1a1a] text-2xl md:text-3xl leading-snug mb-6 font-light font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Introduce a chef's genuine approach, influences and values here.
            </p>
            <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed mb-10 font-sans">
              This section is designed as an editorial framework rather than a fabricated
              biography. It can be adapted to feature a real founder, kitchen team, or
              hospitality collective.
            </p>
            <PrimaryButton variant="outline" to="/contact">
              Start a Conversation
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
