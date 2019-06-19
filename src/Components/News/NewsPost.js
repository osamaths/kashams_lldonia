import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { postStyle } from "../../Styles/Styles";
import UserInfo from "../SharedComponents/UserInfo";

export default class NewsPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      numberOfLines: 4
    };
  }
  render() {
    const { post, numberOfLines } = this.state;
    return (
      <View style={postStyle.container}>
        <UserInfo
          imageUrl="https://cdn3.iconfinder.com/data/icons/character/512/41-512.png"
          username="Admin"
          extraInfo={[post.time]}
        />
        <Image style={postStyle.img} source={{ uri: post.image }} />
        <Text
          style={postStyle.txt}
          numberOfLines={numberOfLines}
          ellipsizeMode="tail"
          onPress={() =>
            this.setState({
              numberOfLines: numberOfLines === 4 ? Number.MAX_SAFE_INTEGER : 4
            })
          }
        >
          {" "}
          {post.text}{" "}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
