import { TabNavigator } from 'react-navigation';
import Login from '../Login';
import Signup from '../Signup';

export default TabNavigator({
  Login: { screen: Login },
  SignUp: {screen: Signup}
});