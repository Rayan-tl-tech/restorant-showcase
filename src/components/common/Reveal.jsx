import { useEffect, useRef, useState } from "react";

/**
  * Reveal — Luxury Editorial Scroll & Viewport Reveal
  *
  * Delivers a calm, cinematic entrance with custom deceleration curve:
  * cubic-bezier(0.16, 1, 0.3, 1) and staggered sequencing.
  */
export default function Reveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 900,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
  as: Component = "div",
  className = "",
  style = {},
  ...rest
}) {
  const elementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if IntersectionObserver is available
    if (typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsRevealed(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  const combinedStyles = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-duration": `${duration}ms`,
    ...style,
  };

  return (
    <Component
      ref={elementRef}
      data-animation={animation}
      className={`editorial-reveal ${isRevealed ? "is-revealed" : ""} ${className}`}
      style={combinedStyles}
      {...rest}
    >
      {children}
    </Component>
  );
}
