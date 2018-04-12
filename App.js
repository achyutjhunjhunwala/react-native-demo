import React from "react";
import { YellowBox } from "react-native";
import { StackNavigator } from "react-navigation";

import Home from "./Home";
import Details from "./Details";

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated"
]);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home
    },
    Details: {
      screen: Details
    }
  },
  {
    initialRouteName: "Home"
  }
);
