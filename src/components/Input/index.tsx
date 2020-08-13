import React from "react";
import { View, TextInput, TextInputProps, StyleSheet } from "react-native";

interface InputProps extends TextInputProps {
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, ...rest }) => (
  <TextInput
    style={styles.input}
    {...rest}
    name={name}
    placeholder={placeholder}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 30,
    padding: 5,
    paddingLeft: 35,
    color: "#61468F",

    borderBottomColor: "#962623",
    borderBottomWidth: 1,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
  },
});

export default Input;
