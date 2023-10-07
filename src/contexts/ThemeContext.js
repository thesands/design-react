import React, { createContext } from "react";
import useTheme from "../hooks/useTheme"

const ThemeContext = createContext();

function ThemeProvider({ startingTheme, children }) {
  const {theme, setTheme}= useTheme(startingTheme);

  return (
    <ThemeContext.Provider 
      value={{setTheme, theme,}}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };