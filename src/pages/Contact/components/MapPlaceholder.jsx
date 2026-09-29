export default function MapPlaceholder() {
  return (
    <section
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{
        backgroundColor: "#e8e4dc",
        backgroundImage: `
          linear-gradient(45deg, #d9d4c9 25%, transparent 25%, transparent 75%, #d9d4c9 75%),
          linear-gradient(45deg, #d9d4c9 25%, transparent 25%, transparent 75%, #d9d4c9 75%)
        `,
        backgroundSize: "80px 80px",
        backgroundPosition: "0 0, 40px 40px",
      }}
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <div className="inline-block border border-[#1a1a1a]/30 px-10 py-5 mb-6 bg-[#e8e4dc]/80 backdrop-blur-sm">
          <span
            className="text-[#1a1a1a]/70 text-[11px] font-medium uppercase font-sans"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.25em" }}
          >
            Interactive Map Placeholder
          </span>
        </div>
        <p
          className="text-[#1a1a1a]/60 text-2xl md:text-3xl font-light font-serif"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Future restaurant location
        </p>
      </div>
    </section>
  );
}
