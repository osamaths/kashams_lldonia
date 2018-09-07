import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

var postShapes = Object.freeze({
  LOVED: "☀",
  NOT_LOVED: "☼"
});

export default class Shamosa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post || {
        imageUrl:
          "https://facebook.github.io/react-native/docs/assets/favicon.png",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        adminName: "shahd"
      },
      postStatus: "",
      postShape: postShapes.NOT_LOVED
    };
  }

  toggleLove() {
    switch (this.state.postShape) {
      case postShapes.LOVED:
        this.setState({ postShape: postShapes.NOT_LOVED });
        break;
      case postShapes.NOT_LOVED:
        this.setState({ postShape: postShapes.LOVED });
        break;
      default:
        this.setState({ postShape: postShapes.NOT_LOVED });
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: this.state.post.imageUrl }} />
        <Text style={styles.txt}> {this.state.post.text} </Text>
        <TouchableOpacity
          onPress={() => {
            this.toggleLove();
          }}
        >
          <Text style={styles.love}>{this.state.postShape}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: "#eaeaea",
    flexDirection: "column",
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#d6d7da"
  },
  img: {
    flex: 0.6
  },
  txt: {
    flex: 0.3,
    padding: 10,
    color: "black"
  },
  love: {
    color: "#32baff",
    fontSize: 50
  }
});
