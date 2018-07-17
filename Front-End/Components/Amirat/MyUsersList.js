import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import User from './User';
import { getMyList } from '../../Actions/myUsersActions';

export default class MyUsersLists extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props);
    this.state = {
      users: ''
    }
  }

  componentDidMount() {
    let tempUsers = getMyList();
    if (tempUsers && tempUsers.length > 0) 
        this.setState({users: tempUsers});
  }

  renderMyList = () => {
    if (this.state.users.length > 0)
      return (
        <View>
          {this.state.users.map((user, index) => (
            <User  style={styles.container}
                    user={user} key={index} />
          ))}
        </View>
      );
      else 
        return (
            <View style={styles.container}>
                <Text>There is no User available.</Text>
            </View>
        );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderMyList()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    paddingTop: 10
  }
});
