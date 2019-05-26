import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal
} from "react-native";
import EditProfile from "./EditProfile";
import { postStyle, mainContainerColor } from "../../Styles/Styles";
import { YellowBox } from "react-native";
import { strings } from "../../../locales/i18n";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

export default class MyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileInfo: this.props.profileInfo,
      modalVisible: false,
      extraStyle: this.props.extraStyle
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={[styles.container, this.state.extraStyle]}>
        <Image
          style={styles.avatar}
          source={{ uri: this.state.profileInfo.avatar }}
        />

        <Text style={styles.username}>{this.state.profileInfo.username}</Text>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text
            style={[
              { fontSize: 10, fontWeight: "bold", paddingBottom: 10 },
              this.props.textColor
            ]}
          >
            {strings("Profile.MyInfo.editProfile")}
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          <EditProfile
            profileInfo={this.state.profileInfo}
            setModalVisible={this.setModalVisible}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "#009688",
    elevation: 10,
    paddingTop: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 25
  },
  username: {
    fontSize: 18,
    marginTop: 5,
    height: 40,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: "#00796B"
  }
});
