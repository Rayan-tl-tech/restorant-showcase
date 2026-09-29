import SectionLabel from "../../../components/common/SectionLabel";
import PrimaryButton from "../../../components/common/PrimaryButton";
import { MENU_DISHES } from "../../../data/menuData";

export default function FeaturedPlates() {
  const featuredDishes = MENU_DISHES.slice(0, 3);

  return (
    <section id="menu" className="bg-[#f4f1ea] py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16 lg:mb-24">
          <SectionLabel className="text-[#1a1a1a]/70 mb-6">
            A Taste of the Concept
          </SectionLabel>
          <h2
            className="text-[#1a1a1a] text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-6 font-light font-serif"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Featured plates
          </h2>
          <p className="text-[#1a1a1a]/70 text-lg leading-relaxed font-sans">
            Illustrative menu content, composed to show how signature dishes
            could be presented.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuredDishes.map((dish) => (
            <article key={dish.id} className="group flex flex-col h-full">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a] mb-6">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span
                  className="absolute top-6 left-6 bg-[#f4f1ea] text-[#1a1a1a] text-[11px] font-medium tracking-wider px-3 py-2 font-sans"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {dish.number}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3
                  className="text-[#1a1a1a] text-2xl md:text-[1.7rem] leading-tight font-light font-serif"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {dish.name}
                </h3>
                <span
                  className="text-[#a85a3a] text-xl shrink-0 font-light font-serif"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {dish.price}
                </span>
              </div>
              <p className="text-[#1a1a1a]/60 text-sm font-sans flex-grow">{dish.description}</p>
              <div className="mt-6 h-px bg-[#1a1a1a]/15" />
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-16 lg:mt-20">
          <PrimaryButton variant="outline" to="/menu">
            View the Full Menu
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
