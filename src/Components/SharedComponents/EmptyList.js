import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { strings } from "../../../locales/i18n";

export default class EmptyList extends Component {
  render() {
    return (
      <View style={styles.emptyList}>
        <Text>{strings("emptyList")}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
