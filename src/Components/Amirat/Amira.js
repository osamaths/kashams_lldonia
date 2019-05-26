import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { selectAmira } from "../../Actions/amirasActions.js";
import { mainContainerColor, textColor } from "../../Styles/Styles";
import UserInfo from "../SharedComponents/UserInfo";
import { strings } from "../../../locales/i18n";

export default class Amira extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.amira.firstname,
      lastname: this.props.amira.lastname,
      phone: this.props.amira.phone,
      major: this.props.amira.major,
      year: this.props.amira.year
    };
  }
  render() {
    return (
      <View style={[styles.container, mainContainerColor]}>
        <UserInfo
          style={styles.userInfo}
          username={this.state.firstname + " " + this.state.lastname}
          imageUrl={
            "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg"
          }
          extraInfo={[this.state.major, this.state.phone, this.state.year]}
          imageStyle={{
            height: 75,
            width: 75
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            selectAmira(this.state);
          }}
        >
          <Text style={{ color: "white" }}>
            {strings("AmiraLists.Amira.selectBtn")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    elevation: 10,
    margin: 5,
    alignSelf: "center",
    alignItems: "center",
    width: "95%",
    height: "33%"
  },
  button: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009688",
    padding: 5,
    height: 75,
    width: 75,
    borderRadius: 10
  }
});
