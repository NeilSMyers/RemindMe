import React, { useContext } from "react"
import { View, StyleSheet } from "react-native"

import { ThemeContext } from "../../App"

import Reminder from "../common/Reminder"

const SettingsScreen = (props) => {
  const theme = useContext(ThemeContext)
  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Reminder
        title="Dark Mode?"
        active={theme.darkThemeActive}
        style={{ marginTop: 130 }}
        onValueChange={theme.toggleTheme}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SettingsScreen
