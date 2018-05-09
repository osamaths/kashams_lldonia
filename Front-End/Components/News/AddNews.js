import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import t from 'tcomb-form-native';
var ImagePicker = require('react-native-image-picker');

var imagePickerOptions = {
    title: 'Select Image',
    customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };



var Form = t.form.Form;

var Post = t.struct({
    text: t.String,
    image: t.String,
});

const formOptions = {
    fields: {
        text: {
            title: "Text"
        }
    }
}

export default class AddNews extends React.Component {
    static navigationOptions = {
        header: null
    };
  constructor (props) {
    super(props);
    this.state = {
        avatarSource: ''
    }
  }

  chooseImage() {
    ImagePicker.showImagePicker(imagePickerOptions, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };
      
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
            avatarSource: source
          });
        }
      });
  }

  render() {
    
    return (
      <View style={styles.container}>
         <Form
            type={Post}
            ref={c => this._form = c}
            options={formOptions}
          />

          <TouchableOpacity
            onPress = {this.chooseImage}
            >
            <Text>Select Image</Text>
            </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
          padding: 20,
          backgroundColor: '#ffffff',
      },
});
