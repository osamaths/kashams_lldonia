import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import MiniHalqa from "./miniHalqa";
import { getMyList } from "../../Actions/HalqatActions";

export default class miniHalqaLists extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data
    };
  }

  componentDidMount() {
    console.log("miniHalqaLists");
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
    if (array.length > 0)
      return (
        <View>
          {array.map((miniHalqa, index) => (
            <MiniHalqa
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
    return (
      <ScrollView style={styles.container}>
        {this.renderMyList(this.state.data.miniHalqat)}
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
