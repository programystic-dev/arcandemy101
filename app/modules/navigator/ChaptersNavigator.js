import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as constants from '../../styles/constants.js';
import DrawerButton from './components/DrawerButton/DrawerButton.js';

import ChapterScreen from '../chapters/scenes/Chapter.js';
import PageScreen from '../chapters/scenes/Page.js';

const ChapterStack = createStackNavigator({
  Chapter: {
    screen: ChapterScreen,
    navigationOptions: ({navigation}) => ({
      headerLeft : <DrawerButton navigation={navigation} />,
    })
  },
  Page: PageScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: constants.colors.primary,
    },
    headerTintColor: constants.colors.secondary,
    headerBackTitle: null,
  },
})

export default ChapterStack;
