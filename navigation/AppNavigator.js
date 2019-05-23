import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LoggedInTabNavigator from "./LoggedInTabNavigator";
import Loading from "../screens/LoadingScreen";

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Loading,
      Main: MainTabNavigator,
      User: LoggedInTabNavigator
    },
    {
      initialRouteName: "Loading"
    }
  )
);
