import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Box from "../../components/Box";
import Main45 from "../../components/Main45";
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

      <Main45>
        <Input icon="person" name="username" placeholder="username" />
        <Input icon="email" name="email" placeholder="email" />
        <Input icon="lock" name="password" placeholder="password" />
      </Main45>

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
  subtitleText: {
    color: "#7C1A38",
  },
});

export default Profile;
