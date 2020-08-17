import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const BottomButton = ({ children, onPress }) => {
  return (
    <View style={styles.containerRow}>
      <View style={styles.emptyLeftBox} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
        <Icon name="keyboard-arrow-right" style={styles.arrowIcon} />
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
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "8vh",
    borderBottomColor: "#CF6F3A",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,
    borderBottomLeftRadius: 40,

    textAlign: "right",
    paddingRight: 50,
  },
  text: {
    color: "#CF6F3A",
  },
  arrowIcon: {
    fontSize: 15,
    color: "#CF6F3A",
    marginLeft: 2,
  },
});

export default BottomButton;
