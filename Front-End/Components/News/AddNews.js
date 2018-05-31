import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import t from 'tcomb-form-native';
import ImagePicker from 'react-native-image-picker';
import Upload from 'react-native-background-upload'

var imagePickerOptions = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };



var Form = t.form.Form;

var Post = t.struct({
    text: t.String,
});

const formOptions = {
    fields: {
        text: {
            title: "Text"
        }
    }
}
uploadPost = (post) => {
  var newPost = {
    text: post.text,
    image: post.image
  }

  fetch('http://192.168.1.38:3005/new/post', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( newPost )
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson === true) {
        alert('New post has been added successfully.')
      } else {
        alert (responseJson.message);
      }
    })
    .catch(err => {
      throw err;
    });
}

export default class AddNews extends React.Component {
  static navigationOptions = {
      header: null
  };
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      avatarSource: ''
    }
    this.chooseImage = this.chooseImage.bind(this)
    this.handelSubmit = this.handelSubmit.bind(this)
  }

  handelSubmit = () => {
    const userData = this._form.getValue();
    if (userData) {
      this.setState({text: userData.text}, () => {
        if (this.state.avatarSource != ''){
          var post = {
            text: this.state.text,
            image: this.state.avatarSource
          }
          uploadPost(post)        
        }
      });
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
        else {
          // let source = { uri: response.uri };
      
          // You can also display the image using data:
          let source = { uri: 'data:image/jpeg;base64,' + response.data };
          this.setState({avatarSource: response.data});
          // console.log('------------------ avatar is : ', this.state.avatarSource)
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
          <Text>{this.state.text}</Text>
          <TouchableOpacity
            onPress = {this.chooseImage}
            >
            <Text>Select Image</Text>
            </TouchableOpacity>
            <Image
            style={{
              width: 500,
              height: 200,
              resizeMode: Image.resizeMode.contain,
              alignSelf: 'center',
              backgroundColor: 'black'
            }}
              source={{
                uri: 'data:image/jpeg;base64,' + this.state.avatarSource
              }}
              />
          <TouchableOpacity
            onPress = {() => {
              this.handelSubmit();
            }}
          >
            <Text>Upload</Text>
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
