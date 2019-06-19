import React from "react";
import { View, Text, Image } from "react-native";
import UserInfo from "../SharedComponents/UserInfo";
import Love from "../SharedComponents/Love";
import { postStyle } from "../../Styles/Styles";
import { getMyInfo } from "../../Actions/StorageActions";

export default class Shamosa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    };
  }

  render() {
    const { post } = this.state;
    return (
      <View style={postStyle.container}>
        <UserInfo
          imageUrl={post.image}
          username={post.time}
          extraInfo={[post.time]}
        />
        <Image style={postStyle.img} source={{ uri: post.image }} />
        <Text style={postStyle.txt}> {post.text} </Text>
        <Love />
      </View>
    );
  }
}
