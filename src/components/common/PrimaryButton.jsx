import ArrowIcon from "./ArrowIcon";

export default function PrimaryButton({
  children,
  variant = "terracotta",
  className = "",
  to,
  href,
  ...props
}) {
  const variants = {
    terracotta: "bg-[#a85a3a] text-white hover:bg-[#8f4a2e]",
    teal: "bg-[#5ba4b8] text-white hover:bg-[#4a8fa3]",
    outline: "bg-transparent border border-current text-current hover:bg-black/5",
    outlineLight: "bg-transparent border border-white/30 text-white hover:bg-white/10",
  };

  const baseStyles = `group inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] font-sans transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a85a3a] focus-visible:ring-offset-2 ${variants[variant] || variants.terracotta} ${className}`;

  const content = (
    <>
      <span className="transition-[letter-spacing] duration-250 ease-out group-hover:tracking-[0.24em]">
        {children}
      </span>
      <ArrowIcon className="w-3 h-3 transition-transform duration-250 ease-out group-hover:translate-x-1.5" />
    </>
  );

  const handleAnchorClick = (e, target) => {
    if (props.onClick) {
      props.onClick(e);
      if (e.defaultPrevented) return;
    }
    if (target && target.startsWith("#")) {
      e.preventDefault();
      const id = target.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", target);
      } else if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const linkTarget = href || to;

  if (linkTarget) {
    return (
      <a
        href={linkTarget}
        onClick={(e) => handleAnchorClick(e, linkTarget)}
        className={baseStyles}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {content}
    </button>
  );
}
