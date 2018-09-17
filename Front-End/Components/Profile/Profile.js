import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { getMyPosts, getMyInfo } from "../../Actions/ProfileActions";
import MyShamosa from "./MyShamosa";
import MyInfo from "./MyInfo";

export default class Profile extends React.Component {
  static navigationOptions = {
    title: "My Profile"
  };

  constructor(props) {
    super(props);
    this.state = {
      posts: "",
      profileInfo: "",
      isRenderNow: true
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
  componentWillReceiveProps() {
    this.setState({ isRenderNow: true });
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
            <MyShamosa post={post} key={index} />
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
    if (this.state.isRenderNow) {
      return (
        <ScrollView>
          {this.renderMyInfo()}
          {this.renderPosts()}
        </ScrollView>
      );
      this.setState({ isRenderNow: false });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
