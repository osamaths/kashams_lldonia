import React from "react";
import { View, Text, Image } from "react-native";
import UserInfo from "../SharedComponents/UserInfo";
import Love from "../SharedComponents/Love";
import { postStyle } from "../../Styles/Styles";

export default class Shamosa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    };
  }

  render() {
    return (
      <View style={postStyle.container}>
        <UserInfo
          imageUrl={this.state.post.imageUrl}
          username={this.state.post.username}
          time={this.state.post.time}
        />
        <Image
          style={postStyle.img}
          source={{ uri: this.state.post.imageUrl }}
        />
        <Text style={postStyle.txt}> {this.state.post.text} </Text>
        <Love />
      </View>
    );
  }
}
