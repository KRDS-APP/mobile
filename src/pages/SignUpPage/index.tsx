import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const logo = require("../../img/krds-logo.svg");

import Input from "../../components/Input";

const SignUpPage = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>SIGNUP</Text>
        <Input name="username" placeholder="username" />
        <Input name="email" placeholder="email" />
        <Input name="password" placeholder="password" />
      </View>
      <View style={styles.containerRow}>
        <View style={styles.leftBox} />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerRow}>
        <View style={styles.emptyLeftBox} />
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.signupText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    marginLeft: 50,
    paddingBottom: 2,
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
    marginLeft: 35,
  },
  containerRow: {
    display: "flex",
    flexDirection: "row",
  },
  emptyLeftBox: {
    height: 50,
    width: 50,
  },
  leftBox: {
    borderTopColor: "#962623",
    borderTopWidth: 1,
    borderBottomColor: "#962623",
    borderBottomWidth: 1,
    width: 50,
    height: 50,
  },
  loginButton: {
    flex: 1,
    height: 50,
    borderTopColor: "#7C1A38",
    borderTopWidth: 1,
    borderBottomColor: "#7C1A38",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,

    textAlign: "right",
    padding: 15,
    paddingRight: 50,
  },
  loginText: {
    color: "#7C1A38",
  },
  signupButton: {
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
  signupText: {
    color: "#CF6F3A",
  },
});

export default SignUpPage;
