import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../home/scenes/Home.js';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

export default HomeStack;
