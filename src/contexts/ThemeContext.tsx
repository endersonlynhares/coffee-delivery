import { createContext } from "react";

interface ThemeContextType{
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)