import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

const Menu = ({ navigation }) => {
  return (
    <View style={styles.containerRow}>
      <View style={styles.emptyLeftBox} />
      <View style={styles.menuConainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Feather name="credit-card" style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("AddCard")}
        >
          <Feather name="plus" style={styles.plusIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Feather name="user" style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    display: "flex",
    flexDirection: "row",
  },
  emptyLeftBox: {
    height: 50,
    width: 50,
  },
  menuConainer: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 22,
    marginLeft: -5,
  },
  circle: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "#7C1A38",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -34,
  },
  plusIcon: {
    color: "#7C1A38",
    fontSize: 40,
  },
  icons: {
    fontSize: 30,
    color: "#7C1A38",
  },
});

export default Menu;
