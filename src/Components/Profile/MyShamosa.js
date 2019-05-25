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
      fakeData: fakeData,
      navigate: this.props.navigate,
      deleteShamosa: this.props.deleteShamosa
    };
  }
  checkDelete(itemValue) {
    if (itemValue === "delete") this.state.deleteShamosa(this.state.post._id);
  }
  render() {
    return (
      <View style={postStyle.container}>
        <View style={styles.rowContainer}>
          <UserInfo
            imageUrl={this.state.post.imageUrl}
            username={this.state.post.username}
            time={this.state.post.time}
          />
          <Picker
            style={{ height: 50, width: 50 }}
            onValueChange={(itemValue, itemIndex) =>
              this.checkDelete(itemValue)
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
