import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import Home from './app/modules/home/scenes/Home.js';
import Login from './app/modules/auth/scenes/Login.js';

export default class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}
