import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
export default class Menu extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Profile Menu goes here.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  post: {}
});
