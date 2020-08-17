import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Box from "../../components/Box";
import Main45 from "../../components/Main45";
import Input from "../../components/Input";
import MiddleButton from "../../components/MiddleButton";
import BottomButton from "../../components/BottomButton";
import Menu from "../../components/Menu";

const EditCard = ({ navigation }) => {
  return (
    <View>
      <Header>EDIT KRD</Header>
      <Box>
        <Text style={styles.subtitleText}>COMPANY NAME</Text>
      </Box>
      <Main45>
        <Input icon="store" name="companyname" placeholder="company name" />
        <Input icon="dialpad" name="number" placeholder="card number" />
      </Main45>

      <MiddleButton onPress={() => navigation.navigate("Home")}>
        SAVE
      </MiddleButton>
      <BottomButton onPress={() => navigation.navigate("Home")}>
        DELETE
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

export default EditCard;
