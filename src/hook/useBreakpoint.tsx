import { breakpoints } from "@/data/breakpoints";
import { useEffect, useState } from "react";

export default function useBreakpoint() {
  const getBreakpoint = (width: number): keyof typeof breakpoints => {
    if (width < breakpoints.tablet) {
      return "mobile";
    } else if (width < breakpoints.desktop) {
      return "tablet";
    } else {
      return "desktop";
    }
  };
  const [breakpoint, setBreakpoint] = useState(
    getBreakpoint(window.innerWidth),
  );

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
