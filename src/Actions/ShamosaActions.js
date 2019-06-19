import { getList } from "../Actions/SharedActions";

export const reqLove = data => {
  console.log("love request has been sent.");
  return true;
};

export const getShamosaPosts = () => {
  return fakeData;
};

fakeData = [
  {
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stry's standard dummy text ever since the 1500s.",
    username: "Shahd Jaouni",
    extraInfo: ["time: 10:30pm"]
  },
  {
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum is sime printing and typesetting industry. dummy text ever since the 1500s.",
    username: "Osama THS",
    extraInfo: ["time: 1:30pm"]
  },
  {
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    username: "Taj Osama",
    extraInfo: ["time: 10:00am"]
  },
  {
    imageUrl:
      "https://www.rd.com/wp-content/uploads/2016/06/01-brainy-habits-wisest-people-age-woman.jpg",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Sara Al-Habarnah",
    extraInfo: ["time: 4:30pm"]
  }
];
