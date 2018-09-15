import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { getMyPosts, getMyInfo } from "../../Actions/ProfileActions";
import Shamosa from "../Shamosa/Shamosa";
import MyInfo from "./MyInfo";

export default class Profile extends React.Component {
  static navigationOptions = {
    title: "My Profile"
  };

  constructor(props) {
    super(props);
    this.state = {
      posts: "",
      profileInfo: ""
    };
  }
  componentDidMount() {
    let tempPosts = getMyPosts();
    let tempInfo = getMyInfo();
    this.setState({ profileInfo: tempInfo });

    if (tempPosts.length > 0) {
      this.setState({ posts: tempPosts });
    }
  }

  renderMyInfo = () => {
    if (this.state.profileInfo != "") {
      return (
        <View style={styles.container}>
          <MyInfo profileInfo={this.state.profileInfo} />
        </View>
      );
    }
  };

  renderPosts = () => {
    if (this.state.posts.length)
      return (
        <View style={styles.container}>
          {this.state.posts.map((post, index) => (
            <Shamosa post={post} key={index} />
          ))}
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text>There are no Posts.</Text>
        </View>
      );
  };

  render() {
    return (
      <ScrollView>
        {this.renderMyInfo()}
        {this.renderPosts()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
