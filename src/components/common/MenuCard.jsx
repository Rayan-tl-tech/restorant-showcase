export default function MenuCard({ dish }) {
  const { number, name, price, description, image } = dish;

  return (
    <article className="group flex flex-col h-full">
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
      </div>

      <div className="flex items-baseline justify-between gap-4 mb-3">
        <h3
          className="text-[#1a1a1a] text-2xl md:text-[1.7rem] leading-tight font-light font-serif"
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

      <p className="text-[#1a1a1a]/60 text-sm mb-6 flex-grow font-sans">{description}</p>
      <div className="h-px bg-[#1a1a1a]/15 mt-auto" />
    </article>
  );
}
