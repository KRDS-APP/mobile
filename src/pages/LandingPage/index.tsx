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
    marginTop: 70,
    marginLeft: 50,
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
    marginTop: 70,
    height: 123,
    width: 172,
  },
  intro: {
    flex: 1,
    marginTop: 70,
    marginBottom: 70,
    maxWidth: 230,
    color: "#918B9B",
    textAlign: "center",
  },
});

export default LandingPage;
