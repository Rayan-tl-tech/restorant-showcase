import { useState, useEffect, useRef } from "react";
import Logo from "../common/Logo";
import ArrowIcon from "../common/ArrowIcon";

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "Menu", id: "menu" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  // Optimized Scroll Handling using requestAnimationFrame and cached element positions
  useEffect(() => {
    let ticking = false;
    let heroEl = document.getElementById("home");
    let menuEl = document.getElementById("menu");
    let contactEl = document.getElementById("contact");

    const updateCachedElements = () => {
      heroEl = document.getElementById("home");
      menuEl = document.getElementById("menu");
      contactEl = document.getElementById("contact");
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const heroHeight = heroEl ? heroEl.offsetHeight : 600;
          setIsScrolled(scrollY > 15);
          setIsPastHero(scrollY >= heroHeight - 80);

          // Active section detection with balanced offset
          const scrollPos = scrollY + 220;
          if (contactEl && scrollPos >= contactEl.offsetTop) {
            setActiveSection("contact");
          } else if (menuEl && scrollPos >= menuEl.offsetTop) {
            setActiveSection("menu");
          } else {
            setActiveSection("home");
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    const handleResize = () => {
      updateCachedElements();
      handleScroll();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update sliding indicator position when active section or viewport changes
  useEffect(() => {
    const currentLink = navRefs.current[activeSection];
    if (currentLink) {
      setIndicatorStyle({
        left: currentLink.offsetLeft,
        width: currentLink.offsetWidth,
        opacity: 1,
      });
    }
  }, [activeSection]);

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

  // High-clarity frosted glass surface:
  // - Dark frosted shield when scrolled anywhere on the page
  // - Transparent overlay at very top of Hero
  const headerBgClass = isScrolled
    ? "bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]"
    : "bg-transparent py-6 border-b border-transparent shadow-none";

  const logoVariant = "light";
  const textClass = "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]";
  const mutedClass = "text-white/80 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]";

  const reserveBtnClass = "bg-[#a85a3a] hover:bg-[#8f4a2e] text-white shadow-md shadow-black/20";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${headerBgClass}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Logo variant={logoVariant} />

        {/* Desktop Navigation with Sliding Active Indicator */}
        <nav
          className="relative hidden lg:flex items-center gap-10"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                ref={(el) => (navRefs.current[item.id] = el)}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`text-[12px] font-medium transition-colors tracking-[0.15em] font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a85a3a] rounded-sm py-1 ${
                  active ? textClass : mutedClass
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.name}
              </a>
            );
          })}

          {/* Smooth Sliding Underline Indicator */}
          <span
            className="absolute -bottom-2 h-[2px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
            }}
            aria-hidden="true"
          />
        </nav>

        {/* Desktop Reserve Button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className={`group hidden lg:inline-flex items-center gap-3 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] font-sans transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a85a3a] ${reserveBtnClass}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="transition-[letter-spacing] duration-250 ease-out group-hover:tracking-[0.24em]">
            Reserve
          </span>
          <ArrowIcon className="w-3 h-3 transition-transform duration-250 ease-out group-hover:translate-x-1.5" />
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a85a3a] rounded-sm"
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
        <div className="lg:hidden px-6 py-8 space-y-6 border-t animate-fadeIn bg-[#1a1a1a] text-white border-white/10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="block text-sm uppercase tracking-[0.2em] font-sans hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a85a3a] py-1"
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
            className={`group inline-flex items-center gap-2 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] font-sans text-white transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a85a3a] ${reserveBtnClass}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="transition-[letter-spacing] duration-250 ease-out group-hover:tracking-[0.24em]">
              Reserve
            </span>
            <ArrowIcon className="w-3 h-3 transition-transform duration-250 ease-out group-hover:translate-x-1" />
          </a>
        </div>
      )}
    </header>
  );
}
