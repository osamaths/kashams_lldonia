/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, View, YellowBox } from "react-native";
import Routes from "./src/Components/Routers/Routes";

YellowBox.ignoreWarnings(["Remote debugger"]);

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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  }
});
