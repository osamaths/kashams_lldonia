import { Actions } from "react-native-router-flux";

export const logout = navigator => {
  // debugger;
  // navigator.immediatelyResetRouteStack([
  //   {
  //     component: Login
  //   }
  // ]);
};

export const validateToken = token => {
  console.log("current token is: ", token);
  var req = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ token: token })
  };
  var url = "http://192.168.0.55:3005/user/tokenValidation"; // "https://kashams-lldonia.herokuapp.com/user/login";

  fetch(url, req)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson.status === true) {
        Actions.home();
      } else {
        Actions.registration();
      }
    })
    .catch(err => {
      throw err;
    });
};
