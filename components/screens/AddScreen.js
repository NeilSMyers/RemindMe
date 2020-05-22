import React, { useState, useContext } from "react"
import { View, StyleSheet, TextInput, Image } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"
import moment from "moment"

import { ThemeContext } from "../../App"
import MButton from "../common/MButton"
import MText from "../common/MText"

const AddScreen = (props) => {
  const theme = useContext(ThemeContext)

  const [reminder, setReminder] = useState("")
  const [fromTime, setFromTime] = useState(new Date())
  const [toTime, setToTime] = useState(new Date())

  //moment(date).format("h:mm A")

  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%", marginTop: "40%" }}>
        <Image
          style={{ position: "absolute" }}
          source={require("../../assets/shape.png")}
        />
        <TextInput
          placeholder="Reminder..."
          value={reminder}
          onChangeText={setReminder}
          style={{
            height: 70,
            backgroundColor: theme.text,
            marginHorizontal: 15,
            borderRadius: 10,
            padding: 10,
            borderColor: theme.main,
            borderWidth: 2,
          }}
          selectionColor={theme.main}
          multiline={true}
        />
        <MText fontSize={14}>From:</MText>
        <DateTimePicker
          value={fromTime}
          mode="time"
          onChange={(_, date) => setFromTime(date)}
        />
        <MText fontSize={14}>To:</MText>
        <DateTimePicker
          value={toTime}
          mode="time"
          onChange={(_, date) => setToTime(date)}
        />
        <MButton title="Add" onPress={() => {}} />
      </View>
    </View>
  )
}

export default AddScreen
