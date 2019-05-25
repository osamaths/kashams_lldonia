import React from "react";
import { Router, Scene, Lightbox, LegacyTabs } from "react-native-router-flux";
import Login from "../Regestrations/Login";
import SignUp from "../Regestrations/Signup";
import ShamosaLists from "../Shamosa/ShamosaLists";
import NewsLists from "../News/NewsLists";
import HalqaLists from "../Halaqat/HalqaLists";
// import Profile from "../Profile/Profile";
import AmiraLists from "../Amirat/AmiraLists";

import testComp from "./testComp";
import testComp2 from "./testComp2";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="regesteration" tabs initial hideNavBar>
        <Scene key="login" component={Login} initial={true} hideNavBar />
        <Scene key="signup" component={SignUp} hideNavBar />
      </Scene>
      <Scene key="home" tabs hideNavBar>
        <Scene key="shamosa" component={ShamosaLists} hideNavBar initial />
        <Scene key="news" component={NewsLists} hideNavBar />
        <Scene key="halaqat" component={HalqaLists} hideNavBar />
        <Scene key="menu" hideNavBar drawer>
          <Scene key="profile" component={Profile} hideNavBar />
          <Scene key="privateCall" component={MyUsersLists} hideNavBar />
          <Scene key="selectAmira" component={AmiraLists} hideNavBar />
          <Scene key="logout" component={testComp} hideNavBar />
        </Scene>
      </Scene>
    </Scene>
  </Router>
);
export default Routes;
