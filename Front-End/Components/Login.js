import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import t from 'tcomb-form-native';

var Form = t.form.Form;



// here we are: define your domain model
var Person = t.struct({
  username: t.String,
  password: t.String,
});
const options = {
  fields: {
    username: {
      label: 'Username',
      error: 'Enter your username.'
    },
    password: {
      label: 'Password',
      error: 'Enter your password.'
    }
  },
};

// Fake Data
users = [
  {username: 'osamaths', password: '1234'},
  {username: 'shahd', password: '1234'}
];
alertMsg = (msg) => {
  Alert.alert(msg);
}
checkLoginData = (userData) => {
  if (userData) {
    console.log (userData)
    for (var user in users){
      console.log ('----->', users[user])
      if (users[user].username === userData.username){
        if (users[user].password === userData.password) {
          console.log ('Welcome ', users[user].username);
          return 'Welcome ' + users[user].username;
        } else {
          return "Password is wrong!";
        }
      }
    }
    return "Invalid username";
  }
}
export default class Login extends React.Component {
  handelSubmit = () => {
    const userData = this._form.getValue();
    Alert.alert(checkLoginData(userData));
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
    flex: 1,
      justifyContent: 'center',
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
