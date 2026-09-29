import { useState, useEffect, useCallback, useRef } from "react";

/**
  * Lightbox — Luxury Editorial Full-Screen Visual Exhibition Modal
  *
  * Features:
  * - High-resolution viewport scaling with cinema-dark backdrop
  * - Next / Previous navigation with instant preloading & directional animation
  * - Keyboard controls: [Escape] to close, [←] and [→] to navigate
  * - Touch swipe gesture detection on mobile
  * - Body scroll lock with zero layout shift
  * - Curated editorial metadata and shutter notes
  */
export default function Lightbox({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onIndexChange,
}) {
  const [slideDirection, setSlideDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartXRef = useRef(null);

  const total = items.length;
  const currentItem = items[currentIndex] || items[0];

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setSlideDirection("next");
    setIsAnimating(true);
    const nextIdx = (currentIndex + 1) % total;
    if (onIndexChange) onIndexChange(nextIdx);
  }, [currentIndex, total, onIndexChange]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setSlideDirection("prev");
    setIsAnimating(true);
    const prevIdx = (currentIndex - 1 + total) % total;
    if (onIndexChange) onIndexChange(prevIdx);
  }, [currentIndex, total, onIndexChange]);

  // Preload neighboring images
  useEffect(() => {
    if (!isOpen || total <= 1) return;
    const nextImg = new Image();
    nextImg.src = items[(currentIndex + 1) % total].src;
    const prevImg = new Image();
    prevImg.src = items[(currentIndex - 1 + total) % total].src;
  }, [isOpen, currentIndex, items, total]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Reset slide animation state after trigger
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 450);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  if (!isOpen || !currentItem) return null;

  const formattedCurrent = String(currentIndex + 1).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Exhibition"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#0e0f0e]/95 backdrop-blur-xl animate-lightbox-backdrop select-none overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ---------------- Top Header Bar ---------------- */}
      <header className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 pt-6 pb-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-4">
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c98a6a] font-sans"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {formattedCurrent} <span className="text-white/30">/</span> {formattedTotal}
          </span>
          <span className="hidden sm:inline-block w-px h-3.5 bg-white/20" />
          <span
            className="hidden sm:inline-block text-[11px] uppercase tracking-[0.25em] text-white/50 font-sans"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Maison Ember — Visual Journal
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox (Esc)"
          className="group flex items-center gap-2.5 text-white/70 hover:text-white px-3 py-1.5 transition-colors focus:outline-none"
        >
          <span
            className="hidden sm:inline-block text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white/80 transition-colors font-sans"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            ESC
          </span>
          <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#c98a6a] flex items-center justify-center transition-colors">
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
      </header>

      {/* ---------------- Main Stage (Image & Floating Controls) ---------------- */}
      <div className="relative flex-1 w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-center overflow-hidden my-auto py-2">
        {/* Previous Button */}
        {total > 1 && (
          <button
            onClick={handlePrev}
            aria-label="Previous Frame"
            className="absolute left-4 lg:left-8 z-20 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-white/5 hover:bg-[#a85a3a]/90 text-white/80 hover:text-white border border-white/10 hover:border-[#a85a3a] backdrop-blur-md flex items-center justify-center transition-all duration-300 focus:outline-none hover:scale-105"
          >
            <svg
              className="w-5 h-5 -translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Center Image Container */}
        <div
          key={currentItem.id}
          className={`relative max-h-[70vh] sm:max-h-[72vh] lg:max-h-[76vh] max-w-[90vw] lg:max-w-[80vw] flex items-center justify-center ${
            slideDirection === "next"
              ? "animate-lightbox-slide-next"
              : "animate-lightbox-slide-prev"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentItem.src}
            alt={currentItem.alt || currentItem.title || "Gallery exhibition image"}
            className="max-h-[70vh] sm:max-h-[72vh] lg:max-h-[76vh] w-auto max-w-full object-contain shadow-2xl shadow-black/80 border border-white/10"
            draggable={false}
          />
        </div>

        {/* Next Button */}
        {total > 1 && (
          <button
            onClick={handleNext}
            aria-label="Next Frame"
            className="absolute right-4 lg:right-8 z-20 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-white/5 hover:bg-[#a85a3a]/90 text-white/80 hover:text-white border border-white/10 hover:border-[#a85a3a] backdrop-blur-md flex items-center justify-center transition-all duration-300 focus:outline-none hover:scale-105"
          >
            <svg
              className="w-5 h-5 translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      {/* ---------------- Bottom Editorial Caption Drawer ---------------- */}
      <footer className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 py-5 border-t border-white/10 bg-[#0e0f0e]/80">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
          <div className="max-w-2xl">
            {currentItem.label && (
              <span
                className="text-[#c98a6a] text-[10px] uppercase font-semibold tracking-[0.25em] block mb-1.5 font-sans"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {currentItem.label}
              </span>
            )}
            <h2
              className="text-white text-2xl sm:text-3xl font-light font-serif leading-tight mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {currentItem.title || currentItem.alt}
            </h2>
            {currentItem.description && (
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-sans max-w-xl">
                {currentItem.description}
              </p>
            )}
          </div>

          <div className="text-right shrink-0 hidden sm:block">
            <span
              className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-sans block"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Use ← → arrows to navigate
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
