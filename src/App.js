import React from "react";
import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";

import Home from "./screens/Home/";
import NotHome from "./screens/NotHome/";
import StyledHome from "./screens/StyledHome/";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    NotHome: { screen: NotHome },
    StyledHome: { screen: StyledHome }
  },
  {
    index: 0,
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const App = createAppContainer(AppNavigator);

export default App;
