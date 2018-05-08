import { TabNavigator } from 'react-navigation';
import NewsLists from '../News/NewsLists';
import AddNews from '../News/AddNews';

export default TabNavigator({
  News: { screen: NewsLists },
  AddNews: { screen: AddNews }
});