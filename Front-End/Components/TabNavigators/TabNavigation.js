import { TabNavigator } from "react-navigation";
import NewsLists from "../News/NewsLists";
import HalqatStack from "./HalqatStack";
import MenuStack from "./MenuStack";
import Shamosa from "../Shamosa/ShamosaLists";

export default TabNavigator({
  Shamosa: { screen: Shamosa },
  News: { screen: NewsLists },
  HalqatStack: { screen: HalqatStack },
  MenuStack: { screen: MenuStack }
});
