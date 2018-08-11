import { StackNavigator } from "react-navigation";
import HalqaLists from "../Halaqat/HalqaLists";
import Halqa from "../Halaqat/Halqa";
import miniHalqatLists from "../Halaqat/miniHalqaLists";

export default StackNavigator({
  HalqaLists: { screen: HalqaLists },
  miniHalqatLists: { screen: miniHalqatLists },
  Halqa: { screen: Halqa }
});
