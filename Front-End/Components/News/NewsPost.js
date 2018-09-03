import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

export default class NewsPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 120, height: 120 }}
          source={{ uri: this.state.post.imageUrl }}
        />
        <Text style={styles.txt}> {this.state.post.text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.33,
    backgroundColor: "#eaeaea",
    flexDirection: "row",
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#d6d7da"
  },
  txt: {
    padding: 10,
    color: "black"
  }
});
