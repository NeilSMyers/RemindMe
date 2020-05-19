import React, { useEffect, useState, useContext } from "react"
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

import Reminder from "../common/Reminder"
import MText from "../common/MText"

import { ThemeContext } from "../../App"

import reminders from "../../models/reminder"

const HomeScreen = (props) => {
  const theme = useContext(ThemeContext)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingHorizontal: 15 }}
          onPress={() => props.navigation.navigate("SettingsScreen")}
        >
          <Ionicons name="ios-settings" size={22} color={theme.text} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ paddingHorizontal: 15 }}
          onPress={() => props.navigation.navigate("AddScreen")}
        >
          <Ionicons name="ios-add" size={30} color={theme.text} />
        </TouchableOpacity>
      ),
    })
  })

  const renderReminder = ({ item }) => {
    return (
      <Reminder
        {...item}
        onValueChange={() => {
          item.active = !item.active
        }}
      />
    )
  }

  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://source.unsplash.com/featured/?nature",
        }}
        style={{
          position: "absolute",
          height: "60%",
          width: "100%",
        }}
      />
      <LinearGradient
        colors={[theme.background, "transparent", theme.background]}
        style={{
          position: "absolute",
          height: "60%",
          width: "100%",
        }}
      />
      <FlatList
        data={reminders}
        renderItem={renderReminder}
        style={{ width: "100%", marginTop: "90%" }}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={() => (
          <MText
            fontSize={14}
            style={{ alignSelf: "flex-end", marginRight: 25, marginBottom: 5 }}
          >
            Active?
          </MText>
        )}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              setLoading(true)
              setTimeout(() => setLoading(false), 1000)
            }}
            tintColor={theme.text}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default HomeScreen
