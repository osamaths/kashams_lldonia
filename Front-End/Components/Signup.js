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
  username: t.maybe(t.String),// a required string
  password: t.String,  // an optional string
  birthDay: t.Date,
  gender: Gender,
  rememberMe: t.Boolean        // a boolean
});
   let myFormatFunction = (format,date) =>{
            return moment(date).format(format);
        }
var options = {
  fields:{
    username:{
      label: "Username",
    },
   birthDay: {
     mode: 'date',
      config: {
         format: (date) => myFormatFunction('L', date),
       },
   }
  }
};

export default class SignUp extends React.Component {
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
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
  },
  form: {
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
  }
});