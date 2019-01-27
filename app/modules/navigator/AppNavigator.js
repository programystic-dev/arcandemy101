import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import * as constants from '../../styles/constants.js';
import DrawerItemIcon from './components/DrawerItemIcon/DrawerItemIcon.js';

import ChapterStack from './ChaptersNavigator.js';
import HomeStack from './HomeNavigator.js';
import SettingsStack from './SettingsNavigator.js';

const AppDrawer = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon iconLink={require("../../assets/img/key.png")} />),
    },
  },
  Magic: {
    screen: ChapterStack,
    params: {chapterId: 0},
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon iconLink={require("../../assets/img/key.png")} />),
    },
  },
  Witch: {
    screen: ChapterStack,
    params: {chapterId: 1},
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon iconLink={require("../../assets/img/locker.png")} />),
    },
  },
  Correspondences: {
    screen: ChapterStack,
    params: {chapterId: 2},
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon iconLink={require("../../assets/img/locker.png")} />),
    },
  },
  Altar: {
    screen: ChapterStack,
    params: {chapterId: 3},
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon iconLink={require("../../assets/img/locker.png")} />),
    },
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon iconLink={require("../../assets/img/key.png")} />),
    },
  },
}, {
  initialRouteName: 'Home',
  drawerBackgroundColor: constants.colors.primary,
  contentOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: constants.colors.secondary,
  }
})

export default AppDrawer;
