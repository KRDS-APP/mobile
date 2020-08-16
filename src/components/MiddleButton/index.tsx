import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MiddleButton = ({ children, onPress }) => {
  return (
    <View style={styles.containerRow}>
      <View style={styles.leftBox} />
      <TouchableOpacity style={styles.loginButton} onPress={onPress}>
        <Text style={styles.loginText}>{children}</Text>
      </TouchableOpacity>
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
    width: "10vw",
    height: "8vh",
  },
  loginButton: {
    flex: 1,
    height: "8vh",
    borderTopColor: "#7C1A38",
    borderTopWidth: 1,
    borderBottomColor: "#7C1A38",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,

    textAlign: "right",
    justifyContent: "center",
    paddingRight: 50,
  },
  loginText: {
    color: "#7C1A38",
  },
});

export default MiddleButton;
