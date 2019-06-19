export const getList = (cb, route, body) => {
  console.log("---------");

  var req = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
  var url = "http://192.168.0.55:3005/" + route; // "https://kashams-lldonia.herokuapp.com/user/login";

  fetch(url, req)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      console.log("----->", responseJson);
      if (responseJson.status === true) {
        cb(responseJson.data);
      }
    })
    .catch(err => {
      console.log(err);

      throw err;
    });
};
