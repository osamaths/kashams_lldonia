import React from "react";
import { View, Text } from "react-native";

export default class Test2 extends React.Component {
  static navigationOptions = {
    title: "My Profile"
  };

  constructor(props) {
    super(props);

    this.state = {
      number: this.props.number
    };
  }

  render() {
    return <Text>{this.state.number}</Text>;
  }
}
