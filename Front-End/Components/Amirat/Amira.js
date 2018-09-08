import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { selectAmira } from "../../Actions/amirasActions.js";
import { mainContainerColor, textColor } from "../../Styles/Styles";
export default class Amira extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.amira.name,
      phone: this.props.amira.phone
    };
  }
  render() {
    return (
      <View style={mainContainerColor}>
        <View style={styles.container}>
          <Text style={[textColor, styles.txt]}>Name: {this.state.name} </Text>
          <Text style={[textColor, styles.txt]}>
            Phone: {this.state.phone}{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              selectAmira(this.state);
            }}
          >
            <Text>إختيار</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.33,
    flexDirection: "row",
    padding: 10
  },
  txt: {
    padding: 10
  }
});
