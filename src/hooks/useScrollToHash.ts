import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });

      const h1 = el.querySelector("h1");
      if (h1) {
        h1.classList.add("animate-pulse");

        // Remove animation class after animation completes
        const timeout = setTimeout(() => {
          h1.classList.remove("animate-pulse");
        }, 4000); // match animation duration

        return () => clearTimeout(timeout);
      }
    }
  }, [hash]);
}
