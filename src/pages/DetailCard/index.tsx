import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Box from "../../components/Box";
import BottomButton from "../../components/BottomButton";
import Menu from "../../components/Menu";

const DetailCard = ({ navigation }) => {
  return (
    <View>
      <Header>KRD DETAIL</Header>
      <Box>
        <Text style={styles.subtitleText}>COMPANY NAME</Text>
      </Box>
      <View style={styles.containerRow}>
        <View style={styles.mainLeftBox} />
        <View style={styles.mainContainer}>
          <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
        </View>
      </View>

      <BottomButton onPress={() => navigation.navigate("EditCard")}>
        EDIT
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
    borderBottomColor: "#7C1A38",
    borderBottomWidth: 1,
    width: 50,
    height: 290,
  },
  mainContainer: {
    flex: 1,
    height: 290,
    borderBottomColor: "#7C1A38",
    borderBottomWidth: 1,
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

export default DetailCard;
