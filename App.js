import React, { createContext, useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import * as Permissions from "expo-permissions"

import AppNavigation from "./navigation/AppNavigation"

import { darkMode, lightMode } from "./Colors"

export const ThemeContext = createContext()

export default function App() {
  const [darkThemeActive, setdarkThemeActive] = useState(true)

  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then(({ status }) => {
        if (status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS)
        }
        return status
      })
      .then((status) => {
        if (status !== "granted") {
          return
        }
      })
  }, [])

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
