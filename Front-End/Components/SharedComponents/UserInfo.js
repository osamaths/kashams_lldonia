import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.imageUrl || "../Images/Icons/avatar.png",
      username: this.props.username || "Not Found",
      time: this.props.time || ""
    };
  }

  render() {
    return (
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: this.state.imageUrl }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.username}> {this.state.username} </Text>
          <Text style={styles.time}> {this.state.time} </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 7
  },
  profileImage: {
    resizeMode: "cover",
    height: 50,
    width: 50,
    borderWidth: 2,
    borderRadius: 75
  },
  profileInfo: {
    flex: 1,
    flexDirection: "column"
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: "#00796B"
  },
  time: {
    fontSize: 12
  }
});
