import { TabNavigator } from "react-navigation";
import NewsLists from "../News/NewsLists";
import HalqatStack from "./HalqatStack";
import MenuStack from "./MenuStack";
import ShamosaLists from "../Shamosa/ShamosaLists";

const tabNavigator = TabNavigator(
  {
    "☀": { screen: ShamosaLists },
    "📰": { screen: NewsLists },
    "📖": { screen: HalqatStack },
    "☰": { screen: MenuStack }
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

export default tabNavigator;
