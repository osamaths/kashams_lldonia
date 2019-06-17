import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  PhotoUpload
} from "react-native";
import ImagePicker from "react-native-image-picker";
import { uploadPost } from "../../Actions/photoActions";

var imagePickerOptions = {
  title: "Select Image",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export default class AddNews extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      avatarSource: ""
    };
    this.chooseImage = this.chooseImage.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelSubmit = () => {
    if (this.state.avatarSource.uri || this.state.text != "") {
      var post = {
        text: this.state.text,
        image: { uri: this.state.avatarSource.uri }
      };

      uploadPost(post);
    }
  };

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

        this.setState({ avatarSource: source });
        console.log("------------------ path is : ", this.state.avatarSource);
      }
    });
  }

  render() {
    console.log("rerendered.");
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.chooseImage}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: "contain",
              alignSelf: "center",
              backgroundColor: "steelblue"
            }}
            source={{
              uri: this.state.avatarSource.uri
            }}
          />
          <Text>Select Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.handelSubmit();
          }}
          style={styles.button}
        >
          <Text style={{ color: "white" }}>Post</Text>
        </TouchableOpacity>
        <View>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009688",
    padding: 5,
    height: 75,
    width: 75,
    borderRadius: 10
  }
});
