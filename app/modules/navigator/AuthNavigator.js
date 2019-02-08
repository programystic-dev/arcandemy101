import React from 'react';
import { createStackNavigator } from 'react-navigation';
import * as constants from '../../styles/constants.js';

import LoadingScreen from '../auth/scenes/Loading.js';
import LoginScreen from '../auth/scenes/Login.js';
import ForgotScreen from '../auth/scenes/Forgot.js';
import SignupScreen from '../auth/scenes/Signup.js';

const AuthStack = createStackNavigator({
  Loading: {
    screen: LoadingScreen
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerLeft: null,
      gesturesEnabled: false,
    },
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Sign up',
    },
  },
  Forgot: {
    screen: ForgotScreen,
    navigationOptions: {
      title: 'Forgot password',
    },
  },
}, {
  initialRouteName: 'Loading',
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
