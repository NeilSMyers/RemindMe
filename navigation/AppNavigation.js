import React, { useContext } from "react"
import { StatusBar } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../components/screens/HomeScreen"
import AddScreen from "../components/screens/AddScreen"
import SettingsScreen from "../components/screens/SettingsScreen"

import { ThemeContext } from "../App"

const { Navigator, Screen } = createStackNavigator()

const AppNavigation = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <StatusBar barStyle={theme.darkMode ? "light-content" : "dark-content"} />
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
            height: 70,
          },
          headerBackTitleVisible: false,
          headerTintColor: theme.text,
          headerTransparent: true,
        }}
      >
        <Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "" }}
        />
        <Screen
          name="AddScreen"
          component={AddScreen}
          options={{ title: "Add" }}
        />
        <Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ title: "Settings" }}
        />
      </Navigator>
    </>
  )
}

export default AppNavigation
