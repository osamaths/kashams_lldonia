export const reqLove = data => {
  console.log("love request has been sent.");
  return true;
};

export const changeMyInfo = (changes, cb) => {
  // Sending new chagnes here
  if (true) cb(false);
};

export const getMyInfo = () => {
  console.log("getMyInfo");
  var myInfo = {
    avatar:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    username: "Shahd Jaouni",
    name: {
      firstname: "Shahd",
      lastname: "Jaouni"
    },
    year: 2,
    gender: "Female"
  };

  return myInfo;
};

export const getMyPosts = () => {
  return fakeData;
};

fakeData = [
  {
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stry's standard dummy text ever since the 1500s.",
    username: "Shahd Jaouni",
    time: "10:30pm"
  },
  {
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum is sime printing and typesetting industry. dummy text ever since the 1500s.",
    username: "Shahd Jaouni",
    time: "1:30pm"
  },
  {
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    username: "Shahd Jaouni",
    time: "10:00am"
  },
  {
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Shahd Jaouni",
    time: "4:30pm"
  }
];
