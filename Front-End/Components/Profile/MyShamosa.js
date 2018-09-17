import React from "react";
import { View, Text, Image, Picker, StyleSheet } from "react-native";
import UserInfo from "../SharedComponents/UserInfo";
import Love from "../SharedComponents/Love";
import { postStyle } from "../../Styles/Styles";
import { reqDeleteShamosa, fakeData } from "../../Actions/ProfileActions";

export default class MyShamosa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      blah: "blah",
      isDeleted: false,
      fakeData: fakeData
    };
    this.deleteShamosa = this.deleteShamosa.bind(this);
  }

  deleteShamosa(itemValue) {
    if (itemValue === "delete") {
      for (var i = 0; i < fakeData.length; i++) {
        if (fakeData[i]._id === this.state.post._id) {
          fakeData.splice(i, 1);
        }
      }
    }
    // this.props.navigation.pop({ refresh: { isRenderNow: true } });
  }

  render() {
    return (
      <View style={postStyle.container}>
        <Text>{this.state.post._id}</Text>
        <Text>{this.state.fakeData.length}</Text>
        <View style={styles.rowContainer}>
          <UserInfo
            imageUrl={this.state.post.imageUrl}
            username={this.state.post.username}
            time={this.state.post.time}
          />
          <Picker
            style={{ height: 50, width: 50 }}
            onValueChange={(itemValue, itemIndex) =>
              this.deleteShamosa(itemValue)
            }
          >
            <Picker.Item label="-" value="" />
            <Picker.Item label="Delete" value="delete" />
          </Picker>
        </View>
        <Image
          style={postStyle.img}
          source={{ uri: this.state.post.imageUrl }}
        />
        <Text style={postStyle.txt}> {this.state.post.text} </Text>
        <Love />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row"
  }
});
