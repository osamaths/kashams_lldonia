import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import MiniHalqa from "./MiniHalqa";
import { getMyList } from "../../Actions/HalqatActions";
import { strings } from "../../../locales/i18n";

export default class MiniHalqaLists extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  componentDidMount() {
    console.log("miniHalqaLists", this.state.data);
  }

  renderMyList = array => {
    if (array.length > 0)
      return (
        <View>
          {array.map((miniHalqa, index) => (
            <MiniHalqa miniHalqa={miniHalqa} key={index} />
          ))}
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text>{strings("HalqaLists.emptyList")}</Text>
        </View>
      );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderMyList(this.state.data.miniHalqat)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
