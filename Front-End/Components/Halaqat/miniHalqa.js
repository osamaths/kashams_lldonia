import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { reserveMiniHalqa } from "../../Actions/miniHalqaActions";

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
      place: this.props.miniHalqa.place
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            reserveMiniHalqa(this.state);
          }}
        >
          <Image
            style={styles.circleImage}
            source={{
              uri:
                "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50"
            }}
          />
          <Text> {"أسم الحلقة: " + this.state.name}</Text>
          <Text> {"الوقت: " + this.state.time}</Text>
          <Text> {"المصلى: " + this.state.place}</Text>
          <Text style={styles.button}> {"إحجز"} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexWrap: "wrap",
    backgroundColor: "rgba(52, 52, 52, 0.4)",
    flexDirection: "row",
    padding: 10
  },
  circleImage: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
