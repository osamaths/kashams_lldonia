import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";

import TabNavigation from "./Components/TabNavigators/TabNavigation";
import AccessNavigator from "./Components/TabNavigators/AccessNavigator";

export default class App extends React.Component {
  componentDidMount() {
    console.log("started debugging...");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" />
        <AppStack />
      </View>
    );
  }
}

const AppStack = StackNavigator({
  Home: { screen: TabNavigation }
  // Login: { screen: AccessNavigator }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    //backgroundColor: '#111',
  }
});
