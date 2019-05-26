import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView
} from "react-native";

import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

import ImagePicker from "react-native-image-picker";
import { btnColor } from "../../Styles/Styles";
import { changeMyInfo } from "../../Actions/ProfileActions";
import { strings } from "../../../locales/i18n";

import t from "tcomb-form-native";

var Form = t.form.Form;

// here we are: define your domain model
var gender = t.enums({
  M: strings("Profile.EditProfile.gender.male"),
  F: strings("Profile.EditProfile.gender.female")
});
var options = {
  fields: {
    gender: {
      label: strings("Profile.EditProfile.gender.title"),
      style: {
        color: "#86939e"
      }
    }
  }
};
var imagePickerOptions = {
  title: strings("Profile.EditProfile.gender.imagePickerTitle"),
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};
var Gender = t.struct({
  gender: gender
});

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileInfo: this.props.profileInfo,
      avatarSource: "",
      setModalVisible: this.props.setModalVisible
    };
    this.chooseImage = this.chooseImage.bind(this);
  }

  chooseImage() {
    ImagePicker.showImagePicker(imagePickerOptions, response => {
      // console.log('Response = ', response);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        // let source = { uri: response.uri };

        // You can also display the image using data:
        let source = { uri: "data:image/jpeg;base64," + response.data };

        this.setState({ avatarSource: { uri: response.path } });
        console.log("------------------ path is : ", this.state.avatarSource);
      }
    });
  }

  render() {
    return (
      <ScrollView style={styles.main}>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.chooseImage}>
            <Image
              style={styles.avatar}
              source={{ uri: this.state.profileInfo.avatar }}
            />
          </TouchableOpacity>

          <FormLabel>
            {strings("Profile.EditProfile.gender.username")}
          </FormLabel>
          {console.log("^^^^^")}
          <FormInput
            onChangeText={text => {
              console.log(text, "---------------");
            }}
            inputStyle={styles.text}
            value={this.state.profileInfo.username}
          />

          <FormLabel>
            {strings("Profile.EditProfile.gender.firstname")}
          </FormLabel>
          <FormInput
            inputStyle={styles.text}
            onChangeText={() => {}}
            style={styles.text}
            value={this.state.profileInfo.name.firstname}
          />

          <FormLabel>
            {strings("Profile.EditProfile.gender.lastname")}
          </FormLabel>
          <FormInput
            inputStyle={styles.text}
            onChangeText={() => {}}
            style={styles.text}
            value={this.state.profileInfo.name.lastname}
          />

          <FormLabel>{strings("Profile.EditProfile.gender.year")}</FormLabel>
          <FormInput
            inputStyle={styles.text}
            onChangeText={() => {}}
            style={styles.text}
            value={this.state.profileInfo.year + ""}
          />

          <TouchableOpacity
            style={[btnColor, styles.saveBtn]}
            onPress={() => {
              changeMyInfo(this.state.profileInfo, this.state.setModalVisible);
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>
              {strings("Profile.EditProfile.gender.saveBtn")}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  container: {
    marginTop: 20,
    marginBottom: 50,
    paddingHorizontal: 30
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 10,
    alignSelf: "center"
  },
  text: {
    fontSize: 18,
    marginTop: 5,
    height: 40,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: "#00796B"
  },
  saveBtn: {
    width: "80%",
    height: "10%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20
  },
  gender: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 1
  }
});
