"use client";
import { createContext, useContext } from "react";

interface ThemeContextType {
  theme: "dark" | "light";
  setTheme: (mode: "dark" | "light") => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);
export default useTheme;
