import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as constants from '../../styles/constants.js';
import DrawerButton from './components/DrawerButton/DrawerButton.js';

import HomeScreen from '../home/scenes/Home.js';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Main Altar',
    },
  }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerLeft : <DrawerButton navigation={navigation} />,
    headerStyle: {
      backgroundColor: constants.colors.primary,
    },
    headerTintColor: constants.colors.secondary,
  }),
})

export default HomeStack;
