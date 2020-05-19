import React, { useContext, useState } from "react"
import { View, StyleSheet, Switch } from "react-native"

import MText from "./MText"

import { ThemeContext } from "../../App"

const Reminder = ({ id, title, timeframe, active, style, onValueChange }) => {
  const theme = useContext(ThemeContext)

  return (
    <View
      style={[
        {
          backgroundColor: theme.secondary,
          marginHorizontal: 15,
          height: 62,
          marginBottom: 10,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          paddingRight: 10,
        },
        style,
      ]}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <MText style={{ flex: 1, marginRight: 10 }}>{title}</MText>
        <MText fontSize={12}>{timeframe}</MText>
      </View>
      <Switch
        trackColor={{ true: theme.main, false: theme.background }}
        ios_backgroundColor={theme.background}
        value={active}
        onValueChange={onValueChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default Reminder
