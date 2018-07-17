import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { callUser } from '../../Actions/myUsersActions';

export default class User extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: this.props.user,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> {this.state.user.name} </Text>
        <TouchableOpacity 
            onPress={() => {
                callUser(this.state.user);
            }}>
           <Text>اتصال</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.33,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    flexDirection: 'row',
    padding: 10
  },
  txt: {
    padding: 10,
    color: 'white'
  }
});
