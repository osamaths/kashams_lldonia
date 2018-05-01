import SignUp from './components/SignUp';
import Login from './components/Login';

import {
  TabNavigator,
} from 'react-navigation';

export default TabNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
});