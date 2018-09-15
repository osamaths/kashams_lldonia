import call from "react-native-phone-call";

export const getMyList = () => {
  /* fetch('http://192.168.174.128:3005/get/people/list')
    .then((resp) => resp.json())
    .then(function(data) {
        return 'data';
    })
    .catch(error => {
        return 'Faild';
    }) */

  return data;
};

export const callUser = user => {
  const args = {
    number: user.phone, // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
  };

  call(args).catch(console.error);
};

// Fake data
var data = {
  userType: "amira",
  people: [
    {
      avatar: "https://i.imgur.com/I80W1Q0.png",
      username: "Shahd Jaouni",
      phone: "0798928736"
    },
    {
      avatar: "https://i.imgur.com/I80W1Q0.png",
      username: "Shahd Jaouni",
      phone: "0798928736"
    },
    {
      avatar: "https://i.imgur.com/I80W1Q0.png",
      username: "Shahd Jaouni",
      phone: "0798928736"
    },
    {
      avatar: "https://i.imgur.com/I80W1Q0.png",
      username: "Shahd Jaouni",
      phone: "0798928736"
    }
  ],
  amira: {
    avatar: "https://i.imgur.com/I80W1Q0.png",
    username: "Shahd Jaouni",
    phone: "0798928736"
  }
};
