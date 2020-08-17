import React from "react";
import { View } from "react-native";

import Header from "../../components/Header";
import Main65 from "../../components/Main65";
import Input from "../../components/Input";
import BottomButton from "../../components/BottomButton";
import Menu from "../../components/Menu";

const AddCards = ({ navigation }) => {
  return (
    <View>
      <Header>ADD KRD</Header>
      <Main65>
        <Input icon="store" name="companyname" placeholder="company name" />
        <Input icon="dialpad" name="number" placeholder="card number" />
      </Main65>

      <BottomButton onPress={() => navigation.navigate("Home")}>
        ADD
      </BottomButton>
      <Menu navigation={navigation} />
    </View>
  );
};

export default AddCards;
