import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const logo = require("../../img/krds-logo.svg");

import Input from "../../components/Input";
import MiddleButton from "../../components/MiddleButton";
import BottomButton from "../../components/BottomButton";

const LogInPage = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>LOGIN</Text>
        <Input icon="person" name="username" placeholder="username" />
        <Input icon="lock" name="password" placeholder="password" />
      </View>

      <MiddleButton onPress={() => navigation.navigate("Home")}>
        LOGIN
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
    paddingBottom: 52,
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
    // marginLeft: 35,
  },
});

export default LogInPage;
