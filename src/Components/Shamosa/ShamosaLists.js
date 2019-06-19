import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { getList } from "../../Actions/SharedActions";
import Shamosa from "./Shamosa";
import { retrieveData } from "../../Actions/StorageActions";
import { validateToken } from "../../Actions/AccessActions";
import EmptyList from "../SharedComponents/EmptyList";

export default class ShamosaLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };

    this.setPosts = this.setPosts.bind(this);
  }
  componentWillMount() {
    // validateToken(retrieveData("token"));
  }
  componentDidMount() {
    getList(this.setPosts, "shamosa/get", {
      end: 10,
      amount: 10,
      flag: false
    });
  }
  setPosts(resPosts) {
    this.setState({ posts: resPosts });
  }
  renderPosts = () => {
    if (this.state.posts.length)
      return (
        <ScrollView style={styles.container}>
          {this.state.posts.map((post, index) => (
            <Shamosa post={post} key={index} />
          ))}
        </ScrollView>
      );
    else return <EmptyList />;
  };

  render() {
    return this.renderPosts();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
