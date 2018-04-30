/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import t from 'tcomb-form-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Form = t.form.Form;
const User = t.struct({
  email: t.String,
  username: t.maybe( t.String ),
  password: t.String,
  terms: t.Boolean
});
const options = {
  fields: {
    terms: {
      label: 'Agree to Terms',
    },
    email: {
      error: 'Enter a valid Email.'
    },
    password: {
      error: 'Enter a password.'
    }
  },
};

type Props = {};
export default class App extends Component<Props> {
  handelSubmit = () => {
    const value = this._form.getValue();
    console.log('value:', value);
    Alert.alert(value);
  }

  render() {
    return (
      <View style={styles.container}>
       <Form
       type={User}
       ref={c => this._form = c}
       options={options}/>

       <Button
        title="Sign Up!"
        onPress={this.handelSubmit}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
  },
});
