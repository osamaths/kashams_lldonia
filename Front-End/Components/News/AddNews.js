import React from 'react';
import {
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  PhotoUpload
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { uploadPost } from '../../Actions/photoActions';


var imagePickerOptions = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };

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
    if (this.state.avatarSource.uri || this.state.text != '')
    {
      var post = {
        text: this.state.text,
        image: { uri: this.state.avatarSource.uri }
      }
      
      uploadPost(post)
    }
  }

  chooseImage() {
    ImagePicker.showImagePicker(imagePickerOptions, (response) => {
        // console.log('Response = ', response);
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
          
          this.setState({avatarSource: { uri: response.path} });
          console.log('------------------ path is : ', this.state.avatarSource)
        }
      });
  }

  render() {
    console.log('rerendered.')
    return (
      <View style={styles.container}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            underlineColorAndroid='transparent'
          />

          <TouchableOpacity
            onPress = {this.chooseImage}
          >
            <Text>Select Photo</Text>
         
            
          <Image
          style={{
            width: 500,
            height: 200,
            resizeMode: Image.resizeMode.contain,
            alignSelf: 'center',
            backgroundColor: 'steelblue'
          }}
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.avatarSource.uri
            }}
          />
        </TouchableOpacity>
          <TouchableOpacity
            onPress = {() => {
              this.handelSubmit();
            }}
            style = {{backgroundColor: "red", margin: 50, height: 60}}
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
