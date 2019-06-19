import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { getList } from "../../Actions/SharedActions";
import NewsPost from "./NewsPost";
import EmptyList from "../SharedComponents/EmptyList";
export default class NewsLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };

    this.setPosts = this.setPosts.bind(this);
  }
  setPosts(resPosts) {
    console.log(resPosts);

    this.setState({ posts: resPosts });
  }
  componentDidMount() {
    console.log("NewsLists");

    getList(this.setPosts, "news/get", {
      end: 10,
      amount: 10,
      flag: false
    });
  }
  renderPosts = () => {
    if (this.state.posts.length)
      return (
        <ScrollView style={styles.container}>
          {this.state.posts.map((post, index) => (
            <NewsPost post={post} key={index} />
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

/*
[
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
*/
