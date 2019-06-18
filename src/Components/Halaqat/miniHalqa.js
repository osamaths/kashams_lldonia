import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions
} from "react-native";
import { reserveMiniHalqa } from "../../Actions/miniHalqaActions";
import { mainContainerColor, postStyle, textColor } from "../../Styles/Styles";
import { strings } from "../../../locales/i18n";
import { getMyInfo } from "../../Actions/StorageActions";

export default class MiniHalqa extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.miniHalqa._id,
      name: this.props.miniHalqa.name,
      teacher: this.props.miniHalqa.teacher,
      time: this.props.miniHalqa.time,
      place: this.props.miniHalqa.place,
      image: this.props.miniHalqa.image,
      students: this.props.miniHalqa.students,
      isSelected: false
    };

    this.renderSelectBtn = this.renderSelectBtn.bind(this);
  }
  componentDidMount() {
    this.checkSelectedBtn(this.state.students);
  }
  checkSelectedBtn(students) {
    for (let index = 0; index < students.length; index++) {
      const studentID = students[index];

      if (getMyInfo()._id === studentID) this.setState({ isSelected: true });
    }
  }
  renderSelectBtn() {
    var updatedStudents = this.state.students.concat(getMyInfo()._id);

    this.setState({ isSelected: true, students: updatedStudents });
  }
  render() {
    const {
      name,
      time,
      place,
      teacher,
      image,
      students,
      isSelected
    } = this.state;
    return (
      <View style={[styles.container, mainContainerColor]}>
        <Image
          style={styles.circleImage}
          source={{
            uri: image
          }}
        />
        <View style={styles.info}>
          <View style={styles.infoGroup}>
            <Text style={styles.mainTitle}>
              {" "}
              {strings("HalqaLists.miniHalqaLists.miniHalqa.name")}{" "}
            </Text>
            <Text style={styles.infoValue}>{name}</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.mainTitle}>
              {" "}
              {strings("HalqaLists.miniHalqaLists.miniHalqa.teacher")}{" "}
            </Text>
            <Text style={styles.infoValue}>{teacher}</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.mainTitle}>
              {" "}
              {strings("HalqaLists.miniHalqaLists.miniHalqa.time")}{" "}
            </Text>
            <Text style={styles.infoValue}>{time}</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.mainTitle}>
              {" "}
              {strings("HalqaLists.miniHalqaLists.miniHalqa.place")}{" "}
            </Text>
            <Text style={styles.infoValue}>{place}</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.mainTitle}>
              {" "}
              {strings("HalqaLists.miniHalqaLists.miniHalqa.students")}{" "}
            </Text>
            <Text style={styles.mainTitle}>{students.length}</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              isSelected ? styles.selectedBtn : styles.selectBtn
            ]}
            disabled={isSelected}
            onPress={() => {
              reserveMiniHalqa(this.state, this.renderSelectBtn);
            }}
          >
            <Text
              style={isSelected ? { color: "#009688" } : { color: "white" }}
            >
              {isSelected
                ? strings("HalqaLists.miniHalqaLists.miniHalqa.selected")
                : strings("HalqaLists.miniHalqaLists.miniHalqa.select")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    elevation: 10,
    margin: 5,
    alignSelf: "center",
    width: "95%",
    height: "33%"
  },
  circleImage: {
    flex: 1,
    width: width / 3,
    height: "100%",
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center"
  },
  infoGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  info: {
    flex: 2,
    flexDirection: "column",
    paddingLeft: 5,
    justifyContent: "space-between"
  },
  mainTitle: {
    fontWeight: "bold",
    color: "#009688"
  },
  infoValue: {
    fontSize: 14,
    color: "black",
    textAlign: "left"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 5
  },
  selectBtn: {
    backgroundColor: "#009688"
  },
  selectedBtn: {
    backgroundColor: "transparent"
  }
});
