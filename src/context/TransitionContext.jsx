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
      const currentPath = location.pathname;
      const targetPath = to === "/home" ? "/" : to;
      const normalizedCurrent = currentPath === "/home" ? "/" : currentPath;

      if (normalizedCurrent === targetPath || isNavigatingRef.current) {
        return;
      }

      isNavigatingRef.current = true;
      setPendingPath(to);
      setIsTransitioning(true);

      // Midpoint: screen is 100% covered by the luxury curtain
      setTimeout(() => {
        navigate(to);
        window.scrollTo(0, 0);
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
