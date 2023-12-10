import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Colors from "./Colors";

export default function MenuItem({ emoji, text, onPress, open }) {
  if (!open) {
    return null;
  }
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  emoji: {
    fontSize: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    color: Colors.accent,
  },
});
