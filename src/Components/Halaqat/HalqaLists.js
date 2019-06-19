import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Halqa from "./Halqa";
import { getList } from "../../Actions/SharedActions";
import { strings } from "../../../locales/i18n";
import EmptyList from "../SharedComponents/EmptyList";

export default class HalqaLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      halqat: []
    };
    this.setHalqat = this.setHalqat.bind(this);
    this.renderMyList = this.renderMyList.bind(this);
  }
  setHalqat(resPosts) {
    this.setState({ halqat: resPosts });
  }
  componentDidMount() {
    console.log("HalqaLists");

    getList(this.setHalqat, "halqa/get", {
      end: 10,
      amount: 10,
      flag: false
    });
  }

  renderMyList = () => {
    if (this.state.halqat.length)
      return (
        <ScrollView style={styles.container}>
          {this.state.halqat.map((halqa, index) => (
            <Halqa halqa={halqa} key={index} />
          ))}
        </ScrollView>
      );
    else return <EmptyList />;
  };

  render() {
    return this.renderMyList();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emptyMsg: {}
});
