import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const SignUpPage = ({ navigation }) => {
  return (
    <View>
      <Text>SignUp</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpPage;
