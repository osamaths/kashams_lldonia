import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { getShamosaPosts } from "../../Actions/ShamosaActions";
import Shamosa from "./Shamosa";
import { retrieveData } from "../../Actions/StorageActions";
import { validateToken } from "../../Actions/AccessActions";

export default class ShamosaLists extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };

  constructor(props) {
    super(props);
    this.state = {
      posts: ""
    };
  }
  componentWillMount() {
    validateToken(retrieveData("token"));
  }
  componentDidMount() {
    let tempPosts = getShamosaPosts();
    if (tempPosts.length > 0) {
      this.setState({ posts: tempPosts });
    }
  }

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
          <Text>There are no News.</Text>
        </View>
      );
  };

  render() {
    return <ScrollView>{this.renderPosts()}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  post: {}
});
