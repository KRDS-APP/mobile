import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    height: "10vh",
    marginTop: "8vh",
    marginLeft: "10vw",
    borderTopColor: "#BF2D5B",
    borderLeftColor: "#BF2D5B",
    borderTopLeftRadius: 50,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#7C1A38",
    fontSize: 24,
  },
});

export default Header;
