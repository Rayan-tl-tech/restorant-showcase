import SectionLabel from "../../../components/common/SectionLabel";
import Reveal from "../../../components/common/Reveal";
import { APPROACH_ELEMENTS } from "../data/homeData";

export default function Approach() {
  return (
    <section className="bg-[#1a1a1a] text-white py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-28">
          <div className="lg:col-span-5 lg:pt-20">
            <Reveal animation="fade-down" delay={100}>
              <SectionLabel className="text-white/70">
                The Maison Ember Approach
              </SectionLabel>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal animation="fade-up" delay={180}>
              <h2
                className="leading-[1.05] font-light font-serif"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <span className="block text-[clamp(3rem,7vw,6.5rem)] text-white">
                  Four elements.
                </span>
                <span className="block text-[clamp(3rem,7vw,6.5rem)] text-[#c98a6a]">
                  One considered<br />
                  experience.
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/15">
          {APPROACH_ELEMENTS.map((el, i) => (
            <Reveal
              key={el.number}
              animation="fade-up"
              delay={i * 140}
              className="p-8 lg:p-10 border-b border-white/15 md:[&:nth-child(odd)]:border-r md:[&:nth-child(even)]:border-r-0 lg:[&:not(:last-child)]:border-r"
            >
              <span
                className="text-[11px] text-[#c98a6a] tracking-wider mb-8 block font-sans"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {el.number}
              </span>
              <h3
                className="text-white text-2xl md:text-3xl mb-4 leading-tight font-light font-serif"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {el.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-sans">
                {el.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
