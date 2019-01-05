import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import Home from './app/modules/home/scenes/Home.js';
//import Login from './app/modules/auth/scenes/Login.js';
//import Signup from './app/modules/auth/scenes/Signup.js';
//import Chapter from './app/modules/chapters/scenes/Chapter.js';
import RootNavigator from './app/modules/navigator/RootNavigator.js';

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
