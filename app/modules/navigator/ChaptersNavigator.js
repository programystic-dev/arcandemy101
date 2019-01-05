import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ChapterScreen from '../chapters/scenes/Chapter.js';
import PageScreen from '../chapters/scenes/Page.js';

const ChapterStack = createStackNavigator({
  Chapter: ChapterScreen,
  Page: PageScreen,
})

export default ChapterStack;
