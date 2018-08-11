import { TabNavigator } from "react-navigation";
import NewsLists from "../News/NewsLists";
import AddNews from "../News/AddNews";
import AmiraLists from "../Amirat/AmiraLists";
import MyUsersList from "../Amirat/MyUsersList";
import HalqaLists from "../Halaqat/HalqaLists";
import HalqatStack from "../TabNavigators/HalqatStack";

export default TabNavigator({
  // "حلقة": { screen: miniHalqa },
  HalqatStack: { screen: HalqatStack },
  "My List": { screen: MyUsersList },
  Amiras: { screen: AmiraLists },
  News: { screen: NewsLists },
  "Add News": { screen: AddNews }
});
