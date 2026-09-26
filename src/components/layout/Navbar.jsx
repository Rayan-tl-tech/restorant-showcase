import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../common/Logo";
import ArrowIcon from "../common/ArrowIcon";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar({ theme = "dark", activeLink = "Menu" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine active state based on route or prop
  const isLinkActive = (item) => {
    if (activeLink) {
      return item.name.toLowerCase() === activeLink.toLowerCase();
    }
    if (item.path === "/") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    return location.pathname.startsWith(item.path);
  };

  const isDark = theme === "dark";
  const textClass = isDark ? "text-white" : "text-[#1a1a1a]";
  const mutedClass = isDark ? "text-white/60" : "text-[#1a1a1a]/60";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md py-4 shadow-lg shadow-black/20" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Logo variant={scrolled ? "light" : theme} />

        <nav className="hidden lg:flex items-center gap-10" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const active = isLinkActive(item);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[12px] font-medium transition-opacity hover:opacity-70 tracking-[0.15em] font-sans ${
                  active
                    ? scrolled ? "text-white" : textClass
                    : scrolled ? "text-white/70" : mutedClass
                } ${
                  active
                    ? "relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px after:bg-current"
                    : ""
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <a
          href="#reserve"
          className="hidden lg:inline-flex items-center gap-3 bg-[#a85a3a] hover:bg-[#8f4a2e] text-white px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] font-sans transition-colors duration-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Reserve
          <ArrowIcon className="w-3 h-3" />
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-white" : textClass}`}
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
        <div className="lg:hidden bg-[#1a1a1a] text-white px-6 py-8 space-y-6 border-t border-white/10 animate-fadeIn">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block text-sm uppercase tracking-[0.2em] font-sans hover:text-[#c98a6a] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="#reserve"
            onClick={() => setMobileOpen(false)}
            className="inline-block bg-[#a85a3a] hover:bg-[#8f4a2e] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] font-sans text-white transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reserve
          </a>
        </div>
      )}
    </header>
  );
}
