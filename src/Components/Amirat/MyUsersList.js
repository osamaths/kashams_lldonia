import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import User from "./User";
import { getMyList } from "../../Actions/myUsersActions";
import { getMyInfo } from "../../Actions/ProfileActions";
import { strings } from "../../../locales/i18n";

export default class MyUsersLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ""
    };
  }

  componentDidMount() {
    let myType = getMyInfo().type;
    let data = getMyList();
    let tempUsers;

    if (myType != "amira") {
      tempUsers = data.amira;
    } else {
      tempUsers = data.people;
    }

    if (tempUsers && tempUsers.length > 0) this.setState({ users: tempUsers });
  }

  renderMyList = () => {
    if (this.state.users.length > 0)
      return (
        <View>
          {this.state.users.map((user, index) => (
            <User user={user} key={index} />
          ))}
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text>{strings("MyUsersLists.emptyList")}</Text>
        </View>
      );
  };

  render() {
    return (
      <ScrollView style={styles.container}>{this.renderMyList()}</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
