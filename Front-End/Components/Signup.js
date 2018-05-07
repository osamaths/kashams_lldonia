import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import t from 'tcomb-form-native';
import moment from 'moment';

var Form = t.form.Form;

// here we are: define your domain model
var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});
var Person = t.struct({
  email: t.String,
  username: t.String,// a required string
  password: t.String,  // an optional string
  confirm: t.String,  // an optional string
  year: t.Number,
  gender: Gender,
});

var options = {
  fields:{
    email:{
      label: "Email",
      error: "Please enter your email"
    },
    username:{
      label: "Username",
      error: "Please enter your username"
    },
    password: {
      label: "Password",
      error: "Please enter your password"
    },
    confirm: {
      label: "Confirm",
      error: "Please enter confirm password"
    },
    year: {
      label: "Year",
      error: "Enter your Simister year"
    },
    gender: {
      label: "Gender",
      error: "Please select your Gender"
    }
  }
};

export default class SignUp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      year: '',
      gender: ''
    }
  }
  handelSubmit = () => {
   const userData = this._form.getValue();
   if (userData) {
     this.setState({email: userData.email, username: userData.username, password: userData.password, year: userData.year, gender: userData.gender});
   }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Form
            type={Person}
            ref={c => this._form = c}
            options={options}
            style={styles.form}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={this.handelSubmit}
            underlayColor="blue">

              <Text>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.signupTxt}>
          <Text> Already have acount? </Text>
           <TouchableOpacity
            onPress={this.handelSubmit}
            underlayColor="blue">
          <Text style={{color: "#32baff"}}> Login</Text>
          </TouchableOpacity>
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      padding: 20,
      backgroundColor: '#ffffff',
  },
  form: {
    flexDirection: 'row',
    padding: 0,
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
    marginBottom: 10
  }
});
