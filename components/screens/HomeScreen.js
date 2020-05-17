import React, { useEffect, useState, useContext } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import { Ionicons } from "@expo/vector-icons"

import { ThemeContext } from "../../App"

const HomeScreen = (props) => {
  const theme = useContext(ThemeContext)

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingHorizontal: 15 }}
          onPress={() => props.navigation.navigate("SettingsScreen")}
        >
          <Ionicons name="ios-settings" size={22} color={"black"} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ paddingHorizontal: 15 }}
          onPress={() => props.navigation.navigate("AddScreen")}
        >
          <Ionicons name="ios-add" size={30} color={"black"} />
        </TouchableOpacity>
      ),
    })
  })

  return (
    <View style={{ backgroundColor: theme.background, flex: 1 }}>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default HomeScreen
