import SectionLabel from "../../../components/common/SectionLabel";

export default function MenuHero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#1a1a1a] flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80"
          alt="Plated dish with sauce being poured"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <SectionLabel className="text-white/90 mb-10">
            Seasonal Menu — Demo Content
          </SectionLabel>

          <h1
            className="text-white leading-[0.95] font-light font-serif"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="block text-[clamp(3.5rem,8vw,7.5rem)]">An expressive menu,</span>
            <span className="block text-[clamp(3.5rem,8vw,7.5rem)] text-[#c98a6a]">
              led by the season.
            </span>
          </h1>

          <p className="mt-10 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
            A considered selection of fictional plates, presented to demonstrate an elegant,
            flexible menu experience.
          </p>
        </div>
      </div>
    </section>
  );
}
