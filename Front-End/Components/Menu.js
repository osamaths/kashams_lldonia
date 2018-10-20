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
import MenuButton from "./MenuButton";

export default class Menu extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  //#region Filter on user type
  renderNormal(navigate) {
    return (
      <View style={styles.columnContainer}>
        <MenuButton
          title={"حجز أميرة"}
          onPress={() => navigate("AmiraLists")}
        />
        <MenuButton
          title={"التسميع الفردي"}
          onPress={() => navigate("MyUsersList")}
        />
        <MenuButton title={"الخروج"} onPress={() => logout()} />
      </View>
    );
  }
  renderAmira(navigate) {
    console.log("renderAmira");
    return (
      <View style={styles.columnContainer}>
        <MenuButton
          title={"التسميع الفردي"}
          onPress={() => navigate("MyUsersList")}
        />
        <MenuButton title={"الخروج"} onPress={() => logout()} />
      </View>
    );
  }
  renderAdmin(navigate) {
    return (
      <View style={styles.columnContainer}>
        <MenuButton
          title={"حجز أميرة"}
          onPress={() => navigate("AmiraLists")}
        />
        <MenuButton
          title={"التسميع الفردي"}
          onPress={() => navigate("MyUsersList")}
        />
        <MenuButton title={"تنزيل خبر"} onPress={() => navigate("AddNews")} />
        <MenuButton title={"الخروج"} onPress={() => logout()} />
      </View>
    );
  }

  renderButtons(navigate) {
    let type = getMyInfo().type;
    switch (type) {
      case "normal":
        return this.renderNormal(navigate);
      case "amira":
        return this.renderAmira(navigate);
      case "admin":
        return this.renderAdmin(navigate);
      default:
        return this.renderNormal(navigate);
    }
  }
  //#endregion

  render() {
    const myInfo = getMyInfo();
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../Images/background.jpg")}
      >
        <View style={{ flex: 1, alignItems: "center", marginBottom: 5 }}>
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
        {this.renderButtons(navigate)}
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
