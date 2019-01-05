import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ChapterScreen from '../chapters/scenes/Chapter.js';

const ChapterStack = createStackNavigator({
  Chapter: ChapterScreen,
})

export default ChapterStack;
