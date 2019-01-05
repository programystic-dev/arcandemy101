import React from 'react';
import { createAppContainer, createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../home/scenes/Home.js';
import ChapterScreen from '../chapters/scenes/Chapter.js';

import AuthStack from './AuthNavigator.js';

//Stack for Homepage to display top bar
const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

const ChapterStack = createStackNavigator({
  Chapter: ChapterScreen,
})

const AppDrawer = createDrawerNavigator({
  Home: HomeStack,
  Chapter: ChapterStack,
})

const RootNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppDrawer,
}, {
  initialRouteName: 'Auth',
})

export default createAppContainer(RootNavigator);
