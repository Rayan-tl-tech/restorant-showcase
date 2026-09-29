import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransitionBar() {
  const { pathname } = useLocation();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!animating) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] pointer-events-none bg-gradient-to-r from-transparent via-[#a85a3a] to-[#c98a6a] animate-routeProgress"
      aria-hidden="true"
    />
  );
}
