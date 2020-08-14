import React from "react";
import { View, StyleSheet } from "react-native";

const Box = ({ children }) => {
  return (
    <View style={styles.containerRow}>
      <View style={styles.leftBox} />
      <View style={styles.subtitleContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    display: "flex",
    flexDirection: "row",
  },
  leftBox: {
    borderTopColor: "#962623",
    borderTopWidth: 1,
    borderBottomColor: "#962623",
    borderBottomWidth: 1,
    width: 50,
    height: 60,
  },
  subtitleContainer: {
    flex: 1,
    height: 60,
    justifyContent: "center",
    paddingLeft: 30,

    borderTopColor: "#7C1A38",
    borderTopWidth: 1,
    borderBottomColor: "#7C1A38",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,
  },
});

export default Box;
