import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import t from 'tcomb-form-native';

var Form = t.form.Form;

var Post = t.struct({
    text: t.String,
    image: t.String,
});

const options = {
    fields: {
        text: {
            title: "Text"
        },
        image: {
            config: {
                title: 'Select image',
                options: ['Open camera', 'Select from gallery', 'Cancel'],}
        }
    }
}



export default class AddNews extends React.Component {
    static navigationOptions = {
        header: null
    };
  constructor (props) {
    super(props);
  }
  render() {
    
    return (
      <View style={styles.container}>
         <Form
            type={Post}
            ref={c => this._form = c}
            options={options}
          />
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
