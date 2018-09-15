import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { selectAmira } from "../../Actions/amirasActions.js";
import { mainContainerColor, textColor } from "../../Styles/Styles";
import UserInfo from "../SharedComponents/UserInfo";

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
      <View style={[styles.container, mainContainerColor]}>
        <UserInfo
          style={styles.userInfo}
          username={this.state.name}
          imageUrl={
            "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg"
          }
          time={this.state.phone}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            selectAmira(this.state);
          }}
        >
          <Text style={{ color: "white" }}>إختيار</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    elevation: 10,
    margin: 5,
    alignSelf: "center",
    alignItems: "center",
    width: "95%",
    height: "33%"
  },
  button: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009688",
    padding: 5,
    height: "75%"
  }
});
