import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import Input from "../../components/Input";

const AddCards = ({ navigation }) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ADD KRD</Text>
      </View>
      <View style={styles.containerRow}>
        <View style={styles.leftBox} />
        <View style={styles.mainContainer}>
          <Input
            name="companyname"
            placeholder="company name"
            style={styles.input}
          />
          <Input name="number" placeholder="card number" style={styles.input} />
        </View>
      </View>

      <View style={styles.containerRow}>
        <View style={styles.emptyLeftBox} />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerRow}>
        <View style={styles.emptyLeftBox} />
        <View style={styles.menuConainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Feather name="credit-card" style={styles.icons} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => navigation.navigate("AddCard")}
          >
            <Feather name="plus" style={styles.plusIcon} />
          </TouchableOpacity>
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
  emptyLeftBox: {
    height: 50,
    width: 50,
  },
  addButton: {
    flex: 1,
    justifyContent: "center",
    borderBottomColor: "#CF6F3A",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,
    borderBottomLeftRadius: 40,
    textAlign: "right",
    padding: 19,
    paddingRight: 50,
  },
  addButtonText: {
    fontSize: 18,
    color: "#CF6F3A",
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

export default AddCards;
