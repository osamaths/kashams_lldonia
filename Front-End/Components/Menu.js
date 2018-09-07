import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { logout } from "../Actions/AccessActions";

export default class Menu extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button style={styles.button} onPress={() => {}} title={"حسابي"} />
        <Button
          style={styles.button}
          onPress={() => {
            navigate("AmiraLists");
          }}
          title={"أحجز أميرة"}
        />
        <Button
          style={styles.button}
          onPress={() => {
            navigate("MyUsersList");
          }}
          title={"التسميع الفردي"}
        />
        <Button
          style={styles.button}
          onPress={() => {
            navigate("AddNews");
          }}
          title={"تنزيل خبر"}
        />
        <Button
          style={styles.button}
          onPress={() => {
            logout();
          }}
          title={"الخروج"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
