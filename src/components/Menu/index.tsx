import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconMI from "react-native-vector-icons/MaterialIcons";

const Menu = ({ navigation }) => {
  return (
    <View style={styles.containerRow}>
      <View style={styles.emptyLeftBox} />
      <View style={styles.menuConainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <IconMCI name="card-text" style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("AddCard")}
        >
          <IconMCI name="plus" style={styles.plusIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <IconMI name="person" style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
  },
  emptyLeftBox: {
    width: "10vw",
  },
  menuConainer: {
    width: "90vw",
    height: "10vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  circle: {
    width: 55,
    height: 55,
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderColor: "#BF2D5B",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
  },
  plusIcon: {
    color: "#BF2D5B",
    fontSize: 40,
  },
  icons: {
    fontSize: 30,
    color: "#BF2D5B",
    padding: 10,
  },
});

export default Menu;
