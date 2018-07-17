import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

export default class Halqa extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'تجويد', // this.state.props.halqa.name
      description: 'التجويد أو علم التجويد في الإسلام علم تعرف به كيفية النطق بالكلمات القرآنية كما نطقها النبي محمد بن عبد الله'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.circleImage}
            source={{
                uri: 'https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2015/07/Quran1.jpg&w=1200&h=675&q=50'
            }}
        />
        <Text> {this.state.name} </Text>
        <Text> {this.state.description} </Text>
        <TouchableOpacity
            style={styles.button}
        >
            <Text> إحجز الآن </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexWrap: 'wrap',
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    flexDirection: 'row',
    padding: 10
  },
  circleImage: {
    width: 50, 
    height: 50, 
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    borderRadius:100
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
