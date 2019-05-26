import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { callUser } from "../../Actions/myUsersActions";
import UserInfo from "../SharedComponents/UserInfo";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  render() {
    console.log(this.state.user);
    return (
      <View style={styles.container}>
        <UserInfo
          imageUrl={this.state.user.avatar}
          username={this.state.user.username}
          time={this.state.user.phone}
        />
        <TouchableOpacity
          onPress={() => {
            callUser(this.state.user);
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../../Images/Icons/call.png")}
          />
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
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    elevation: 10
  },
  txt: {
    padding: 10,
    color: "white"
  }
});
