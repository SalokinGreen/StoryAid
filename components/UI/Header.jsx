import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "./Colors";

export default function Header({ text, onPress, emoji }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress} style={styles.headerBack}>
        <Text style={styles.headerBack}>{"<"}</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>{text}</Text>

      <Text style={styles.headerEmoji}>{emoji}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "10%",
    backgroundColor: Colors.accent,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.primary,
    letterSpacing: 1,
    textAlign: "center",
    width: "80%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  headerEmoji: {
    fontSize: 20,
    color: Colors.primary,
    letterSpacing: 1,
    textAlign: "center",
    width: "10%",
  },
  headerBack: {
    fontSize: 20,
    color: Colors.primary,
    letterSpacing: 1,
    textAlign: "center",
    width: "10%",
  },
});
