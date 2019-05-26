import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      onPress: this.props.onPress
    };
  }

  render() {
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.state.onPress();
          }}
        >
          <Text style={styles.btnText}>{this.state.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    backgroundColor: "rgba(36, 73, 46, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 1,
    height: "70%",
    width: "100%"
  },
  btn: {
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    color: "#009688",
    fontSize: 15,
    fontFamily: "tahoma",
    fontWeight: "600"
  }
});
