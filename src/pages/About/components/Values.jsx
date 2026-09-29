import { ABOUT_VALUES } from "../data/aboutData";

export default function Values() {
  return (
    <section className="bg-[#1a1a1a] text-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {ABOUT_VALUES.map((v) => (
            <div
              key={v.number}
              className="p-8 md:p-10 lg:p-14 border-b md:border-b-0 md:border-r border-white/15 last:border-b-0 last:md:border-r-0"
            >
              <span
                className="text-[11px] text-[#c98a6a] block mb-8 font-sans"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {v.number}
              </span>
              <h3
                className="text-white text-3xl md:text-4xl mb-4 leading-tight font-light font-serif"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {v.title}
              </h3>
              <p className="text-white/60 text-base leading-relaxed font-sans">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
