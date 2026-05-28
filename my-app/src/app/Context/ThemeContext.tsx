"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "bg-gray-900 text-white" : "bg-amber-50 text-gray-900"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
