import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import t from 'tcomb-form-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  username: t.String,
  password: t.maybe(t.String),
  rememberMe: t.Boolean
});
const options = {
  fields: {
    username: {
      label: 'Username',
      error: 'Enter your username.'
    },
    password: {
      error: 'Enter your password.'
    },
    rememberMe: {
      label: 'Remember Me'
    }
  },
};

export default class Login extends React.Component {
   handelSubmit = () => {
    const value = this._form.getValue();
  }
  render() {
    return (
      <View style={styles.container}>
        <Form
            type={Person}
            ref={c => this._form = c}
            options={options}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={this.handelSubmit}
            underlayColor="blue">

              <Text>Login</Text>
          </TouchableOpacity>
          
          <View style={styles.signupTxt}>
          <Text> Don't have an account?</Text>
           <TouchableOpacity
            onPress={this.handelSubmit}
            underlayColor="blue">
          <Text style={{color: "#32baff"}}> SignUp</Text>
          </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
  },
  btn: {
    backgroundColor : '#32baff',
    width:300,
    height:60,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupTxt: {
    flexDirection: 'row',
    marginTop: 10,
  }
});
