import { TabNavigator } from "react-navigation";
import Profile from "./profile";

const profileNavigator = TabNavigator(
  {
    "My Profile": { screen: Profile }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#009688"
      },
      tabStyle: {
        height: 62
      },
      labelStyle: {
        fontSize: 20
      }
    }
  }
);

export default profileNavigator;
