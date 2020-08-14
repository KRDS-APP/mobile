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
    height: 50,
    width: 50,
  },
  button: {
    flex: 1,
    height: 50,
    borderBottomColor: "#CF6F3A",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,
    borderBottomLeftRadius: 40,

    textAlign: "right",
    padding: 15,
    paddingRight: 50,
  },
  text: {
    color: "#CF6F3A",
  },
});

export default BottomButton;
