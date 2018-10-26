import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { getMyPosts, getMyInfo, fakeData } from "../../Actions/ProfileActions";
import MyShamosaList from "./MyShamosaList";
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
    for (var i = 0; i < fakeData.length; i++) {
      if (fakeData[i]._id === _id) {
        fakeData.splice(i, 1);
        console.log(fakeData);
        break;
      }
    }
    this.setState({ posts: fakeData });
    //this.state.navigate("Profile");
    // this.props.navigation.pop({ refresh: { isRenderNow: true } });
  }
  renderMyInfo = () => {
    if (this.state.profileInfo != "") {
      return (
        <View style={{ flex: 1 }}>
          <MyInfo profileInfo={this.state.profileInfo} />
        </View>
      );
    }
  };

  render() {
    return (
      <ScrollView>
        {this.renderMyInfo()}
        <View>
          <MyShamosaList />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});
