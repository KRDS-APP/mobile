import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const logo = require("../../img/krds-logo.svg");

import MiddleButton from "../../components/MiddleButton";
import BottomButton from "../../components/BottomButton";

const LandingPage = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.intro}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </View>
      <MiddleButton onPress={() => navigation.navigate("LogIn")}>
        LOGIN
      </MiddleButton>
      <BottomButton onPress={() => navigation.navigate("SignUp")}>
        SIGNUP
      </BottomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "8vh",
    marginLeft: "10vw",
    maxHeight: "67vh",
    minHeight: "67vh",
    paddingBottom: "10vh",
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
    marginTop: "10vh",
    marginBottom: "10vh",
    height: 123,
    width: 172,
  },
  intro: {
    flex: 1,
    marginBottom: "10vh",
    maxWidth: 230,
    color: "#918B9B",
    textAlign: "center",
  },
});

export default LandingPage;
