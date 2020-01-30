import React from "react";
import { I18nManager } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import t from "tcomb-form-native";
import { strings } from "../../../locales/i18n";
import { Actions } from "react-native-router-flux";
import { setLanguage } from "../../../locales/i18n";
import { setMyInfo } from "../../Actions/StorageActions";
import { validateToken } from "../../Actions/AccessActions";

var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  username: t.String,
  password: t.String
});

var values = {
  username: "osamaths",
  password: "1234"
};

const options = {};

export default class Login extends React.Component {
  constructor() {
    super();
    this._getFormOptions = this._getFormOptions.bind(this);

    // validateToken();
  }
  checkLoginData(userData) {
    if (userData) {
      var req = {
        method: "POST",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      };
      var url = "http://192.168.40.1:3003/user/login"; // "https://kashams-lldonia.herokuapp.com/user/login";

      fetch(url, req)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.status === true) {
            console.log(responseJson);
            setMyInfo(responseJson.user);

            Actions.home();
          } else {
            alert(responseJson.message);
          }
        })
        .catch(err => {
          throw err;
        });
    }
  }
  _getFormOptions() {
    return {
      fields: {
        username: {
          label: strings("login.fields.username.label"),
          error: strings("login.fields.username.error"),
          returnKeyType: "next",
          // autoFocus: true,
          onSubmitEditing: () => {
            this.refs.form.getComponent("password").refs.input.focus();
          }
        },
        password: {
          label: strings("login.fields.password.label"),
          error: strings("login.fields.password.error"),
          secureTextEntry: true,
          returnKeyType: "done",
          onSubmitEditing: () => {
            console.log("Logining in...");
          }
        }
      }
    };
  }

  render() {
    var options = this._getFormOptions();
    return (
      <View style={styles.container}>
        <Image
          source={require("../../../Images/Icons/appLogo.png")}
          style={{ width: 170, height: 150, alignSelf: "center" }}
        />
        <Form type={Person} ref="form" options={options} value={values} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            var data = this.refs.form.getValue();
            this.checkLoginData(data);
          }}
          underlayColor="blue"
        >
          <Text style={{ color: "white" }}>
            {strings("login.login_button")}
          </Text>
        </TouchableOpacity>

        <View style={styles.signupTxt}>
          <Text> {strings("login.dontMsg")}</Text>

          <TouchableOpacity
            underlayColor="blue"
            onPress={() => {
              Actions.signup();
            }}
          >
            <Text style={{ color: "#009688", marginLeft: 3 }}>
              {strings("login.signup_button")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff"
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
    alignSelf: "center"
  }
});
