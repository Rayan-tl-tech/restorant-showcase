import { useState } from "react";
import SectionLabel from "../../../components/common/SectionLabel";
import Reveal from "../../../components/common/Reveal";
import MenuCard from "../../../components/common/MenuCard";
import DishDetailDrawer from "./DishDetailDrawer";
import { MENU_CATEGORIES, MENU_DISHES } from "../../../data/menuData";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All Plates");
  const [selectedDish, setSelectedDish] = useState(null);

  const filteredDishes =
    activeCategory === "All Plates"
      ? MENU_DISHES
      : MENU_DISHES.filter((d) => d.category === activeCategory);

  return (
    <section id="menu" className="bg-[#f4f1ea] py-24 lg:py-36 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <Reveal animation="fade-down" delay={60}>
            <SectionLabel className="text-[#a85a3a] mb-6">
              Seasonal Menu
            </SectionLabel>
          </Reveal>
          <Reveal animation="fade-up" delay={140}>
            <h2
              className="text-[#1a1a1a] text-5xl md:text-6xl lg:text-7xl font-light font-serif leading-[1.05]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              An expressive menu,<br />
              <span className="text-[#a85a3a]">led by the season.</span>
            </h2>
          </Reveal>
          <Reveal animation="fade-up" delay={220}>
            <p className="mt-6 text-[#1a1a1a]/70 text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed">
              A considered selection of plates crafted over wood fire and seasonal harvests.
              Select any plate to discover ingredients, pairings, and preparation notes.
            </p>
          </Reveal>
        </div>

        {/* Category tabs */}
        <Reveal animation="fade-down" delay={100}>
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
              <MenuCard dish={dish} onSelect={setSelectedDish} />
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

      {/* Interactive Dish Detail Drawer */}
      <DishDetailDrawer
        isOpen={Boolean(selectedDish)}
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </section>
  );
}
