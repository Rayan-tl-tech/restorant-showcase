import SectionLabel from "./SectionLabel";
import PrimaryButton from "./PrimaryButton";
import Reveal from "./Reveal";

export default function ReservationCTA({
  label = "Begin the Evening",
  title = "Your table is waiting.",
  description = "Demo call-to-action — ready to connect to a future client's reservation flow.",
  buttonText = "Reservation Enquiry",
  bgImage = "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80",
}) {
  return (
    <section id="reserve" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Restaurant dining room"
          className="w-full h-full object-cover scale-105 transition-transform duration-[2000ms]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/75" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <Reveal animation="fade-down" delay={100} className="flex justify-center mb-8">
          <SectionLabel className="text-white/70">{label}</SectionLabel>
        </Reveal>
        <Reveal animation="fade-up" delay={200}>
          <h2
            className="text-white text-[clamp(3rem,7vw,6rem)] leading-[1.05] mb-6 font-light font-serif"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {title}
          </h2>
        </Reveal>
        <Reveal animation="fade-up" delay={320}>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10 font-sans">
            {description}
          </p>
        </Reveal>
        <Reveal animation="fade-up" delay={450}>
          <PrimaryButton variant="terracotta" to="/contact">
            {buttonText}
          </PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}
