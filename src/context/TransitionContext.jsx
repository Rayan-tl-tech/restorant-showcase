import { createContext, useContext, useState, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CurtainOverlay from "../components/common/CurtainOverlay";

const TransitionContext = createContext({
  navigateWithTransition: () => {},
  isTransitioning: false,
  pendingPath: null,
});

export function TransitionProvider({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isNavigatingRef = useRef(false);

  const navigateWithTransition = useCallback(
    (to) => {
      const [pathWithoutHash, hash] = to.split("#");
      const currentPath = location.pathname;
      const targetPath = pathWithoutHash === "/home" ? "/" : pathWithoutHash;
      const normalizedCurrent = currentPath === "/home" ? "/" : currentPath;

      // If already on the same page
      if (normalizedCurrent === targetPath) {
        if (hash) {
          const targetEl =
            (window.innerWidth < 1024
              ? document.getElementById("reservation-form")
              : document.getElementById(hash)) ||
            document.getElementById(hash) ||
            document.getElementById("reservation-form");
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }
        return;
      }

      if (isNavigatingRef.current) {
        return;
      }

      isNavigatingRef.current = true;
      setPendingPath(to);
      setIsTransitioning(true);

      // Midpoint: screen is 100% covered by the luxury curtain
      setTimeout(() => {
        navigate(to);
        if (hash) {
          setTimeout(() => {
            const targetEl =
              (window.innerWidth < 1024
                ? document.getElementById("reservation-form")
                : document.getElementById(hash)) ||
              document.getElementById(hash) ||
              document.getElementById("reservation-form");
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollTo(0, 0);
            }
          }, 80);
        } else {
          window.scrollTo(0, 0);
        }
      }, 380);

      // End of curtain wipe: overlay has glided off the top
      setTimeout(() => {
        setIsTransitioning(false);
        setPendingPath(null);
        isNavigatingRef.current = false;
      }, 850);
    },
    [location.pathname, navigate]
  );

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, isTransitioning, pendingPath }}>
      {children}
      <CurtainOverlay isTransitioning={isTransitioning} />
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  return useContext(TransitionContext);
}
