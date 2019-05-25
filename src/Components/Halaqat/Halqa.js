import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions
} from "react-native";
import { mainContainerColor, postStyle } from "../../Styles/Styles";

export default class Halqa extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.halqa.name,
      description: this.props.halqa.description,
      miniHalqat: this.props.halqa.miniHalqat,
      navigate: this.props.navigate
    };

    this.navigator = this.navigator.bind(this);
  }

  navigator() {
    this.state.navigate("miniHalqatLists", { data: this.state });
    console.log("Halqa, miniHalqat.length:", this.state);
  }

  render() {
    return (
      <View style={[styles.container, mainContainerColor]}>
        <TouchableOpacity
          onPress={() => {
            this.navigator();
          }}
        >
          <Image
            style={styles.circleImage}
            source={{
              uri:
                "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50"
            }}
          />
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.name}> {this.state.name} </Text>
          <Text> {this.state.description} </Text>
        </View>
      </View>
    );
  }
}

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    elevation: 10,
    margin: 5,
    alignSelf: "center",
    width: "95%",
    height: "33%"
  },
  info: {
    flex: 2,
    flexDirection: "column",
    paddingLeft: 10
  },
  circleImage: {
    flex: 1,
    width: width / 3,
    height: height / 4.5,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    fontSize: 18,
    color: "#00796B",
    fontWeight: "bold"
  }
});
