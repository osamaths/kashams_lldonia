import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.imageUrl || "../../../Images/Icons/avatar.png",
      username: this.props.username || "Not Found",
      extraInfo: this.props.extraInfo || [],
      imageStyle: this.props.imageStyle || {
        height: 50,
        width: 50
      }
    };
  }

  addInfoToUserInfo() {
    return this.state.extraInfo.map((info, index) => (
      <Text style={styles.time} key={index}>
        {info}
      </Text>
    ));
  }

  render() {
    return (
      <View style={styles.profileContainer}>
        <Image
          style={[styles.profileImage, this.state.imageStyle]}
          source={{ uri: this.state.imageUrl }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.username}> {this.state.username} </Text>
          {this.addInfoToUserInfo()}
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
    paddingBottom: 0,
    paddingTop: 25
  },
  profileImage: {
    resizeMode: "cover",
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 5
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
