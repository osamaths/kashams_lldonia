const { getMyInfo } = require("../Actions/StorageActions");

export const reserveMiniHalqa = (halqa, renderSelectedBtn) => {
  var req = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      _id: halqa._id,
      studentID: studentID
    })
  };
  var url = "http://192.168.0.55:3005/halqa/mini/add-student"; // "https://kashams-lldonia.herokuapp.com/user/login";

  fetch(url, req)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson.status === true) {
        renderSelectedBtn();
        // alert("Halqa " + halqa.name + " has been reserved successfully.");
      }
    })
    .catch(err => {
      throw err;
    });
};
