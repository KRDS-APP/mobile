import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignUpPage";
import LogInPage from "../pages/LogInPage";
import Home from "../pages/Home";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: "#FFF",
      },
    }}
  >
    <Auth.Screen name="Landing" component={LandingPage} />
    <Auth.Screen name="SignUp" component={SignUpPage} />
    <Auth.Screen name="LogIn" component={LogInPage} />
    <Auth.Screen name="Home" component={Home} />
  </Auth.Navigator>
);

export default AuthRoutes;
