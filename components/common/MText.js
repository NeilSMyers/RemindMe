import React, { useContext } from "react"
import { Text, StyleSheet } from "react-native"

import { ThemeContext } from "../../App"

const MText = ({ children, fontSize, color, style, ...otherProps }) => {
  const theme = useContext(ThemeContext)

  return (
    <Text
      style={[
        style,
        {
          fontSize: fontSize ?? 16,
          color: color ?? theme.text,
        },
      ]}
      numberOfLines={1}
      {...otherProps}
    >
      {children}
    </Text>
  )
}

export default MText
