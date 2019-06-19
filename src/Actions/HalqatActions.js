import call from "react-native-phone-call";

export const getList = (cb, route) => {
  console.log("---------");

  var req = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      end: 3,
      amount: 3,
      flag: false
    })
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

export const callUser = user => {
  const args = {
    number: user.phone, // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
  };

  call(args).catch(console.error);
};

// Fake data
var fakeHalqat = [
  {
    name: "Tajweed",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image:
      "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50",
    miniHalqat: [
      {
        _id: "1",
        name: "المد الجازم",
        time: "2/2/2018 2:00am",
        place: "KASIT",
        length: 10
      },
      {
        _id: "2",
        name: "المد اللازم",
        time: "28/5/2018 1:00am",
        place: "KASIT",
        length: 13
      },
      {
        _id: "3",
        name: "blah",
        time: "28/2/2018 11:00am",
        place: "KASIT",
        length: 5
      },
      {
        _id: "4",
        name: "blah",
        time: "28/2/2018 11:00am",
        place: "KASIT",
        length: 0
      }
    ]
  },
  {
    name: "Tajweed",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image:
      "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50",
    miniHalqat: [
      {
        _id: "1",
        name: "الادغام",
        time: "28/2/2018 10:00am",
        place: "KASIT",
        length: 25
      },
      {
        _id: "1",
        name: "الميم الساكنة",
        time: "28/2/2018 12:00pm",
        place: "KASIT",
        length: 21
      },
      {
        _id: "1",
        name: "النون الساكنة",
        time: "28/2/2018 2:00pm",
        place: "KASIT",
        length: 35
      },
      {
        _id: "1",
        name: "النون الساكنة",
        time: "28/2/2018 2:00pm",
        place: "KASIT",
        length: 5
      },
      {
        _id: "1",
        name: "النون الساكنة",
        time: "28/2/2018 2:00pm",
        place: "KASIT",
        length: 14
      }
    ]
  },
  {
    name: "Tajweed",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image:
      "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50",
    miniHalqat: [
      {
        _id: "1",
        name: "جزء عمّ",
        time: "23/2/2018 11:00am",
        place: "العلمية",
        length: 25
      },
      {
        _id: "1",
        name: "الكهف",
        time: "21/2/2018 11:00am",
        place: "KASIT",
        length: 2
      }
    ]
  }
];
