import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions
} from "react-native";
import { reserveMiniHalqa } from "../../Actions/miniHalqaActions";
import { mainContainerColor, postStyle, textColor } from "../../Styles/Styles";

export default class miniHalqa extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.miniHalqa._id,
      name: this.props.miniHalqa.name,
      time: this.props.miniHalqa.time,
      place: this.props.miniHalqa.place,
      length: this.props.miniHalqa.length
    };
  }
  render() {
    return (
      <View style={[styles.container, mainContainerColor]}>
        <Image
          style={styles.circleImage}
          source={{
            uri:
              "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50"
          }}
        />
        <View style={styles.info}>
          <View style={styles.infoGroup}>
            <Text style={styles.mainTitle}> Name: </Text>
            <Text style={styles.infoValue}>{this.state.name}</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.mainTitle}> Time: </Text>
            <Text style={styles.infoValue}>{this.state.time}</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.mainTitle}> Place: </Text>
            <Text style={styles.infoValue}>{this.state.place}</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.mainTitle}> Students: </Text>
            <Text style={styles.mainTitle}>{this.state.length}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              reserveMiniHalqa(this.state);
            }}
          >
            <Text style={{ color: "white" }}>{"Have a Seat"}</Text>
          </TouchableOpacity>
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
  circleImage: {
    flex: 1,
    width: width / 3,
    height: height / 5.5,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center"
  },
  infoGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  info: {
    flex: 2,
    flexDirection: "column",
    paddingLeft: 5,
    justifyContent: "space-between"
  },
  mainTitle: {
    fontWeight: "bold",
    color: "#009688"
  },
  infoValue: {
    fontSize: 14,
    color: "black",
    textAlign: "left"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009688",
    padding: 10,
    marginTop: 5
  }
});
