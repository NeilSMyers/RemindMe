import React from "react"
import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../components/screens/HomeScreen"
import AddScreen from "../components/screens/AddScreen"
import SettingsScreen from "../components/screens/SettingsScreen"

const { Navigator, Screen } = createStackNavigator()

const AppNavigation = (props) => {
  return (
    <Navigator>
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
  )
}

export default AppNavigation
