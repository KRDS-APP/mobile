import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Box from "../../components/Box";
import Input from "../../components/Input";
import MiddleButton from "../../components/MiddleButton";
import BottomButton from "../../components/BottomButton";
import Menu from "../../components/Menu";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Header>PROFILE</Header>
      <Box>
        <Text style={styles.subtitleText}>USER NAME</Text>
      </Box>

      <View style={styles.containerRow}>
        <View style={styles.mainLeftBox} />
        <View style={styles.mainContainer}>
          <Input icon="person" name="username" placeholder="username" />
          <Input icon="email" name="email" placeholder="email" />
          <Input icon="lock" name="password" placeholder="password" />
        </View>
      </View>

      <MiddleButton onPress={() => navigation.navigate("Home")}>
        SAVE
      </MiddleButton>
      <BottomButton onPress={() => navigation.navigate("Landing")}>
        LOGOUT
      </BottomButton>

      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    display: "flex",
    flexDirection: "row",
  },
  subtitleText: {
    color: "#7C1A38",
  },
  mainLeftBox: {
    width: "10vw",
    height: "47vh",
  },
  mainContainer: {
    flex: 1,
    height: "47vh",
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,

    textAlign: "right",
    paddingTop: 30,
    paddingLeft: 35,
    paddingRight: 50,
  },
});

export default Profile;
