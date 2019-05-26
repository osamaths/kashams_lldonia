"use strict";

import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ListView
} from "react-native";
import { getMyPosts, getMyInfo, fakeData } from "../../Actions/ProfileActions";
import MyShamosa from "./MyShamosa";
import MyInfo from "./MyInfo";
import { strings } from "../../../locales/i18n";

export default class Profile extends React.Component {
  // static navigationOptions = {
  //   title: strings.Profile.MyShamosaList.title
  // };

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      posts: "",
      profileInfo: "",
      deleteNow: false,
      deletedValue: "",
      dataSource: this.ds.cloneWithRows(fakeData),
      loading: false
    };

    this.deleteShamosa = this.deleteShamosa.bind(this);
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

  deleteShamosa(_id) {
    var temp = this.state.dataSource._dataBlob.s1;

    temp.splice(_id, 1);
    this.setState({ dataSource: this.ds.cloneWithRows(temp) });
    //this.state.navigate("Profile");
    // this.props.navigation.pop({ refresh: { isRenderNow: true } });
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
            <MyShamosa
              post={post}
              deleteShamosa={this.deleteShamosa}
              key={index}
            />
          ))}
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text>{strings.Profile.MyShamosaList.emptyList}</Text>
        </View>
      );
  };

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(post, sectionID, rowID, heightRow) => (
          <MyShamosa
            key={rowID}
            post={post}
            deleteShamosa={this.deleteShamosa}
          />
        )}
        onEndReached={() => {
          return (
            <ActivityIndicator
              animating={true}
              color="#bc2b78"
              size="large"
              style={styles.activityIndicator}
            />
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3
  }
});
