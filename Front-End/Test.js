import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ListView,
  FlatList
} from "react-native";
import MyShamosa from "./Components/Profile/MyShamosa";
import { fakeData } from "./Actions/ProfileActions";
import Test2 from "./test2";

export default class Test extends React.Component {
  static navigationOptions = {
    title: "My Profile"
  };

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: this.ds.cloneWithRows([1, 2, 3, 4, 5, 6])
    };
    this.deleteShamosa = this.deleteShamosa.bind(this);
  }
  _renderItem = ({ item }) => (
    <Test2
      id={item.id}
      selected={!!this.state.selected.get(item.id)}
      number={item.number}
    />
  );

  deleteShamosa(_id) {
    var temp = this.state.dataSource._dataBlob.s1;
    // for (var i = 0; i < temp.length; i++) {
    //   if (temp[i] === _id) {
    //     temp.splice(i, 1);
    //     console.log(temp);
    //     this.setState({ dataSource: this.ds.cloneWithRows(temp) });
    //     break;
    //   }
    // }

    temp.splice(_id, 1);
    console.log(temp);
    this.setState({
      dataSource: this.ds.cloneWithRows(temp)
    });

    //this.state.navigate("Profile");
    // this.props.navigation.pop({ refresh: { isRenderNow: true } });
  }
  _keyExtractor = (item, index) => item.id;

  render() {
    // return <View>{this.renderPosts()}</View>;
    return (
      <FlatList
        data={[{ id: 0, number: 0 }, { id: 1, number: 1 }]}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#eee"
  }
});
