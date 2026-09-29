import SectionLabel from "../../../components/common/SectionLabel";
import Reveal from "../../../components/common/Reveal";

export default function AboutHero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#1a1a1a] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=80"
          alt="Chef in black jacket with red trim plating gourmet dish in restaurant kitchen"
          className="w-full h-full object-cover opacity-70 scale-105 transition-transform duration-[2000ms] ease-out"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <Reveal animation="fade-down" delay={100}>
            <SectionLabel className="text-white/90 mb-10">
              The Maison Ember Concept
            </SectionLabel>
          </Reveal>

          <Reveal animation="fade-up" delay={220}>
            <h1
              className="text-white leading-[0.95] font-light font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span className="block text-[clamp(3.5rem,8vw,7.5rem)]">A point of view,</span>
              <span className="block text-[clamp(3.5rem,8vw,7.5rem)] text-[#c98a6a]">
                served with purpose.
              </span>
            </h1>
          </Reveal>

          <Reveal animation="fade-up" delay={360}>
            <p className="mt-10 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
              A model for how a restaurant can communicate philosophy, people and place with
              clarity and character.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
