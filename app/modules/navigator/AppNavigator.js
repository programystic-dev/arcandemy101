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
  Chapter1: {
    screen: ChapterStack,
    params: {title: 'Some title'},
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon iconLink={require("../../assets/img/key.png")} />),
    },
  },
  Chapter2: {
    screen: ChapterStack,
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon iconLink={require("../../assets/img/key.png")} />),
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
