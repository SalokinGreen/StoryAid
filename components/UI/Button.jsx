import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "./Colors";

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: Colors.primary,
    margin: 10,
    borderColor: Colors.accent,
    borderWidth: 1,
    width: "20px",
  },
  buttonText: {
    color: Colors.accent,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
