import React, { createContext, useContext, useState } from "react";
import { ThemeColors, ThemeType } from "../types";

interface ThemeContextType {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const lightColors: ThemeColors = {
  background: "#F2F2F2",
  text: "#333333",
  card: "#FFFFFF",
  primary: "#007AFF",
  border: "#E0E0E0",
};

const darkColors: ThemeColors = {
  background: "#121212",
  text: "#FFFFFF",
  card: "#1E1E1E",
  primary: "#0A84FF",
  border: "#333333",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const colors = theme === "light" ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
