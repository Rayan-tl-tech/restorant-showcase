import { useState, useEffect } from "react";
import Logo from "../common/Logo";
import ArrowIcon from "../common/ArrowIcon";

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "Menu", id: "menu" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOverImage, setIsOverImage] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const homeEl = document.getElementById("home");
      const heroThreshold = homeEl ? Math.max(homeEl.offsetHeight - 80, 200) : 500;
      setIsPastHero(scrollY >= heroThreshold);

      // Section tracking for active navigation highlight
      const scrollPos = scrollY + 220;
      const contactEl = document.getElementById("contact");
      const menuEl = document.getElementById("menu");

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection("contact");
      } else if (menuEl && scrollPos >= menuEl.offsetTop) {
        setActiveSection("menu");
      } else {
        setActiveSection("home");
      }

      // Check if navbar (vertical band 0 to 65px) crosses any dark/contrast image
      const navBottom = 65;
      const images = document.querySelectorAll("main img");
      let overImg = false;
      for (const img of images) {
        const rect = img.getBoundingClientRect();
        if (rect.top <= navBottom && rect.bottom >= 0) {
          overImg = true;
          break;
        }
      }
      setIsOverImage(overImg);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const showDarkNavbar = isPastHero && !isOverImage;
  const logoVariant = showDarkNavbar ? "dark" : "light";
  const textClass = showDarkNavbar
    ? "text-[#1a1a1a]"
    : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]";
  const mutedClass = showDarkNavbar
    ? "text-[#1a1a1a]/60 hover:text-[#1a1a1a]"
    : "text-white/80 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]";
  const underlineClass = showDarkNavbar ? "after:bg-[#1a1a1a]" : "after:bg-white";

  const headerBgClass = isOverImage
    ? "bg-transparent py-4 border-transparent shadow-none"
    : isPastHero
    ? "bg-[#f4f1ea]/85 backdrop-blur-md border-b border-[#1a1a1a]/10 py-4 shadow-sm"
    : "bg-transparent py-6";

  const reserveBtnClass = showDarkNavbar
    ? "bg-[#5ba4b8] hover:bg-[#4a8fa3] text-white"
    : "bg-[#a85a3a] hover:bg-[#8f4a2e] text-white shadow-md shadow-black/20";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${headerBgClass}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Logo variant={logoVariant} />

        <nav className="hidden lg:flex items-center gap-10" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`text-[12px] font-medium transition-colors tracking-[0.15em] font-sans ${
                  active ? textClass : mutedClass
                } ${
                  active
                    ? `relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px ${underlineClass}`
                    : ""
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className={`hidden lg:inline-flex items-center gap-3 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] font-sans transition-colors duration-300 ${reserveBtnClass}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Reserve
          <ArrowIcon className="w-3 h-3" />
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${showDarkNavbar ? "text-[#1a1a1a]" : "text-white"}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className={`lg:hidden px-6 py-8 space-y-6 border-t animate-fadeIn ${
            showDarkNavbar
              ? "bg-[#f4f1ea] text-[#1a1a1a] border-[#1a1a1a]/10"
              : "bg-[#1a1a1a] text-white border-white/10"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="block text-sm uppercase tracking-[0.2em] font-sans hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className={`inline-block px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] font-sans text-white transition-colors ${reserveBtnClass}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reserve
          </a>
        </div>
      )}
    </header>
  );
}
