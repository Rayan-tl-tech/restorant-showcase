export default function MenuCard({ dish, onSelect }) {
  const { number, name, price, description, image } = dish;

  const handleClick = () => {
    if (onSelect) {
      onSelect(dish);
    }
  };

  return (
    <article
      onClick={handleClick}
      role={onSelect ? "button" : "article"}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={(e) => {
        if (onSelect && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`View details for ${name}, ${price}`}
      className={`group flex flex-col h-full text-left ${onSelect ? "cursor-pointer" : ""}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-6">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {number && (
          <span
            className="absolute top-6 left-6 bg-[#f4f1ea] text-[#1a1a1a] text-[11px] font-medium px-3 py-2 font-sans"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {number}
          </span>
        )}

        {/* Hover Discovery Overlay */}
        {onSelect && (
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
            <span
              className="px-4 py-2 border border-white/60 text-white text-[10px] uppercase tracking-[0.25em] backdrop-blur-md bg-black/40 font-sans transform translate-y-3 group-hover:translate-y-0 transition-all duration-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View Dish
            </span>
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-4 mb-3">
        <h3
          className="text-[#1a1a1a] text-2xl md:text-[1.7rem] leading-tight font-light font-serif group-hover:text-[#a85a3a] transition-colors"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {name}
        </h3>
        <span
          className="text-[#a85a3a] text-xl shrink-0 font-light font-serif"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {price}
        </span>
      </div>

      <p className="text-[#1a1a1a]/60 text-sm mb-4 font-sans">{description}</p>

      {/* Dedicated View CTA Link */}
      {onSelect && (
        <div
          className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#a85a3a] group-hover:text-[#8e492c] transition-colors font-sans mt-auto pb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span>Discover</span>
          <svg
            className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      )}

      <div className="h-px bg-[#1a1a1a]/15 mt-auto" />
    </article>
  );
}
