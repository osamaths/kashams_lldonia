import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class NewsPost extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      post: this.props.post
    }
  }
  render() {
    console.log (this.state.post)
    return (
      <View style={styles.container}>
        <Image
         style={{width: 120, height: 120}}
         source={{uri: this.state.post.imageUrl}}
       />
       <Text style={styles.txt}> {this.state.post.text} </Text>
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
