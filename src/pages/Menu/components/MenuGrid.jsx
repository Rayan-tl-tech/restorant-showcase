import { useState } from "react";
import MenuCard from "../../../components/common/MenuCard";
import Reveal from "../../../components/common/Reveal";
import { MENU_CATEGORIES, MENU_DISHES } from "../../../data/menuData";

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("All Plates");

  const filteredDishes =
    activeCategory === "All Plates"
      ? MENU_DISHES
      : MENU_DISHES.filter((d) => d.category === activeCategory);

  return (
    <section className="bg-[#f4f1ea] py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Category tabs */}
        <Reveal animation="fade-down" delay={60}>
          <div 
            className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-16"
            role="tablist"
            aria-label="Menu categories"
          >
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] font-medium uppercase pb-3 transition-all duration-200 tracking-[0.2em] font-sans ${
                    isActive
                      ? "text-[#a85a3a] border-b-2 border-[#a85a3a]"
                      : "text-[#1a1a1a]/60 hover:text-[#1a1a1a] border-b-2 border-transparent"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="h-px bg-[#1a1a1a]/15 mb-16" />

        {/* Dish grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filteredDishes.map((dish, i) => (
            <Reveal
              key={`${activeCategory}-${dish.id}`}
              animation="fade-scale"
              delay={(i % 6) * 110}
              className="h-full"
            >
              <MenuCard dish={dish} />
            </Reveal>
          ))}
        </div>

        {/* Disclaimer / Note */}
        <Reveal animation="fade-up" delay={150} className="mt-24 lg:mt-32 text-center max-w-2xl mx-auto">
          <span
            className="text-[#a85a3a] text-[11px] font-medium uppercase block mb-4 tracking-[0.2em] font-sans"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Please Note
          </span>
          <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed font-sans">
            All dishes, ingredients, pricing and dietary references shown here are fictional placeholders
            created for this website demonstration.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
