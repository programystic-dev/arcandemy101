import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthStack from './AuthNavigator.js';
import AppDrawer from './AppNavigator.js';

const RootNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppDrawer,
}, {
  initialRouteName: 'Auth',
})

export default createAppContainer(RootNavigator);
