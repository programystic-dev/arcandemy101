import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import ChapterStack from './ChaptersNavigator.js';
import HomeStack from './HomeNavigator.js';

const AppDrawer = createDrawerNavigator({
  Home: HomeStack,
  Chapter: ChapterStack,
}, {
  initialRouteName: 'Home',
})

export default AppDrawer;
