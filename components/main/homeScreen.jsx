import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Colors from "../UI/Colors";
import MenuItem from "../UI/MenuItem";
import generateDetails from "../../utils/characterGenerator/generateDetails";
const DATA = [
  {
    title: "Rolls",
    open: true,
    id: 1,
    data: [
      {
        text: "Dice",
        emoji: "🎲",
        onPress: () => {
          console.log("Dice pressed");
        },
      },
      {
        text: "Tables",
        emoji: "📜",
        onPress: () => {
          console.log("Tables pressed");
        },
      },
    ],
  },
  {
    title: "Lore",
    open: true,
    id: 2,
    data: [
      {
        text: "Lorebook",
        emoji: "📖",
        onPress: () => {
          console.log("Lorebook pressed");
        },
      },
      {
        text: "Modern Character Generator",
        emoji: "👤",
        onPress: () => {
          console.log(generateDetails({ minAge: 18, maxAge: 100 }));
        },
      },
    ],
  },
  {
    title: "RPG",
    open: true,
    id: 3,
    data: [
      {
        text: "Turn Tracker",
        emoji: "⏳",
        onPress: () => {
          console.log("Turn Tracker pressed");
        },
      },
    ],
  },
];

const HomeScreen = () => {
  const [sections, setSections] = React.useState(DATA);

  const toggleSection = (id) => {
    const newSections = [...sections];
    const index = newSections.findIndex((section) => section.id === id);
    newSections[index].open = !newSections[index].open;
    setSections(newSections);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Story Aid</Text>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, section }) => (
          <MenuItem
            text={item.text}
            emoji={item.emoji}
            onPress={item.onPress}
            open={section.open}
          />
        )}
        renderSectionHeader={({ section }) => (
          <TouchableOpacity onPress={() => toggleSection(section.id)}>
            <Text style={styles.header}>{section.title}</Text>
          </TouchableOpacity>
        )}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "flex-start",
    backgroundColor: Platform.OS === "android" ? Colors.primary : Colors.white,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Platform.OS === "android" ? Colors.accent : Colors.primary,
    textAlign: "center",
    alignSelf: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: Platform.OS === "android" ? Colors.accent : Colors.primary,
    width: "100%",
    // marginLeft: 10,
    // border
    borderBottomWidth: 1,
    borderBottomColor: Colors.accent,
    padding: 10,
  },
});

export default HomeScreen;
