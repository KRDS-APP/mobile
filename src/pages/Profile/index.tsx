import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Input from "../../components/Input";
import Menu from "../../components/Menu";

const Profile = ({ navigation }) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>PROFILE</Text>
      </View>
      <View style={styles.containerRow}>
        <View style={styles.leftBox} />
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>USER NAME</Text>
        </View>
      </View>
      <View style={styles.containerRow}>
        <View style={styles.mainLeftBox} />
        <View style={styles.mainContainer}>
          <Input name="username" placeholder="username" style={styles.input} />
          <Input name="email" placeholder="email" style={styles.input} />
          <Input name="password" placeholder="password" style={styles.input} />
        </View>
      </View>

      <View style={styles.containerRow}>
        <View style={styles.emptyLeftBox} />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => navigation.navigate("Landing")}
        >
          <Text style={styles.editButtonText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
      <Menu navigation={navigation} />
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
  subtitleContainer: {
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
  subtitleText: {
    color: "#7C1A38",
    alignSelf: "flex-start",
    marginTop: 5,
    marginLeft: 15,
  },
  leftBox: {
    borderTopColor: "#962623",
    borderTopWidth: 1,
    borderBottomColor: "#962623",
    borderBottomWidth: 1,
    width: 50,
    height: 60,
  },
  mainLeftBox: {
    borderBottomColor: "#962623",
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
  editButton: {
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
  deleteButton: {
    flex: 1,
    justifyContent: "center",
    borderBottomColor: "#CF6F3A",
    borderBottomWidth: 1,
    borderLeftColor: "#CF6F3A",
    borderLeftWidth: 1,
    textAlign: "right",
    padding: 19,
    paddingRight: 50,
  },
  editButtonText: {
    fontSize: 18,
    color: "#CF6F3A",
  },
});

export default Profile;
