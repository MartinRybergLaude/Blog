import { useEffect, useState } from "react";

// Custom hook for detecting changes in prefers-color-scheme
export const useThemeDetector = () => {
    const isBrowser = typeof window !== "undefined"
    if (!isBrowser) return false
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });
    
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addEventListener("change", mqListener);
      return () => darkThemeMq.removeEventListener("change",mqListener);
    }, []);
    return isDarkTheme;
}
