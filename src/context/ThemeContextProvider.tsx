"use client";

import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">(
    typeof window !== "undefined"
      ? (localStorage.getItem("theme") as string as "dark" | "light") || "dark"
      : "dark"
  );
  const setThemeMode = (mode: "dark" | "light") => setTheme(mode);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (theme === "dark") {
        window.document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        window.document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
