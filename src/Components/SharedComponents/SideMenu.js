import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Actions } from "react-native-router-flux";
import { getMyInfo } from "../../Actions/StorageActions";
import { logout } from "../../Actions/AccessActions";
import MyInfo from "../Profile/MyInfo";
import MenuButton from "./MenuButton";
import { strings } from "../../../locales/i18n";

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  //#region Filter on user type
  renderNormal() {
    return (
      <View style={styles.columnContainer}>
        {this.renderAmiraLists()}
        {this.renderMyUsersList()}
        {this.renderLogout()}
      </View>
    );
  }
  renderAmira() {
    return (
      <View style={styles.columnContainer}>
        {this.renderMyUsersList()}
        {this.renderLogout()}
      </View>
    );
  }
  renderAdmin() {
    return (
      <View style={styles.columnContainer}>
        {this.renderAmiraLists()}
        {this.renderMyUsersList()}
        {this.renderAddNews()}
        {this.renderLogout()}
      </View>
    );
  }

  renderButtons() {
    let type = getMyInfo().userType;
    switch (type) {
      case "normal":
        return this.renderNormal();
      case "amira":
        return this.renderAmira();
      case "admin":
        return this.renderAdmin();
      default:
        return this.renderNormal();
    }
  }
  //#endregion

  //#region Buttons Render Components
  renderLogout() {
    return (
      <MenuButton
        title={strings("logout.logout_btn")}
        onPress={() => {
          logout();
        }}
      />
    );
  }
  renderAmiraLists() {
    return (
      <MenuButton title={"حجز أميرة"} onPress={() => Actions.selectAmira()} />
    );
  }
  renderMyUsersList() {
    return (
      <MenuButton
        title={"التسميع الفردي"}
        onPress={() => Actions.myUsersList()}
      />
    );
  }
  renderAddNews() {
    return <MenuButton title={"تنزيل خبر"} onPress={() => Actions.addNews()} />;
  }
  //#endregion

  render() {
    const myInfo = getMyInfo();
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../../Images/background.jpg")}
      >
        <View style={{ flex: 1, alignItems: "center", marginBottom: 5 }}>
          <TouchableOpacity
            style={{ width: "100%", height: "100%" }}
            onPress={() => {
              Actions.profile();
            }}
          >
            <MyInfo
              profileInfo={myInfo}
              extraStyle={styles.transparentBackground}
              textColor={{ color: "#D6FFFF" }}
            />
          </TouchableOpacity>
        </View>
        {this.renderButtons()}
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
