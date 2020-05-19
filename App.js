import React, { createContext, useState } from "react"

import { NavigationContainer } from "@react-navigation/native"

import AppNavigation from "./navigation/AppNavigation"

import { darkMode, lightMode } from "./Colors"

export const ThemeContext = createContext()

export default function App() {
  const [darkThemeActive, setdarkThemeActive] = useState(true)

  const toggleTheme = () => {
    setdarkThemeActive(!darkThemeActive)
  }

  return (
    <NavigationContainer>
      <ThemeContext.Provider
        value={{
          ...(darkThemeActive ? darkMode : lightMode),
          toggleTheme,
          darkThemeActive,
        }}
      >
        <AppNavigation />
      </ThemeContext.Provider>
    </NavigationContainer>
  )
}
