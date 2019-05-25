import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import NewsPost from "./NewsPost";
export default class NewsLists extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };

  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          imageUrl:
            "https://cdn3.iconfinder.com/data/icons/character/512/41-512.png",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          username: "Admin",
          time: "02:36pm"
        },
        {
          imageUrl:
            "https://cdn3.iconfinder.com/data/icons/character/512/41-512.png",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          username: "Admin",
          time: "02:36pm"
        },
        {
          imageUrl:
            "https://cdn3.iconfinder.com/data/icons/character/512/41-512.png",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          username: "Admin",
          time: "02:36pm"
        },
        {
          imageUrl:
            "https://cdn3.iconfinder.com/data/icons/character/512/41-512.png",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          username: "Admin",
          time: "02:36pm"
        }
      ]
    };
  }

  renderPosts = () => {
    if (this.state.posts.length)
      return (
        <View style={styles.container}>
          {this.state.posts.map((post, index) => (
            <NewsPost post={post} key={index} />
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
    return (
      <ScrollView style={styles.container}>{this.renderPosts()}</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  post: {}
});
