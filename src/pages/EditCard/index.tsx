import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Box from "../../components/Box";
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
      <View style={styles.containerRow}>
        <View style={styles.mainLeftBox} />
        <View style={styles.mainContainer}>
          <Input icon="store" name="companyname" placeholder="company name" />
          <Input icon="dialpad" name="number" placeholder="card number" />
        </View>
      </View>

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
    paddingTop: 50,
    paddingLeft: 35,
    paddingRight: 50,
  },
  cardNumber: {
    textAlign: "left",
    fontSize: 18,
    color: "#7C1A38",
  },
});

export default EditCard;
