import { useState } from "react";
import Reveal from "../../../components/common/Reveal";
import Lightbox from "../../../components/common/Lightbox";
import { GALLERY_ITEMS } from "../data/galleryData";

export default function GalleryGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="bg-[#f4f1ea] pb-24 lg:pb-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {GALLERY_ITEMS.map((item, i) => (
              <Reveal
                key={item.id}
                as="figure"
                animation="fade-scale"
                delay={(i % 4) * 120}
                className={`group relative overflow-hidden bg-[#1a1a1a] cursor-pointer ${item.span} ${item.aspect}`}
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(i);
                  }
                }}
                aria-label={`View photo: ${item.title || item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Luxury Hover Vignette & View Indicator */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  <span
                    className="px-4 py-2 border border-white/60 text-white text-[10px] uppercase tracking-[0.25em] backdrop-blur-md bg-black/40 font-sans transform translate-y-3 group-hover:translate-y-0 transition-all duration-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    View Frame
                  </span>
                </div>

                {/* Optional Overlaid Editorial Caption on specific highlighted frames */}
                {item.id === 11 && (
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                    <span
                      className="text-white/80 text-[10px] uppercase block mb-2 tracking-[0.2em] font-sans"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.label}
                    </span>
                    <h3
                      className="text-white text-3xl md:text-4xl font-light font-serif"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Interactive Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={GALLERY_ITEMS}
        currentIndex={currentPhotoIndex}
        onIndexChange={setCurrentPhotoIndex}
      />
    </>
  );
}
