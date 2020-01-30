import React from "react";
import { StyleSheet } from "react-native";

import { Router, Scene } from "react-native-router-flux";

import Login from "../Registration/Login";
import SignUp from "../Registration/Signup";
import ShamosaLists from "../Shamosa/ShamosaLists";
import NewsLists from "../News/NewsLists";
import HalqaLists from "../Halaqat/HalqaLists";
import Profile from "../Profile/Profile";
import AmiraLists from "../Amirat/AmiraLists";
import MyUsersLists from "../Amirat/MyUsersList";
import SideMenu from "../SharedComponents/SideMenu";
import MiniHalqaLists from "../Halaqat/miniHalqaLists";
import AddNews from "../News/AddNews";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="registration"
        tabs
        hideNavBar
        initial
        tabBarPosition="top"
        tabBarStyle={styles.tabBarStyle}
      >
        <Scene key="login" component={Login} initial hideNavBar />
        <Scene key="signup" component={SignUp} hideNavBar />
        {/* <Scene key="addNews" component={AddNews} initial hideNavBar /> */}
      </Scene>
      <Scene
        key="home"
        tabs
        hideNavBar
        tabBarPosition="top"
        tabBarStyle={styles.tabBarStyle}
      >
        <Scene
          key="shamosa"
          title="☀"
          labelStyle={styles.tabStyle}
          component={ShamosaLists}
          hideNavBar
          initial
        />
        <Scene key="news" title="📰" component={NewsLists} hideNavBar />
        <Scene key="halaqatStack" title="📖" hideNavBar>
          <Scene
            key="halaqat"
            title="📖"
            component={HalqaLists}
            hideNavBar
            initial
          />
          <Scene key="miniHalqaLists" component={MiniHalqaLists} hideNavBar />
        </Scene>

        <Scene key="menu" title="☰" hideNavBar drawer>
          <Scene key="sidemenu" hideNavBar component={SideMenu} initial />
          <Scene key="profile" component={Profile} hideNavBar />
          <Scene key="myUsersList" component={MyUsersLists} hideNavBar />
          <Scene key="selectAmira" component={AmiraLists} hideNavBar />
        </Scene>
      </Scene>
    </Scene>
  </Router>
);
export default Routes;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#009688"
  },
  tabStyle: {
    fontSize: 20,
    color: "red"
  }
});
