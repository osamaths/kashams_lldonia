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
import { postStyle } from "../../Styles/Styles";

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
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: this.state.post.imageUrl }}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.username}> {this.state.post.username} </Text>
            <Text style={styles.time}> {this.state.post.time} </Text>
          </View>
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
  },
  love: {
    flex: 1,
    color: "#009688",
    fontSize: 50,
    alignSelf: "center",
    paddingBottom: 10
  }
});
