import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import miniHalqa from "./miniHalqa";
import { getMyList } from "../../Actions/HalqatActions";

export default class miniHalqaLists extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      minihalqat: ""
    };
  }

  componentDidMount() {
    // let tempMiniHalqat = getMyList();
    // if (tempMiniHalqat && tempMiniHalqat.length > 0) {
    //     this.setState({ minihalqat: tempMiniHalqat });
    //     console.log("MiniHalqat is : ", this.state.minihalqat.length)
    // }
  }

  renderMyList = array => {
    /* navigate("miniHalqat", {
            name: this.state.miniHalqat.name,
            time: this.state.miniHalqat.time,
            place: this.state.miniHalqa.place
        }) */
    console.log("miniHalqaLists, miniHalqat: ", array.length);
    if (this.state.array.length > 0)
      return (
        <View>
          {this.state.array.map((miniHalqa, index) => (
            <miniHalqa
              style={styles.container}
              miniHalqa={miniHalqa}
              key={index}
            />
          ))}
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text>There is no Halqa available.</Text>
        </View>
      );
  };

  render() {
    const miniHalqat = this.props.navigation.getParams("miniHalqat", "");
    return (
      <ScrollView style={styles.container}>
        {this.renderMyList(miniHalqat)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.2)"
  }
});
