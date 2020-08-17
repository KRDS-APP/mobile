import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Box from "../../components/Box";
import Main55 from "../../components/Main55";
import BottomButton from "../../components/BottomButton";
import Menu from "../../components/Menu";

const DetailCard = ({ navigation }) => {
  return (
    <View>
      <Header>KRD DETAIL</Header>
      <Box>
        <Text style={styles.subtitleText}>COMPANY NAME</Text>
      </Box>
      <Main55>
        <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
      </Main55>

      <BottomButton onPress={() => navigation.navigate("EditCard")}>
        EDIT
      </BottomButton>

      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleText: {
    color: "#7C1A38",
  },
  cardNumber: {
    textAlign: "left",
    fontSize: 18,
    color: "#7C1A38",
  },
});

export default DetailCard;
