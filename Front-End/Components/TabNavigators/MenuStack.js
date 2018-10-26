import { StackNavigator } from "react-navigation";
import AmiraLists from "../Amirat/AmiraLists";
import MyUsersList from "../Amirat/MyUsersList";
import AddNews from "../News/AddNews";
import Menu from "../Menu";

export default StackNavigator({
  Menu: { screen: Menu },
  AmiraLists: { screen: AmiraLists },
  MyUsersList: { screen: MyUsersList },
  AddNews: { screen: AddNews }
});
