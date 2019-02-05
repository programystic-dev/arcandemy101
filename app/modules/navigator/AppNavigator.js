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

// Generate routes for Chapters by iterating over JSON data and adding a new property to the object
const generateRoutes = (chapters) => {
  const routes = {};

  for (let i = 0; i < chapters.length; i++) {
    Object.defineProperty(routes, chapters[i].title, {
      value : {
        screen: ChapterStack,
        params: {chapterId: i},
        navigationOptions: {
          drawerIcon: () => (<DrawerItemIcon isLocked={store.getState().chapterReducer.chapters[i]} />),
        },
      },
      writable : true,
      enumerable : true,
      configurable : true
    });
  }

  return routes;
}
const chapterRoutes = generateRoutes(data.chapters);

//Define routes order
let chaptersRoutesOrder = [];
data.chapters.filter((chapter) => chaptersRoutesOrder = [ ...chaptersRoutesOrder, chapter.title]);
const routesOrder = ['Home', ...chaptersRoutesOrder, 'Settings'];

//Define navigationOptions for basic routes and Chapters routes
const basicNavOptions = {
  drawerIcon: () => (<DrawerItemIcon isLocked={false} />),
}

// Merge generated Chapters routes with basic Home and Settings routes
const routes = {
  ...{
    Home: {
      screen: HomeStack,
      navigationOptions: basicNavOptions,
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: basicNavOptions,
    },
  }
  , ...chapterRoutes
};

// Define App's main Drawer
const AppDrawer = createDrawerNavigator( routes , {
  initialRouteName: 'Home',
  order: routesOrder,
  drawerBackgroundColor: constants.colors.primary,
  contentOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: constants.colors.secondary,
  }
})

export default AppDrawer;
