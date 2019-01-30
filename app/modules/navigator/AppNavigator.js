import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import * as constants from '../../styles/constants.js';
import DrawerItemIcon from './components/DrawerItemIcon/DrawerItemIcon.js';

import ChapterStack from './ChaptersNavigator.js';
import HomeStack from './HomeNavigator.js';
import SettingsStack from './SettingsNavigator.js';
import data from '../../assets/data.json';
import store from '../../redux/store.js';

const AppDrawer = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon isLocked={false} />),
    },
  },
  Correspondences: {
    screen: ChapterStack,
    params: {chapterId: 0},
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon isLocked={store.getState().chapterReducer.chapters[0]} />),
    },
  },
  Altar: {
    screen: ChapterStack,
    params: {chapterId: 1},
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon isLocked={store.getState().chapterReducer.chapters[1]} />),
    },
  },
  Divination: {
    screen: ChapterStack,
    params: {chapterId: 2},
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon isLocked={store.getState().chapterReducer.chapters[2]} />),
    },
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      drawerIcon: () => (<DrawerItemIcon isLocked={false} />),
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
