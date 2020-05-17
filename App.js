import React, { createContext } from "react"

import { NavigationContainer } from "@react-navigation/native"

import AppNavigation from "./navigation/AppNavigation"

import { darkMode } from "./Colors"

export const ThemeContext = createContext()

export default function App() {
  return (
    <NavigationContainer>
      <ThemeContext.Provider value={darkMode}>
        <AppNavigation />
      </ThemeContext.Provider>
    </NavigationContainer>
  )
}
