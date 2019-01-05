import React from 'react';
import { createStackNavigator} from 'react-navigation';

import LoginScreen from '../auth/scenes/Login.js';
import SignupScreen from '../auth/scenes/Signup.js';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
}, {
  initialRouteName: 'Login',
})

export default AuthStack;
