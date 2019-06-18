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
import { Actions } from "react-native-router-flux";

export default class Halqa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.halqa.name,
      description: this.props.halqa.description,
      image: this.props.halqa.image,
      miniHalqat: this.props.halqa.miniHalqat
    };

    this.navigator = this.navigator.bind(this);
  }

  navigator() {
    Actions.miniHalqaLists({ data: this.state });
    console.log("Halqa, miniHalqat.length:", this.state);
  }

  render() {
    const { name, description, image } = this.state;
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
              uri: image
            }}
          />
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.name}> {name} </Text>
          <Text> {description} </Text>
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
