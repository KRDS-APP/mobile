import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const LogInPage = ({ navigation }) => {
  return (
    <View>
      <Text>LogIn</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInPage;
