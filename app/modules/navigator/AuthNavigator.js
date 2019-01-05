import React from 'react';
import { createStackNavigator} from 'react-navigation';
import * as constants from '../../styles/constants.js';

import LoginScreen from '../auth/scenes/Login.js';
import SignupScreen from '../auth/scenes/Signup.js';

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Sign up',
    },
  },
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: constants.colors.secondary,
      elevation: 0,
      borderBottomColor: constants.colors.secondary,
    },
    headerTintColor: constants.colors.primary,
    headerBackTitle: null,
  },
})

export default AuthStack;
