import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Amira from "./Amira";
import { getAmiras } from "../../Actions/amirasActions";
import { strings } from "../../../locales/i18n";

export default class AmiraLists extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };

  constructor(props) {
    super(props);
    this.state = {
      amiras: ""
    };
  }

  componentDidMount() {
    let tempAmiras = getAmiras();
    if (tempAmiras && tempAmiras.length > 0)
      this.setState({ amiras: tempAmiras });
  }

  renderAmiras = () => {
    if (this.state.amiras.length > 0)
      return (
        <View style={styles.container}>
          {this.state.amiras.map((amira, index) => (
            <Amira amira={amira} key={index} />
          ))}
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text>{strings("AmiraLists.emptyList")}</Text>
        </View>
      );
  };

  render() {
    return (
      <ScrollView style={styles.container}>{this.renderAmiras()}</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
