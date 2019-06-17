import React from "react";
import {
  Platform,
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import t from "tcomb-form-native";
import { strings } from "../../../locales/i18n";
import { Actions } from "react-native-router-flux";

var Form = t.form.Form;

// here we are: define your domain model
var Gender = t.enums({
  M: strings("signup.fields.gender.male"),
  F: strings("signup.fields.gender.female")
});

var Person = t.struct({
  phone: t.Number,
  username: t.String, // a required string
  password: t.String, // an optional string
  confirm: t.String, // an optional string
  year: t.Number,
  gender: Gender
});

const keyboardType = Platform.select({
  ios: "name-phone-pad",
  android: "phone-pad"
});

sginupReq = userData => {
  if (userData) {
    fetch("https://kashams-lldonia.herokuapp.com/user/signup", {
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
  constructor() {
    super();
    this._getFormOptions = this._getFormOptions.bind(this);
  }
  _getFormOptions() {
    return {
      fields: {
        phone: {
          label: strings("signup.fields.phone.label"),
          error: strings("signup.fields.phone.error"),
          returnKeyType: "next",
          autoFocus: true,
          maxLength: 10,
          keyboardType: keyboardType,
          onSubmitEditing: () => {
            this.refs.form.getComponent("username").refs.input.focus();
          }
        },
        username: {
          label: strings("signup.fields.username.label"),
          error: strings("signup.fields.username.error"),
          returnKeyType: "next",
          onSubmitEditing: () => {
            this.refs.form.getComponent("password").refs.input.focus();
          }
        },
        password: {
          label: strings("signup.fields.password.label"),
          error: strings("signup.fields.password.error"),
          secureTextEntry: true,
          returnKeyType: "next",
          onSubmitEditing: () => {
            this.refs.form.getComponent("confirm").refs.input.focus();
          }
        },
        confirm: {
          label: strings("signup.fields.passwordConfirm.label"),
          error: strings("signup.fields.passwordConfirm.error"),
          secureTextEntry: true,
          returnKeyType: "next",
          onSubmitEditing: () => {
            this.refs.form.getComponent("year").refs.input.focus();
          }
        },
        year: {
          label: strings("signup.fields.year.label"),
          error: strings("signup.fields.year.error")
        },
        gender: {
          label: strings("signup.fields.gender.label"),
          error: strings("signup.fields.gender.error")
        }
      }
    };
  }
  handelSubmit = () => {
    //     const userData = this._form.getValue();
    //     console.log(userData);
    //     if (userData.password === userData.confirm) sginupReq(userData);
    //     else alert("Password not match.");
  };

  render() {
    var options = this._getFormOptions();
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Form
            type={Person}
            ref="form"
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
            <TouchableOpacity
              underlayColor="blue"
              onPress={() => {
                console.log(Actions);
                Actions.login();
              }}
            >
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
    flex: 1,
    flexDirection: "row",
    paddingTop: 0,
    backgroundColor: "red"
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
