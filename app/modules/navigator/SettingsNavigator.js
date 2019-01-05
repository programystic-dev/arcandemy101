import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as constants from '../../styles/constants.js';
import DrawerButton from './components/DrawerButton/DrawerButton.js';

import SettingsScreen from '../home/scenes/Settings.js';

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
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

export default SettingsStack;
