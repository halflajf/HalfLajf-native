import React from "react";
import { Text, View, Button } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import firebase from "firebase";

import TabBarIcon from "../components/TabBarIcon";
import MemesScreen from "../screens/MemesScreen";
import RandomMemScreen from "../screens/RandomMemScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LogoutScren from "../screens/LogoutScreen";

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

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-person"} />
};

const LogoutStack = createStackNavigator({
  Logout: LogoutScren
});

LogoutStack.navigationOptions = {
  tabBarLabel: "Logout",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-exit"} />
  )
};

export default createBottomTabNavigator({
  MemesStack,
  RandomMemStack,
  ProfileStack,
  LogoutStack
});
