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
          <Input name="username" placeholder="username" style={styles.input} />
          <Input name="email" placeholder="email" style={styles.input} />
          <Input name="password" placeholder="password" style={styles.input} />
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
    width: 50,
    height: 270,
  },
  mainContainer: {
    flex: 1,
    height: 270,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,

    textAlign: "right",
    paddingTop: 30,
    paddingLeft: 35,
    paddingRight: 50,
  },
  input: {
    width: "100%",
    height: 30,
    padding: 5,
    color: "#61468F",

    borderBottomColor: "#962623",
    borderBottomWidth: 1,
    marginBottom: 40,
    marginRight: 50,
  },
});

export default Profile;
