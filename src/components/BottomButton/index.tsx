import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BottomButton = ({ children, onPress }) => {
  return (
    <View style={styles.containerRow}>
      <View style={styles.emptyLeftBox} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    display: "flex",
    flexDirection: "row",
  },
  emptyLeftBox: {
    height: "8vh",
    width: "10vw",
  },
  button: {
    flex: 1,
    height: "8vh",
    borderBottomColor: "#CF6F3A",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,
    borderBottomLeftRadius: 40,

    textAlign: "right",
    justifyContent: "center",
    paddingRight: 50,
  },
  text: {
    color: "#CF6F3A",
  },
});

export default BottomButton;
