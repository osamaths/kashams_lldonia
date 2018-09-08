import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { reqLove } from "../../Actions/ShamosaActions";
import { postStyle } from "../Styles";

var postShapes = Object.freeze({
  LOVED: "☀",
  NOT_LOVED: "☼"
});

export default class Shamosa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post || {
        imageUrl: "",
        text: "",
        username: "shahd"
      },
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
      <View style={postStyle.container}>
        <View styles={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: this.state.post.imageUrl }}
          />
          <Text style={styles.username}> {"Shahd"} </Text>
        </View>
        <Image
          style={postStyle.img}
          source={{ uri: this.state.post.imageUrl }}
        />
        <Text style={postStyle.txt}> {this.state.post.text} </Text>
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
  love: {
    flex: 1,
    color: "#32baff",
    fontSize: 50,
    alignSelf: "center",
    paddingBottom: 10
  },
  username: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: "rgb(54, 88, 153)"
  },
  profileContainer: {
    flex: 1,
    flexDirection: "row"
  },
  profileImage: {
    flex: 2,
    resizeMode: "cover",
    height: 50,
    width: 50,
    borderWidth: 2,
    borderRadius: 75
  }
});
