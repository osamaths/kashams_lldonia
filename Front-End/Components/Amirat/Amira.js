import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { selectAmira } from '../../Actions/amirasActions.js'; 

export default class Amira extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.amira.name,
      phone: this.props.amira.phone
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Name: {this.state.name} </Text>
        <Text style={styles.txt}>Phone: {this.state.phone} </Text>
        <TouchableOpacity 
            onPress={() => {
                selectAmira(this.state);
            }}>
           <Text>Choose</Text>
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
