/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import Shamosa from "./src/Components/Shamosa/Shamosa";
import Login from "./src/Components/Regestrations/Login";
import Routes from "./src/Components/Routers/RegestrationRoutes";
import { getShamosaPosts } from "./src/Actions/ShamosaActions";
import { Actions } from "react-native-router-flux";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "Daniel"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Routes />

        <Button
          title="heheheh"
          onPress={() => {
            Actions.reset("signup");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
