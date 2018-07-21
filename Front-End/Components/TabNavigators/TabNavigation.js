import { TabNavigator } from 'react-navigation';
import NewsLists from '../News/NewsLists';
import AddNews from '../News/AddNews';
import AmiraLists from '../Amirat/AmiraLists';
import MyUsersList from '../Amirat/MyUsersList';
import HalqaLists from '../Halaqat/HalqaLists';

export default TabNavigator({
  "حلقات": { screen: HalqaLists },
  "My List": { screen: MyUsersList },
  "Amiras": { screen: AmiraLists },
  "News": { screen: NewsLists },
  "Add News": { screen: AddNews }
});