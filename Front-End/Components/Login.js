import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import t from "tcomb-form-native";

var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  username: t.String,
  password: t.String
});

const options = {
  fields: {
    username: {
      label: "Username",
      error: "Enter your username."
    },
    password: {
      label: "Password",
      error: "Enter your password."
    }
  }
};

checkLoginData = (userData, navigate) => {
  if (userData) {
    var req = {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    };
    var url = "https://kashams-lldonia.herokuapp.com/user/login";

    // fetch(url, req)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(responseJson => {
    //     if (responseJson === true) {
    //       navigate("Home");
    //     } else {
    //       alert(responseJson.message);
    //     }
    //   })
    //   .catch(err => {
    //     throw err;
    //   });
    navigate("Home");
  }
};
export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };
  handelSubmit = navigate => {
    const userData = this._form.getValue();
    checkLoginData(userData, navigate);
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Form type={Person} ref={c => (this._form = c)} options={options} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.handelSubmit(navigate);
          }}
          underlayColor="blue"
        >
          <Text>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupTxt}>
          <Text> {"Don't have an account?"}</Text>
          <TouchableOpacity
            underlayColor="blue"
            onPress={() => {
              navigate("SignUp");
            }}
          >
            <Text style={{ color: "#32baff" }}> SignUp</Text>
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
    backgroundColor: "#32baff",
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  signupTxt: {
    flexDirection: "row",
    marginTop: 10
  }
});
