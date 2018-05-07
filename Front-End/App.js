import React from 'react';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import {View} from 'react-native';
import { TabNavigator } from 'react-navigation';

export class App extends React.Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    )
  }
}
export default TabNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
});
