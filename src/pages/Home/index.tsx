import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Box from "../../components/Box";
import Menu from "../../components/Menu";

const Home = ({ navigation }) => {
  return (
    <View>
      <Header>KRDS</Header>
      <Box>
        <Text style={styles.subtitleText}>SELECT A CARD</Text>
      </Box>

      <View style={styles.containerRow}>
        <View style={styles.emptyLeftBox} />
        <View style={styles.mainContainer}>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("DetailCard")}
          >
            <Text style={styles.cardText}>Company name here</Text>
            <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("DetailCard")}
          >
            <Text style={styles.cardText}>Company name here</Text>
            <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("DetailCard")}
          >
            <Text style={styles.cardText}>Company name here</Text>
            <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate("DetailCard")}
          >
            <Text style={styles.cardText}>Company name here</Text>
            <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    display: "flex",
    flexDirection: "row",
    height: "63vh",
  },
  emptyLeftBox: {
    width: "10vw",
  },
  subtitleText: {
    color: "#7C1A38",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    width: "90vw",
    borderBottomColor: "#CF6F3A",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,
    borderBottomLeftRadius: 40,

    paddingTop: 25,
    overflow: "scroll",
  },
  cardContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "75%",
    height: "30%",
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
});

export default Home;
