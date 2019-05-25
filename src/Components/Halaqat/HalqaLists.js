import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Halqa from "./Halqa";
import { getMyList } from "../../Actions/HalqatActions";
import { strings } from "../../../locales/i18n";

export default class HalqaLists extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };

  constructor(props) {
    super(props);
    this.state = {
      halqat: ""
    };

    this.renderMyList = this.renderMyList.bind(this);
  }

  componentDidMount() {
    let tempHalqat = getMyList();
    if (tempHalqat && tempHalqat.length > 0)
      this.setState({ halqat: tempHalqat });
  }

  renderMyList = navigate => {
    // navigate("miniHalqat", { miniHalqat: this.state.miniHalqat })
    if (this.state.halqat.length > 0)
      return (
        <View>
          {this.state.halqat.map((halqa, index) => (
            <Halqa halqa={halqa} key={index} navigate={navigate} />
          ))}
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text>{strings.HalqaLists.emptyList}</Text>
        </View>
      );
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {this.renderMyList(navigate)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
