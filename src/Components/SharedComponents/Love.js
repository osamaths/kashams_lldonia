import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { reqLove } from "../../Actions/ShamosaActions";

var postShapes = Object.freeze({
  LOVED: "☀",
  NOT_LOVED: "☼"
});

export default class Love extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postStatus: "",
      postShape: postShapes.NOT_LOVED
    };
  }

  toggleLove() {
    if (reqLove()) {
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
    } else {
      alert("Something wrong happened.");
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.toggleLove();
        }}
      >
        <Text style={styles.love}>{this.state.postShape}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  love: {
    flex: 1,
    color: "#009688",
    fontSize: 50,
    alignSelf: "center",
    paddingBottom: 10
  }
});
