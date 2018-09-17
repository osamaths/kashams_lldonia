import { TabNavigator } from "react-navigation";
import Login from "../Login";
import Signup from "../Signup";
import temp from "../Halaqat/HalqaLists";

export default TabNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: Signup }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#009688"
      },
      tabStyle: {
        height: 62
      },
      labelStyle: { fontSize: 20 }
    }
  }
);
