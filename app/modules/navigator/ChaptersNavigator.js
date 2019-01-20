import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as constants from '../../styles/constants.js';

import ChapterScreen from '../chapters/scenes/Chapter.js';
import PageScreen from '../chapters/scenes/Page.js';

const ChapterStack = createStackNavigator({
  Chapter: {
    screen: ChapterScreen,
    params: props => JSON.stringify(props)
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
