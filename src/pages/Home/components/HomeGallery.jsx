import SectionLabel from "../../../components/common/SectionLabel";
import PrimaryButton from "../../../components/common/PrimaryButton";
import { HOME_IMAGES } from "../data/homeData";

export default function HomeGallery() {
  return (
    <section id="gallery" className="bg-[#f4f1ea] py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
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
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {HOME_IMAGES.gallery.map((img, i) => (
            <div
              key={i}
              className={`aspect-[3/4] overflow-hidden bg-[#1a1a1a] ${
                i === 1 || i === 3 ? "mt-8 lg:mt-16" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
