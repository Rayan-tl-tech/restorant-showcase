import Reveal from "../../../components/common/Reveal";

export default function KitchenVisual() {
  return (
    <section className="bg-[#f4f1ea] py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal animation="fade-scale" delay={100}>
              <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] shadow-xl shadow-black/10">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80"
                  alt="Restaurant open kitchen pass with warm copper pendant heat lamps and table setting"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal animation="fade-scale" delay={260}>
              <span
                className="text-[11px] font-medium uppercase text-[#1a1a1a]/70 block mb-8 tracking-[0.25em] font-sans"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                The Hands Behind the Plate
              </span>
              <div className="aspect-[3/4] overflow-hidden bg-[#1a1a1a] max-w-sm shadow-xl shadow-black/10">
                <img
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80"
                  alt="Chef in white jacket holding a signature plated dish in dramatic shadow"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
