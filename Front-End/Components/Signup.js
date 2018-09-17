import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import t from "tcomb-form-native";

var Form = t.form.Form;

// here we are: define your domain model
var Gender = t.enums({
  M: "Male",
  F: "Female"
});

var Person = t.struct({
  email: t.String,
  username: t.String, // a required string
  password: t.String, // an optional string
  confirm: t.String, // an optional string
  year: t.Number,
  gender: Gender
});

var options = {
  fields: {
    email: {
      label: "Email",
      error: "Please enter your email"
    },
    username: {
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

sginupReq = (userData, navigate) => {
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
      .then(responseJson => {
        if (responseJson === true) {
          navigate("Home");
        } else {
          alert(responseJson.message);
        }
      })
      .catch(err => {
        throw err;
      });
  }
};

export default class SignUp extends React.Component {
  static navigationOptions = {
    header: null
  };

  handelSubmit = navigate => {
    const userData = this._form.getValue();
    if (userData.password === userData.confirm) sginupReq(userData, navigate);
    else alert("Password not match.");
  };

  render() {
    const { navigate } = this.props.navigation;

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
              this.handelSubmit(navigate);
            }}
            underlayColor="blue"
          >
            <Text style={{ color: "white" }}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.signupTxt}>
            <Text> Already have acount? </Text>
            <TouchableOpacity
              underlayColor="blue"
              onPress={() => {
                navigate("Login");
              }}
            >
              <Text style={{ color: "#009688" }}> Login</Text>
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
