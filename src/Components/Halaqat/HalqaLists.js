import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Halqa from "./Halqa";
import { getMyList } from "../../Actions/HalqatActions";
import { strings } from "../../../locales/i18n";

export default class HalqaLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      halqat: ""
    };
    this.setHalqat = this.setHalqat.bind(this);
    this.renderMyList = this.renderMyList.bind(this);
  }
  setHalqat(tempHalqat) {
    this.setState({ halqat: tempHalqat });
  }
  componentDidMount() {
    console.log("HalqaLists");

    getMyList(this.setHalqat);
  }

  renderMyList = navigate => {
    if (this.state.halqat.length > 0)
      return (
        <ScrollView style={styles.container}>
          {this.state.halqat.map((halqa, index) => (
            <Halqa halqa={halqa} key={index} />
          ))}
        </ScrollView>
      );
    else
      return (
        <View style={styles.emptylist}>
          <Text>{strings("HalqaLists.emptyList")}</Text>
        </View>
      );
  };

  render() {
    return this.renderMyList();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptylist: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyMsg: {}
});
