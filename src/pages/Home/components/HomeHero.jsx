import { Link } from "react-router-dom";
import SectionLabel from "../../../components/common/SectionLabel";
import PrimaryButton from "../../../components/common/PrimaryButton";
import Reveal from "../../../components/common/Reveal";
import { HOME_IMAGES } from "../data/homeData";
import { usePageTransition } from "../../../context/TransitionContext";

export default function HomeHero() {
  const { navigateWithTransition } = usePageTransition();
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a] flex items-center"
    >
      {/* Background Image & Ambient Vignette */}
      <div className="absolute inset-0">
        <img
          src={HOME_IMAGES.heroBg}
          alt="Plated dish with sauce being poured"
          className="w-full h-full object-cover opacity-70 scale-105 transition-transform duration-[2000ms] ease-out"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <Reveal animation="fade-down" delay={100}>
            <SectionLabel className="text-white/90 mb-10">
              A Fictional Dining Concept
            </SectionLabel>
          </Reveal>

          <Reveal animation="fade-up" delay={220}>
            <h1
              className="text-white leading-[0.95] font-light font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span className="block text-[clamp(4rem,10vw,9rem)]">Where fire</span>
              <span className="block text-[clamp(4rem,10vw,9rem)] text-[#c98a6a]">
                finds finesse.
              </span>
            </h1>
          </Reveal>

          <Reveal animation="fade-up" delay={380}>
            <p className="mt-10 text-white/80 text-lg md:text-xl max-w-xl leading-relaxed font-sans">
              A cinematic restaurant website concept, designed to turn culinary
              character into an unforgettable digital experience.
            </p>
          </Reveal>

          <Reveal animation="fade-up" delay={520}>
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <PrimaryButton variant="terracotta" to="/contact">
                Reservation
              </PrimaryButton>
              <Link
                to="/menu"
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithTransition("/menu");
                }}
                className="group inline-flex items-center gap-3 text-white text-[11px] font-semibold uppercase tracking-[0.2em] font-sans border-b border-white/40 pb-2 hover:border-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>Explore the Menu</span>
                <svg
                  className="w-3 h-3 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Vertical scroll cue */}
      <Reveal
        animation="fade"
        delay={700}
        className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6"
      >
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-sans"
          style={{
            fontFamily: "'Inter', sans-serif",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Scroll to Discover
        </span>
        <span className="block w-px h-16 bg-white/40" />
      </Reveal>

      {/* Bottom tag */}
      <Reveal
        animation="fade"
        delay={800}
        className="hidden lg:block absolute bottom-10 right-12 text-[10px] uppercase tracking-[0.3em] text-white/60 font-sans"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Seasonal / Expressive / Warm
      </Reveal>
    </section>
  );
}
