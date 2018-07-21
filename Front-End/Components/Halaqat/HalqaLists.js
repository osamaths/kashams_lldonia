import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Halqa from './Halqa';
import { getMyList } from '../../Actions/HalqatActions'

export default class HalqaLists extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props);
    this.state = {
      halqat: ''
    }
  }

  componentDidMount() {
    let tempHalqat = getMyList();
    if (tempHalqat && tempHalqat.length > 0) 
        this.setState({halqat: tempHalqat});
  }

  renderMyList = () => {
    if (this.state.halqat.length > 0)
      return (
        <View>
          {this.state.halqat.map((halqa, index) => (
            <Halqa  style={styles.container}
                    halqa={halqa} key={index} />
          ))}
        </View>
      );
      else 
        return (
            <View style={styles.container}>
                <Text>There is no Halqa available.</Text>
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
  }
});
