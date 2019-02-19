import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import t from "tcomb-form-native";
import { strings } from "../../../locales/i18n";

var Form = t.form.Form;

// here we are: define your domain model
var Gender = t.enums({
  M: strings("signup.fields.gender.male"),
  F: strings("signup.fields.gender.female")
});

var Person = t.struct({
  phone: t.String,
  username: t.String, // a required string
  password: t.String, // an optional string
  confirm: t.String, // an optional string
  year: t.Number,
  gender: Gender
});

var options = {
  fields: {
    phone: {
      label: strings("signup.fields.phone.label"),
      error: strings("signup.fields.phone.error"),
      returnKeyType: "next"
    },
    username: {
      label: strings("signup.fields.username.label"),
      error: strings("signup.fields.username.error"),
      returnKeyType: "next"
    },
    password: {
      label: strings("signup.fields.password.label"),
      error: strings("signup.fields.password.error"),
      secureTextEntry: true,
      returnKeyType: "next"
    },
    confirm: {
      label: strings("signup.fields.passwordConfirm.label"),
      error: strings("signup.fields.passwordConfirm.error"),
      secureTextEntry: true,
      returnKeyType: "next"
    },
    year: {
      label: strings("signup.fields.year.label"),
      error: strings("signup.fields.year.error"),
      returnKeyType: "next"
    },
    gender: {
      label: strings("signup.fields.gender.label"),
      error: strings("signup.fields.gender.error")
    }
  }
};

sginupReq = userData => {
  if (userData) {
    fetch("http://192.168.174.128:3005/user/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {})
      .catch(err => {
        throw err;
      });
  }
};

export default class SignUp extends React.Component {
  handelSubmit = () => {
    //     const userData = this._form.getValue();
    //     console.log(userData);
    //     if (userData.password === userData.confirm) sginupReq(userData);
    //     else alert("Password not match.");
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Form
            type={Person}
            ref={c => (this._form = c)}
            options={options}
            style={styles.form}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.handelSubmit();
            }}
            underlayColor="blue"
          >
            <Text style={{ color: "white" }}>
              {strings("signup.signup_btn")}
            </Text>
          </TouchableOpacity>

          <View style={styles.signupTxt}>
            <Text> {strings("signup.haveMsg")} </Text>
            <TouchableOpacity underlayColor="blue" onPress={() => {}}>
              <Text style={{ color: "#009688" }}>
                {" "}
                {strings("signup.login_btn")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  form: {
    flexDirection: "row",
    padding: 0
  },
  btn: {
    backgroundColor: "#009688",
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  signupTxt: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center"
  }
});
