import React from "react";
import { View, StyleSheet } from "react-native";

const Main65 = ({ children }) => {
  return (
    <View style={styles.containerRow}>
      <View style={styles.leftBox} />
      <View style={styles.mainContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    display: "flex",
    flexDirection: "row",
  },
  leftBox: {
    borderBottomColor: "#962623",
    borderBottomWidth: 1,
    width: "10vw",
    height: "55vh",
  },
  mainContainer: {
    flex: 1,
    height: "55vh",
    borderBottomColor: "#7C1A38",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,

    textAlign: "right",
    paddingTop: 50,
    paddingLeft: 35,
    paddingRight: 50,
  },
});

export default Main65;
