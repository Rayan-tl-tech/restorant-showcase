import { useState } from "react";
import SectionLabel from "../../../components/common/SectionLabel";
import PrimaryButton from "../../../components/common/PrimaryButton";
import Reveal from "../../../components/common/Reveal";
import Lightbox from "../../../components/common/Lightbox";
import { HOME_IMAGES } from "../data/homeData";

export default function HomeGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="gallery" className="bg-[#f4f1ea] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal animation="fade-up" delay={60} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
            <div>
              <SectionLabel className="text-[#1a1a1a]/70 mb-6">
                Through the Lens
              </SectionLabel>
              <h2
                className="text-[#1a1a1a] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-light font-serif"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Atmosphere, plated
              </h2>
            </div>
            <PrimaryButton variant="outline" to="/gallery">
              Explore the Gallery
            </PrimaryButton>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {HOME_IMAGES.gallery.map((img, i) => (
              <Reveal
                key={img.id || i}
                animation="fade-scale"
                delay={i * 140}
                className={`group relative aspect-[3/4] overflow-hidden bg-[#1a1a1a] cursor-pointer ${
                  i === 1 || i === 3 ? "mt-8 lg:mt-16" : ""
                }`}
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(i);
                  }
                }}
                aria-label={`View photo: ${img.title || img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Badge */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  <span
                    className="px-4 py-2 border border-white/60 text-white text-[10px] uppercase tracking-[0.25em] backdrop-blur-md bg-black/40 font-sans transform translate-y-3 group-hover:translate-y-0 transition-all duration-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    View Frame
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox for Home Gallery */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={HOME_IMAGES.gallery}
        currentIndex={currentPhotoIndex}
        onIndexChange={setCurrentPhotoIndex}
      />
    </>
  );
}
