import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import SectionLabel from "../common/SectionLabel";
import PrimaryButton from "../common/PrimaryButton";

const EXPLORE_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Top Banner / Callout */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <SectionLabel className="text-white/70 mb-8">
            Fictional Restaurant Concept
          </SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h2
              className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-3xl font-light font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              An evening shaped<br />
              around the flame.
            </h2>
            <PrimaryButton variant="outlineLight" href="#reserve">
              Plan Your Visit
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-8 text-white/60 text-sm leading-relaxed max-w-md font-sans">
              A premium restaurant website concept created as a design
              demonstration. All names, dishes and details are illustrative.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4
              className="text-[11px] font-semibold uppercase mb-6 tracking-[0.25em] font-sans"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore
            </h4>
            <ul className="space-y-3 font-sans">
              {EXPLORE_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4
              className="text-[11px] font-semibold uppercase mb-6 tracking-[0.25em] font-sans"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Demo Details
            </h4>
            <ul className="space-y-3 text-white/70 text-sm font-sans">
              <li>[Restaurant Address Placeholder]</li>
              <li>[Telephone Placeholder]</li>
              <li>[Email Placeholder]</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4
              className="text-[11px] font-semibold uppercase mb-6 tracking-[0.25em] font-sans"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hours
            </h4>
            <ul className="space-y-3 text-white/70 text-sm font-sans">
              <li>Tue — Thu / 5:30 — 10</li>
              <li>Fri — Sat / 5:30 — 11</li>
              <li>Sun — Mon / Closed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Demo bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between gap-4">
          <span
            className="text-[10px] uppercase text-white/50 tracking-[0.2em] font-sans"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2025 Maison Ember — Fictional Demo
          </span>
          <span
            className="text-[10px] uppercase text-white/50 tracking-[0.2em] font-sans"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Website Concept for Portfolio Presentation
          </span>
        </div>
      </div>
    </footer>
  );
}
