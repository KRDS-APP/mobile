import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

const cardsIcon = require("../../img/cards-icon.svg");

const Home = ({ navigation }) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>KRDS</Text>
      </View>
      <View style={styles.containerRow}>
        <View style={styles.leftBox} />
        <View style={styles.selectButton}>
          <Text style={styles.selectText}>SELECT A CARD</Text>
        </View>
      </View>

      <View style={styles.containerRow}>
        <View style={styles.emptyLeftBox} />
        <View style={styles.mainContainer}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardText}>Company name here</Text>
            <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardText}>Company name here</Text>
            <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerRow}>
        <View style={styles.emptyLeftBox} />
        <View style={styles.menuConainer}>
          <Feather name="credit-card" style={styles.icons} />
          <View style={styles.circle}>
            <Feather name="plus" style={styles.plusIcon} />
          </View>
          <Feather name="user" style={styles.icons} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
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
  title: {
    color: "#7C1A38",
    fontSize: 24,
    padding: 25,
  },
  containerRow: {
    display: "flex",
    flexDirection: "row",
  },
  emptyLeftBox: {
    height: 50,
    width: 50,
  },
  leftBox: {
    borderTopColor: "#962623",
    borderTopWidth: 1,
    borderBottomColor: "#962623",
    borderBottomWidth: 1,
    width: 50,
    height: 60,
  },
  selectButton: {
    flex: 1,
    height: 60,
    borderTopColor: "#7C1A38",
    borderTopWidth: 1,
    borderBottomColor: "#7C1A38",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,

    textAlign: "right",
    padding: 15,
    paddingRight: 50,
  },
  selectText: {
    color: "#7C1A38",
    alignSelf: "flex-start",
    marginTop: 5,
    marginLeft: 15,
  },
  mainContainer: {
    flex: 1,
    height: 350,
    borderBottomColor: "#CF6F3A",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,
    borderBottomLeftRadius: 40,

    textAlign: "right",
    paddingTop: 25,
    paddingLeft: 25,
  },
  cardContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 240,
    height: 140,
    padding: 25,
    marginBottom: 20,
    borderColor: "#CF6F3A",
    borderWidth: 1,
    borderRadius: 10,
  },
  cardText: {
    color: "#7C1A38",
  },
  cardNumber: {
    fontSize: 18,
    color: "#7C1A38",
  },
  menuConainer: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 22,
    marginLeft: -5,
  },
  circle: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "#7C1A38",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -34,
  },
  plusIcon: {
    color: "#7C1A38",
    fontSize: 40,
  },
  icons: {
    fontSize: 30,
    color: "#7C1A38",
  },
});

export default Home;
