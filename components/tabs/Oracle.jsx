import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Button from "../UI/Button";
import Colors from "../UI/Colors";
export default function Oracle() {
  const [text, setText] = useState("What do you want?");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Button text="Very Likely" onPress={() => oracling("Very Likely")} />
      <Button text="Likely" onPress={() => oracling("Likely")} />
      <Button text="Neutral" onPress={() => oracling("Neutral")} />
      <Button text="Unlikely" onPress={() => oracling("Unlikely")} />
      <Button text="Very Unlikely" onPress={() => oracling("Very Unlikely")} />
    </View>
  );

  function oracling(chance) {
    const chances = {
      "Very Likely": 0.95,
      Likely: 0.75,
      Neutral: 0.5,
      Unlikely: 0.25,
      "Very Unlikely": 0.05,
    };
    const rand = Math.random();
    if (rand < chances[chance]) {
      if (rand < chances[chance] * 0.8) {
        setText("Yes, but");
      } else {
        setText("Yes");
      }
    } else {
      if (rand < chances[chance] + (1 - chances[chance]) * 0.8) {
        setText("No, but");
      } else {
        setText("No");
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: Colors.accent,
    fontSize: 30,
  },
});
