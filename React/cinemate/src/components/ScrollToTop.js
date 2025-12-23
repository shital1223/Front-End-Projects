import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to top whenever the URL path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
