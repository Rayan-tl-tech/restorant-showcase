import { Link } from "react-router-dom";
import ArrowIcon from "./ArrowIcon";
import { usePageTransition } from "../../context/TransitionContext";

export default function PrimaryButton({
  children,
  variant = "terracotta",
  className = "",
  to,
  href,
  ...props
}) {
  const { navigateWithTransition } = usePageTransition();
  const variants = {
    terracotta: "bg-[#a85a3a] text-white hover:bg-[#8f4a2e]",
    teal: "bg-[#5ba4b8] text-white hover:bg-[#4a8fa3]",
    outline: "bg-transparent border border-current text-current hover:bg-black/5",
    outlineLight: "bg-transparent border border-white/30 text-white hover:bg-white/10",
  };

  const baseStyles = `group inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] font-sans transition-all duration-300 ${variants[variant] || variants.terracotta} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <ArrowIcon className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        onClick={(e) => {
          if (props.onClick) {
            props.onClick(e);
            if (e.defaultPrevented) return;
          }
          e.preventDefault();
          navigateWithTransition(to);
        }}
        className={baseStyles}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseStyles} {...props}>
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
