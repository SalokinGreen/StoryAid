import React, { useState } from "react";
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
import Oracle from "../tabs/Oracle";
import Header from "../UI/Header";
const DATA = [
  {
    title: "Rolls",
    open: true,
    id: 1,
    data: [
      {
        text: "Dice",
        emoji: "🎲",
        page: 1,
      },
      {
        text: "Tables",
        emoji: "📜",
        page: 2,
      },
      {
        text: "Oracle",
        emoji: "🔮",
        page: 3,
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
        page: 4,
      },
      {
        text: "Modern Character Generator",
        emoji: "👤",
        page: 5,
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
        page: 6,
      },
    ],
  },
];

const HomeScreen = () => {
  const [sections, setSections] = React.useState(DATA);
  const [page, setPage] = useState(0);
  const toggleSection = (id) => {
    const newSections = [...sections];
    const index = newSections.findIndex((section) => section.id === id);
    newSections[index].open = !newSections[index].open;
    setSections(newSections);
  };
  if (page === 0) {
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
              onPress={() => setPage(item.page)}
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
  } else if (page === 3) {
    return (
      <View style={styles.container}>
        <Header text="Oracle" emoji="🔮" onPress={() => setPage(0)} />
        <Oracle />
      </View>
    );
  }
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
