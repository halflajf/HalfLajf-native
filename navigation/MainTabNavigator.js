import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import firebase from "firebase";

import TabBarIcon from "../components/TabBarIcon";
import MemesScreen from "../screens/MemesScreen";
import RandomMemScreen from "../screens/RandomMemScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";

const MemesStack = createStackNavigator({
  Memes: MemesScreen
});

MemesStack.navigationOptions = {
  tabBarLabel: "Memes",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`md-home${focused ? "" : "-outline"}`}
    />
  )
};

const RandomMemStack = createStackNavigator({
  RandomMem: RandomMemScreen
});

RandomMemStack.navigationOptions = {
  tabBarLabel: "RandomMem",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-cube"} />
};

const SignUpStack = createStackNavigator({
  SignUp: SignUpScreen
});

SignUpStack.navigationOptions = {
  tabBarLabel: "SignUp",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-add"} />
};

const LoginStack = createStackNavigator({
  Login: LoginScreen
});

LoginStack.navigationOptions = {
  tabBarLabel: "SignIn",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-log-in"} />
  )
};

export default createBottomTabNavigator({
  MemesStack,
  RandomMemStack,
  SignUpStack,
  LoginStack
});
