import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";

import TabNavigation from "./Components/TabNavigators/TabNavigation";
import AccessNavigator from "./Components/TabNavigators/AccessNavigator";
import Profile from "./Components/Profile/Profile";
import Test from "./Test";

export default class App extends React.Component {
  componentDidMount() {
    console.log("started debugging...");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <AppStack />
      </View>
    );
  }
}

const AppStack = StackNavigator({
  Login: { screen: AccessNavigator },
  Home: { screen: TabNavigation },
  Profile: { screen: Profile }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    //backgroundColor: '#111',
  }
});
