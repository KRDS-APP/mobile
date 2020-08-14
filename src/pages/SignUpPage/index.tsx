import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const logo = require("../../img/krds-logo.svg");

import Input from "../../components/Input";
import BottomButton from "../../components/BottomButton";
import MiddleButton from "../../components/MiddleButton";

const SignUpPage = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>SIGNUP</Text>
        <Input icon="person" name="username" placeholder="username" />
        <Input icon="email" name="email" placeholder="email" />
        <Input icon="lock" name="password" placeholder="password" />
      </View>
      <MiddleButton onPress={() => navigation.navigate("Home")}>
        SIGNUP
      </MiddleButton>
      <BottomButton onPress={() => navigation.goBack()}>GO BACK</BottomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    marginLeft: 50,
    paddingBottom: 2,
    paddingLeft: 35,
    paddingRight: 35,
    borderTopColor: "#BF2D5B",
    borderLeftColor: "#BF2D5B",
    borderTopLeftRadius: 50,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginTop: 50,
    height: 123,
    width: 172,
  },
  title: {
    fontSize: 20,
    color: "#61468F",
    alignSelf: "flex-start",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default SignUpPage;
