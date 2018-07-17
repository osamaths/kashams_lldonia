import { TabNavigator } from 'react-navigation';
import NewsLists from '../News/NewsLists';
import AddNews from '../News/AddNews';
import AmiraLists from '../Amirat/AmiraLists';

export default TabNavigator({
  //Amiras: { screen: AmiraLists },
  News: { screen: NewsLists },
  AddNews: { screen: AddNews }
});