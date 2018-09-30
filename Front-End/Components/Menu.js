import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  Platform,
  ImageBackground
} from "react-native";
import { logout } from "../Actions/AccessActions";
import { getMyInfo } from "../Actions/ProfileActions";
import UserInfo from "./SharedComponents/UserInfo";
import MyInfo from "./Profile/MyInfo";
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
    const myInfo = getMyInfo();
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../Images/background.jpg")}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={{ width: "100%", height: "100%" }}
            onPress={() => {
              navigate("Profile");
            }}
          >
            <MyInfo
              profileInfo={myInfo}
              extraStyle={styles.transparentBackground}
              textColor={{ color: "#D6FFFF" }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.columnContainer}>
          <View style={[styles.btnContainer, { marginTop: 5 }]}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigate("AmiraLists");
              }}
            >
              <Text style={styles.btnText}>{"حجز أميرة"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigate("MyUsersList");
              }}
            >
              <Text style={styles.btnText}>{"التسميع الفردي"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigate("AddNews");
              }}
            >
              <Text style={styles.btnText}>{"تنزيل خبر"}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.btnContainer, { marginBottom: 2 }]}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                logout();
              }}
            >
              <Text style={styles.btnText}>{"الخروج"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
var { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  columnContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  btnsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    backgroundColor: "black"
  },
  btnContainer: {
    flex: 1,
    backgroundColor: "rgba(36, 73, 46, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 1,
    height: "70%",
    width: "100%"
  },
  btn: {
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontFamily: "tahoma"
  },
  transparentBackground: {
    backgroundColor: "rgba(36, 73, 46, 0.3)",
    borderBottomColor: "rgba(0, 0, 0, 0)",
    elevation: 1,
    paddingTop: 10
  },
  backgroundTransparence: {
    backgroundColor: "rgba(0.91, 0.91, 0.91, 0.6)"
  }
});
