import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image
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
        <Image
          source={require("../Images/Icons/appLogo.png")}
          style={{ width: 170, height: 150, alignSelf: "center" }}
        />
        <Form type={Person} ref={c => (this._form = c)} options={options} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.handelSubmit(navigate);
          }}
          underlayColor="blue"
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupTxt}>
          <Text> {"Don't have an account?"}</Text>
          <TouchableOpacity
            underlayColor="blue"
            onPress={() => {
              navigate("SignUp");
            }}
          >
            <Text style={{ color: "#009688" }}> SignUp</Text>
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
