import React from "react";
import { View, TextInput, TextInputProps, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface InputProps extends TextInputProps {
  icon: string;
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ icon, name, placeholder, ...rest }) => (
  <View style={styles.containerRow}>
    <Icon name={icon} style={styles.icons} />
    <TextInput
      style={styles.input}
      {...rest}
      name={name}
      // textContentType="password"
      placeholder={placeholder}
    />
  </View>
);

const styles = StyleSheet.create({
  containerRow: {
    display: "flex",
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#7C1A38",
    borderBottomWidth: 1,
    marginBottom: 20,
    width: "100%",
  },
  icons: {
    fontSize: 15,
    color: "#7C1A38",
    padding: 5,
  },
  input: {
    width: "100%",
    height: 30,
    padding: 5,
    color: "#61468F",
  },
});

export default Input;
