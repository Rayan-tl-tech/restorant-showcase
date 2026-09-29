import Reveal from "../../../components/common/Reveal";
import { GALLERY_ITEMS } from "../data/galleryData";

export default function GalleryGrid() {
  return (
    <section className="bg-[#f4f1ea] pb-24 lg:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item, i) => (
            <Reveal
              key={item.id}
              as="figure"
              animation="fade-scale"
              delay={(i % 4) * 120}
              className={`group relative overflow-hidden bg-[#1a1a1a] ${item.span} ${item.aspect}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 bg-gradient-to-t from-black/80 to-transparent">
                  {item.caption.label && (
                    <span
                      className="text-white/80 text-[10px] uppercase block mb-2 tracking-[0.2em] font-sans"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.caption.label}
                    </span>
                  )}
                  {item.caption.title && (
                    <h3
                      className="text-white text-3xl md:text-4xl font-light font-serif"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.caption.title}
                    </h3>
                  )}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
