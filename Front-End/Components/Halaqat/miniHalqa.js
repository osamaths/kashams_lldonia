import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

export default class miniHalqa extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.miniHalqa.name,
      time: this.props.navigation.miniHalqa.time,
      place: this.props.navigation.miniHalqa.place
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>
    );
  }
}

/* render() {
  const { navigation } = this.props;
  const name = navigation.getParam('name', 'Untitled');
  const time = navigation.getParam('time', 'No time');
  const place = navigation.getParam('place', 'No place');
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.circleImage}
          source={{
            uri: 'https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50'
          }}
        />
        <Text> {"أسم الحلقة: " + JSON.stringify(name)}</Text>
        <Text> {"الوقت: " + JSON.stringify(time)}</Text>
        <Text> {"المصلى: " + JSON.stringify(place)}</Text>

      </TouchableOpacity>
    </View>
  )
} */

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
