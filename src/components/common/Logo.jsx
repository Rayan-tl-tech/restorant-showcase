import { Link } from "react-router-dom";
import { usePageTransition } from "../../context/TransitionContext";

export default function Logo({ variant = "light", asLink = true }) {
  const isLight = variant === "light";
  const { navigateWithTransition } = usePageTransition();

  const content = (
    <div className="flex items-center gap-4 group">
      <div
        className={`flex items-center justify-center w-12 h-12 border transition-colors ${
          isLight ? "border-white" : "border-[#1a1a1a]"
        }`}
      >
        <span
          className={`text-xl font-light font-serif ${
            isLight ? "text-white" : "text-[#1a1a1a]"
          }`}
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          ME
        </span>
      </div>
      <div className="flex flex-col">
        <span
          className={`text-[13px] font-bold font-sans tracking-[0.25em] ${
            isLight ? "text-white" : "text-[#1a1a1a]"
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          MAISON EMBER
        </span>
        <span
          className={`text-[9px] font-sans tracking-[0.3em] ${
            isLight ? "text-white/60" : "text-[#1a1a1a]/60"
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          RESTAURANT CONCEPT
        </span>
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          navigateWithTransition("/");
        }}
        aria-label="Maison Ember Home"
        className="inline-block focus:outline-none"
      >
        {content}
      </Link>
    );
  }

  return content;
}
