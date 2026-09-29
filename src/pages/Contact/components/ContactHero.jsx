import SectionLabel from "../../../components/common/SectionLabel";

export default function ContactHero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#1a1a1a] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
          alt="Restaurant dining room with glasses and plants"
          className="w-full h-full object-cover opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <SectionLabel className="text-white/90 mb-10">
            Contact — Demonstration Page
          </SectionLabel>

          <h1
            className="text-white leading-[0.95] font-light font-serif"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="block text-[clamp(3.5rem,8vw,7.5rem)]">Plan the</span>
            <span className="block text-[clamp(3.5rem,8vw,7.5rem)] text-[#c98a6a]">
              conversation.
            </span>
          </h1>

          <p className="mt-10 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
            A polished contact and reservation interface ready to be connected to a future
            restaurant's real information.
          </p>
        </div>
      </div>
    </section>
  );
}
