import React, { Component } from "react";
import { View, Text } from "react-native";

export default class testComp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> textInComponent 2</Text>
      </View>
    );
  }
}
