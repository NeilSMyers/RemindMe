import React, { useContext } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"

import MText from "./MText"
import { ThemeContext } from "../../App"

const MButton = ({ title, onPress }) => {
  const theme = useContext(ThemeContext)

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme.main,
        height: 46,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: 15,
      }}
    >
      <MText>{title}</MText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

export default MButton
