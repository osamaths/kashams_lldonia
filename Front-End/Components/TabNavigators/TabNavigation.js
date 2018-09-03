import { TabNavigator } from "react-navigation";
import NewsLists from "../News/NewsLists";
import AddNews from "../News/AddNews";
import AmiraLists from "../Amirat/AmiraLists";
import MyUsersList from "../Amirat/MyUsersList";
import HalqaLists from "../Halaqat/HalqaLists";
import HalqatStack from "../TabNavigators/HalqatStack";
import Menu from "./Menu";

export default TabNavigator({
  News: { screen: NewsLists },
  HalqatStack: { screen: HalqatStack },
  Menu: { screen: Menu }
  // "My List": { screen: MyUsersList },
  // Amiras: { screen: AmiraLists },
  // "Add News": { screen: AddNews }
});
