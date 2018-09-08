import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  Platform
} from "react-native";
import { logout } from "../Actions/AccessActions";
import { mainContainerColor, textColor, btnColor } from "../Styles/Styles";

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
        <View style={styles.btnsContainer}>
          <View style={[styles.btnContainer, { backgroundColor: "#009688" }]}>
            <TouchableOpacity onPress={() => {}}>
              <Image
                style={styles.profileImage}
                source={{
                  uri:
                    "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg"
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.btnContainer, { backgroundColor: "#00796B" }]}>
            <TouchableOpacity
              onPress={() => {
                navigate("AmiraLists");
              }}
            >
              <Text style={styles.btnText}>{"حجز أميرة"}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.btnContainer, { backgroundColor: "#009688" }]}>
            <TouchableOpacity
              onPress={() => {
                navigate("MyUsersList");
              }}
            >
              <Text style={styles.btnText}>{"التسميع الفردي"}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.btnContainer, { backgroundColor: "#00796B" }]}>
            <TouchableOpacity
              onPress={() => {
                navigate("AddNews");
              }}
            >
              <Text style={styles.btnText}>{"تنزيل خبر"}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.btnContainer, { backgroundColor: "#009688" }]}>
            <TouchableOpacity
              onPress={() => {
                logout();
              }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("./Images/Icons/logout.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={{ width: 200, height: 170 }}
            source={require("./Images/Icons/appLogo.png")}
          />
        </View>

        {/* <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "skyblue",
            elevation: 6
          }}
        /> */}
      </View>
    );
  }
}
var { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  logoContainer: {
    flex: 2,
    backgroundColor: "#B2DFDB",
    justifyContent: "center",
    alignItems: "center"
  },
  btnsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    backgroundColor: "black"
  },
  profileImage: {
    resizeMode: "cover",
    height: 60,
    width: 60,
    borderWidth: 2,
    borderRadius: 75
  },
  btnLogo: {
    width: 50,
    height: 50
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width / 2.6
  },
  btnText: {
    color: "#D6FFFF",
    fontSize: 16,
    fontFamily: "tahoma",
    justifyContent: "center"
  }
});
