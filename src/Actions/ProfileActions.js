import { retrieveData, getMyInfo } from "./StorageActions";

export const reqLove = data => {
  console.log("love request has been sent.");
  return true;
};

export const changeMyInfo = (changes, cb) => {
  // Sending new chagnes here
  if (true) cb(false);
};

export const reqDeleteShamosa = _id => {
  console.log(fakeData);
  return true;
};

export const getMyPosts = () => {
  return fakeData;
};

export const fakeData = [
  {
    _id: "1111",
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stry's standard dummy text ever since the 1500s.",
    username: "Shahd Jaouni",
    time: "10:30pm"
  },
  {
    _id: "2222",
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum is sime printing and typesetting industry. dummy text ever since the 1500s.",
    username: "Shahd Jaouni",
    time: "1:30pm"
  },
  {
    _id: "3333",
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    username: "Shahd Jaouni",
    time: "10:00am"
  },
  {
    _id: "4444",
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Shahd Jaouni",
    time: "4:30pm"
  }
];
