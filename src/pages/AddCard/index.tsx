import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Input from "../../components/Input";
import BottomButton from "../../components/BottomButton";
import Menu from "../../components/Menu";

const AddCards = ({ navigation }) => {
  return (
    <View>
      <Header>ADD KRD</Header>
      <View style={styles.containerRow}>
        <View style={styles.leftBox} />
        <View style={styles.mainContainer}>
          <Input icon="store" name="companyname" placeholder="company name" />
          <Input icon="dialpad" name="number" placeholder="card number" />
        </View>
      </View>

      <BottomButton onPress={() => navigation.navigate("Home")}>
        ADD
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
  leftBox: {
    borderTopColor: "#962623",
    borderTopWidth: 1,
    borderBottomColor: "#962623",
    borderBottomWidth: 1,
    width: 50,
    height: 350,
  },
  mainContainer: {
    flex: 1,
    height: 350,
    borderTopColor: "#7C1A38",
    borderTopWidth: 1,
    borderBottomColor: "#7C1A38",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,

    textAlign: "right",
    paddingTop: 50,
    paddingLeft: 35,
    paddingRight: 50,
  },
});

export default AddCards;
