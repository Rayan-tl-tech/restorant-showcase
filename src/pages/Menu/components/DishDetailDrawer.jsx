import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { usePageTransition } from "../../../context/TransitionContext";

/**
 * DishDetailDrawer — Luxury Editorial Dish Detail Panel
 *
 * Sliders smoothly from the right on desktop, and surfaces as an elegant
 * bottom sheet on mobile/tablet. Contains dish photography, culinary notes,
 * ingredients, dietary badges, and sommelier pairing recommendations.
 */
export default function DishDetailDrawer({ isOpen, dish, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const closeBtnRef = useRef(null);
  const drawerRef = useRef(null);
  const { navigateWithTransition } = usePageTransition();

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 320);
  }, [onClose]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on mount
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen && !isClosing) return null;
  if (!dish) return null;

  const {
    number,
    name,
    price,
    description,
    story,
    ingredients = [],
    pairing,
    dietary = [],
    image,
    category,
  } = dish;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-drawer-name"
      className="fixed inset-0 z-[95] select-none"
    >
      {/* ---------------- Backdrop Overlay ---------------- */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isClosing ? "opacity-0" : "animate-drawer-backdrop opacity-100"
        }`}
        onClick={handleClose}
      />

      {/* ---------------- Slide Drawer Container ---------------- */}
      <div
        ref={drawerRef}
        className={`fixed z-10 bg-[#f7f5f0] text-[#1a1a1a] shadow-2xl flex flex-col justify-between overflow-hidden
          /* Mobile / Tablet: Bottom Sheet */
          bottom-0 left-0 right-0 w-full max-h-[92vh] rounded-t-2xl sm:rounded-t-3xl border-t border-[#1a1a1a]/10
          /* Desktop (lg): Right Sliding Drawer */
          lg:bottom-0 lg:top-0 lg:left-auto lg:right-0 lg:w-[560px] lg:max-h-full lg:rounded-none lg:border-t-0 lg:border-l lg:border-[#1a1a1a]/10
          transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            isClosing
              ? "translate-y-full lg:translate-y-0 lg:translate-x-full"
              : "animate-drawer-mobile lg:animate-drawer-desktop translate-y-0 lg:translate-x-0"
          }
        `}
      >
        {/* Mobile Pull Indicator */}
        <div className="lg:hidden pt-3 pb-1 flex justify-center">
          <div className="w-12 h-1 bg-[#1a1a1a]/20 rounded-full" />
        </div>

        {/* ---------------- Top Header Bar ---------------- */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#1a1a1a]/10 flex items-center justify-between bg-[#f7f5f0]/95 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span
              className="text-[#a85a3a] text-[11px] font-semibold uppercase tracking-[0.25em] font-sans"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Plate {number}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#1a1a1a]/30" />
            <span
              className="text-[#1a1a1a]/60 text-[11px] uppercase tracking-[0.2em] font-sans"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {category}
            </span>
          </div>

          {/* Close Button */}
          <button
            ref={closeBtnRef}
            onClick={handleClose}
            aria-label="Close Dish Detail (Escape)"
            className="group flex items-center gap-2 text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors focus:outline-none"
          >
            <span
              className="hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 group-hover:text-[#1a1a1a] transition-colors font-sans"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              ESC
            </span>
            <div className="w-8 h-8 rounded-full border border-[#1a1a1a]/20 group-hover:border-[#a85a3a] flex items-center justify-center transition-colors">
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:rotate-90 duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </button>
        </div>

        {/* ---------------- Scrollable Content Body ---------------- */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-8 select-text">
          {/* Hero Dish Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a] shadow-lg shadow-black/5">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            {number && (
              <span
                className="absolute top-4 left-4 bg-[#f7f5f0] text-[#1a1a1a] text-[10px] font-medium tracking-wider px-2.5 py-1.5 font-sans"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {number}
              </span>
            )}
          </div>

          {/* Title, Price, & Overview */}
          <div>
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h2
                id="dish-drawer-name"
                className="text-[#1a1a1a] text-3xl sm:text-4xl leading-tight font-light font-serif"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {name}
              </h2>
              <span
                className="text-[#a85a3a] text-2xl sm:text-3xl shrink-0 font-light font-serif"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {price}
              </span>
            </div>

            <p className="text-[#1a1a1a]/60 text-sm font-sans mb-4">
              {description}
            </p>

            {story && (
              <p className="text-[#1a1a1a]/80 text-sm sm:text-base leading-relaxed font-sans border-l-2 border-[#a85a3a] pl-4 py-0.5">
                {story}
              </p>
            )}

            {/* Dietary Badges */}
            {dietary.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 pt-2">
                {dietary.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#1a1a1a]/5 text-[#1a1a1a]/70 font-sans border border-[#1a1a1a]/10"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-[#1a1a1a]/15" />

          {/* Components / Ingredients */}
          {ingredients.length > 0 && (
            <div>
              <span
                className="text-[#a85a3a] text-[11px] font-semibold uppercase tracking-[0.25em] block mb-4 font-sans"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Craft & Ingredients
              </span>
              <ul className="space-y-2.5">
                {ingredients.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-[#1a1a1a]/80 font-sans"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a85a3a] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sommelier's Pairing Section */}
          {pairing && (
            <div className="bg-[#1a1a1a] text-white p-6 sm:p-7 border-l-2 border-[#a85a3a] shadow-lg shadow-black/10">
              <div className="flex items-center gap-2.5 mb-3">
                <svg
                  className="w-4 h-4 text-[#c98a6a]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 22h8" />
                  <path d="M12 15v7" />
                  <path d="M6 3h12a3 3 0 0 1 3 3v2a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8V6a3 3 0 0 1 3-3z" />
                </svg>
                <span
                  className="text-[#c98a6a] text-[10px] uppercase font-semibold tracking-[0.25em] font-sans"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Sommelier's Pairing
                </span>
              </div>
              <h3
                className="text-white text-xl sm:text-2xl font-light font-serif mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {pairing.wine}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                {pairing.notes}
              </p>
            </div>
          )}
        </div>

        {/* ---------------- Bottom Drawer Footer ---------------- */}
        <div className="p-6 sm:px-8 border-t border-[#1a1a1a]/10 bg-[#f7f5f0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              navigateWithTransition("/contact");
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-[#a85a3a] hover:bg-[#8e492c] text-white text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors font-sans"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reservation Enquiry
          </Link>
          <button
            onClick={handleClose}
            className="text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors font-sans py-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
}
