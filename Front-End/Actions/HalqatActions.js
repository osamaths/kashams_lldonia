import call from "react-native-phone-call";

export const getMyList = () => {
  /* fetch('http://192.168.174.128:3005/get/halqat/list')
    .then((resp) => resp.json())
    .then(function(data) {
        return 'data';
    })
    .catch(error => {
        return 'Faild';
    }) */

  return fakeHalqat;
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
    name: "تجويد",
    description: "words words words",
    image:
      "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50",
    miniHalqat: [
      {
        _id: "1",
        name: "المد الجازم",
        time: "2/2/2018 2:00am",
        place: "KASIT"
      },
      {
        _id: "2",
        name: "المد اللازم",
        time: "28/5/2018 1:00am",
        place: "KASIT"
      },
      {
        _id: "3",
        name: "blah",
        time: "28/2/2018 11:00am",
        place: "KASIT"
      },
      {
        _id: "4",
        name: "blah",
        time: "28/2/2018 11:00am",
        place: "KASIT"
      }
    ]
  },
  {
    name: "أحكام",
    description: "words words words",
    image:
      "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50",
    miniHalqat: [
      {
        _id: "1",
        name: "الادغام",
        time: "28/2/2018 10:00am",
        place: "KASIT"
      },
      {
        _id: "1",
        name: "الميم الساكنة",
        time: "28/2/2018 12:00pm",
        place: "KASIT"
      },
      {
        _id: "1",
        name: "النون الساكنة",
        time: "28/2/2018 2:00pm",
        place: "KASIT"
      },
      {
        _id: "1",
        name: "النون الساكنة",
        time: "28/2/2018 2:00pm",
        place: "KASIT"
      },
      {
        _id: "1",
        name: "النون الساكنة",
        time: "28/2/2018 2:00pm",
        place: "KASIT"
      }
    ]
  },
  {
    name: "تسميع",
    description: "words words words",
    image:
      "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50",
    miniHalqat: [
      {
        _id: "1",
        name: "جزء عمّ",
        time: "23/2/2018 11:00am",
        place: "العلمية"
      },
      {
        _id: "1",
        name: "الكهف",
        time: "21/2/2018 11:00am",
        place: "KASIT"
      }
    ]
  },
  {
    name: "تسميع",
    description: "words words words",
    image:
      "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50",
    miniHalqat: [
      {
        _id: "1",
        name: "جزء عمّ",
        time: "23/2/2018 11:00am",
        place: "العلمية"
      },
      {
        _id: "1",
        name: "الكهف",
        time: "21/2/2018 11:00am",
        place: "KASIT"
      }
    ]
  }
];
