import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { postStyle } from "../../Styles/Styles";

export default class NewsPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    };
  }
  render() {
    return (
      <View style={postStyle.container}>
        <Image
          style={postStyle.img}
          source={{ uri: this.state.post.imageUrl }}
        />
        <Text style={postStyle.txt}> {this.state.post.text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
